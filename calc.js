// ------------------------------------------------------------
class Calculator {
    // ----------------------------
    // Private properties.
    #allButtons
    #numberButtons
    #operationButtons

    #buttonUndo
    #buttonAdd
    #buttonSubtract
    #buttonMultiply
    #buttonDivide
    #buttonDecimal
    #buttonEqual
    #buttonModulo
    #buttonClear

    #display
    #displayText

    #enableEvaluation
    #defaultDisplayFontSize
    #displayTextGap
    // ----------------------------
    // Public properties.
    errorMessage
    result

    // ----------------------------
    constructor() {
        this.#allButtons = document.querySelectorAll('.button')
        this.#numberButtons = document.querySelectorAll('.number')

        this.#buttonClear = document.querySelector('.clear')
        this.#buttonUndo = document.querySelector('.undo')
        this.#buttonAdd = document.querySelector('.add')
        this.#buttonSubtract = document.querySelector('.subtract')
        this.#buttonMultiply = document.querySelector('.multiply')
        this.#buttonDivide = document.querySelector('.divide')
        this.#buttonDecimal = document.querySelector('.decimal')
        this.#buttonEqual = document.querySelector('.equal')
        this.#buttonModulo = document.querySelector('.modulo')

        this.#operationButtons = [
            this.#buttonAdd,
            this.#buttonSubtract,
            this.#buttonMultiply,
            this.#buttonDivide,
            this.#buttonDecimal,
            this.#buttonModulo
        ]

        this.#enableEvaluation = true
        this.#display = document.querySelector('.display')
        this.#displayText = this.#display.querySelector('.display-text')
        this.#defaultDisplayFontSize = getComputedStyle(this.#displayText).fontSize
        this.#displayTextGap = 0

        this.errorMessage = 'wat'
        this.result = 0
        this.textGapTolerance = 10
        this.displayGapPadding = 60
        this.#setupButtonEvents()
    }
    // ----------------------------
    // Private methods.
    #setupButtonEvents() {
        this.#allButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.#displayTextLengthAdjust()
                // Delay invalid input check to allow for innerHTML to update.
                setTimeout(this.invalidInputCheck.bind(this), 20)
                applyAnimationClass(button, 'pressed', 100)
            })
        })
        this.#numberButtons.forEach(number => {
            number.addEventListener('click', () => this.pressButton(number.innerHTML))
        })
        for (const operation of this.#operationButtons) {
            operation.addEventListener('click', () => this.pressButton(operation.innerHTML))
        }
        this.#buttonClear.addEventListener('click', () => this.clearDisplay())
        this.#buttonUndo.addEventListener('click', () => this.undo())
        this.#buttonEqual.addEventListener('click', () => {
            if (this.#enableEvaluation)
                this.evaluate()
        })
    }
    // This will adjust the font size to keep the text within the display.
    #displayTextLengthAdjust() {
        this.getDisplayTextGap()

        while (!this.gapWithinTolerance()) {
            const fontSize = parseInt(getComputedStyle(this.#displayText).fontSize)

            if (this.#displayTextGap > this.textGapTolerance) {
                this.#displayText.style.fontSize = `${fontSize + 1}px`

            } else if (this.#displayTextGap < -this.textGapTolerance) {
                this.#displayText.style.fontSize = `${fontSize - 1}px`
            }
            this.getDisplayTextGap()
        }
    }
    // Get the gap between the display text and the display in pixels. Return number.
    getDisplayTextGap() {
        this.#displayTextGap = (this.#display.offsetWidth - this.displayGapPadding) - this.#displayText.offsetWidth
    }
    // Check if the gap between the display text and the display is within tolerance before adjusting font size.
    // Return boolean.
    gapWithinTolerance() {
        if (this.#displayText.innerHTML.length > 8)
            return this.#displayTextGap <= this.textGapTolerance && this.#displayTextGap >= -this.textGapTolerance
        else
            return true
    }

    // ----------------------------
    // Public methods.

    // Helpers.

    // Remove error-related css classes from display and evaluate button.
    clearErrorStyles() {
        this.#display.classList.remove('error', 'too-long')
        this.#buttonEqual.classList.remove('error')
    }
    // Remove error text if present.
    clearErrorText() {
        if (this.#displayText.innerHTML.includes(this.errorMessage))
            this.clearDisplay()
    }
    // Remove trailing zeros from the display text.
    removeTrailingZeros() {
        // Ensures we don't end up with "5.00" instead of "5", for example.
        if (this.result.endsWith('.00'))
            this.result = this.result.slice(0, -3)
        // Ensures we don't end up with "5.50" instead of "5.5", for example.
        if (this.result.includes('.') && this.result.endsWith('0'))
            this.result = this.result.slice(0, -1)
    }
    // If present text cannot be evaluated, fade out display text and disable evalulate button.
    invalidInputCheck() {
        try {
            eval(this.#displayText.innerHTML)
            this.#enableEvaluation = true
            this.clearErrorStyles()
        } catch (SyntaxError) {
            this.#display.classList.add('error')
            this.#buttonEqual.classList.add('error')
            this.#enableEvaluation = false
        }
    }

    // Buttons.

    // Send button's inner text contents to the display.
    pressButton(number) {
        // Check for zeroed out display, so we don't have leading zeros when adding numbers.
        this.#displayText.innerHTML = this.#displayText.innerHTML === '0' ? number : this.#displayText.innerHTML + number
    }

    // Zero out the display, and remove any error-related css classes.
    clearDisplay() {
        this.#displayText.innerHTML = '0'
        this.#displayText.style.fontSize = this.#defaultDisplayFontSize
        applyAnimationClass(this.#display, 'cancel')
        this.clearErrorStyles()
    }

    // Remove the last character from the display if current value is not zero.
    undo() {
        this.clearErrorText()
        // Check if display is zeroed out first, so we don't also delete the default 0.
        this.#displayText.innerHTML.length > 1 ?
            this.#displayText.innerHTML = this.#displayText.innerHTML.slice(0, -1) :
            this.clearDisplay()
        applyAnimationClass(this.#display, 'undo')
    }

    // Evaluate the present display text.
    evaluate() {
        try {
            this.clearErrorText()
            applyAnimationClass(this.#display, 'flash')
            // Eval is a bad idea, but it's fine for this project!
            this.result = eval(this.#displayText.innerHTML).toFixed(2)
            this.removeTrailingZeros()
            this.#displayText.innerHTML = this.result
            this.#displayTextLengthAdjust()
        } catch (SyntaxError) {
            // Since the display line is evaluated with eval(),
            // we should give feedback if the input was completely invalid. Eg: "2+4++".
            applyAnimationClass(this.#display, 'cancel')
            this.#display.classList.add('error')
            this.#displayText.innerHTML = this.errorMessage
        }
    }
}

// ------------------------------------------------------------
// Applies a class to an element, then removes that class after a delay.
function applyAnimationClass(element, className, duration = 20) {
    element.classList.add(className)
    setTimeout(() => {
        element.classList.remove(className)
    }, duration)
}

// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator()
    calculator.errorMessage = 'Uh oh!'
})