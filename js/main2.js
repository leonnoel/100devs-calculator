
// Adding the event listener to all of the calculator buttons and passing that value into the calculator input method
document.querySelectorAll('button').forEach(button => button.addEventListener('click', event => {
    calculator.parseInput(event.target.value)
}))

// Creating the calculator constructor function

const calculator = {
    // Keeping track of what's shown on the calculator screen; by default we show 0
    displayText: '0',
    // Keeping track of whether we've performed a calculation before
    prevTotal: null,
    // Method getting the input and creating special cases for decimal, equals, and all clear buttons
    parseInput(value) {
        switch(value) {
            case "=":
                // Evaluate the existing equation (and display it in the DOM)
                this.calcAnswer(this.displayText)
                break;
            case "AC":
                // Run the all clear function
                this.clearAll()
                break;
            case ".":
                // If it's starting with 0 add "0." otherwise just append normaly
                if (this.displayText === '0') {
                    this.addText('0.')
                } else {
                    this.addText(value)
                }
                break;
            default:
                // If it's a number or operator run the function addText
                this.addText(value)
                break;
        }
    },

    // Method adding all of our numbers and operators together
    addText(value) {
        // Make sure we're not starting with an unecessary 0 in our computation (reset to an empty string). If we have a previous computation, show that and reset prevTotal
        if (this.displayText === '0') {
            this.displayText = ''
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }

        // Check for NaN if statement

        if (isNaN(+(value)) && isNaN(+(this.displayText))) {
            if (isNaN(+(this.displayText.slice(-1)))) {
                return;
            }
        }
        // Add value
        this.displayText += value

        // Display existing equation in the DOM
        this.showValue(this.displayText)

    },

    // Method that shows our value in the DOM
    showValue(text) {
        document.querySelector('.calculator-screen').value = text
    },

    // Method that evaluates the equation

    calcAnswer(equation) {
        const result = Function(`return ${equation}`)()
        if (!Number.isInteger(result)) {
            this.showValue(result.toFixed(2))
        } else {
            this.showValue(result)
        }
    },

    // Method that allows us to clear our cached values
    clearAll() {
        this.displayText = '0'
        this.prevTotal = null

        this.showValue(this.displayText)
    }


}


