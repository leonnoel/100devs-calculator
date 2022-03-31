// Have an input window, where all values and math operations are going to show up. When the equal sign is pressed, all the math operations that has been made is going to be evaluated and put into a sum variable, that will display

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

class Calculator {
	constructor(previousOperand, currentOperand) {
		this.previousOperand = previousOperand;
		this.currentOperand = currentOperand;
		this.operation = undefined;
		this.clear();
	}

	clear() {
		this.currentOperand = '';
		this.previousOperand = '';
	}

	delete() {}

	appendNumber(number) {}

	chooseOperation(operation) {}

	compute() {}

	updateDisplay() {}
}
