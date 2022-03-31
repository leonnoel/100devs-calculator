// make text smaller if its long
// flash screen on equal/result

function Calculator(){
    this.display = document.querySelector('.display')
    this.equalsButton = document.querySelector('.equal')
    this.result = 0
    this.gaveResult = null                                  //was equals used - not used currently
    this.lastWasOp = null                                   //was an Operator button hit - not used but want to prevent multiple operators in a row

    //evaluate display
    this.equals = function() {
        //if its a whole number, remove the trailing zeros
        this.result = eval(this.display.innerText).toFixed(2).endsWith('00') ? eval(this.display.innerText) : eval(this.display.innerText).toFixed(2)

        this.display.innerText = this.result
        this.gaveResult = true 
    }

    //add clicked button to display
    this.clickButton = function(input){
        let displayStr = this.display.innerText

        if(input === '='){
            this.equals()
        } else {
            if(displayStr === '0'){

                if(input === '*' || input === '/' || input === '+' || input === '-'){
                    this.display.innerText = 0
                } else {
                    this.display.innerText = input
                }
                this.gaveResult = false

            } else{
                if( (displayStr.endsWith('*') || displayStr.endsWith('/') || displayStr.endsWith('+') || displayStr.endsWith('-')) 
                    && (input === '*' || input === '/' || input === '+' || input === '-') ) {
                    this.display.innerText = displayStr
                } else if(input === '*' || input === '/' || input === '+' || input === '-'){
                    this.display.innerText += input
                } else{
                    if(this.gaveResult){
                        this.display.innerText = input
                    } else{
                        this.display.innerText += input
                    }
                    
                }
                this.gaveResult = false
            }
        }
    }

    //Validate input to disallow multiple operators
    //
    // this.checkInput = function (){
    //     if (this.lastWasOp){
    //         this.lastWasOp = false
    //         return false
    //     } else{ 
    //     }
    // }

    //Add Click Listeners to every button class element
    this.buttonDeploy = function(){
        document.querySelectorAll('.button').forEach(item => {
            item.addEventListener('click', () => this.clickButton(item.innerText))
        })
    }
    

    // Object.defineProperty(this, 'result',{
    //     get: function() { return result;}
    // });
}

//build calc and make event listeners
const simpleCalc = new Calculator()
simpleCalc.buttonDeploy()