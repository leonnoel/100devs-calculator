let buttons = document.querySelectorAll('.button')
let calculatorDisplay = document.querySelector('.calc-result').innerText


let Calculator = function(display, brand) {
  this.displayValue = display
  this.brand = brand

  let calculated = function(expression){
    let output = eval(expression)
    this.displayValue = output

    updateDisplay(output)
  }

  let updateDisplay = function(value) {
    document.querySelector('.calc-result').innerText = value
  }

  this.enterValue = function(value){
    this.displayValue = this.displayValue === '0' ? '' : this.displayValue
    value = value === 'x' ? '*' : value

    if (value === '='){
      calculated(this.displayValue)
    } else {
      this.displayValue += value;
      updateDisplay(this.displayValue)
    }

  } 
}

let basicCalculator = new Calculator(calculatorDisplay, 'Casio')

let calculate = function(e){
  basicCalculator.enterValue(e.target.innerText)
}

Array.from(buttons).forEach(e => e.addEventListener('click', calculate))