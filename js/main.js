
class Calculator {
    constructor(previousValueTextElement, displayValueTextElement) {
        this.previousValueTextElement = previousValueTextElement
        this.displayValueTextElement = displayValueTextElement
        this.clear() 
    }

    clear() {
        //clears out the calculator
        this.displayValue = ''
        this.previousValue = ''
        this.operation = undefined
    }

    appendNum (number) {
        //if type period key and we already have a period key, stop function from executing
        if (number === '.' && this.displayValue.includes('.')) return
        this.displayValue = this.displayValue.toString() + number.toString()
    }

    chooseOperation (operation) {
        //make sure that you can't choose an operator if the displayValue is empty
        if (this.displayValue === '') return
        if (this.previousValue !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousValue = this.displayValue
        this.displayValue = ''
    }

    compute(){
        //create variable that is the result of compute function
        let computation
        // actual number of previousValue
        const previous = parseFloat(this.previousValue)
        // actual number of currentValue
        const current = parseFloat(this.displayValue)
        // check if there is not a number at all
        if (isNaN(previous) || isNaN(current)) return
        switch (this.operation) {
            case '+': computation  = previous + current
            break
            case '-': computation  = previous - current
            break
            case '*': computation  = previous * current
            break
            case '÷': computation  = previous / current
            break
            // if none of the operations match we have invalid operation and end the function
            default: return
        }
        this.displayValue = computation // result of computation
        this.operation = undefined
        this.previousValue = ''
    }

    updateDisplay(){
        this.displayValueTextElement.innerText = this.displayValue
        this.previousValueTextElement.innerText = this.previousValue
    }

}


const numberButton = document.querySelectorAll('[data-number]')
const operationsButton = document.querySelectorAll('[data-operator]')
const equalButton = document.querySelector('[data-equal]')
const clearButton = document.querySelector('[data-clear]')
const previousValueTextElement = document.querySelector('[data-previousvalue]')
const displayValueTextElement = document.querySelector('[data-displayvalue]')


const calculator = new Calculator (previousValueTextElement, displayValueTextElement)


// What happens when we click on a numberButton
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})

// What happens when we click on a operationsButton
operationsButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

// How do we compute?

equalButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})

// Implement the clear function
clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})