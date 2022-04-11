import calculator from "./Calculator.js";

function BasicCalculator(element) {
  Object.setPrototypeOf(this, calculator);

  this.screen = element;

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
    "C",
    "=",
    "-",
  ];

  Object.defineProperty(this, "keys", {
    get: function () {
      return [..._keys];
    },
  });

  this.divide = function divide() {
    return Math.floor(this.a / this.b);
  };
}

const screen = document.querySelector("#screen");
const keyboard = document.querySelector("#keyboard");
const basicCalculator = new BasicCalculator(screen);

basicCalculator.keys.forEach((key) => {
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
        basicCalculator.setOperation(key);
      });
      break;
    case "C":
      element.addEventListener("click", () => {
        basicCalculator.clear();
      });
      break;
    case "=":
      element.classList.add("bg-secondary");
      element.addEventListener("click", () => {
        basicCalculator.calculate();
      });
      break;
    default:
      element.addEventListener("click", () => {
        basicCalculator.type(key);
      });
  }

  keyboard.appendChild(element);
});
