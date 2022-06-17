//Required Abilities of a calculator: 
//accept user inputs of number, operator, and number
//should accept decimal numbers
//store inputs
//recognize inputs and perform calculations
//return result

//Optional Features:
//Should accept longer arithmetic operations
//prevent invalid inputs (operators next to each other, two decimal points)
//limit number of characters

const keys = document.querySelector('.calculator-buttons')
keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
        return;
    } else {
        calculator.parseInput(value);
    }
})

const calculator = {
    displayText: '0',
    prevTotal: null,
    currNum: '0',

    parseInput(value) {
        //have any of the special buttons been clicked?
        switch (value) {
            case '=':
                this.calcAnswer(this.displayText);
                break;
            case 'AC':
                this.clearAll();
                break;
            case '.':
                if (this.displayText === '0') {
                    this.addText('0.');
                } else {
                    this.addText(value);
                }
                break;
            default:
                this.addText(value);

        }
    },

    addText(value) {
        if (this.displayText.length === 10) {
            document.querySelector('.calculator-screen').value = "Owie Stop!";
        } else {
            if (this.displayText === '0') {
                this.displayText = ""
                this.currNum = "";
            } else if (this.prevTotal !== null) {
                this.displayText = this.prevTotal;
                this.currNum = this.prevTotal;
                this.prevTotal = null;
            }
            if (this.currNum.includes('.') && value === '.') {
                return;
            }
            if (isNaN(+(value)) && isNaN(+(this.currNum))) {
                if (isNaN(+(this.currNum.slice(-1)))) {
                    return;
                }
            }
            this.displayText += value;
            this.currNum += value;

            if (value === '+' || value === '-' || value === '/' || value === '*') {
                this.currNum = "0";
            }
            this.outputText(this.displayText)
        }
    },

    outputText(text) {
        document.querySelector('.calculator-screen').value = text;
    },

    calcAnswer(equation) {
        let result = Function("return " + equation)()
        if (this.displayText !== 0) {
            this.outputText(result)
        }
    },

    clearAll() {
        this.displayText = "0";
        this.prevTotal = null;
        this.outputText(this.displayText)
    }

}
