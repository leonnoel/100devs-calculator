const number = document.querySelectorAll(".btn");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");

function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.num2Value = "";
  this.num1Value = "";
  this.inputNumber = function (number) {
    if (number === "." && this.num2Value.includes(".")) return;
    this.num2Value = this.num2Value.toString() + number.toString();
  };
  this.inputOperator = function (operation) {
    this.compute();

    this.operation = operation;
    this.num1Value = this.num2Value;
    this.num2Value = "";
  };
  this.compute = function () {
    let total;
    const first = parseFloat(this.num1Value);
    const second = parseFloat(this.num2Value);
    if (isNaN(first) || isNaN(second)) return;
    switch (this.operation) {
      case "+":
        total = first + second;
        break;
      case "-":
        total = first - second;
        break;
      case "*":
        total = first * second;
        break;
      case "/":
        total = first / second;
        break;
      default:
        return;
    }
    this.num2Value = total;
    this.operation = undefined;
    this.num1Value = "";
  };
  this.updateDisplay = function () {
    this.num2.innerText = this.num2Value;
    this.num1.innerText = this.num1Value;
  };
}

const calc = new Calculator(num1, num2);

number.forEach((button) => {
  button.addEventListener("click", () => {
    calc.inputNumber(button.innerText);
    calc.updateDisplay();
  });
});
operator.forEach((button) => {
  button.addEventListener("click", () => {
    calc.inputOperator(button.innerText);
    calc.updateDisplay();
  });
});
equals.addEventListener("click", () => {
  calc.compute();
  calc.updateDisplay();
});
