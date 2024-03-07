// Button DOM //

class Calculator {
  constructor(value) {
    this.value = value;
    this.clear();
  }

  // Clears display
  clear() {
    this.currentDisplay = "";
    this.operation = undefined;
  }

  // Displays current value on screen
  // If length is longer than 9 remove extra numbers
  displayValue(number) {
    if (number === "." && this.currentDisplay.includes(".")) return;
    if (this.currentDisplay.length > 9) {
      return this.currentDisplay.length - 1;
    }
    this.currentDisplay = this.currentDisplay.toString() + number.toString();
  }

  // Updates value input
  updateValue() {
    this.value.innerText = this.currentDisplay;
  }

  operations(operand) {
    if (operand === "") return;
    if (operand !== "") {
      this.compute();
    }
    this.operand = operand;
    this.currentDisplay = "";
  }

  compute() {
    let input;
    const cur = Number(this.currentDisplay);
    // const prev = Number(this.currentDisplay);
    if (isNaN(cur)) return;
    switch (this.operand) {
      case "+":
        input += cur;
        break;
    }
    this.currentDisplay = input;
    this.operand = undefined;
  }
}

let btnOperation = document.querySelectorAll("[data-operation]");
let btnNumbers = document.querySelectorAll("[data-number]");
let equal = document.querySelector("[data-equal]");
let currentValue = document.querySelector("#output");

const calculator = new Calculator(currentValue);

btnNumbers.forEach((button) => {
  button.addEventListener("click", function () {
    calculator.displayValue(button.innerText);
    calculator.updateValue();
  });
});

btnOperation.forEach((button) => {
  button.addEventListener("click", function () {
    calculator.operations(button.innerText);
    calculator.updateValue();
  });
});

equal.addEventListener("click", function () {
  calculator.compute();
  calculator.updateValue();
});
