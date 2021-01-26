class Calculator {
  constructor(chainTextElement, resultTextElement){
    this.chainTextElement = chainTextElement
    this.resultTextElement = resultTextElement
    this.chain = ''
    this.result = ''
    this.operation = undefined
  }
  appendNumber(number){
    if (number === '.' && this.result.includes('.')) return
    this.result = this.result.toString() + number.toString()
  }

  chooseOperation(operation){
    if(this.result === '') return
    if(this.chain !== ''){
      this.compute()
    }
    this.operation = operation
    this.chain = this.result
    this.result = ''

  }

  compute(){
    let computation
    const cha = parseFloat(this.chain)
    const res = parseFloat(this.result)
    if(isNaN(cha) || isNaN(res)) return
    switch (this.operation){
      case '+':
        computation = cha + res
        break
      case 'x':
        computation = cha * res
        break
      case '-':
        computation = cha - res
        break
      case '/':
        computation = cha / res
        break
      default:
        return
    }
    if(!Number.isInteger(computation)){
      this.result = computation.toFixed(2)
    }else{
      this.result = computation
    }
    this.operation = undefined
    this.chain = ''
  }

  //getDisplayNumber was the hardest to understand
  getDisplayNumber(number) {
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

  updateDisplay(){
    this.resultTextElement.innerText = this.getDisplayNumber(this.result)
    if(this.operation != null){
      this.chainTextElement.innerText = `${this.getDisplayNumber(this.chain)} ${this.operation}`
    }else{
      this.chainTextElement.innerText = ''
    }

  }
}


const numberButtons = document.querySelectorAll('.num')
const operationButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')
const chainTextElement = document.querySelector('#chain')
const resultTextElement = document.querySelector('#result')

const calculator = new Calculator(chainTextElement,resultTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click' , button => {
  calculator.compute()
  calculator.updateDisplay()
})
