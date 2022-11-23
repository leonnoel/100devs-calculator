function Calculator() {
    this.result = 0;
    this.firstValue = 0;
    this.secondValue = 0;
    this.currentOperator = '';

    this.operation = function() {
        if (this.currentOperator === '/') {
            this.result = this.firstValue / this.secondValue
        } else if (this.currentOperator === 'x') {
            this.result = this.firstValue * this.secondValue
        } else if (this.currentOperator === '+') {
            this.result = this.firstValue + this.secondValue
        } else if (this.currentOperator === '-') {
            this.result = this.firstValue - this.secondValue
        }
    };
}

let calculator = new Calculator()


const display = document.querySelector('.display')
const numbers = document.querySelectorAll('.button-number')
const operators = document.querySelectorAll('.button-operation')
const equals = document.querySelector('#equals')


//number entry
numbers.forEach(num => {
    num.addEventListener('click', (doIt) => {
        if ((display.innerHTML.includes('.')) && (doIt.target.value == '.')) {
            display.innerHTML = display.innerHTML
        } else if (display.innerHTML.length == 11) {
            display.innerHTML = display.innerHTML
        } else if (display.innerHTML == calculator.currentOperator) {
            display.innerHTML = '' + doIt.target.value
        } else {
            display.innerHTML = display.innerHTML += doIt.target.value
        }
    })
})

//choosing an operator
operators.forEach(op => {
    op.addEventListener('click', (operate) => {
        if(operate.target.value == 'AC') {
            display.innerHTML = ''
        } else {
            calculator.firstValue = +display.innerHTML;
            calculator.currentOperator = operate.target.value;
            display.innerHTML = '' + operate.target.value;
        }
    })
})

//calculation
equals.addEventListener('click', (finishIt) => {
    calculator.secondValue = +display.innerHTML
    calculator.operation()
    let answer = roundAccurately(calculator.result, 3)
    if (String(answer).length > 11) {
        display.innerHTML = 'num too big'
    } else {
        display.innerHTML = answer
    }
})


//rounding function
const roundAccurately = (number, decimalPlaces) => {
    Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces)
}