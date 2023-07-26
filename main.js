//required abilities of a calculator:
//accept user inputs of number, operator, and antother number
//should accept decimal numbers
//store inputs
//recognize inputs and perform calculations
//return a result

//Optional features:
//should accept longer arithmetic operations
//display all inputs as it is being entered
//store previous total as start of next operation
//clear button should clear all entries
//should prevent invalid inputs (operators nex to each other, two decimals)


const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')) {
            return;
        } else {
            //pass to parse method
            calculator.parseInput(value)
        }
    })

    const calculator = {
        displayText: '0',
        prevTotal: null,

        parseInput(value) {
            
            //have any of the "special buttons" been clicked
            switch (value) {
                case '=' :
                    this.calcAnswer(this.displayText)
                    break;
                case 'AC':
                    this.clearAll()
                    break;
                case '.':
                    if (this.displayText == 0) {
                        this.addText('0.')
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
            //check if last char in display and 
            if (isNaN(+(value)) && isNaN(+(this.displayText))) {
                if (isNaN(this.displayText.slice(-1))) {
                    return;
                }
            }
            this.displayText += value
            //output display text to screen
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
    }
}
