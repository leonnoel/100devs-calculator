

// constants for numbers and symbols first
/* 
* Calculator objects!
*/

//Constructor function for all Calculators
function Calculator(display = 0, preview = 0) {
  //declared public properties
  this.display = display;
  this.preview = preview;


  /*
  * Private Members (inner workings)
  */
  // local variables
  const symbols = ['+', '-', '/', '*'];
  const numbers = ['-9','-8', '-7', '-6', '-5', '-4', '-3', '-2', '1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const clickColor = '#1e90ff';
  const noClickColor = '#fff';

  // buffers
  let numBuffer1;   // holds first number
  let symbolBuffer; // holds current arithmetic operation
  let numBuffer2;   // holds second number
  let clearFlag = 0;

  // arithmetic methods (remember to insert html later)
  add = _ => Number(numBuffer1) + Number(numBuffer2);
  subtract = _ => Number(numBuffer1) - Number(numBuffer2);
  multiply = _ => Number(numBuffer1) * Number(numBuffer2);
  divide = _ => Number(numBuffer1) / Number(numBuffer2);
  compute = (symbol) => {
    switch(symbol) {
      case '+':
      return  add();
      case '-':
      return  subtract();
      case '*':
      return  multiply();
      case '/':
      return divide();
    }
  }


  /* 
  * Public methods
  */

  // clear button methods
   this.clearDisplay = () => {
    this.display = '0';
    clearFlag++;
  }

  this.clearBuffers = () => {
    numBuffer1 = undefined;
    symbolBuffer = undefined;
    numBuffer2 = undefined;
    this.preview = 0;
    clearFlag = 0;
  }

  // flipSign methods (needs to be integrated with number buffers
  // this.flipSign = _ => (this.total > 0) ? this.total -= (this.total * 2) : this.total += (this.total * 2);


  // The button clicking logic
  // Still working but much progress has been made
  this.buttonClick = function(button) {
    // if the button clicked is an operand but the first number buffer is empty, reset the symbol buffer
    if(symbols.includes(button) && !(numBuffer1)) {
      symbolBuffer = undefined;
    } 
    // if the button clicked is a number but the operand hasn't been chosen, add number to the first buffer
    else if(numbers.includes(button) && !(symbolBuffer)) {
      numBuffer1 ? numBuffer1 += button : numBuffer1 = button;
      this.preview = numBuffer1;
    }
    // if button clicked is an operand and the firstNumber buffer is filled; reassign the symbol buffer 
    else if(symbols.includes(button) && (numBuffer1)) {
      symbolBuffer = button;
      this.display = numBuffer1;
    }
    // if the button clicked is a number and the symbol buffer is filled AND the first number buffer is filled 
    // add the button to the second number buffer
    else if(numbers.includes(button) && symbolBuffer && numBuffer1) {
      numBuffer2 ? numBuffer2 += button : numBuffer2 = button;
      this.preview = numBuffer2;
    }
    // if the button clicked was equal sign '=' call the compute private method and clear buffers
    else if(button == '='){
      this.display = symbolBuffer ? compute(symbolBuffer) : compute('+');
      this.display = (this.display % 2 < 1) && (this.display % 2 != 0) ? this.display.toFixed(2) : this.display;
      this.preview = this.display;
    }
    else if(button === 'ac'){
      clearFlag === 0 ? this.clearDisplay() : this.clearBuffers(); // must double click to clear buffers
    }
  }
}



const calc = new Calculator();
const output = document.getElementById('output');
const preview = document.getElementById('preview');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.firstChild.addEventListener('click', function() {
    calc.buttonClick(btn.firstChild.id);
    preview.innerHTML = calc.preview;
    output.innerHTML = calc.display;
  });
});

