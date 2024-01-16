//////////  VARIABLES  //////////
let displayNumber = document.querySelector('.displayNumber')
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')
let equals = document.querySelector('#equals');
let operation = null;
let firstOperand = null;

//////////  ADD NUMBER TO DISPLAY  //////////
function addNumToScreen(value) {
  displayNumber.innerText = value;
}

document.querySelectorAll('.button').forEach((button) => {
  let buttonValue = button.innerText;
  button.addEventListener('click', () => {
    if(displayNumber.innerText === '0'){
      addNumToScreen(buttonValue);
    } else if(displayNumber.innerText !== '0'){
      addNumToScreen(displayNumber.innerText + buttonValue);
    }
  })
})

//////////  CLEAR SCREEN  //////////
function clearScreen() {
  displayNumber.innerText = '0';
}

document.querySelector('.clearButton').addEventListener('click', () => { 
  clearScreen();
});

//////////  OPERATOR LOGIC  //////////
add.addEventListener('click', () => {
  operation = 'addition';
  firstOperand = parseFloat(displayNumber.innerText);
  clearScreen();
});

subtract.addEventListener('click', () => {
  operation = 'subtraction';
  firstOperand = parseFloat(displayNumber.innerText);
  clearScreen();
});

multiply.addEventListener('click', () => {
  operation = 'multiplication';
  firstOperand = parseFloat(displayNumber.innerText);
  clearScreen();
});

divide.addEventListener('click', () => {
  operation = 'division';
  firstOperand = parseFloat(displayNumber.innerText);
  clearScreen();
});

//////////  EQUALS LOGIC  //////////
equals.addEventListener('click', () => {
  if(operation === 'addition') {
    let secondOperand = parseFloat(displayNumber.innerText);
    let result = firstOperand + secondOperand;
    addNumToScreen(result);
    operation = null;
  } else if(operation === 'subtraction') {
    let secondOperand = parseFloat(displayNumber.innerText);
    let result = firstOperand - secondOperand;
    addNumToScreen(result);
    operation = null;
  } else if(operation === 'multiplication') {
    let secondOperand = parseFloat(displayNumber.innerText);
    let result = firstOperand * secondOperand;
    addNumToScreen(result);
    operation = null;
  } else if(operation === 'division') {
    let secondOperand = parseFloat(displayNumber.innerText);
    let result = firstOperand / secondOperand;
    addNumToScreen(result);
    operation = null;
  }
})




