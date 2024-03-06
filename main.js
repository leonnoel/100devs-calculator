// Button DOM //

class Calculator {
  constructor(value) {
    this.value = value;
    this.clear();
  }

  clear() {
    this.currentDisplay = "";
    this.operation = undefined;
  }

  displayValue(number) {
    this.currentDisplay = number;
  }

  updateValue() {
    this.value.innerText = this.currentDisplay;
  }

  operations() {}

  compute() {}
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
