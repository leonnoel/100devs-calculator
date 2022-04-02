let numbers = document.querySelectorAll('.num') 
let operators = document.querySelectorAll('.operator')
let btns = document.querySelectorAll('.btn')
let equals = document.querySelector('.equals')
let display = document.querySelector('.display')
let ac = document.querySelector('.ac')
let num1 = 0
let num2 = 0
let operator = ''

btns.forEach((btn) => {
  btn.addEventListener("click", function handleInput(btn) {

    if (btn.target.classList.contains('num')) {
      
      if (operator === '' && num1 >= 0) {
        display.innerHTML += btn.target.innerHTML
        num1 += btn.target.innerHTML
      } else{ 
        display.innerHTML += btn.target.innerHTML
        num2 += btn.target.innerHTML
    } 
    } else if (btn.target.classList.contains('operator')) {
        display.innerHTML = ''
        operator = btn.target.id
    } else if (btn.target.id === 'equals') {
      result = calculate(Number(num1), Number(num2), operator)
      display.innerHTML = result
      num1 = 0
      num2 = 0
      operator = ''
    }
  })
})

function calculate(num1, num2, operator) {
  console.log(num1, num2, operator)
  if (operator === 'add') {
    return num1 + num2
  } else if (operator === 'subtract') {
    return num1 - num2
  } else if (operator === 'multiply') {
    return num1 * num2
  } else if (operator === 'divide') {
    if (num2 === 0) {
      return 'Cannot divide by zero'
    }
    return num1 / num2
  }
}

ac.addEventListener('click', function() {
  display.innerHTML = ''
  num1 = 0
  num2 = 0
  operator = ''
})