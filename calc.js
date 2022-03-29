// ------------------------------------------------------------
class Calculator {
    // ----------------------------
    constructor() {
        this.display = document.querySelector('.display')
        this.equalButton = document.querySelector('.equal')
        this.errorMessage = 'wat'
        this.disableEvaluation = false
        this.result = 0
    }
    // ----------------------------
    setupButtonEvents() {
        document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', () => {
                this.displayLengthCheck()
                // Delay invalid input check to allow for innerHTML to update.
                setTimeout(this.invalidInputCheck.bind(this), 20)
            })
        })
        document.querySelectorAll('.number').forEach(number => {
            number.addEventListener('click', () => this.pressButton(number.innerHTML))
        })
        document.querySelector('.clear').addEventListener('click', () => this.clearDisplay())
        document.querySelector('.backspace').addEventListener('click', () => this.backspace())
        document.querySelector('.add').addEventListener('click', () => this.add())
        document.querySelector('.subtract').addEventListener('click', () => this.subtract())
        document.querySelector('.multiply').addEventListener('click', () => this.multiply())
        document.querySelector('.divide').addEventListener('click', () => this.divide())
        document.querySelector('.decimal').addEventListener('click', () => this.pressButton('.'))
        this.equalButton.addEventListener('click', () => {
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
        this.display.classList.remove('error')
        this.display.classList.remove('too-long')
        this.equalButton.classList.remove('error')
    }
    clearErrorText() {
        if (this.display.innerHTML.includes(this.errorMessage))
            this.clearDisplay()
    }
    backspace() {
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
            this.equalButton.classList.add('error')
            this.disableEvaluation = true
        }
    }
    evaluate() {
        if (!this.disableEvaluation) {
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