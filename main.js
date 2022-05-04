//required attributes of a calculator
//accept user inputs of number, operator and another number
//store inputs
//recongnize inputs and perform calculations
//return a result

/* optional functions;
- should be able to accept longer arithemethic operations.
- display all input as it is being entered
- should accept decimal numbers
- store result of previous calculation as start of next operation
- clear button should clear all entries
- should prevent invalid inputs (operators next to each other, two decimal points) */

const keys = document.querySelector('.keys'); //assign the whole .keys container element containing the buttons into variable keys
keys.addEventListener('click', event => {  //add click event any part of .keys container clicked
    const {target} = event; //this is destructuring. We reached into the event and picked out the target. It is the same thing as (const target = event.target).
    const {value} = target; // This is also the same thing as (const value = event.value).
    if( !target.matches('button') ) { //if the part of the container clicked is not button, then do nothing
        return;
    } else {
        //else if the part of container clicked is button do the following:
        calculator.parseInput(value)
        //console.log(value)
    }
})
const calculator = {
    displayText: '0',
    prevTotal: null,  //The value null represents the intentional absence of any object value
    parseInput(value) {
        //to check if any of the buttons clicked is a special character like ( '=', 'AC', '.' and so on  )
        switch( value ) {
            case '=' :
                //calculate the answer
                this.calcAnswer(this.displayText)
                break;
            case 'AC' : 
            //clear screen and stored values
                this.clearAll()
                break;
            case '.' :
                if( this.displayText == 0 ) {
                    this.addText('0.')
                } else {
                    this.addText(value)
                }
                break;
            default: 
                //add value to text string
                this.addText(value)
        }
    },
    addText(value) {
        if( this.displayText === '0' ) {
            this.displayText = ''
        }else if( this.prevTotal !== null ) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if( isNaN( +(value) ) && isNaN( +(this.displayText) ) ) { /*check if the last char in display and the entered value are   */ 
            if( isNaN(this.displayText.slice(-1)) ) {
                return;
            }
        }
        this.displayText += value
        //output disply text to screen
        this.outputText(this.displayText)
    },
    outputText(text) {
        document.querySelector('.screen').innerText = text
    },
    calcAnswer(equation) {
        // if( isNaN(+(this.displayText[this.displayText.length - 1])) ) {
        //     this.displayText.substring(0, str.length - 1);
        // }
        let result = Function("return " + equation)()
        this.outputText(result)
    },
    clearAll() {
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}