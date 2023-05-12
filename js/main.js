

const keys = document.querySelector('.calculator-buttons');
  keys.addEventListener('click', click=> {
      const {target}= click;
      const {value} = target;
      if (!target.matches('button')){
        return;
      }
      else {
        calculator.specialInput(value)  //sends the value down to my       calculator function
      }

  } )

  // Calculator object
const calculator = {
  displayText: '0',      // Current display text
  previousTotal: null,   // Previous total value
  operator: null,        // Current operator

  // Handle special inputs
  specialInput(value) {
    switch (value) {
      case '=':
        this.calculatorAnswer();
        break;
      case 'AC':
        this.clearAll();
        break;
      case '.':
        if (this.displayText === '0') {
          this.addText('0.');
        } else {
          this.addText(value);
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.handleOperator(value);
        break;
      default:
        this.addText(value);
        break;
    }
  },

  // Add text to the display
  addText(value) {
    if (value === '.') {
      if (this.displayText.includes('.')) {
        return;
      }
    } else if (this.displayText === '0') {
      this.displayText = '';
    }

    if (this.operator !== null) {
      this.smallerOutputText(`${this.displayText} ${this.operator}`);
      this.displayText = '';
    }

    if (isNaN(+(value)) && isNaN(+(this.displayText))) {
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
    }

    this.displayText += value;
    this.outputText(this.displayText);
  },

  // Handle operator button clicks
  handleOperator(value) {
    if (this.displayText !== '') { //hecks if the current display text is not empty.
      this.previousTotal = this.displayText;
      this.operator = value;
      this.outputText(''); //moves num and operator into the smaller window
      this.smallerOutputText(`${this.previousTotal} ${this.operator}`);
      this.displayText = '0'; // Reset the larger screen
    }
  },

  // Update the main display
  outputText(text) {
    document.querySelector('.calculator-screen').value = text;
  },

  // Update the smaller display
  smallerOutputText(text) {
    document.querySelector('.calculator-screen2').value = text;
  },

  // Perform the calculation and display the result
  calculatorAnswer() {
    if (this.previousTotal && this.operator && this.displayText) {
      const equation = `${this.previousTotal} ${this.operator} ${this.displayText}`;
      let results = eval(equation);
      this.outputText(results);
      this.smallerOutputText('');
      this.displayText = results.toString();
      this.previousTotal = null;
      this.operator = null;
    }
  },

  // Clear all values and reset the displays
  clearAll() {
    this.displayText = '0';
    this.previousTotal = null;
    this.operator = null;
    this.outputText(this.displayText);
    this.smallerOutputText('');
  },
};