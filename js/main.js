const display = document.querySelector('.bigScreen')
const numberInput = document.querySelectorAll('.numberBtn')
const operationInput = document.querySelectorAll('.operationsBtn')
const equalBtn = document.querySelector('.equal')
const clearBtn = document.querySelector('.clearBtn')
equalBtn.addEventListener('click', equal)
clearBtn.addEventListener('click', clear)

numberInput.forEach(button => {
    button.addEventListener('click', function(event) {
        const value = event.target.value

        if (calculator.operationInput !== '' && calculator.firstInput !== '') {
            calculator.secondInput += value
        } else {
            calculator.firstInput += value
        }

        display.textContent += value
    })
})

operationInput.forEach(button => {
    button.addEventListener('click', function(event) {
        const value = event.target.value

        calculator.operationInput = value
        display.textContent += value
    })
})

function equal() {
    calculator.equal(calculator.firstInput, calculator.operationInput, calculator.secondInput)
}

function clear() {
    calculator.clear()
}

function Calculator() {
    this.firstInput = ''
    this.operationInput = ''
    this.secondInput = ''

    this.equal = function(number1, operator, number2) {
        if(operator === '+') {
            display.textContent = this.firstInput = Number(number1) + Number(number2)
            this.secondInput = ''
        } else if (operator === '-') {
            display.textContent = this.firstInput = Number(number1) - Number(number2)
            this.secondInput = ''
        } else if (operator === '*') {
            display.textContent = this.firstInput = Number(number1) * Number(number2)
            this.secondInput = ''
        } else if (operator === '/') {
            display.textContent = this.firstInput = Number(number1) / Number(number2)
            this.secondInput = ''
        }
    }

    this.clear = function() {
        display.textContent = this.firstInput = ''
        display.textContent = this.operationInput = ''
        display.textContent = this.secondInput = ''
    }

}

let calculator = new Calculator()

