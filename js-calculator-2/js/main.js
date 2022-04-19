/*
I spent a whole week trying tutorials and getting hints from discord and currently I can't get compute(), updateDisplay(), and possibly operate() functions to function properly! I am done with this (for the time being)
*/

class Calculator {
    constructor(prevOps, currentOp) {
        this.prevOps = prevOps
        this.currentOp = currentOp
    }

    clear() {
        this.currentOperand = 0
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    append(number) {
        if (number === '.' && this.currentOperand.includes('.'))
            return
        this.currentOperand === undefined ?
            this.currentOperand = number.toString() :
            this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    operate(operation) {
        this.operation = operation
        if (this.currentOperand !== '' && this.previousOperand !== '') {
            this.compute()
        }
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        if (isNaN(prev) || isNaN(current)) 
            return
        console.log(`BEFORE computation`)
        console.log(`this.previousOperand: ${this.previousOperand}`)
        console.log(`this.operation: ${this.operation}`)
        console.log(`this.currentOperand: ${this.currentOperand}`)
    
        switch(this.operation) {
            case '+':
                computation = prev + current
                console.log(prev, typeof(prev))
                console.log('plus')
                console.log(current, typeof(current))
                break;
            case '-':
                computation = prev - current
                console.log(prev, typeof(prev))
                console.log('minus')
                console.log(current, typeof(current))
                break;
            case 'x':
                computation = prev * current
                console.log(prev, typeof(prev))
                console.log('times')
                console.log(current, typeof(current))
                break;
            case '/':
                computation = prev / current
                console.log(prev, typeof(prev))
                console.log('divided by')
                console.log(current, typeof(current))
                break;
            default:
                console.log('wtf')
                return
        }

        this.currentOperand = parseFloat(computation)
        this.previousOperand = ''
        this.operation = undefined

        console.log(`AFTER computation`)
        console.log(`this.previousOperand: ${this.previousOperand}`)
        console.log(`this.operation: ${this.operation}`)
        console.log(`this.currentOperand: ${this.currentOperand}`)
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        // console.log(`stringNumber: ${stringNumber}`)
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = parseFloat(stringNumber.split('.')[1])
        // console.log(`integerDigits: ${integerDigits}`)
        // console.log(`decimalDigits: ${decimalDigits}`)
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        }
        else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (isNaN(decimalDigits)) {
            return integerDisplay
        }
        else {
            integerDisplay = `${integerDisplay}.${decimalDigits}`
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOp.value = this.getDisplayNumber(this.currentOperand)
        if (this.operation) {
            this.prevOps.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
            // console.log(this.prevOps.innerText)
        }
        else {
            this.prevOps.innerText = ''
        }
    }
}

const numButtons = document.querySelectorAll('[data-number]')
const opButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const prevOps = document.querySelector('[data-previous-op]')
const currentOp = document.querySelector('[data-current-op]')

const calculator = new Calculator(prevOps, currentOp)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.innerText)
        calculator.updateDisplay()
    })
})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operate(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

// const delButton = document.querySelector('[data-delete]')
// delButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
// })