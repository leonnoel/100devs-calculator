class Calculator {
  constructor(previousText, currentText) {
    this.previousText = previousText // place to see previous
    this.currentText = currentText // place to see current
    this.clear()
  }
  clear() {
    this.previous = ''
    this.current = ''
    this.operation = undefined
    this.armed = false
  }

  arm() {
    this.armed = true
  }

  delete() {
    this.current = this.current.toString().slice(0, -1)
  }

  appendNum(number) {
    if (number === '.' && this.current.includes('.')) return // only one . allowed
    if (this.armed) {
      this.current = ''
      this.armed = false
    }
    this.current = this.current.toString() + number.toString() 
  }

  chooseOperator(operation) {
    if (this.current === '') return // num comes first
    if (this.previous !== '') {
      this.calc() // full send
    }
    this.operation = operation
    this.previous = this.current
    this.current = ''
    this.armed = false
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

  getDisplayNum(num) {
    const strNum = num.toString()
    const intDigits = parseFloat(strNum.split('.')[0])
    const decDigits = strNum.split('.')[1]
    let intDisplay
    if (isNaN(intDigits)) {
      intDisplay = ''
    } else {
      intDisplay = intDigits.toLocaleString('en', {
        maximumFractionDigits: 0
      })
    }
    if (decDigits != null) {
      return `${intDisplay}.${decDigits}`
    } else {
      return intDisplay
    }
  }

  updateDisplay() {
    this.currentText.innerText = this.getDisplayNum(this.current)
    if (this.operation != null) {
      this.previousText.innerText = `${this.getDisplayNum(this.previous)}${this.operation}`
    } else {
      this.previousText.innerText = ''
    }
  }
}

const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equals]')
const clearBtn = document.querySelector('[data-all-clear]')
const del = document.querySelector('[data-delete]')
const previousText = document.querySelector('[data-previous-operand]')
const currentText = document.querySelector('[data-current-operand]')

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
  calculator.arm()
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