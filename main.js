class Calculator {
  // Initializes constructor
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
    this.clear();
  }

  // Clears display
  clear() {
    this.currentDisplay = "";
    this.previousDisplay = "";
    this.operator = undefined;
  }

  // Limits decimal points & checks whether a decimal exists
  // Limits the length of the display to 9 digits
  appendValue(number) {
    if (number === "." && this.currentDisplay.includes(".")) return;
    if (this.currentDisplay.length > 9) return;
    this.currentDisplay = this.currentDisplay.toString() + number.toString();
  }

  // Displays the number values on calculator
  updateDisplay() {
    this.value1.innerText = this.currentDisplay;
    // this.value2.innerText = this.previousDisplay;
  }

  // Initializes operation once operand button is clicked
  // Assigns operator value, updates previous value with current value
  // Current Display is removed
  operation(operator) {
    if (this.currentDisplay === "") return;
    if (this.previousDisplay !== "") {
      this.compute();
    }
    this.operator = operator;
    this.previousDisplay = this.currentDisplay;
    this.currentDisplay = "";
  }

  // Stores 'total' in variable
  // Stores current and previous value inside variables
  compute() {
    let total;
    const current = Number(this.currentDisplay);
    const previous = Number(this.previousDisplay);

    if (isNaN(current) || isNaN(previous)) return;

    switch (this.operator) {
      case "+":
        total = previous + current;
        break;
      case "-":
        total = previous - current;
        break;
      case "x":
        total = previous * current;
        break;
      case "÷":
        total = previous / current;
        break;
      default:
        break;
    }
    this.previousDisplay = "";
    this.currentDisplay = total;
    this.operator = undefined;
  }
}

// HTML Elements
let btnOperation = document.querySelectorAll("[data-operation]");
let btnNumbers = document.querySelectorAll("[data-number]");
let equalBtn = document.querySelector("[data-equal]");
let currentValue = document.querySelector("#current-value");
let previousValue = document.querySelector("#previous-value");

// Creates new class 'calculator'
const calculator = new Calculator(previousValue, currentValue);

// Loops through calculator number buttons and adds event listener, calls calculator methods
btnNumbers.forEach((button) => {
  button.addEventListener("click", function () {
    calculator.appendValue(button.innerText);
    calculator.updateDisplay();
  });
});

// Loops through calculator operand buttons and adds event listener, calls calculator methods
btnOperation.forEach((button) => {
  button.addEventListener("click", function () {
    calculator.operation(button.innerText);
    calculator.updateDisplay();
  });
});

// Adds event listener to equal button
equalBtn.addEventListener("click", function () {
  calculator.compute();
  calculator.updateDisplay();
});
