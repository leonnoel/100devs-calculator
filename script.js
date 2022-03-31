class Calculator {
  constructor(previousOperandTextElememt, currentOperandTextElememt) {
    this.previousOperandTextElememt = previousOperandTextElememt
    this.currentOperandTextElememt = currentOperandTextElememt
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  addNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
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
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  updateDisplay() {
    this.currentOperandTextElememt.innerText = this.currentOperand
    this.previousOperandTextElememt.innerText = this.previousOperand
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElememt = document.querySelector('[data-prev-operand]')
const currentOperandTextElememt = document.querySelector('[data-curr-operand]')

const calculator = new Calculator(
  previousOperandTextElememt,
  currentOperandTextElememt
)

numberButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.addNumber(btn.innerText)
    calculator.updateDisplay()
  })
})
operationButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', (btn) => {
  calculator.compute()
  calculator.updateDisplay()
})
