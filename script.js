function Calculator(color) {
  this.color = color;
  this.result = "";
  this.n1 = 0;
  this.n2 = 0;
  this.currentOperator = "";
  this.operation = () => {
    if (this.currentOperator === "multiply") {
      this.result = this.n1 * this.n2;
    } else if (this.currentOperator === "minus") {
      this.result = this.n1 - this.n2;
    } else if (this.currentOperator === "add") {
      this.result = this.n1 + this.n2;
    } else if (this.currentOperator === "divide") {
      this.result = this.n1 / this.n2;
    }
  };
}

const calculator = new Calculator("black");

document.querySelector(".calculator").style.background = calculator.color;

const screen = document.querySelector(".screen");

const numbers = document.querySelectorAll(".numbers");
numbers.forEach((node) =>
  node.addEventListener("click", (e) => {
    if (screen.textContent.includes(".") && e.target.id === ".") {
      screen.textContent = screen.textContent + "";
    } else {
      screen.textContent = screen.textContent + e.target.id;
    }
  })
);

const operators = document.querySelectorAll(".operators");
operators.forEach((node) =>
  node.addEventListener("click", (e) => {
    calculator.n1 = +screen.textContent;
    calculator.currentOperator = e.target.id;
    screen.textContent = "";
  })
);

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  calculator.n2 = +screen.textContent;
  calculator.operation();
  screen.textContent = calculator.result;
});
