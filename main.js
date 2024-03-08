class Calculator {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
    this.clear();
  }
  clear() {
    this.currentDisplay = "";
    this.previousDisplay = "";
    this.operator = undefined;
  }

  appendValue(number) {
    if (number === "." && this.currentDisplay.includes(".")) return;
    if (this.currentDisplay.length > 9) return;
    this.currentDisplay = this.currentDisplay.toString() + number.toString();
  }

  updateDisplay() {
    this.value1.innerText = this.currentDisplay;
  }

  operation(operator) {
    if (operator === "") return;
    if (operator !== "") {
      this.compute();
    }
    this.operator = operator;
    this.previousDisplay = this.currentDisplay;
    this.currentDisplay = "";
  }

  compute() {
    let total;
    const current = Number(this.currentDisplay);
    const previous = Number(this.previousDisplay);

    if (isNaN(current) || isNaN(previous)) return;

    switch (this.operator) {
      case "+":
        total = current + previous;
        break;
      case "-":
        total = current - previous;
        break;
      case "x":
        total = current * previous;
        break;
      case "÷":
        total = current / previous;
        break;
      default:
        break;
    }
    this.currentDisplay = total;
    this.previousDisplay = "";
    this.operator = undefined;
  }
}

let btnOperation = document.querySelectorAll("[data-operation]");
let btnNumbers = document.querySelectorAll("[data-number]");
let equalBtn = document.querySelector("[data-equal]");
let currentValue = document.querySelector("#current-value");
let previousValue = document.querySelector("#previous-value");

const calculator = new Calculator(previousValue, currentValue);

btnNumbers.forEach((button) => {
  button.addEventListener("click", function () {
    calculator.appendValue(button.innerText);
    calculator.updateDisplay();
  });
});

btnOperation.forEach((button) => {
  button.addEventListener("click", function () {
    calculator.operation(button.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", function () {
  calculator.compute();
  calculator.updateDisplay();
});
