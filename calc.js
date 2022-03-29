// ------------------------------------------------------------
class Calculator {
    // ----------------------------
    constructor() {
        this.display = document.querySelector('.display')
        this.errorMessage = 'wat'
    }
    // ----------------------------
    setupButtonEvents() {
        document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', () => this.displayLengthCheck())
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
        document.querySelector('.equal').addEventListener('click', () => this.evaluate())
        document.querySelector('.decimal').addEventListener('click', () => this.pressButton('.'))
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
    evaluate() {
        this.clearErrorText()
        try {
            flashDisplay(this.display, 'flash')
            // Eval is a bad idea, but it's fine for this project!
            this.display.innerHTML = eval(this.display.innerHTML).toFixed(2)
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