//requirements
//accept user inputs of num, operator, num
//acept decimal numbers
//store inputs
//recognise inputs and calculations
//return result

//optional features
//accept longer arithmatic operations
//display input as it is entered
//previous result start of next operation
//clear button clears all entries
//prevent invalid inputs (operators next to each other, two decimal points)
//start number with negative

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')){
        return;
    } else {
        calculator.parseInput(value)
        //pass to parse method
        //console.log(value)
    }
})

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        switch (value) {
            case '=' :
                //calculate anser
                this.calcAnswer(this.displayText)
                break;
            case 'AC':
                //clear screen and stored values
                this.clearAll()
                break;
            case '.':
                if (this.displayText == 0) {
                    //pass 0. into the text string
                    this.addText('0.')
                } else {
                    this.addText(value)
                }
                break;
            default:
                //add value to text string
                this.addText(value)
                break;
        }
    },
        
    addText(value) {
        if (this.displayText ==='0'){
            this.displayText = ''
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if(isNaN(this.displayText.slice(-1)) && isNaN(value)){
            return;

            //invalid input, dont proceed
            //check if last char in display text is not a number
        } else if (this.displayText.includes('.') && value==='.'){
            return;
        }
        this.displayText += value
        this.outputText(this.displayText)
        //output display text to the screen
    },
        
    outputText(text) {
        document.querySelector('.calculator-screen').value = text
        this.prevTotal = text
    },

    calcAnswer(equation){
        // console.log(equation)
        let result = Function("return " + equation)()
        console.log(result)
        if (result.toString().length > 8){result=result.toPrecision(8)}
        console.log(result)
        this.outputText(result)
    },

    clearAll() {
        this.displayText = '0'
        this.prevTotal = null
        this.outputText(this.displayText)
    }
    
}