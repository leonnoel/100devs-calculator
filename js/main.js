
//Set up eventlistener for clicking buttons 
let previousOperandTextElement = document.querySelector('.previous')
let currentOperandTextElement = document.querySelector('.current')
let numberButtons = document.querySelectorAll('[data-number]')
let operatorButtons = document.querySelectorAll('[data-operation]')
let equalButton = document.querySelector('[data-equals]')

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.appendNumbers(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

class Calculator {
    constructor(previousScreen, currentScreen){
        this.previousScreen = previousScreen
        this.currentScreen = currentScreen
        this.clear()
    }
    //make numbers appear on the screen
    updateDisplay(){
        this.currentScreen.innerText = this.currentOperand
        this.previousScreen.innerText = this.previousOperand
    }
    //screen starts with no numbers nor operators
    clear(){
        this.previousOperand = ''
        this.currentOperand = ''
    }
    //enter numbers 
    appendNumbers(numbers){
        //prevent user from entering more than 1 dot
        if ( numbers === '.' && this.currentOperand.includes('.')) return 
        this.currentOperand += numbers.toString()
    }
    //enter operators
    chooseOperation(operators){
        this.operators = operators
        //if operator entered without a number, number = 0  
        if (this.currentOperand === '' && this.previousOperand === '') {
            this.previousOperand = 0 + operators
            return}
        //after number entered, clicking operator will move current number to previous number area 
        if (this.currentOperand !== '' && this.previousOperand === ''){
            this.previousOperand = this.currentOperand + ` ${operators}`
            this.currentOperand = ''
            return 
        }
        //let user change the operator
        if (this.currentOperand === '' && this.previousOperand !== ''){
            this.previousOperand = parseFloat(this.previousOperand) + `${operators}`
            return
        }
        //click operator will compute previous number with current number
        if (this.previousOperand !== '' && this.currentOperand !== ''){
            this.preliminaryCompute(operators)
        }
    }
    preliminaryCompute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (this.previousOperand.endsWith('+')){
            computation = prev + current
        } else if (this.previousOperand.endsWith('-')) {
            computation = prev - current
        } else if (this.previousOperand.endsWith('X')) {
            computation = prev * current
        } else if (this.previousOperand.endsWith('/')) {
            computation = prev / current
        }
        this.previousOperand = computation + ` ${this.operators}`
        this.currentOperand = ''
        return 
    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        //not allowing user to click = before entering numbers
        if (isNaN(prev) || isNaN(current)) return 
        if (this.previousOperand.endsWith('+')){
            computation = prev + current
        } else if (this.previousOperand.endsWith('-')) {
            computation = prev - current
        } else if (this.previousOperand.endsWith('X')) {
            computation = prev * current
        } else if (this.previousOperand.endsWith('/')) {
            computation = prev / current
        }
        this.currentOperand = computation
        this.previousOperand = ''
        return 
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

