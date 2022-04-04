//things that a calculator has to do
//accept user inputs of number, operator, number
//should accept decimal numbers
//store inputs
//recognize inputs and perform calculations
//return a result

const keys = document.querySelector('.keys');
    keys.addEventListener('click',event => {
        const {target} = event;
        const {value} = target;
        if(!target.matches('button')){
            return;
        }else{
            Calculator.parseInput(value);
        }
    })

const Calculator = {
    displayText: '0',
    previousTotal: null,

    parseInput(value){
        console.log(value)
        switch(value){
            case '=':
                this.calcAnswer(this.displayText)
                break;
            case 'AC':
                this.clearAll()
                break;
            case '.':
                if (this.displayText == 0){
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

    addText(value){
        if (this.displayText === '0') {
            this.displayText = ''
        } else if (this.previousTotal !== null){
            this.displayText = this.previousTotal;
            this.previousTotal = null;
        }
        //implicit type conversion - checking to see if values are NaN - refactor to see if . or digit or operator?
        if (isNaN(+(value)) && isNaN(+(this.displayText))){
           if(isNaN(this.displayText.slice(-1))){
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

    clearAll(){
        this.displayText = '0',
        this.previousTotal = null,
        this.outputText(this.displayText)
    }
}