//answer (prev total) is new start of next operation until hit AC to clear
//prevent invalid input of two decimal points next to each other

//EVENT DELEGATION
document.getElementById("calcButtons").addEventListener("click", event => {
  if (!event.target.classList.contains("btn")) {
    return;
  }
  else {
    calculator.parseInput(event.target.value)
     }
    }); 

  //CALCULATOR OBJECT
  const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
      switch (value) {
        case '=' :
          this.calcAnswer(this.displayText)
          break;
        case 'AC' :
          this.displayText = '0'
          prevTotal = null
          this.addText(this.displayText)
          break;
        case '.' :
          if (this.displayText == 0) {
            this.addText('0.')
          }
          else {
            this.addText(value)
          }
          break;
        default :
          this.addText(value);
      }
    },
    addText(value) {
      if (this.displayText === '0'){
        this.displayText = ''
      }
      else if (this.prevTotal !== null) {
        this.displayText = this.prevTotal
        this.prevTotal = null
      }
//if last char is num or dot
//how fix ex: 2.2.2.2 ... 
      //add property to keep track of current number (start immediately after operator and end with new operator)
      //then check to see if current number contains a '.' already
      if (isNaN(+(value)) && isNaN(+(this.displayText))){
        if (isNaN(this.displayText.slice(-1))){
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
      let result = Function('return ' + equation)();
      this.outputText(result); 
    }
  }