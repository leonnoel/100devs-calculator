
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
  
    this.currentOperandTextElement= currentOperandTextElement
  
  this.previousOperandTextElement = previousOperandTextElement

  this.clear()
}
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
        console.log('this.currentOperand', this.currentOperand)
    }
  
  chooseOperation(operation){
      console.log(operation)
      if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute()
        } 
      this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

  }
  compute(){
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return 
          //finish the switch statements  
           switch (this.operation){
               case '+' : computation = prev + current
               break
               case '-': computation = prev - current
               break
               case '*': computation = prev * current 
               break
               case '/': computation = prev / current 
               break
               default : return

           }  
           this.currentOperand = computation
           this.operation = undefined 
           this.previousOperand = ''
  }
    getDisplayNumber(number){
      const stringNumber = number.toString()
      const integerDigits = stringNumber.split('.')[0]
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay 
      if (isNaN(integerDigits)){
          integerDisplay = ''
      } else {
          integerDisplay = integerDigits
      } 
      if (decimalDigits != null){
          return `${integerDisplay}.${decimalDigits}`
      }else {
          return integerDisplay
      }


      
  }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null){
            this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else {
            this.previousOperandTextElement.innerText = ''
        }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const display = document.querySelector('.output')
const add = document.querySelector('.add')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button=> {
    button.addEventListener('click', () => {
        console.log('button.innerText', button.innerText)
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button=> {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButton.addEventListener( 'click', button => {
    calculator.updateDisplay()

} )