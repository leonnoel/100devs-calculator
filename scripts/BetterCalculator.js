import calculator from "./Calculator.js";

function BetterCalculator(element) {
  Object.setPrototypeOf(this, calculator);

  this.screen = element;

  this.type = function type(value) {
    if (
      value === "." &&
      (this.screenVal.includes(".") ||
        this.screenVal[this.screenVal.length - 1] === ".")
    )
      return;
    this.screenVal += value;
    this.screen.innerText = this.screenVal;
  };

  this.deleteLastChar = function deleteLastChar() {
    this.screenVal = this.screen.innerText.slice(
      0,
      this.screenVal.length - 1
    );
    this.screen.innerText = this.screenVal;
  };

  this.divide = function divide() {
    let result = Number.parseFloat(this.a / this.b)
    return result % 1 !== 0 ? result.toFixed(2) : result
  };

  let _keys = [
    "1",
    "2",
    "3",
    "/",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "+",
    "0",
    ".",
    "C",
    "-",
    "<",
    "=",
  ];

  Object.defineProperty(this, "keys", {
    get: function () {
      return [..._keys];
    },
  });
}

const screen = document.querySelector("#screen");
const keyboard = document.querySelector("#keyboard");
const betterCalculator = new BetterCalculator(screen);

betterCalculator.keys.forEach((key) => {
  let element = document.createElement("button");
  element.innerText = `${key}`;

  element.value = `${key}`;

  element.classList.add("btn");

  switch (key) {
    case "+":
    case "-":
    case "*":
    case "/":
      element.addEventListener("click", () => {
        betterCalculator.setOperation(key);
      });
      break;
    case "C":
      element.addEventListener("click", () => {
        betterCalculator.clear();
      });
      break;
    case "=":
      element.classList.add("span-3", "bg-secondary");
      element.addEventListener("click", () => {
        betterCalculator.calculate();
      });
      break;
    case "<":
      element.addEventListener("click", () => {
        betterCalculator.deleteLastChar();
      });
      break;
    default:
      element.addEventListener("click", () => {
        betterCalculator.type(key);
      });
  }

  keyboard.appendChild(element);
});
