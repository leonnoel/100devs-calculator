class Calculator {
    constructor(previousEntryTextElement, currentEntryTextElement) {
      this.previousEntryTextElement = previousEntryTextElement
      this.currentEntryTextElement = currentEntryTextElement
    }
    addNumber(number) {
      if (number === '.' && this.currentEntry.includes('.')) return
      this.currentEntry = this.currentEntry.toString() + number.toString()
    }
  
    chooseMathmaticSymbol(symbol) {
      if (this.currentEntry === '') return
      if (this.previousEntry !== '') {
        this.calculate()
      }
      this.symbol = symbol
      this.previousEntry = this.currentEntry
      this.currentEntry = ''
    }
  
    calculate() {
      let total
      const prev = parseFloat(this.previousEntry)
      const current = parseFloat(this.currentEntry)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.symbol) {
        case '/':
          total = prev / current
          break
        case 'x':
          total = prev * current
          break
        case '+':
          total = prev + current
          break
        case '-':
          total = prev - current
          break
        default:
          return
      }
      this.currentEntry = total
      this.symbol = undefined
      this.previousEntry = ''
    }
  
    doesTheMath(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
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
  
    showsTheMath() {
      this.currentEntryTextElement.innerText =
        this.doesTheMath(this.currentEntry)
      if (this.symbol != null) {
        this.previousEntryTextElement.innerText =
          `${this.doesTheMath(this.previousEntry)} ${this.symbol}`
      } else {
        this.previousEntryTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const symbolButtons = document.querySelectorAll('[data-symbol]')
  const equalsButton = document.querySelector('[data-equals]')
  const previousEntryTextElement = document.querySelector('[data-previous-entry]')
  const currentEntryTextElement = document.querySelector('[data-current-entry]')
  
  const calculator = new Calculator(previousEntryTextElement, currentEntryTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.addNumber(button.innerText)
      calculator.showsTheMath()
    })
  })
  
  symbolButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseMathmaticSymbol(button.innerText)
      calculator.showsTheMath()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.calculate()
    calculator.showsTheMath()
  })