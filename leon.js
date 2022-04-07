const keys =  document.querySelector('.keys')

//getting the value of what is clicked and passing the value to the rest of the operation
keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')) {
        return;
    } else {
        // console.log(`thing is ${event}`)
         calculator.parseInput(value);
    }
})

const calculator = {
    displayText: '0',
    prevTotal: null,


    parseInput(value) {
         switch (value) {
            case '=':
                //calculate the answer
                this.calcAnswer(this.displayText)
                break;
            case 'AC':
                //clear screen and store values
                this.clearAll()
                break;
            case '.':
                if(this.displayText == 0){
                    this.addText('0.')
                } else {
                    this.addText(value)
                }
                break;
            default:
                //addvalue to text string   
                this.addText(value)
                break; 
}       
    } ,

    addText(value){
        if(this.displayText === '0') {
            this.displayText = ''
            } else if (this.prevTotal !== null){
                this.displayText = this.prevTotal
                this.prevTotal = null
            }

     /*user has entered an invalid sequence don't proceed)*/
        if(isNaN(+(value)) && isNaN(+(this.displayText))){
            if(isNaN(this.displayText.slice(-1))){
                return;
            }
        }
        this.displayText += value
        //output display text to screen
        this.outputText(this.displayText)
},      
    outputText(text)  {
        document.querySelector('.display').value = text
    },

    calcAnswer(equation) {
        let result = Function ('return '  + equation)()
            this.outputText(result)
    },

   

    clearAll(){
                this.displayText = '0',
                this.prevTotal = null,
                this.outputText(this.displayText)
            },

}


 