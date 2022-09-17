const calculator = document.querySelector(".calculator");
const clearBtn = calculator.querySelector(".calculator__btn--clear");
const deleteBtn = calculator.querySelector(".calculator__btn--delete");
const calcAnswer = calculator.querySelector(".calculator__answer");
const numberBtns = calculator.querySelectorAll(".calculator__btn--num");
const pointBtn = calculator.querySelector(".calculator__btn--point");
const opBtns = calculator.querySelectorAll(".calculator__btn--operator");
const equalBtn = calculator.querySelector(".calculator__btn--equals");

let firstNum = "";
let secondNum = "";
let operator;

const Calculator = (firstNum, secondNum) => {
  const getNum = (e) => {
    if (operator === undefined) {
      firstNum += e.target.innerText;
    } else {
      secondNum += e.target.innerText;
    }
    console.log(firstNum, operator, secondNum);
  };

  const calculate = () => {
    switch (operator) {
      case "+":
        console.log(firstNum, secondNum);
        firstNum = Number(firstNum) + Number(secondNum);
        break;
      case "-":
        firstNum = firstNum - secondNum;
        break;
      case "X":
        firstNum = firstNum * secondNum;
        break;
      case "/":
        firstNum = firstNum / secondNum;
        break;
    }
    operator = undefined;
    secondNum = "";
    console.log(firstNum, secondNum, operator);
    return firstNum;
  };

  const getOperator = (e) => {
    switch (e.target.innerText) {
      case "+":
        operator = "+";
        break;
      case "-":
        operator = "-";
        break;
      case "X":
        operator = "X";
        break;
      case "/":
        operator = "/";
        break;
    }
  };

  const clearCalc = () => {};

  const deleteNum = () => {};

  return { getNum, clearCalc, deleteNum, getOperator, calculate };
};

const calc = Calculator(firstNum, secondNum);

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", calc.getNum);
});

opBtns.forEach((opBtn) => {
  opBtn.addEventListener("click", calc.getOperator);
});

equalBtn.addEventListener("click", calc.calculate);
