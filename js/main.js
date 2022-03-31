//Eric Gallegos
//Problems: the calculator methods often reference the calculator object after its made
//rather than a reference that works from within the constructor.

// calculator constructor
function Calc(){
  this.display = document.querySelector('.calcValue');
  this.value = '';
  this.buffer = 0;
  this.operator = '+'; // default operator so inital value is added to buffer

///////////////////////////////////////////////////////////////////////////////////////
//update display method
  this.refresh = function(obj, section){
    if(this.value == ''){ // if value is empty string, show 0 on display
      calc.display.innerHTML = '0';
    }
    else calc.display.innerHTML = calc.value; // otherwise show string in value;
  }

////////////////////////////////////////////////////////////////////////////////////////
//receive input method
  this.input = function(obj, section){
    if(section.classList.contains('number')){ // if number add it to display string
      obj.value += section.innerHTML;
      obj.refresh(obj, section);
    }
    else if(section.classList.contains('operator')){ // if operator perform evaluation
      obj.eval(section.innerHTML, obj);
      obj.refresh(obj, section);
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////
  //evaluation method
  this.eval = function(operator, obj){
    if(obj.operator == '+') { //addition
      obj.buffer += +obj.value;
    }
    else if(obj.operator == '-') {//subtraction
      obj.buffer -= +obj.value;
    }
    else if(obj.operator == 'x') {//multiplication
      obj.buffer *= +obj.value;
    }
    else if(obj.operator == '/') {//division
      obj.buffer /= +obj.value;
    }
    obj.operator = operator; //set operator to be used next

    if(operator == '='){  //In this case display the buffer and reset values
      obj.value = obj.buffer.toString(); // pull value from the buffer
      obj.buffer = 0;
      obj.operator = '+'; //reset operator back to default
      return; // leave function without resetting calc.value so the display shows the answer
    }
    obj.value = ''; //resets display to 0 whenever an operator is used except =
  }

  ///////////////////////////////////////////////////////////////////////////////////
  //reset calcultor to default values
  this.reset = function(obj, section){
      obj.value = '';
      obj.buffer = 0;
      obj.operator = '+';
      obj.refresh();
  }
}
//////////////////////////////////////////////////////////////////////////////////////
//main
const calc = new Calc(); // create a new calc object;
const display = document.querySelector('.display');
calc.refresh(calc, display);          // initialise the display

document.querySelectorAll('.button').forEach(button =>
    button.addEventListener('click', function(){calc.input(calc, button)}));

document.querySelector('.display').addEventListener('click', function(){calc.reset(calc, display)});
