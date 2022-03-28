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
        document.querySelector('.add').addEventListener('click', () => this.add())
        document.querySelector('.subtract').addEventListener('click', () => this.subtract())
        document.querySelector('.multiply').addEventListener('click', () => this.multiply())
        document.querySelector('.divide').addEventListener('click', () => this.divide())
        document.querySelector('.equal').addEventListener('click', () => this.equal())
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
    clearIfErrorText() {
        if (this.display.innerHTML.includes(this.errorMessage))
            this.clearDisplay()
    }
    // ----------------------------
    pressButton(number) {
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
    equal() {
        this.clearIfErrorText()
        try {
            flashDisplay(this.display, 'flash')
            // Eval is a bad idea, but it's fine for this project!
            this.display.innerHTML = eval(this.display.innerHTML)
        } catch (SyntaxError) {
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