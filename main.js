function Calculator(prevInputTextElement, currentInputTextElement) {
  this.prevInputTextElement = prevInputTextElement;
  this.currentInputTextElement = currentInputTextElement;
  this.previousInput = "";
  this.currentInput = "";
  this.operator = "";

  this.addToDisplay = function (number) {
    if (number === "." && this.currentInput.includes(".")) return;
    this.currentInput = this.currentInput.toString() + number.toString();
  };

  this.chooseOperator = function (operator) {
    if (this.currentInput === "") return;
    if (this.previousInput !== "") {
      this.calculate();
    }
    this.operator = operator;
    this.previousInput = this.currentInput;
    this.currentInput = "";
  };

  this.calculate = function () {
    let result;
    const prevNumber = parseFloat(this.previousInput);
    const currentNumber = parseFloat(this.currentInput);

    if (isNaN(prevNumber) || isNaN(currentNumber)) return;

    switch (this.operator) {
      case "+":
        result = prevNumber + currentNumber;
        break;
      case "-":
        result = prevNumber - currentNumber;
        break;
      case "x":
        result = prevNumber * currentNumber;
        break;
      case "/":
        result = prevNumber / currentNumber;
        break;
      default:
        return;
    }

    this.currentInput = result;
    this.operator = "";
    this.previousInput = "";
  };

  this.updateDisplay = function () {
    this.currentInputTextElement.innerText = this.currentInput;
    if (this.operator !== null) {
      this.prevInputTextElement.innerText = `${this.previousInput} ${this.operator}`;
    }
  };
}

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const prevInputTextElement = document.querySelector(".prevInput");
const currentInputTextElement = document.querySelector(".currentInput");

const calculator = new Calculator(
  prevInputTextElement,
  currentInputTextElement
);

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.addToDisplay(btn.innerText);
    calculator.updateDisplay();
  });
});

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.chooseOperator(btn.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});
