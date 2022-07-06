class Calculator{
    constructor(previousButton, currentButton){
        this.previousButton = previousButton
        this.currentButton = currentButton
        this.clear()
    }

    clear(){
        this.currentOperand = ' '
        this.previousOperand = ' '
        this.operation = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }


//adding .toString() so that js will actually add the numbers, but we want to append them (display them on the screen)

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return //prevents decimals being used more than once 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentOperand === " ") return 
        if (this.previousOperand !== " "){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ' '
    }

    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current =  parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return 
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current 
                break 
            case '*':
                computation = prev * current 
                break 
            case '/':
                computation = prev / current
                break
            default: 
            return
        }
        this.currentOperand = computation 
        this.operation = undefined 
        this.previousOperand = " "
    }




    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits= parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ' '
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0 })
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }

    updateDisplay(){
        this.currentButton.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousButton.innerText = `${this.getDisplayNumber(this.previousOperand)}${this.operation}`
        }else{
            this.previousButton.innerText = ' '
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document. querySelector('[data-equals]')
const deleteButton = document. querySelector('[data-delete]')
const clearButton = document. querySelector('[data-all-clear]')
const previousButton = document. querySelector('[data-previous-operand]')
const currentButton = document. querySelector('[data-current-operand]')


const calculator = new Calculator(previousButton, currentButton)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
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

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})