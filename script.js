class Calculator {
	constructor(displayElement) {
		this.displayElement = displayElement;
		this.clear(); // Initialize with a clean slate
	}

	clear() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
	}

	appendNumber(number) {
		// Prevent adding multiple decimals
		if (number === '.' && this.currentOperand.includes('.')) return;

		// Append numbers as strings so they sit next to each other (e.g., '1' + '2' = '12')
		this.currentOperand =
			this.currentOperand.toString() + number.toString();
	}

	// Handle the operation (+, -, *, /)
	chooseOperation(operation) {
		// Prevent operation if there is no current number
		if (this.currentOperand === '') return;

		// If we already have a previous number, compute it first (chaining operations)
		if (this.previousOperand !== '') {
			this.compute();
		}

		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}

	compute() {
		let computation;
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);

		// Cancel if there aren't two valid numbers to compute
		if (isNaN(prev) || isNaN(current)) return;

		switch (this.operation) {
			case '+':
				computation = prev + current;
				break;
			case '-':
				computation = prev - current;
				break;
			case '*':
			case 'x':
			case 'X':
				// BUG FIX: Added 'x' and 'X' so it works no matter
				// what you put in your HTML data-val attribute!
				computation = prev * current;
				break;
			case '/':
				computation = prev / current;
				break;
			default:
				return;
		}

		this.currentOperand = computation;
		this.operation = undefined;
		this.previousOperand = '';
	}

	// Updates HTML input field
	updateDisplay() {
		this.displayElement.value = this.currentOperand;
	}
}

// --- INITIALIZATION & EVENT LISTENERS ---

// 1. Grab the HTML elements
const display = document.getElementById('calcDisplay');
const buttons = document.querySelectorAll('.calcBtn');

// 2. Instantiate a new Calculator object
const calculator = new Calculator(display);

// 3. Loop through all buttons and listen for clicks
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		// Get the value we stored in our HTML data-val attribute
		const val = button.getAttribute('dataVal');

		// Route the button press to the correct Calculator method
		if (!isNaN(val) || val === '.') {
			// It's a number (0-9) or a decimal point
			calculator.appendNumber(val);
			calculator.updateDisplay();
		} else if (val === '=') {
			// It's the equals sign
			calculator.compute();
			calculator.updateDisplay();
		} else {
			// It must be an operator (+, -, *, /)
			calculator.chooseOperation(val);
			calculator.updateDisplay();
		}
	});
});
