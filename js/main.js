
const clear = document.querySelector('.clear');
  clear.addEventListener('click', clearAll);

function clearAll() {
      calculator.clearScreen();  
    }

const keys = document.querySelector('.buttons');
  keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')) {
      return;
    } else {
      calculator.parseInput(value);
      
    }
  })
  

  const calculator = {
    displayText: '0',
    firstValue: null,

    parseInput(value) {
      
      switch (value) {
        case '=':
          this.calcAnswer(this.displayText)
          break;
        case '.':
          if (this.displayText == 0) {
            this.addText('0.')
          } else {
            this.addText(value)
          }
          break;        
        default:
          this.addText(value)
          break;
      }
    },

    addText(value){
      if (this.displayText === '0') {
        this.displayText = ''
      } else if (this.firstValue !== null) {
        this.displayText = this.firstValue;
        this.firstValue = null;
      }
      if (isNaN(+(value)) && isNaN(+(this.displayText))) {
        if(isNaN(this.displayText.slice(-1))) {
          return;
        }
      }
      this.displayText += value;
      this.outputText(this.displayText)
    },

    outputText(text) {
      document.querySelector('.calculator-screen').value = text;
    },

    calcAnswer(equation) {
      let result = Function("return " + equation)()
      this.outputText(result);
    },
    
    clearScreen() {
      this.displayText = '0',
      this.firstValue = null,
      this.outputText(this.displayText)
    }

  }
