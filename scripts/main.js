class Calculator {
  constructor() {
    this.onScreen = "";
    this.numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    this.operators = {
      "/": "/",
      X: "*",
      "+": "+",
      "-": "-",
    };
  }

  evaluate() {
    this.onScreen = eval(this.onScreen);
  }
  type(num) {
    this.onScreen += num;
  }
  clear() {
    this.onScreen = "";
  }
}

const DevsCalc = new Calculator();

const screen = document.querySelector("#screen");
const board = document.querySelector("#board");
const keyboard = document.querySelector("#keyboard");

DevsCalc.numbers.forEach((num) => {
  const node = document.createElement("button");
  node.classList.add("key");
  node.innerText = num;
  node.addEventListener("click", () => {
    DevsCalc.type(num.toString());
    screen.value = DevsCalc.onScreen;
  });

  keyboard.appendChild(node);
});

const decimal = document.createElement("button");
decimal.classList.add("key");
decimal.innerText = ".";
decimal.addEventListener("click", () => {
  DevsCalc.type(".");
  screen.value = DevsCalc.onScreen;
});

keyboard.appendChild(decimal);

const equals = document.createElement("button");
equals.classList.add("key");
equals.innerText = "=";
equals.addEventListener("click", () => {
  DevsCalc.evaluate()
  screen.value = DevsCalc.onScreen
});

keyboard.appendChild(equals);

const operatorBoard = document.querySelector("#operator-board");

for (const [key, value] of Object.entries(DevsCalc.operators)) {
  const node = document.createElement("button");
  node.classList.add("key");
  node.innerText = key;
  node.addEventListener("click", () => {
    DevsCalc.type(value);
  });

  operatorBoard.appendChild(node);
}
