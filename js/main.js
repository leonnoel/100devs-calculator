const allButtons = document.querySelectorAll('.buttonCalc');
const numberButtons = document.querySelectorAll('.buttonNum');
const operatorButtons = document.querySelectorAll('.buttonOper');
const buttonEqual = document.getElementById('buttonEqual')
const buttonClear = document.getElementById('buttonClear')
const buttonDel = document.getElementById('buttonDel')

// First line in the display which shows the previous operand
const prevOperandText = document.querySelector('.operandPrev')
// Second line in the display which shows the current operand
const curOperandText = document.querySelector('.operandCur')

class Calculator {
    constructor(prevOperandText, curOperandText) {
        this.prevOperandText = prevOperandText;
        this.curOperandText = curOperandText;
        this.clear()
    }
    // Clears theh display and both operand variables
    clear() {
        this.operandCur = '';
        this.operandPrev = '';
        this.operation = undefined;
    }
    // Adds number to current operand string
    appendNum(number) {
        // Checks if the current operand has a decimal and if so, will not allow another decimal to be added
        if (number === '.' && this.curOperandText.innerText.includes('.')) return
        this.operandCur = this.operandCur.toString() + number.toString()
    }
    // Deletes last number appended to current operand string
    delete() {
        this.operandCur = this.operandCur.toString().slice(0, -1)
    }
    // Choose operation if current operand has a number in it (will not work if operandCur is blank)
    chooseOperation(operation) {
        if (this.operandCur === '') return
        if (this.operandCur !== '') {
            this.compute()
        }
        this.operation = operation
        // Moves current operand to prev operand spot in the display
        this.operandPrev = this.operandCur + operation
        this.operandCur = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.operandPrev)
        const curr = parseFloat(this.operandCur)

        if (isNaN(prev) || isNaN(curr)) return

        switch (this.operation) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '*':
                computation = prev * curr
                break
            case '/':
                computation = prev / curr
                break
            default:
                return
        }
        // Sets current operand to the result of the computation
        this.operandCur = computation
        // Resets the operation
        this.operation = undefined
        // Clears the previous operand
        this.operandPrev = ''
    }

    updateDisplay() {
        this.curOperandText.innerText = this.operandCur
        this.prevOperandText.innerText = this.operandPrev
    }
}

const calculator = new Calculator(prevOperandText, curOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

buttonEqual.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
buttonClear.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

buttonDel.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
