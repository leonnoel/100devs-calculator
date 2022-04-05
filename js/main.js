//get button clicks and assign value
//return number button clicks to the dom
//determine which operand was clicked
//run the appropriate math operation
//prevent bad inputs(2 .. )
//return result

const keys = document.querySelector('.calc-buttons');
    keys.addEventListener('click', event =>{
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')){
            return; //click only buttons
        }else{
            calculator.parseInput(value)
            console.log(target)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
        switch (value){
            case '=' :
                this.calcAnswer(this.displayText)
                break;
            case 'c' :
                this.clear()
                break;
            case '.':
                if (this.displayText == 0){
                    this.addText('0.') 
                }else{
                    this.addText(value)
                }
                break;
            default:
                    this.addText(value)
                break;
        }
    },
    addText(value){
        if(this.displayText === '0'){
            this.displayText = ''
        }else if (this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.displayText = null
        }
        if(isNaN(+(value)) && isNaN(+(this.displayText))){
            if(isNaN(this.displayText.slice(-1))){
                return;
            }
        }
        this.displayText += value
        this.outputText(this.displayText)
    },
    outputText(text){
        document.querySelector('.result').innerHTML = text
    },
    calcAnswer(equation){
        let calculation = Function("return " + equation)()
        this.outputText(calculation)
    },
    clear(){
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}