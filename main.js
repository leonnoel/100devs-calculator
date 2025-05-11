
const keys = document.querySelector('.calculator-buttons')
keys.addEventListener('click', event => {
  const { target } = event
  const { value } = target
  if (!target.matches('button')) return

  calculator.parseInput(value)
})

const calculator = {
  displayText: '0',
  prevTotal: null,

  parseInput(value) {
    switch(value) {
      case '=':
        this.calcAnswer(this.displayText)
        break
      case 'AC':
        this.clearAll()
        break
      case '.':
        if (!this.displayText.includes('.')) {
          this.addText(value)
        }
        break
      default:
        this.addText(value)
        break
    }
  },

  addText(value) {
    if (this.displayText === '0' || this.prevTotal !== null) {
      this.displayText = ''
      this.prevTotal = null
    }

    const lastChar = this.displayText.slice(-1)

    // Avoid double operators like ++, --, ** etc
    if (isNaN(value) && isNaN(lastChar)) {
      return
    }

    this.displayText += value
    this.outputText(this.displayText)
  },

  outputText(text) {
    document.querySelector('.calculator-screen').value = text
  },

  calcAnswer(equation) {
    try {
      const result = Function("return " + equation)()
      this.displayText = String(result)
      this.prevTotal = result
      this.outputText(this.displayText)
    } catch {
      this.outputText('Error')
    }
  },

  clearAll() {
    this.displayText = '0'
    this.prevTotal = null
    this.outputText(this.displayText)
  }
}
