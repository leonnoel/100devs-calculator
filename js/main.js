//accept user inputs of number, operator, number
//should accept decimals numbers
//store inputs
//recognize inputs & perform calculations
//return a result

//result becomes starting value of next operation unless all clear is pressed
//clear button resets to 0


// Still need to check if there is already a decimal, then don't let them put another one

const keys = document.querySelector('.btns')
    keys.addEventListener('click', event => {
    const {target} = event
    const {value} = target
    if (!target.matches('button')) {
        return 
    } else {
        //pass to parse method
        calculator.parseInput(value)
    }
})

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        switch (value) {
            case '=':
                this.calcAnswer(this.displayText)
                break
            case 'AC':
                this.clearAll()
                break
            case '.':
                if (this.displayText == 0){
                    this.addText('0.')
                } else {
                    this.addText(value)
                }
                break
            default:
                this.addText(value)
        }
    },

    addText(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        } else if (this.prevTotal !== null) { //check if there is a previous total, if there is . . .
            this.displayText = this.prevTotal  // set the display to the previous total
            this.prevTotal = null               //reset prevtotal to null
        }

        // check if the characters are valid
        if (isNaN(+(value)) && isNaN(+(this.displayText.slice(-1)))) {
            return
        } 
        this.displayText += value
        this.outputText(this.displayText)
    },

    outputText(text) {
        document.querySelector('.display').value = text
    },

    calcAnswer(eq) {
        let result = Function("return " + eq) ()
        this.outputText(result)
    },

    clearAll() {
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}

