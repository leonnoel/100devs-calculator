/*
    TODO
    Get input from user using buttons and store current value - done
    Display current value on screen - done
    Use of operators to perform arithmetics - done
    Keep result of operations to start next operation - done
*/

class Calculator {
    //set properties of calculator
    constructor() {
        this.displayText = '0';
        // this.previusTotal = null;
        //to get values from buttons
        this.buttons = document.querySelector('.numbers');
        this.buttons.addEventListener('click', event => {
            const {target} = event;
            const {value} = target;
            if (!target.matches('button')) {
                return;
            }

            else {
                this.parseInput(value);
            }
        })
    }

    parseInput(value) {
        //if not number buttons been clicked
        switch (value) {
            case '=' :
                this.calcAnswer(this.displayText)
                break;
           case '.':
                if (this.displayText == '0') {
                    this.addText('0.')
                }
                else {
                    this.addText(value)
                }           
               break;
            default:
                this.addText(value)
                break;
        }
    }

    addText(value) {
        //to replace initial 0 with number
        if (this.displayText === '0') {
            this.displayText = '';
        // } else if (this.previusTotal !== null){
        //      this.displayText = this.previusTotal;
        //      this.previusTotal = null
        }
        //to reject consecutive signs
        if (isNaN(+(value)) && isNaN(this.displayText)) {
            if (isNaN(this.displayText.slice(-1))) {
                return;
            }
        }
        this.displayText += value
        this.outputText(this.displayText)
        //output display text to screen
    }

    calcAnswer(equation) {
        let result = Function("return " + equation) ()
        //returning only two decimals 
        if(result.toString().includes('.') == true) {
            this.outputText(result.toFixed(1))
        } else {
            this.outputText(result)
        }
    }

    outputText(text) {
        document.querySelector('.calculator-screen').value = text;    
    }

}
    const gg2ez = new Calculator()