const calculator = document.querySelector(".calculator")
const clearBtn = calculator.querySelector(".calculator__btn--clear")
const deleteBtn = calculator.querySelector(".calculator__btn--delete")
const calcAnswer = calculator.querySelector(".calculator__answer")
const numberBtns = calculator.querySelectorAll(".calculator__btn--num")
const pointBtn = calculator.querySelector(".calculator__btn--point")
const opBtns = calculator.querySelectorAll(".calculator__btn--operator")

let previousOperand = '', currentOperand = '', currentOperator;

numberBtns.forEach(numberBtn => {
  numberBtn.addEventListener('click', () => {

    isOperatorBlank(numberBtn);
  })
})

opBtns.forEach(opBtn => {
  opBtn.addEventListener('click', () => {
    appendOperator(opBtn);
  })
})

function isOperatorBlank(btn) {
  if (!currentOperator) {
    previousOperand += btn.innerText;
  } else {
    currentOperand += btn.innerText;
  }
  console.log(previousOperand, currentOperator, currentOperand)
}


function appendOperator(btn) {
  if (!currentOperator || currentOperator.length !== 1) {
    currentOperator = btn.innerText
  } else {
    calculateAnswer(currentOperator)
  }
}

function calculateAnswer(operatorStr) {
  let answer;
  switch (operatorStr) {
    case '+':
      answer = Number(previousOperand) + Number(currentOperand);
      break;
    case 'x':
      answer = Number(previousOperand) * Number(currentOperand);
      break;
    case '/':
      answer = Number(previousOperand) / Number(currentOperand);
      break;
    case '-':
      answer = Number(previousOperand) - Number(currentOperand);
      break;
  }
  // console.log(answer)
  return answer;
}


// console.log(calculateAnswer)

// function calculateAnswer(operatorStr) {
//   switch (operatorStr) {
//     case '+':
//       let answer = previousOperand + currentOperand
//   }
// }

// function addOperator() {

// }


    // console.dir(numberBtn.innerText)