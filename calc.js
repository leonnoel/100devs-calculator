class Calculator {
  add(arr) {
    return arr.reduce((acc, c) => acc + c);
  }

  subtract(arr) {
    return arr.reduce((acc, c) => acc - c);
  }

  multiply(arr) {
    return arr.reduce((acc, c) => acc * c);
  }

  divide(arr) {
    return arr.reduce((acc, c) => acc / c).toFixed(2);
  }
}

const result = document.querySelector(".result");
const wrapper = document.querySelector("#wrapper");
let currentWorkingMaths = [];
let operandHolder = [];
let mathNums = 0;
let usedOperators = [];
const myCalc = new Calculator();

const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

const operators = {
  divide: "/",
  multiply: "*",
  add: "+",
  subtract: "-",
  dot: ".",
};

wrapper.addEventListener("click", decide);

function decide(event) {
  const isButton = event.target.nodeName === "BUTTON";

  if (!isButton) return;

  if (event.target.classList.contains("operand")) {
    if (event.target.id == "dot") {
      operandHolder.push(operators[event.target.id]);
    } else {
      operandHolder.push(numbers[event.target.id]);
    }

    console.log(operandHolder);

    if (result.innerHTML == "0") {
      if (event.target.id == "dot") {
        result.innerHTML = operators[event.target.id];
      } else {
        result.innerHTML = numbers[event.target.id];
      }
    } else {
      if (event.target.id == "dot") {
        result.innerHTML += operators[event.target.id];
      } else {
        result.innerHTML += numbers[event.target.id];
      }
    }
  }

  if (event.target.classList.contains("operator")) {
    currentWorkingMaths.push(Number(operandHolder.join("")));
    usedOperators.push(operators[event.target.id]);
    operandHolder = [];

    if (result.innerHTML == "0") {
      result.innerHTML = operators[event.target.id];
    } else {
      result.innerHTML += operators[event.target.id];
    }
  }

  if (event.target.classList.contains("equals")) {
    currentWorkingMaths.push(Number(operandHolder.join("")));

    switch (usedOperators[0]) {
      case "+":
        mathNums = myCalc.add(currentWorkingMaths);
        break;
      case "-":
        mathNums = myCalc.subtract(currentWorkingMaths);
        break;
      case "*":
        mathNums = myCalc.multiply(currentWorkingMaths);
        break;
      case "/":
        mathNums = myCalc.divide(currentWorkingMaths);
        break;
    }

    result.innerHTML = mathNums;
    currentWorkingMaths = [];
    operandHolder = [mathNums];
    mathNums = 0;
    usedOperators = [];
  }

  if (event.target.classList.contains("clear")) {
    clearAll();
  }
}

function clearAll() {
  operandHolder = [];
  currentWorkingMaths = [];
  mathNums = 0;
  result.innerHTML = "0";
  usedOperators = [];
}
