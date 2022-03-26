class Button {
	constructor(element, value, ...keys) {
		this.element = element;
		this.value = value ?? element.textContent;
		this.keys = new Set(keys);
	}

	attachEventListener(...args) {
		const activator = this.activate.bind(this, this.value, ...args);

		this.element.addEventListener('click', activator);
		this.keys.size && window.addEventListener('keydown', (event) => {
			if (!this.keys.has(event.key.toUpperCase())) return;
			event.preventDefault()
			activator()
		});

		return activator;
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
	canActivate(_, calculator, ...args) {
		if (!super.canActivate(_, calculator, ...args)) return false;

		const lastToken = calculator.tokens.at(-1);
		if (lastToken?.includes('.')) return false;

		return true;
	}
}

class TokenButton extends Button {
	static token = '';
	static keys = new Set();
	static canPrefixNumbers = true;
	static canPrefixOperators = false;
	constructor(element, value, ...keys) {
		super(element, value, ...keys)
		if (!keys.length) this.keys = new Set([...this.constructor.keys, this.constructor.token]);
	}
}

class OperatorButton extends TokenButton {
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
}

class SubtractionOperatorButton extends OperatorButton {
	static token = '-'

	canActivate(_, calculator, ...args) {
		const lastTwoTokens = calculator.tokens.slice(-2);
		if (lastTwoTokens.map(token => OPERATOR_BUTTONS.find(cls => !cls.canPrefixOperators && cls.token === token)).filter(Boolean).length == 2) return false;

		return true;
	}
}

class MultiplicationOperatorButton extends OperatorButton {
	static token = '×'
	static keys = new Set('*')
}

class DivisionOperatorButton extends OperatorButton {
	static token = '÷'
	static keys = new Set('/')
}

class ModulusOperatorButton extends OperatorButton {
	static token = '%'
}

class EvaluateOperatorButton extends OperatorButton {
	static token = '='
	static keys = new Set(['RETURN', 'ENTER'])

	attachEventListener(calculator, ...args) {
		const activator = super.attachEventListener(calculator, ...args)
		calculator.formElement.addEventListener('submit', (event) => {
			event.preventDefault();
			return activator();
		});
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
	static keys = new Set(['BACKSPACE', 'DELETE', 'ESCAPE'])

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

class ParenthesisButton extends TokenButton {
	static canPrefixNumbers = false;

	activate(value, calculator, ...args) {
		if (!super.activate(value, calculator, ...args)) return false;
		if (calculator.output == 0) calculator.output = '';
		return true;
	}
}

class OpenParenthesisOperatorButton extends ParenthesisButton {
	static token = '(';

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
	constructor(formSelector, previousSelector, currentSelector) {
		this.formElement = document.querySelector(formSelector);
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
		return new NumericButton(element, +element.textContent, element.textContent);
	}
	else if (element.textContent === '.') {
		return new DecimalButton(element, element.textContent, element.textContent);
	}

	const token = element.textContent;
	return new (OPERATOR_BUTTONS.find(cls => cls.token === token))(element);
}

new Calculator('form', '#previous', '#current').addButtons(...[...document.querySelectorAll('button')].map(buttonFactory))