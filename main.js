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
let switchToSecond = false;

const Calculator = (firstNum, secondNum) => {
  const getNum = (e) => {
    if (switchToSecond === false) {
      firstNum += e.target.innerText;
      calcAnswer.innerText = firstNum.toString();
    } else {
      secondNum += e.target.innerText;
      calcAnswer.innerText = `${firstNum.toString()} ${operator} ${secondNum}`;
    }
    console.log(firstNum, operator, secondNum);
  };

  const calculate = () => {
    switch (operator) {
      case "+":
        firstNum = Number(firstNum) + Number(secondNum);
        break;
      case "-":
        firstNum = Number(firstNum) - Number(secondNum);
        break;
      case "X":
        firstNum = Number(firstNum) * Number(secondNum);
        break;
      case "/":
        firstNum = Number(firstNum) / Number(secondNum);
        break;
    }
    calcAnswer.innerText = firstNum;
    operator = undefined;
    secondNum = "";
    switchToSecond = true;
    console.log(firstNum, secondNum, operator);
    return firstNum;
  };

  const getOperator = (e) => {
    switch (e.target.innerText) {
      case "+":
        operator = "+";
        switchToSecond = true;
        break;
      case "-":
        operator = "-";
        switchToSecond = true;
        break;
      case "X":
        operator = "X";
        switchToSecond = true;
        break;
      case "/":
        operator = "/";
        switchToSecond = true;
        break;
    }
  };

  const clearCalc = () => {
    firstNum = "";
    operator = undefined;
    secondNum = "";
    switchToSecond = false;
    calcAnswer.innerText = "0";
  };

  const deleteNum = () => {
    if (switchToSecond === false) {
      let numLength = firstNum.length;
      firstNum = firstNum.slice(0, numLength - 1);
      calcAnswer.innerText = firstNum.toString();
      console.log(firstNum);
      return firstNum;
    } else {
      let numLength = secondNum.length;
      secondNum = secondNum.slice(0, numLength - 1);
      calcAnswer.innerText = `${firstNum.toString()} ${operator} ${secondNum}`;
      console.log(secondNum);
      return secondNum;
    }
  };

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

clearBtn.addEventListener("click", calc.clearCalc);

deleteBtn.addEventListener("click", calc.deleteNum);
