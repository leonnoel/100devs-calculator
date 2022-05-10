 //  Calcculator needs to:
// accept inputs w/ buttons
// store the inputs 
// recognire inputs and perform calculations 
// return the result

//Optional
//Accept longer operations
// display all inputs as they are entered
// store previous totals
// clear button should reset / clear all

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        // deconstruction
        //shorthand {targe} being extracted from event (a native object)
        //shorthand {value} being extracted from target
        // the value here is the actual value from the button (aka the numbers and operators)
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')) {
            return;
        } else {
            // pass to parse method
            calculator.parseInput(value)
            // console.log(event)
            // console.log(target)
            // console.log(value)
        }
    })
    //calculator object
    const calculator = {
        displayText: '0',
        prevTotal: null,

        parseInput(value) {
            
            // check if the operands / special buttons have been pressed:
            switch(value) {
                case '=' :
                    //calc answer
                    this.calcAnswer(this.displayText)
                    break;
                case 'AC' :
                    //clear screen, reset values
                    this.clearAll()
                    break;
                case '.' :
                    // decimal logic
                    if (this.displayText == 0){
                        this.addText('0.')
                        //pass 0 into addTExt method
                    } else {
                        //add value to text string
                        this.addText(value)
                    }
                    break;
                default: 
                //add the value to the text string
                    this.addText(value)    
                    break;
            }

            
        },

        addText(value) { 
            if (this.displayText === '0') {
                this.displayText = ''
            } else if ( this.prevTotal !== null){
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            /* if display AND next input are NOT numbers, do not proceed */
            // preventing two operators from being processed one after another
            if ( isNaN (+(value)) && isNaN( +(this.displayText)) ){
                if (isNaN(this.displayText.slice(-1))) {
                    return;
                }
            }
            this.displayText += value;
            this.outputText(this.displayText)
        },
        
        outputText(text) {
            document.querySelector('.calculator-screen').value = text;
        },

         calcAnswer(equation){
             let result = Function('return ' + equation)()
             this.outputText(result)
                //console.log(eval(equation))
         },

         clearAll() {
             this.displayText = '0',
             this.prevTotal = null,
             this.outputText(this.displayText)
         }
    }