//Required feautures for calculator
//accept user inputs of numbers, operators, and other numbers
//accept decimal numbers
//store inputs
//recognize inputs and perform calculations
//return a result

const keys = document.querySelector('.calculatorButtons');
keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')) {
     return;
    } else {
     calculator.parseInput(value)
     // console.log(`thing is ${event}`)
    }
})

const calculator = {
     displayText: '0',
     prevTotal: null,

     parseInput(value) {
      //have any of special buttons
          switch (value) {
            case '=' :
             //calculate the answer
             this.calcAnswer(this.displayText)
             break;
             case 'AC':
              //clear screen and store value
              this.clearAll()
              break;
              case '.':
                if (this.displayText == 0) {
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
      
       addText(value) {
        if (this.displayText === '0') {
         this.displayText = ''
     }else if (this.prevTotal !== null) {
          this.displayText = this.prevTotal
          this.prevTotal = null
     }
       if (isNaN(+(value)) && isNaN(+(this.displayText.slice(-1)))) { //proud of editing this line and still making it work
         
          return;
         
       }
       this.displayText += value
       this.outputText(this.displayText)
     },

     outputText(text) {
      document.querySelector('.display').value = text
     },
     calcAnswer(equation) {
        let result = Function("return " + equation)()
        this.outputText(result)
     },
     clearAll() {
      this.displayText = '0',
      this.prevTotal = null,
      this.outputText(this.displayText)
     }
   
    }
   
   


