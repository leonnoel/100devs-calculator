class Calculator {
  color = "";
  result = "";
  n1 = 0;
  n2 = 0;
  op = "";
  operation = () => {
    if (this.op === "*") {
      this.result = this.n1 * this.n2;
    } else if (this.op === "-") {
      this.result = this.n1 - this.n2;
    } else if (this.op === "+") {
      this.result = this.n1 + this.n2;
    } else if (this.op === "/") {
      this.result = this.n1 / this.n2;
    }
  };
}

const calculator = new Calculator();
calculator.color = "black";

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
    calculator.op = e.target.id;
    screen.textContent = "";
  })
);

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  calculator.n2 = +screen.textContent;
  calculator.operation();
  screen.textContent = calculator.result;
});
