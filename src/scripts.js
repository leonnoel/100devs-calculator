function Calculator() {
  this.temp = 0;
  this.num1 = 0;
  this.num2 = 0;
  this.operator = null;

  this.appendNumber = function(number){
    this.temp == 0 ? this.temp = number : this.temp = this.temp.toString()+number.toString()
  }

  this.appendDecimal = function(){
    if(!this.temp.includes('.')){
      this.temp = this.temp.toString()+'.'
    }
  }

  this.chooseOperation = function(operation){
    this.operator = operation
  }

  this.calculate = function(){
    switch(this.operator){
      case '+':
        return Number(this.num1) + Number(this.num2)
      case '-':
        return this.num1 - this.num2
      case '*':
        return this.num1 * this.num2
      case '/':
        return this.num1 / this.num2
    }
  }

  this.updateDisplay = function(){
    document.querySelector('#display').innerText = this.temp
  }
}

const calculator = new Calculator();

const numberButtons = document.querySelectorAll('.numberButton')
numberButtons.forEach(b => b.addEventListener('click', e => {
  calculator.appendNumber(e.target.innerText);
  calculator.updateDisplay()
}))

const operatorButtons = document.querySelectorAll('.operatorButton')
operatorButtons.forEach(b => b.addEventListener('click', e => {
  if (calculator.num1){
    calculator.num2 = calculator.temp
    calculator.temp = calculator.calculate()
    calculator.updateDisplay()
    calculator.chooseOperation(e.target.innerText)
    calculator.num1 = calculator.temp
    calculator.temp = 0
  } else {
    calculator.chooseOperation(e.target.innerText)
    calculator.num1 = calculator.temp
    calculator.temp = 0
  }
}))

const decimalButton = document.querySelector('#decimal').addEventListener('click', e => {
  calculator.appendDecimal();
  calculator.updateDisplay();
})

const equalButton = document.querySelector('#equal').addEventListener('click', e => {
  if (calculator.operator){
    calculator.num2 = calculator.temp
    calculator.temp = calculator.calculate()
    calculator.updateDisplay()
    calculator.num1 = 0
    calculator.num2 = 0
    calculator.operator = null;
  }
})