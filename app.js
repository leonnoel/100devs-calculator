const numbers = [...document.querySelectorAll(".number")];
const operators = [...document.querySelectorAll(".operation")];
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");

const OPERATOR_MAP = {
  "+": "sum",
  "-": "sub",
  "×": "mult",
  "÷": "divide",
};

const calculator = {
  display: document.querySelector(".display"),
  displayValue: "0",
  enteredValues: [],
  operator: "",

  renderValue() {
    this.display.innerText = this.displayValue;
  },

  clickNumber(n) {
    if (this.displayValue === "0") {
      this.displayValue = "";
    }
    this.displayValue += n.toString();
    this.renderValue();
  },

  clear() {
    this.displayValue = "0";
    this.enteredValues = [];
    this.operator = "";
    this.renderValue();
  },

  calculate(a, b, op) {
    let result;
    switch (op) {
      case "sum":
        result = a + b;
        break;
      case "sub":
        result = a - b;
        break;
      case "mult":
        result = a * b;
        break;
      case "divide":
        if (b === 0) {
          result = "Error"; // Handle division by zero
        } else {
          result = a / b;
        }
        break;
      default:
        result = "Error";
    }
    this.displayValue = Number.parseFloat(result.toFixed(4)).toString();
    this.renderValue();
  },

  clickOperator(o) {
    if (this.operator && this.displayValue !== "") {
      this.enteredValues.push(this.displayValue);
      this.clickEquals();
    } else {
      this.enteredValues.push(this.displayValue);
    }
    this.operator = o;
    this.displayValue = "";
  },

  clickEquals() {
    if (this.enteredValues.length < 1) {
      return;
    }
    this.enteredValues.push(this.displayValue);
    const operation = OPERATOR_MAP[this.operator];

    if (operation) {
      this.calculate(+this.enteredValues[0], +this.enteredValues[1], operation);
    }

    this.operator = "";
    this.enteredValues = [this.displayValue]; // Store the result for further calculations
  },
};

numbers.forEach((e) =>
  e.addEventListener("click", () => calculator.clickNumber(e.innerText))
);
clearBtn.addEventListener("click", () => calculator.clear());
operators.forEach((e) =>
  e.addEventListener("click", () => calculator.clickOperator(e.innerText))
);
equalsBtn.addEventListener("click", () => calculator.clickEquals());

calculator.renderValue();
