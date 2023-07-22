class Calculator {
    constructor(prevOperandTextElement, currOperandTextElement){
        this.prevOperandTextElement = prevOperandTextElement
        this.currOperandTextElement = currOperandTextElement
        this.clear()
    }

    clear() {
        this.currOperand = ""
        this.prevOperand = ""
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currOperand = number
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currOperandTextElement.innerText = this.currOperand
    }
}

// Buttons
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
// Text Elements
const prevOperandTextElement = document.querySelector('[data-prev-operand]')
const currOperandTextElement = document.querySelector('[data-curr-operand]')

const calculator = new Calculator(prevOperandTextElement, currOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})