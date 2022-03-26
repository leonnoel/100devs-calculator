const SOLO_TOKENS = new Set('()')

const OPERATOR_PRECEDENCE = {
	'^': 0,
	'*': 1,
	'/': 1,
	'+': 2,
	'-': 2,
}

/**
 * @param {number} left
 * @param {string} op
 * @param {number} right
 * @returns {number}
 */
function performOperation(left, op, right){
	switch(op){
		case '^': return left ** right;
		case '*': return left * right;
		case '/': return left / right;
		case '+': return left + right;
		case '-': return left - right;
		default: throw new Error(`Unknown operator: ${op}`);
	}
}

/**
 * @param {Array<string|number>} tokens
 * @returns {number}
 */
function evaluateTokens(tokens){
	let left = 0;
	let right = tokens.length - 1;
	while (true){
		if (tokens[left] != '(') left++;
		if (tokens[right] != ')') right--;
		if (tokens[left] == '(' && tokens[right] === ')'){
			tokens.splice(left, right - left + 1, evaluateTokens(tokens.slice(left+1, right)))
			left = 0;
			right = tokens.length - 1
		}
		if (left >= right) break;
	}

	while (tokens.length > 1){
		const queue = [];
		for (const [i, char] of tokens.entries()){
			if (char in OPERATOR_PRECEDENCE) queue.push([OPERATOR_PRECEDENCE[char], i])
		}
		const sortedQueue = queue.sort(([aPres, aInd], [bPres, bInd]) => {
			const presDiff = bPres - aPres;
			if (presDiff) return presDiff;
			return bInd - aInd;
		});
		const [_, index] = sortedQueue.pop()
		const left = tokens[index-1]
		const op = tokens[index]
		const right = tokens[index+1]
		tokens.splice(index-1, 3, performOperation(left, op, right));
	}

	return tokens[0];
}

/**
 * @param {string} rawExpression
 * @returns {number}
 */
function evaluateExpression(rawExpression){
	const tokens = [];
	let building = '';
	for (const char of rawExpression){
		if (char === ' '){
			if (building) {
				tokens.push(building)
				building = ''
			}
			continue;
		}
		if (SOLO_TOKENS.has(char)){
			if (building) {
				tokens.push(building)
				building = ''
			}
			tokens.push(char);
			continue;
		}
		if (char in OPERATOR_PRECEDENCE && building){
			tokens.push(building)
			building = '';
		}
		if (building in OPERATOR_PRECEDENCE && '0123456789'.includes(char) && tokens.length && Array.from(tokens[tokens.length-1]).some(prevTChar => '0123456789()'.includes(prevTChar))){
			tokens.push(building)
			building = ''
		}
		building += char;
	}
	if (building) tokens.push(building)


	for (let [i, token] of tokens.entries()){
		if (SOLO_TOKENS.has(token) || token in OPERATOR_PRECEDENCE) continue;
		const isNegative = token.startsWith('-');
		if (isNegative) token = token.substring(1);

		let results = [0, 0];
		for (const [i, digits] of token.split('.').entries()){
			for (const digit of digits){
				results[i] = (results[i] * 10) + (digit.charCodeAt(0) - 48)
			}
		}
		const result = results[1] ? results[0] + results[1] / 100 : results[0];
		tokens[i] = isNegative ? -result : result
	}


	return evaluateTokens(tokens);
}
