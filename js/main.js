// Required abilities of calculator:
// 1. accept user inputs (num, operator, num)
// 2. should accept decimals
// 3. store inputes
// 4. recognize inputs and perform calculations
// 5. return a result

// Optional features:
// 1. should accept longer arithmetic operations
// 2. display all input as it's being entered
// 3. store previous total as start of next operation
// 4. clear button should clear all entries
// 5. should prevent invalid inputs (operators next to each other, two decimal points, etc.)
// 6. allow start with negative number

const keys = document.querySelector(".calculator-buttons")
keys.addEventListener('click', event => {
    const {target} = event
    const {value} = target
    if (!target.matches('button')) {
        return
    } else {
        calculator.parseInput(value)
        // console.log(value)
    }
})

const calculator = {
    displayText: '0', 
    prevTotal: null,

    parseInput(value) {
        // Have any of the "special buttons" been clicked?
        switch (value) {
            case '=' :
                this.calcAnswer(this.displayText)
                break;
            case 'AC':
                this.clearAll()
                break;
            case '.':
                // add zero in front of decimal is first character
                if (this.displayText == 0) {
                    this.addText(0.)
                } else {
                    this.addText(value)                
                }
                break;
            default:
                this.addText(value)
                break;
        }
    },

    addText(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }

        if (isNaN(+(value)) && isNaN(+(this.displayText))) {
            if (isNaN(this.displayText.slice(-1))) {
                return;
            }
        } 
        this.displayText += value
        this.outputText(this.displayText)
    },

    outputText(text) {
        document.querySelector('.calculator-screen').value = text
    },

    calcAnswer(equation) {
        let result = Function("return " + equation)()
        this.outputText(result)
    },

    clearAll() {
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    },
}