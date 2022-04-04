
class Calculator {
    constructor(previousValueTextElement, displayValueTextElement) {
        this.previousValueTextElement = previousValueTextElement
        this.displayValueTextElement = displayValueTextElement
        this.clear() 
    }

    clear() {
        this.previousValue = ''
        this.displayValue = ''
        this.operation = undefined
    }

    appendNum (number) {
        this.displayValue = number
    }

    chooseOperation (operator) {

    }

    equals(){

    }

    compute(){

    }

    updateDisplay(){
        this.displayValueTextElement.innerText = this.displayValue
    }

}


const numberButton = document.querySelectorAll('[data-number')
const operationsButton = document.querySelectorAll('[data-operator')
const equalButton = document.querySelector('[data-equal')
const clearButton = document.querySelector('[data-clear')
const previousValueTextElement = document.querySelector('[data-previousvalue')
const displayValueTextElement = document.querySelector('[data-displayvalue')


const calculator = new Calculator (previousValueTextElement, displayValueTextElement)

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})