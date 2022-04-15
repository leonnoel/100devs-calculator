import calculator from "./Calculator.js";

function BetterCalculator(element) {
  Object.setPrototypeOf(this, calculator);

  this.screen = element;
  console.log(this.listeners);

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
    this.screenVal = this.screen.innerText.slice(0, this.screenVal.length - 1);
    this.screen.innerText = this.screenVal;
  };

  this.divide = function divide() {
    let result = Number.parseFloat(this.a / this.b);
    return result % 1 !== 0 ? result.toFixed(2) : result;
  };

  this.listeners = {
    ...this.listeners,
    "<": this.deleteLastChar,
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

  element.classList.add("btn");

  if (key === "=") {
    element.classList.add("bg-secondary", "span-3");
  }

  element.addEventListener("click", () => {
    betterCalculator.getListener(key);
  });

  keyboard.appendChild(element);
});
