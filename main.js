class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    // previous operand the user entered
    this.previousOperandTextElement = previousOperandTextElement;
    // current operand the user is working on
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  // clear all the different variables
  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    // undefined: not assigned value
    this.operation = undefined;
  }

  // clearing a single number
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  // what will occur every time a user clicks on a number to add to display
  appendNumber(number) {
    // Checking if the display already includes a period
    if (number === '.' && this.currentOperand.includes('.')) return;

    // Assigning currentOperand to the value of the button clicked.
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  // controls what will happen anytime a user clicks on any operation button
  chooseOperation(operation) {
    // Prevent the operator to display if the display is empty
    if (this.currentOperand === '') return;
    // Ability to compute an operation automatically while simultaneously completing another one.
    if (this.previousOperand !== '') {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  // takes the value inside the calculator and displays the result
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'x':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    console.log(integerDigits);
    const decimalDigits = stringNumber.split('.')[1];
    console.log(decimalDigits);

    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  // update the values inside of the output
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${
        this.operation
      }`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}

// Selecting elements
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equal]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// Creating calculator object
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Events Listeners
numberButtons.forEach((button) =>
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
);

equalButton.addEventListener('click', (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
