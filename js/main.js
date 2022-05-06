// REQUIRED ABILITIES:
// accept user inputs of number, operator, and another number
// should accept decimal numbers
// store inputs
// recognize inputs and perform calculations
// return result

// OPTIONAL FEATUERS:
// (1)should accept longer arithmetic operations
// (2)display all input as it is being entered.
// (3)store previous result as start of next operation
// (4)clear button should clear all entries
// (5)prevent invalid inputs (operators next to each other, two decimal points)

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')){
            return;
        }else {
            calculator.parseInput(value)
            // console.log(value)
        }
    })

const calculator = {
    displayText: '0',   // (2)
    prevTotal: null,    // (3)

    parseInput(value){
        //have any of the "special buttons" been clicked
        switch(value) {
            case '=':
                this.calcAnswer(this.displayText)
                break;
            case 'AC':
                this.clearAll()
                break;
            case ".":
                if (this.displayText == 0){
                    this.addText('0.')
                } else{
                    this.addText(value)
                }
                break;
            default:
                this.addText(value)
                break;
        }

    },

    addText(value){
        if (this.displayText === '0'){
            this.displayText = ''
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        } 
        if (value === '.' && this.displayText.includes('.')) {
            return;
        }
        if (isNaN(+(value)) && isNaN(+(this.displayText))){ // (5) 
            if(isNaN(this.displayText.slice(-1))) {
                return;
            }
        }
        this.displayText += value
        this.outputText(this.displayText)

    },

    outputText(text){
        document.querySelector('.calculator-screen').value = text
    },

    
    calcAnswer(equation){
        let result = Function("return " + equation)()
        this.outputText(result)
    },

    clearAll() {
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}

