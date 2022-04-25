//Required aibilities of the calculator
//Accept user inputs of numbers, operators & another number
//should accept decimals numbers
//Store inputs
//Recognize inputs and perform calculation
// return the resut

//Option features:
// should accept longer arithmetic operations
//Display all input as it is being entetered
//Store previous total as start of next operation
//Clear button should clear all entries
//should prevent invalid inputs(operators next to each other)

const keys = document.querySelector('.calculator-buttons')
    keys.addEventListener('click', event => {
        const {target} = event //destructution
        const {value} = target
        if(!target.matches('button')){
            return;
        } else {
            //pass value to parse method
            // console.log(event) //object with a lot of properties
            // console.log(target) //html tag
            // console.log(value) //the value of the button
            calculator.parseInput(value)
        }
    })
const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
        // have any of the "special buttons" been clicked
        switch(value){
            case '=' :
                //calculate the answer
                this.calcAnswer(this.displayText)
                break;
            case 'AC' :
                //clear screen and store value
                this.clearAll()
                break;
            case '.':
                if (this.displayText === 0){
                    //pass 0. into add text method
                    this.addText('0.')
                } else {
                    //add value to text string
                    this.addText(value)
                }
                break;
            default:
                //add value to text string
                this.addText(value)
                break;
        }
    },
    addText(value){
        if(this.displayText === '0'){
            this.displayText= ''
        } else if(this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if(isNaN(+(value)) && isNaN(+(this.displayText))){
            if(isNaN(this.displayText.splice(-1))){
                return;
            }

        }
        this.displayText += value
        //output display text to screen
        this.outputText(this.displayText)
    },
    outputText(text){
        document.querySelector('.calculator-screen').value = text
    },
    calcAnswer(equation){
        let result =  Function("return " + equation)() //same as evaluate but more safely
        this.outputText(result)
    },
    clearAll(){
        this.displayText = '0'
        this.prevTotal = null
        this.outputText(this.displayText)
    }

}