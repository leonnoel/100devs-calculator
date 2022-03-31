//Eric Gallegos
//Problems: the calculator methods often reference the calculator object after its made
//rather than a reference that works from within the constructor.

// calculator constructor
function Calc(){
  this.display = document.querySelector('.calcValue');
  this.value = '';
  this.buffer = 0;
  this.operator = '+'; // default operator so inital value is added to buffer

////////////////////////////////////////////
//update display method
  this.refresh = function(){
    if(this.value == ''){
      calc.display.innerHTML = '0';
    }
    else
      calc.display.innerHTML = calc.value;
  }
///////////////////////////////////////////////
//receive input method
  this.input = function(){
    if(this.classList.contains('number')){
      calc.value += this.innerHTML;
      console.log(calc.value);
      calc.refresh();
    }
    else if(this.classList.contains('operator')){
      calc.eval(this.innerHTML);
      calc.refresh();
    }
  }
  /////////////////////////////////////////////
  //evaluation method
  this.eval = function(operator){
    if(calc.operator == '+') { //addition
      calc.buffer += +calc.value;
    }
    else if(calc.operator == '-') {//subtraction
      calc.buffer -= +calc.value;
    }
    else if(calc.operator == 'x') {//multiplication
      calc.buffer *= +calc.value;
    }
    else if(calc.operator == '/') {//division
      calc.buffer /= +calc.value;
    }
    calc.operator = operator; //set operator to be used next

    if(operator == '='){  //
      calc.value = calc.buffer.toString(); // pull value from the buffer
      calc.buffer = 0;
      calc.operator = '+'; //reset operator back to default
      return; // leave function without resetting calc.value so the display shows the answer
    }
    calc.value = ''; //resets display to 0 whenever an operator is used except =
  }
  /////////////////////////////////////////////
  //reset calcultor to default values
  this.reset = function(){
      calc.value = '';
      calc.buffer = 0;
      calc.operator = '+';
      calc.refresh();
  }
}

const calc = new Calc(); // create a new calc object;
calc.refresh();          // initialise the display

document.querySelectorAll('.button').forEach(button =>
    button.addEventListener('click', calc.input));

document.querySelector('.display').addEventListener('click', calc.reset)
