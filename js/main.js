//object calculator

const numbers = document.querySelectorAll('[num]');
const operators = document.querySelectorAll('[op]');
const equals = document.querySelector('[eq]');
const output = document.getElementById('output');

const calcOOP = {
  _num1: 0,
  _heldOp: '',
  _writing: false,

  //buttons for 0-9, . 
  numBut: function(num){
    //this prevents writing to answers
    if(!this._writing){
      output.innerText = '0';
      this._writing = true;
    }
    // if ., check to see if already used, if not, append . to string
    if(num === '.'){
      output.innerText.includes('.')? true : output.innerText += num;
      return;
    }
    // if 0, overwrite, else append
    output.innerText === "0"? output.innerText = String(num) : output.innerText += num; 
    return;
  }, 

  //buttons for operators
  opBut: function(op){
    this._writing = false;
    //if already holding a number, complete function and hold in total (ie 2+2+... reduces to 4+...)
    if(this._num1 !== 0){
      output.innerText = this._operation(this._num1,this._heldOp,Number(output.innerText));
    }
    //convert string to number, hold in storage
    this._num1 = Number(output.innerText);
    //hold operator
    this._heldOp = op;
    return;
  },

  //button for =
  eqBut: function(){
    this._writing = false;
    //perform operation
    output.innerText = this._operation(this._num1,this._heldOp,Number(output.innerText));
    this._num1 = 0;
    return;
  },

  _operation: function(num1,op,num2){
    this._heldOp = '';
    switch(op){
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default: //all others, including none, reset
        return '0';
    }
  },
}

numbers.forEach(button => {
  button.addEventListener('click', () => calcOOP.numBut(button.innerText));
});

operators.forEach(button => {
  button.addEventListener('click', () => calcOOP.opBut(button.innerText));
});

equals.addEventListener('click', () => calcOOP.eqBut());