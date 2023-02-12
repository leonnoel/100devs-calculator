const keys = document.querySelector('.buttons')
keys.addEventListener('click',(event) => {
    const {target} = event
    const {value} = target
    if(!target.matches('button')){
        return
    }else{
        calculator.parseInput(value)
    }})

    const calculator = {
        displayText:'0',
        prevTotal:null,

        parseInput(value) {
            switch(value){
                case '=':
                    this.calcAnswer(this.displayText) //calculates
                    break
                case 'AC':
                    this.clearAll() //clears screen
                    break
                case '.':
                    if(this.displayText === 0){
                        this.addText('0.') // '0.' into add text
                    }else {
                        this.addText(value) //add value
                    }
                    break
                    
                default:
                    this.addText(value)
                    break
            }
        },

        addText(value){
            if(this.displayText === '0'){
                this.displayText=''
               
            }else if(this.prevTotal !== null){
                this.displayText = this.prevTotal
                
                this.prevTotal=null
            }
           
            if(isNaN(+value)&& isNaN(+this.displayText)){
                if(isNaN(this.displayText.slice(-1))){
                    return
                }
            }
            this.displayText += value
    
            this.outputText(this.displayText)
        },

        outputText(text){
            document.querySelector('.screen').value=text
        },
        calcAnswer(){
            let result = Function('return '+ eq)()
            this.outputText(result)
        },

        clearAll(){
            ;(this.displayText='0'),
            (this.prevTotal = null),
            this.outputText(this.displayText)
        },

    }