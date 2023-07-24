
// DOM Behaviors
// *************

// Setup
let display = ''
let subtractOn = false
let multiplyOn = false
let divideOn = false
let lastCalculation = ''

function getNumber(x) {
  console.log( `You pressed the ${x} button.`);
  // Check to have only one '.'
  if(x === '.' && display.includes('.')) { 
    return 
  }  else {
    // Add number to display
    display += x
    document.querySelector('#displayResults').innerText = display;
  }
}

function addNumber() {
  console.log( `You pressed the + button.`);
  calculator.add(Number(display))
  result = calculator.getResult()
  display = ''
  document.querySelector('#displayResults').innerText = result;
  lastCalculation = 'add'
}

function subtractNumber() {
  console.log( `You pressed the - button.`);
  if(subtractOn === false){
    getResult()
    subtractOn = true
    lastCalculation = 'subtract'
  } else {
    calculator.subtract(Number(display))
    result = calculator.getResult()
    display = ''
    document.querySelector('#displayResults').innerText = result;
    lastCalculation = 'subtract'
  }
}


function multiplyNumber() {
  console.log( `You pressed the x button.`);
  if(multiplyOn === false){
    addNumber()
    multiplyOn = true
    lastCalculation = 'multiply'
  } else {
    if (display === ''){
      calculator.multiply(Number(this.result))
    } else {
      calculator.multiply(Number(display))
    }
    result = calculator.getResult()
    display = ''
    document.querySelector('#displayResults').innerText = result;
    lastCalculation = 'multiply'
  }
}

function divideNumber() {
  console.log( `You pressed the / button.`);
  if(divideOn === false){
    addNumber()
    divideOn = true
    lastCalculation = 'divide'
  } else {
    if (display === ''){
      calculator.divide(Number(this.result))
    } else {
      calculator.divide(Number(display))
    }
    result = calculator.getResult()
    display = ''
    document.querySelector('#displayResults').innerText = result;
    lastCalculation = 'divide'
  }
}

function getResult() {
  console.log( `You pressed the = button.`);
  switch (lastCalculation) {
    case 'add':
      addNumber()
      break;
    case 'subtract':
      subtractOn = true
      subtractNumber()
      break;
    case 'multiply':
      multiplyOn = true
      multiplyNumber()
      break;
    case 'divide':
      divideOn = true
      divideNumber()
      break;
    default:
  }
}

function deleteNumber() {
  let currentDisplay = document.querySelector('#displayResults').innerText;
  console.log( `You pressed the DEL button.`);
  console.log( `Display value before slice is: ${currentDisplay}`);
  let newDisplay = currentDisplay.slice(0, -1)
  console.log( `Display value after slice is: ${newDisplay}`);
  document.querySelector('#displayResults').innerText = newDisplay;
}


function deleteAll() {
  console.log( `You pressed the AC button.`);
  display = ''
  document.querySelector('#displayResults').innerText = display;
  calculator.clear()
  subtractOn = false
}

// Controller Behaviors
// *********************

console.log( `Starting Calculator`);
const calculator = new Calculator();