class Button {
	constructor(element, value) {
		this.element = element;
		this.value = value ?? element.textContent;
	}

	attachEventListener(...args) {
		this.element.addEventListener('click', this.activate.bind(this, this.value, ...args));
	}

	canActivate(..._) {
		return true;
	}

	activate(_, calculator, ...args) {
		if (!this.canActivate(_, calculator, ...args)) return false;
		if (calculator.prevOutput && !calculator.prevOutput.includes('Ans')) {
			calculator.prevOutput = 'Ans = ' + calculator.output;
		}
		return true
	}
}

class NumericButton extends Button {
	constructor(...args) {
		super(...args)
	}

	canActivate(_, calculator, ...args) {
		if (!super.canActivate(_, calculator, ...args)) return false;

		return true
	}

	activate(value, calculator, ...args) {
		const thing = super.activate(value, calculator, ...args)
		if (!super.activate(value, calculator, ...args)) return false;
		if (calculator.output == 0) calculator.output = '';
		const lastToken = calculator.tokens.at(-1);

		if (lastToken) {
			if (OPERATOR_BUTTONS.some(cls => !cls.canPrefixNumbers && cls.canPrefixOperators && cls.token === lastToken)) calculator.output += ' ' + MultiplicationOperatorButton.token
			if (OPERATOR_BUTTONS.some(cls => cls.token === lastToken)) calculator.output += ' '
		}

		calculator.output += value;
		return true;
	}
}

class DecimalButton extends NumericButton {
	constructor(...args) {
		super(...args)
	}

	canActivate(_, calculator, ...args) {
		if (!super.canActivate(_, calculator, ...args)) return false;

		const lastToken = calculator.tokens.at(-1);
		if (lastToken?.includes('.')) return false;

		return true;
	}
}

class OperatorButton extends Button {
	static token = ''
	static canPrefixNumbers = true;
	static canPrefixOperators = false;
	constructor(...args) {
		super(...args)
	}

	canActivate(_, calculator, ...args) {
		if (!super.canActivate(_, calculator, ...args)) return false;
		if (OPERATOR_BUTTONS.some(cls => !cls.canPrefixOperators && cls.token === calculator.tokens.at(-1))) return false;
		return true;
	}

	activate(value, calculator, ...args) {
		if (!super.activate(value, calculator, ...args)) return false;
		calculator.output += ' ' + this.constructor.token;
		return true;
	}
}

class AdditionOperatorButton extends OperatorButton {
	static token = '+'
	constructor(...args) {
		super(...args)
	}
}

class SubtractionOperatorButton extends OperatorButton {
	static token = '-'
	constructor(...args) {
		super(...args)
	}

	canActivate(_, calculator, ...args) {
		const lastTwoTokens = calculator.tokens.slice(-2);
		if (lastTwoTokens.map(token => OPERATOR_BUTTONS.find(cls => !cls.canPrefixOperators && cls.token === token)).filter(Boolean).length == 2) return false;

		return true;
	}
}

class MultiplicationOperatorButton extends OperatorButton {
	static token = '×'
	constructor(...args) {
		super(...args)
	}
}

class DivisionOperatorButton extends OperatorButton {
	static token = '÷'
	constructor(...args) {
		super(...args)
	}
}

class ModulusOperatorButton extends OperatorButton {
	static token = '%'
	constructor(...args) {
		super(...args)
	}
}

class EvaluateOperatorButton extends OperatorButton {
	static token = '='
	constructor(...args) {
		super(...args)
	}

	activate(_, calculator, ...args) {
		const expression = calculator.output.replace(/[÷×]/g, char => char === '÷' ? '/' : '*')

		try {
			calculator.output = eval(expression);
			calculator.prevOutput = expression + ' ='
		} catch (_) { }
		return true;
	}
}

class ClearOperatorButton extends OperatorButton {
	static token = 'C'
	constructor(...args) {
		super(...args)
	}

	activate(_, calculator, ...args) {
		const lastToken = calculator.tokens.at(-1);
		if (lastToken.length > 1) {
			calculator.tokens = [...calculator.tokens.slice(0, -1), lastToken.slice(0, -1)]
			return true;
		}
		calculator.tokens = calculator.tokens.slice(0, -1)
		if (!calculator.tokens.length) calculator.tokens = ['0']
		return true;
	}
}

class ParenthesisButton extends Button {
	static canPrefixNumbers = false;
	constructor(...args) {
		super(...args)
	}

	activate(value, calculator, ...args) {
		if (!super.activate(value, calculator, ...args)) return false;
		if (calculator.output == 0) calculator.output = '';
		return true;
	}
}

class OpenParenthesisOperatorButton extends ParenthesisButton {
	static token = '(';
	constructor(...args) {
		super(...args)
	}

	activate(value, calculator, ...args) {
		if (!super.activate(value, calculator, ...args)) return false;

		const lastToken = calculator.tokens.at(-1)
		if (lastToken && !OPERATOR_BUTTONS.find(cls => cls.token === lastToken)) calculator.output += ' ' + MultiplicationOperatorButton.token;

		calculator.output += ` ${value} `;
		return true;
	}
}

class CloseParenthesisOperatorButton extends ParenthesisButton {
	static token = ')';
	static canPrefixOperators = true;
	constructor(...args) {
		super(...args)
	}

	activate(value, calculator, ...args) {
		if (!super.activate(value, calculator, ...args)) return false;
		let opens = 0;
		for (const token of calculator.tokens) {
			if (token === '(') opens++;
			else if (token === ')') {
				if (!opens) break;
				opens--;
			}
		}
		if (!opens || calculator.tokens.at(-1) == '(') return false;
		calculator.output += ` ${value} `
		return true;
	}
}


const OPERATOR_BUTTONS = [AdditionOperatorButton, SubtractionOperatorButton, MultiplicationOperatorButton, DivisionOperatorButton, EvaluateOperatorButton, ClearOperatorButton, ModulusOperatorButton, OpenParenthesisOperatorButton, CloseParenthesisOperatorButton]

class Calculator {
	constructor(previousSelector, currentSelector) {
		this.previousElement = document.querySelector(previousSelector);
		this.currentElement = document.querySelector(currentSelector);

		this.buttons = [];
	}

	get output() {
		return this.currentElement.textContent;
	}

	set output(value) {
		return this.currentElement.textContent = value;
	}

	get prevOutput() {
		return this.previousElement.textContent;
	}

	set prevOutput(value) {
		return this.previousElement.textContent = value;
	}

	get tokens() {
		return this.output.trimEnd().split(' ').filter(Boolean);
	}

	set tokens(tokens) {
		this.output = tokens.join(' ');
	}

	addButtons(...buttons) {
		for (const button of buttons) {
			button.attachEventListener(this);
			this.buttons.push(button);
		}
		return this;
	}
}

function buttonFactory(element) {
	if (element.textContent.match(/^\d$/)) {
		return new NumericButton(element, +element.textContent);
	}
	else if (element.textContent === '.') {
		return new DecimalButton(element);
	}

	const token = element.textContent;
	return new (OPERATOR_BUTTONS.find(cls => cls.token === token))(element);
}

const calculator = new Calculator('#previous', '#current').addButtons(...[...document.querySelectorAll('button')].map(buttonFactory))