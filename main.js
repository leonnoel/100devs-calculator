function MakeCalculator(previousOperandTextElement, currentOperandTextElement){
  
    this.currentOperandTextElement = currentOperandTextElement
  
  this.previousOperandTextElement = previousOperandTextElement
  
  this.appendNumber = function(number){
      if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  this.operation = function(operation){
      if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute
        } 
      this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

  }
  this.compute = function(){
        let computation 
        const prev = parseFLoat(this.previousOperand)
        const current = parseFLoat(this.currentOperand)
        if (isNaN(prev) || isNaN(current) ) return 
          //finish the switch statements  
           switch (this.operation){
               case '+' : computation = prev + current
               break
               case '-': computation = prev - current
               break
               case '*': computation = prev * current 
               break
               case '/': compute = prev / current 
               break
               default : return

           }  
           this.currentOperand = computation
           this.operation = undefined 
           this.previousOPerand = ''
  }
  this.updateDisplay = function(){
        this.currentOPerandText
  }
}


const numberButtons = document.querySelectorAll('.number')
const operandButtons = document.querySelectorAll('.operand')
const display = document.querySelector('.output')
const add = document.querySelector('.add')
const equalButton = document.querySelector('.equal')
const previousOperandTextElement = document.querySelector('.previousOperand')
const currentOperandTextElement = document.querySelector('.currentOperand')

const calculator = new MakeCalculator(previousOperandTextElement,currentOperandTextElement)
console.log(calculator)
numberButtons.forEach(button=> {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updatedisplay()
    })
})
operandButtons.forEach(button=> {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updatedisplay()
    })
})
equalButton.addEventListener('click', button => {
    calculator.compute() 
    calculator.updateDisplay()

} )