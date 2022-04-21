//requrements for calculator
//accept user inputs number, operator, and another number
//should accept decimal numbers
//store inputs
//recognise inputs and perform calculations
//return a result

//optional features
//should accept longer arithmetic operators
//display all input as its been entered
//store previous total as start of next operation
//clear button should clear all entries
//should prevent invalid inputs -two decimal points, operators next to each other

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
        return;
    } else {
        //pass value to parse method
        //console.log(value)
        //console.log(`${event}`);
        calculator.parseInput(value)
    }
})

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        //have any of the 'special buttons -. AC =' been clicked
        switch (value) {
            case '=': //calculate the result
                this.calcAnswer(this.displayText)
                break;
            case 'AC'://clear screen and store value
                this.clearAll()
                break;
            case '.': //
                if (this.displayText == 0) {
                    //pass the string 0. into addText method
                    this.addText('0.')
                } else {
                    //add value to text string
                    this.addText(value);
                }
                break;
            default:
                //add value to text string
                this.addText(value);
                break;
        }
    },

    addText(value) {
        if (this.displayText === '0') {
            this.displayText = '';
        } else if (this.prevTotal !== null){//this adds operations to the previous result
            this.displayText = this.prevTotal;
            this.prevTotal = null;
        }
        if (isNaN(Number(value)) && isNaN(Number(this.displayText))){//this needs to be changed as its not working
            //if user entered invalid sequence of operations 
            if(isNaN(this.displayText.slice(-1))){
                return;
            }
        }
        this.displayText += value;
        //output display text to screen
        this.outputText(this.displayText)
    },

    //output display text to screen
    outputText(text){
        document.querySelector('.calculator-screen').value = text;
    },

    //calculating the answer
    calcAnswer(equation){
        //console.log(eval(equation))
        let result = Function('return '+ equation)()
        this.outputText(result)
    },

    //clear the display
    clearAll(){
        this.displayText = '0';
        this.prevTotal = null;
        this.outputText(this.displayText);
    }
}