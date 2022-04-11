//Create the calculator constructor
class Calculator {
  constructor(previousElement, currentElement) {
    this.previousElement = previousElement
    this.currentElement = currentElement
    this.clear()
  }
  //clearing and initializing calculator
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  //Input numbers. make sure only one dot can be included
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')){
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  //Input operators
  chooseOperation(operation) {
    if (this.currentOperand === ''){
      return;
    }
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  //Calculating 
  compute() {
    let computation;
    let prev = parseFloat(this.previousOperand)
    let current = parseFloat(this.currentOperand)
    if (prev !== Number(prev) || current !== Number(current)){
      return;
    }
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case 'x':
        computation = prev * current
        break
      case '/':
        computation = prev / current
        break
      default:
        return;
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  
  displayNumber(number) {
    let stringNumber = number.toString()
    let integerDigits = parseFloat(stringNumber.split('.')[0])
    let decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentElement.innerText = this.displayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousElement.innerText = `${this.displayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousElement.innerText = ''
    }
  }
}


//defining buttons
let numbers = document.querySelectorAll(".number");
let operate = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let currentElement = document.querySelector(".current");
let previousElement = document.querySelector(".previous")

//assign eventlistener to all the number buttons
numbers.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

//assign eventlistener to all the operand buttons
operate.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

//assign eventlistener to equals button to sum
equals.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

//create new calculator from Calculator object
let calculator = new Calculator(previousElement, currentElement)