const numberButtons = document.querySelectorAll('#number')
const operatorButtons = document.querySelectorAll('#operator')
const equalButton = document.querySelector('#equals')
const topDisplay = document.querySelector('#previous')
const bottomDisplay = document.querySelector('#current')
const clearButton = document.querySelector('#clear')
const deleteButton = document.querySelector('#delete')

class Calculator {
    constructor(topDisplay, bottomDisplay) {
        this.topDisplay = topDisplay
        this.bottomDisplay = bottomDisplay
        this.previous = ''
        this.current = ''
        this.operator = ''
    }

    storeOperation() {
        this.topDisplay.innerText = this.bottomDisplay.innerText = `${this.previous} ${this.operator} ${this.current}`
    }

    addDigits(number) {
        if(number === '.' && this.current.includes('.')) return
        this.current = this.current + number.toString()
    }

    addOperator(operator) {
        if(this.current === '') return
        if(this.previous !== '') {
            this.calculate()
        }
        this.operator = operator
        this.previous = this.current
        this.current = ''
    }

    calculate() {
        let result
        let previous = Number(this.previous)
        let current = Number(this.current)
    
        switch (this.operator) {
            case '%':
                result = previous % current
                break;
            case '+':
                result = previous + current
                break;
            case '-':
                result = previous - current
                break;
            case '*':
                result = previous * current
                break;
            case '/':
                if(current === 0) {
                    result = "Divide by 0 error"
                } else {
                result = previous / current
                }
                break;
            default:
                return
        }
        calculator.storeOperation()
        this.current = result
        this.operator = undefined 
    }

    updateDisplay() {
        this.bottomDisplay.innerText = this.current
        if (this.operator != null) {
            this.bottomDisplay.innerText = `${this.previous} ${this.operator} ${this.current}`
        } 
    }

    clear() {
        this.current = ''
        this.previous = ''
        this.operator = undefined
        this.bottomDisplay.innerText = ''
        this.topDisplay.innerText = ''
    }

    delete() {
        this.current = this.current.toString().slice(0,-1)
    }
}

const calculator = new Calculator(topDisplay, bottomDisplay)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addDigits(button.innerText)
        calculator.updateDisplay()
        console.log(button.innerText)
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addOperator(button.innerText)
        calculator.updateDisplay()
        console.log(button.innerText)
    })
})

equalButton.addEventListener('click', button => {
    calculator.calculate()
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