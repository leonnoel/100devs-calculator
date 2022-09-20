// Required abilities:
// Accept user input of number/operator/number, should accept decimal numbers, recognize input, store input, perform calculations, return a result

// Things I want:
// Accept longer arthimetic input
// Display all input as it is being entered
// Can have result be the start of next calculation
// Clear button to clear all
// should prevent invalid inputs

// Issues to fix:
// Get rid of accepting double decimal points.

const keys = document.querySelector('.calculator-buttons').addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
  if (!target.matches('button')) {
    return;
  }
    
  // register only if a button has been clicked, send button value to calculator object:
  else {
    calculator.parseInput(value)
  }
});

const calculator = {
  displayText: '0',
  prevTotal: null,

  parseInput(value) {
    
    // check if any 'special buttons' have been clicked:
    switch (value) {
      case '=' :
        this.calcResult(this.displayText)
        break;

      case 'AC' :
        this.clearAll()
        break;

      case '.' :
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
  },

    // if not a special button, make text show up on screen:
  addText(value) {
    if (this.displayText == '0') {
        this.displayText = ''
    }
    else if (this.prevTotal !== null) {
      this.displayText = this.prevTotal
      this.prevTotal = null
    }
    
    // if user has entered invalid sequence. Check if the last character is a number - if not a number, return.
    if (isNaN(+(value)) && isNaN(+(this.displayText))) {
      if(isNaN(this.displayText.slice(-1))) {
        return;
      }
    }
    
    // display valid text on screen:
    this.displayText += value
    this.outputText(this.displayText)
    
  },

  // have values we are passing in, show up on the screen. Since the screen is an input box, use button value instead of innerText:
  outputText(text) {
    document.querySelector('.calculator-screen').value = text
  },

  // method to do calculations:
  calcResult(equation) {
    let result = Function('return ' + equation) ()
    this.outputText(result)
  },

  // method to have AC button work:
  clearAll() {
    this.displayText = '0',
    this.prevTotal = null
    this.outputText(this.displayText)
  },
  
  
}