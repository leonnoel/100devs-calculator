
const SYMBOLS = ['+', '-', '/', '*', '='];
const NUMBERS = ['-9','-8', '-7', '-6', '-5', '-4', '-3', '-2', '1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const CLICKCOLOR = '#1e90ff';
const NOCLICKCOLOR = '#fff';

// constants for numbers and symbols first
/* 
* Calculator objects!
*/

//Constructor function for all Calculators
function Calculator(pressedButton, total, currentValue, lastValue, buttons, display) {

  //declared properties
  this.pressedButton = pressedButton;
  this.total = total;
  this.currentValue = currentValue;
  this.lastValue = lastValue;
  this.display = display;

  // arithmetic methods (remember to insert html later)
  this.add = num => console.log(this.total += num);
  this.subtract = num => console.log(this.total -= num);
   this.multiply = num => console.log(this.total *= num);
  this.divide = num => console.log(this.total /= num);

  this.compute = function (symbol, num) {
    switch(symbol) {
      case '+':
      return this.add(num);
      case '-':
      return this.subtract(num);
      case '*':
      return this.multiply(num);
      case '/':
      return this.divide(num);
    }
  }


  // fancy button methods
   this.clear = _ => this.display = '0';
  this.flipSign = _ => (this.total > 0) ? this.total -= (this.total * 2) : this.total += (this.total * 2);


  /*
  Button clicking logic, will send this to the prototype once finished
  */
  

  // Still WORKING ON ALL THIS
  this.buttonClick = function(button) {
    this.currentValue = button;

    // Display 0 correctly until a number is given
    if(this.display == 0 && NUMBERS.includes(this.currentValue)){
      this.display = this.currentValue;
      this.lastValue = this.currentValue;
    }

    // if the last value was a number and the current value is a number, append the current value to the display;
    else if(NUMBERS.includes(this.lastValue) && NUMBERS.includes(this.currentValue)){
      this.display += `${this.currentValue}`; // add to the large number
      this.lastValue = this.currentValue;
    }

    // if the last value was a number and the current value is a symbol
    else if(NUMBERS.includes(this.lastValue) && SYMBOLS.includes(this.currentValue)) {
      // do stuff
      this.total = Number(this.display);
      this.lastValue = this.currentValue;
    }

    // if the last value was a symbol and the current value is a number, it's finally time to do some math
    else if(SYMBOLS.includes(this.lastValue) && NUMBERS.includes(this.currentValue)) {
      this.total = Number(this.display);
      let currentNumber = Number(this.currentValue);
      this.compute(this.lastValue, currentNumber);
      this.display = this.total;
      this.lastValue = this.currentValue;
      this.currentValue = 0;
    }
    // if  the last value was a symbol, and the CURRENT value is a symbol just change the operation and DON'T output!
    else if(SYMBOLS.includes(this.lastValue) && SYMBOLS.includes(this.currentValue)) {
      this.lastValue = this.currentValue;
    }
  }
}


const calc = new Calculator();
const output = document.getElementById('output');
const buttons = document.querySelectorAll('.btn');

calc.display = '0';
calc.currentValue = '0';
buttons.forEach(btn => {
  btn.firstChild.addEventListener('click', function() {
    calc.buttonClick(btn.firstChild.id);
    output.innerHTML = calc.display;
  });
});

