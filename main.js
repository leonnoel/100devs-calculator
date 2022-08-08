// accept user inputs
const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches ('button')) {
            return;
        }
        else {
            // pass value to parse method
            calculator.parseInput(value);
        }
    })

// create calculator object
const calculator = {
    displayText: '0',
    prevTotal: null,

    // store user inputs
    parseInput(value) {
        // check for AC, decimal, and equal buttons
        switch (value) {
            case '=':
                this.calcAnswer(this.displayText);
                break;
            case 'AC':
                this.clearAll()
                break;
            case '.':
                if (this.displayText == 0) {
                    this.addText('0.');
                }
                else {
                    this.addText(value);
                }
                break;
            default:
                this.addText(value);
                break;
        }
    },

    addText(value) {
        if (this.displayText === '0') {
            this.displayText = ' ';
        }
        else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal;
            this.prevTotal = null;
        }
        // check for invalid entries
        if (isNaN(+(value)) && isNaN(+(this.displayText))) {
            if (isNaN(this.displayText.slice(-1))) {
                return;
            }
        }

        // return a result
        this.displayText += value;
        this.outputText(this.displayText);
    },

    // display the text on the screen
    outputText(text) {
        document.querySelector('#display').value = text;
    },

    // perform calculations
    calcAnswer(equation) {
        let result = Function("return " + equation)()
        this.outputText(result)
        },

    // clear all entries
    clearAll() {
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}




