const calculator = document.querySelector(".calculator");
const clearBtn = calculator.querySelector(".calculator__btn--clear");
const deleteBtn = calculator.querySelector(".calculator__btn--delete");
const calcAnswer = calculator.querySelector(".calculator__answer");
const numberBtns = calculator.querySelectorAll(".calculator__btn--num");
const pointBtn = calculator.querySelector(".calculator__btn--point");
const opBtns = calculator.querySelectorAll(".calculator__btn--operator");

let previousOperand = "",
  currentOperand = "",
  currentOperator,
  runningTotal = 0;

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    isOperatorBlank(numberBtn);
  });
});

opBtns.forEach((opBtn) => {
  opBtn.addEventListener("click", () => {
    appendOperator(opBtn);
  });
});

function isOperatorBlank(btn) {
  if (!currentOperator) {
    previousOperand += btn.innerText;
    calcAnswer.innerText = previousOperand;
  } else {
    currentOperand += btn.innerText;
    calcAnswer.innerText += currentOperand;
  }
}

function appendOperator(btn) {
  if (previousOperand && currentOperator && currentOperand) {
    previousOperand = Number(previousOperand);
    currentOperand = Number(currentOperand);
    calcAnswer.innerText += currentOperator;
  }
  currentOperator = btn.innerText;
  calcAnswer.innerText += currentOperator;
}

function calculateAnswer(operatorStr) {
  if (currentOperand) {
    switch (operatorStr) {
      case "+":
        runningTotal = previousOperand + currentOperand;
        previousOperand = runningTotal;
        currentOperand = "";
        break;
      case "x":
        runningTotal = previousOperand * currentOperand;
        previousOperand = runningTotal;
        currentOperand = "";
        break;
      case "/":
        runningTotal = previousOperand / currentOperand;
        previousOperand = runningTotal;
        currentOperand = "";
        break;
      case "-":
        runningTotal = previousOperand - currentOperand;
        previousOperand = runningTotal;
        currentOperand = "";
        break;
    }
  }
  return runningTotal;
}
