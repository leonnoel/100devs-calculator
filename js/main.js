let screen = document.getElementById('screen')

let zero = document.getElementById('0')
let one = document.getElementById('1')
let two = document.getElementById('2')
let three = document.getElementById('3')
let four = document.getElementById('4')
let five = document.getElementById('5')
let six = document.getElementById('6')
let seven = document.getElementById('7')
let eight = document.getElementById('8')
let nine = document.getElementById('9')
let dot = document.getElementById('dot')
let divide = document.getElementById('divide')
let multiply = document.getElementById('multiply')
let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let equals = document.getElementById('equals')

const calc = {
  displayValue: 0,
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

const operators = ['+', '-', '/', '*']

function calculate(num1, operation, num2) {
  switch (operation) {
    case '+' :
      return num1 + num2;
      break;
    case '-' :
      return num1 - num2;
      break;
    case '/' :
      return num2 === 0 ? null : num1 / num2;
      break;
    case '*' :
      return num1 * num2;
      break
    default :
      return null
 }
}



function clear() {
  total = 0
}
function eval() {
  calc.displayValue = calc.firstOperand
}




screen.innerText = calc.displayValue;