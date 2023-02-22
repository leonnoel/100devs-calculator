function Calculator(color) {
    this.color = color;
    this.result = "";
    this.num1 = 0;
    this.num2 = 0;
    this.currentOperator = "";
    this.operation = () => {
        if(this.currentOperator === "multiply") {
            this.result = this.num1 * this.num2;
        } else if (this.currentOperator === "subtract") {
            this.result = this.num1 - this.num2;
        } else if (this.currentOperator === "add") {
            this.result = this.num1 + this.num2;
        } else if (this.currentOperator === "divide") {
            this.result = this.num1 / this.num2;
        }
    };
    
}

const calculator = new Calculator("blue");

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
        calculator.num1 = +screen.textContent;
        calculator.currentOperator = e.target.id;
        screen.textContent = "";
    })
);

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    calculator.num2 = +screen.textContent;
    calculator.operation();
    screen.textContent = calculator.result;
});