// ------------------------------------------------------------
class Calculator {
    // ----------------------------
    constructor() {
        this.display = document.querySelector('.display')
        this.errorMessage = 'wat'
        this.disableEvaluation = false
        this.result = 0

        this.allButtons = document.querySelectorAll('.button')
        this.numberButtons = document.querySelectorAll('.number')
        this.buttonClear = document.querySelector('.clear')
        this.buttonUndo = document.querySelector('.undo')
        this.buttonAdd = document.querySelector('.add')
        this.buttonSubtract = document.querySelector('.subtract')
        this.buttonMultiply = document.querySelector('.multiply')
        this.buttonDivide = document.querySelector('.divide')
        this.buttonDecimal = document.querySelector('.decimal')
        this.buttonEqual = document.querySelector('.equal')
    }
    // ----------------------------
    setupButtonEvents() {
        this.allButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.displayLengthCheck()
                // Delay invalid input check to allow for innerHTML to update.
                setTimeout(this.invalidInputCheck.bind(this), 20)
            })
        })
        this.numberButtons.forEach(number => {
            number.addEventListener('click', () => this.pressButton(number.innerHTML))
        })
        this.buttonClear.addEventListener('click', () => this.clearDisplay())
        this.buttonUndo.addEventListener('click', () => this.undo())
        this.buttonAdd.addEventListener('click', () => this.add())
        this.buttonSubtract.addEventListener('click', () => this.subtract())
        this.buttonMultiply.addEventListener('click', () => this.multiply())
        this.buttonDivide.addEventListener('click', () => this.divide())
        this.buttonDecimal.addEventListener('click', () => this.pressButton('.'))
        this.buttonEqual.addEventListener('click', () => {
            if (!this.disableEvaluation)
                this.evaluate()
        })
    }
    // ----------------------------
    displayLengthCheck() {
        this.display.innerHTML.length > 9 ?
            this.display.classList.add('too-long') :
            this.clearErrorStyles()
    }
    clearDisplay() {
        this.display.innerHTML = '0'
        flashDisplay(this.display, 'cancel')
        this.clearErrorStyles()
    }
    clearErrorStyles() {
        this.display.classList.remove('error', 'too-long')
        this.buttonEqual.classList.remove('error')
    }
    clearErrorText() {
        if (this.display.innerHTML.includes(this.errorMessage))
            this.clearDisplay()
    }
    undo() {
        this.clearErrorText()
        // Check if display is zeroed out first, so we don't also delete the default 0.
        this.display.innerHTML.length > 1 ?
            this.display.innerHTML = this.display.innerHTML.slice(0, -1) :
            this.clearDisplay()
        flashDisplay(this.display, 'cancel')
    }
    // ----------------------------
    pressButton(number) {
        // Check for zeroed out display, so we don't have leading zeros when adding numbers.
        this.display.innerHTML = this.display.innerHTML === '0' ? number : this.display.innerHTML + number
    }
    add() {
        this.display.innerHTML += '+'
    }
    subtract() {
        this.display.innerHTML += '-'
    }
    multiply() {
        this.display.innerHTML += '*'
    }
    divide() {
        this.display.innerHTML += '/'
    }
    removeTrailingZeros() {
        // Ensures we don't end up with "5.00" instead of "5", for example.
        if (this.result.endsWith('.00'))
                this.result = this.result.slice(0, -3)
        // Ensures we don't end up with "5.50" instead of "5.5", for example.
        if (this.result.includes('.') && this.result.endsWith('0'))
            this.result = this.result.slice(0, -1)
    }
    invalidInputCheck() {
        try {
            eval(this.display.innerHTML)
            this.disableEvaluation = false
        } catch (SyntaxError) {
            this.display.classList.add('error')
            this.buttonEqual.classList.add('error')
            this.disableEvaluation = true
        }
    }
    evaluate() {
        this.clearErrorText()
        try {
            flashDisplay(this.display, 'flash')
            // Eval is a bad idea, but it's fine for this project!
            this.result = eval(this.display.innerHTML).toFixed(2)
            this.removeTrailingZeros()
            this.display.innerHTML = this.result
        } catch (SyntaxError) {
            // Since the display line is evaluated with eval(),
            // we should give feedback if the input was completely invalid. Eg: "2+4++".
            flashDisplay(this.display, 'cancel')
            this.display.classList.add('error')
            this.display.innerHTML = this.errorMessage
        }
    }
}

// ------------------------------------------------------------
function flashDisplay(element, className = 'flash') {
    element.classList.add(className)
    setTimeout(() => {
        element.classList.remove(className)
    }, 20)
}

// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator()
    calculator.clearDisplay()
    calculator.setupButtonEvents()
})