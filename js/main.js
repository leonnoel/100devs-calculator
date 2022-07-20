// Calculator requirements:
//accept user inputs of numbers and operators
//allow for decimal numbers
//store inputs
//recognize values 
//perform calculations
//return result
//********************************** */
//My additions:
//Accept longer operations
//Display input as it's entered
//store previous total as start of next operation
//clear button clears all entries
//should prevent invalid inputs 
// be able to use alphabet in place of number

//Need:
// -add event listeners 
// -listen for clicks
// -add functions 

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if(!target.matches('button')){
        return;
        //this makes sure that the function is left if anywhere but a button
        //is clicked
    }else{
            //pass value to parse method
            calculator.parseInput(value)
            //console.log(event)
        }
    })

    const calculator = {
        displayText: '0',
        prevTotal: null, //null is nonexistent

        parseInput(value) {
            //using switch to compare one parameter against any number of options 
            //especially AC, ., =
            switch (value) {
                case '=' :
                    //calculate the answer
                    this.calcResult(this.displayText)
                    break;
                case 'AC' :
                    //clear screen and stored values
                    this.clearAll()
                    break;
                case '.' :
                    if(this.displayText == 0) {
                        this.addText('0.')
                        //pass '0.' into add text method
                    } else {
                        this.addText(value)
                        //add value to text string
                    }
                    break;
                default:
                    this.addText(value)
                    //add value to text string
                    break;
            }
            },

            addText(value) {
                if (this.displayText === '0') {
                    this.displayText = ''
                } else if (this.prevTotal !== null) {
                    this.displayText = this.prevTotal
                    this.prevTotal = null
                }
                if (/*user enters invalid button order, (ex. 3++ or 2+/)stop*/isNaN(+(value/*value comes in as a string*/)) && isNaN(+(this.displayText))) {
                    if(isNan(this.displayText[-1])) /*this.displayText[-1] == '.'|| this.displayText[-1]/*check for digit or dot*/ {
                        return;
                    }
                }
                this.displayText += value
                //output display text to screen
                this.outputText(this.displayText)
            },

            outputText(text) {
                //pass the value into the html element of calculator screen
                document.querySelector('.calculator-screen').value = text /*because we are passing into an input box*/
            },
            calcResult(equation) {
                let result = Function('return ' + equation)()
                this.outputText(result)
            },
            clearAll() {
                this.displayText = '0'
                this.prevTotal = null 
                this.outputText(this.displayText)
            }
    }
