class Calculator {
  constructor(previousOperationTextBucket, currentOperationTextBucket) {
    this.previousOperationTextBucket = previousOperationTextBucket;
    this.currentOperationTextBucket = currentOperationTextBucket;
    this.clear();
  }

  // Reset display area
  clear() {
    this.previousOperation = "";
    this.currentOperation = "";
    this.operation = undefined;
  }

  // Delete character
  delete() {
    this.currentOperation = String(this.currentOperation).slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperation.includes(".")) return;
    this.currentOperation += String(number);
  }

  chooseOperation(operation) {
    if (this.currentOperation === "") return;
    if (this.previousOperationOperation != "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperation = this.currentOperation;
    this.currentOperation = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperation);
    const current = parseFloat(this.currentOperation);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "÷":
        computation = prev / current;
        break;
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      default:
        return;
    }
    this.currentOperation = computation;
    this.operation = undefined;
    this.previousOperation = "";
  }

  // Format result display
  getDisplayNumber(number) {
    const stringNumber = String(number);
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return `${integerDisplay}`;
    }
  }

  updateDisplay() {
    this.currentOperationTextBucket.innerText = this.getDisplayNumber(this.currentOperation);
    if (this.operation != null) {
      this.previousOperationTextBucket.innerText = `${this.getDisplayNumber(this.previousOperation)} ${this.operation}`;
    } else {
      this.previousOperationTextBucket.innerText = `${this.previousOperation}`;
    }
  }
}

// Get buttons from dom
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperationTextBucket = document.querySelector("[data-previous-result]");
const currentOperationTextBucket = document.querySelector("[data-current-operation]");

// Instanatiate calculator
const calculator = new Calculator(previousOperationTextBucket, currentOperationTextBucket);

// Number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

// Operator buttons
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

// Clear button
clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

// Delete button
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

// Equals button
equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
