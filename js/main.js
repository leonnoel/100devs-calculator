const display = document.querySelector('.calcDisplay');
const buttons = document.querySelectorAll('.calcButton');
let bon = new Calculator();
[...buttons].forEach(button => button.addEventListener('click', bon.update));

function Calculator(){
  this.methods = {
    '+': (a, b) => +a + +b,
    '-': (a, b) => +a - +b,
    '*': (a, b) => +a * +b,
    '/': (a, b) => +b === 0 ? undefined : +a / +b,
  };
  this.operand = undefined;
  this.operator = undefined;
  this.update = event => {
    const input = event.target.getAttribute('value');

    if(!display.innerText || display.innerText === '0'){
      display.innerText = (Number.isInteger(+input) ? input : input === '.' ? '0.' : '0');
      if(input in this.methods){
        this.operand = input;
        display.innerText = '';
      };
    }
    // Makes sure that when display is empty or '0' we only add a number or '0.'. If we start with an operator, 
    else if(display.innerText.includes('.') && input === '.'){
      display.innerText += '';
    }
    // Prevent the input of multiple decimals
    else if(input in this.methods && !this.operator){
      if(display.innerText){
        this.operand = display.innerText;
        this.operator = input;
        display.innerText = '';
      }
    }
    // covers first operand and operator, resets display
    else if(this.operator && (input === '=' || input in this.methods)){
      if(display.innerText && this.operand){
        let response = this.methods[this.operator](this.operand, display.innerText);
        this.operand = response;
        display.innerText = input === '=' ? this.operand : '';
        this.operator = input === '=' ? undefined : '';
      }
    }
    // catches things that have an operator (when you press an operation or =) only updates when there's a second operand(innerText)
    else if(input !== '='){
      display.innerText += input;
    }
  }
};

//
// Calculator:
// we input numbers in
// display updates them
// we input operators
// display updates them
// MEMORY:
// value 1
// value 2
// operator
// when we press = or press a new operator
// we use everything old up and then fix it back again