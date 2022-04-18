//accept inputs 
//should accept decimal numbers
//store inputs
//recognize inputs and perform calculations
//return a result

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')) {
            return;
        }else{
            calculator.parseInput(value)
            //pass to parse method
            // console.log(value)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null, 

    parseInput(value) {
        //have any of the special buttons been clicked
        switch (value) {
            case '=' :
                //calculate the answer
                this.calcAnswer(this.displayText)
                break;
            case 'AC' :
                //clear screen and stored values
                this.clearScreen()
                break;
            case '.' :
                if (this.displayText == 0){
                    //pass '0. into add text method
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
        addText(value) {
            if (this.displayText === '0'){
                this.displayText = ''
            }else if (this.prevTotal !== null) {
                this.diplayText = this.prevTotal
                this.prevTotal = null
            }
            //to check whether the last char in display and the
            if (isNaN(+(value)) && isNaN(+(this.displayText))){
                if(isNaN(this.displayText.slice(-1))) {
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

    calcAnswer(equation){
        // console.log(eval(equation))
        let result = Function("return " + equation)()
        this.outputText(result)
    },

    clearScreen(){
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    },
        

}