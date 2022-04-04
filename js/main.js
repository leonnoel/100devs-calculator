class Calculator {
  constructor(previousText, currentText) {
    this.previousText = previousText
    this.currentText = currentText
    this.clear()
  }
  clear() {
    this.previous = ''
    this.current = ''
    this.operation = undefined
  }

  delete() {
    this.current = this.current.toString().slice(0, -1)

  }

  appendNum(number) {
    if (number === '.' && this.current.includes('.')) return
    this.current = this.current.toString() + number.toString() 
  }

  chooseOperator(operation) {
    if (this.current === '') return
    if (this.previous !== '') {
      this.calc()
    }
    this.operation = operation
    this.previous = this.current
    this.current = ''
  }

  calc() {
    let calculated 
    const prev = parseFloat(this.previous)
    const crnt = parseFloat(this.current)
    if (isNaN(prev)|| isNaN(crnt)) return
    switch (this.operation) {
      case '+':
        calculated = prev + crnt
        break
      case '-':
        calculated = prev - crnt
        break
      case 'x':
        calculated = prev * crnt
        break
      case '/':
        calculated = prev / crnt
        break
      default: return
    }
    this.current = calculated
    this.operation = undefined
    this.previous = ''
  }

  updateDisplay() {
    this.currentText.innerText = this.current
    this.previousText.innerText = this.previous
  }
}

const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equals]')
const clearBtn = document.querySelector('[data-all-clear]')
const previousText = document.querySelector('[data-previous-operand]')
const currentText = document.querySelector('[data-current-operand]')
const del = document.querySelector('[data-delete]')

const calculator = new Calculator(previousText, currentText)

numbers.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNum(button.innerText)
    calculator.updateDisplay()
    console.log(button.innerText)
  })
})

operations.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperator(button.innerText)
    calculator.updateDisplay()
    console.log(button.innerText)
  })
})

equals.addEventListener('click', _ => {
  calculator.calc()
  calculator.updateDisplay()
})

clearBtn.addEventListener('click', _ => {
  calculator.clear()
  calculator.updateDisplay()
})

del.addEventListener('click', _ => {
  calculator.delete()
  calculator.updateDisplay()
})