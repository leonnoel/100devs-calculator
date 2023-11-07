function Calculator() {
  //lets write some pseudocode to see what is required of us
  //we must add any button clicked to the evaluation screen of the calculator.
  //in the case the equal sign is pressed we need to evaluate the expression inside the expression, innerText
  //in the case C(clear) is pressed we should delete the last character from the expression
  //we need to grab all the operator buttons
  //we need to create methods to add, subtract, divide, and multiply
  //we need to set a conditional which will reset our current value to zero anytime an arithmetic operator is pressed
  //the current value h1 will also be where we print the result
  //lets first grab our buttons of number and operator into two seperate node lists
  //grabbing all the number and operator buttons
  const currentValueAndResult = document.querySelector('#current-value')

  const expression = document.querySelector('#expression')

  const numButtons = Array.from(document.querySelectorAll('.button_number'));
  
  const opButtons = Array.from(document.querySelectorAll('.button_operator'));

  this.evalButton = document.querySelector('#evaluate');
  
  //creating an array from both types of buttons to be able to use forEach on them
  //we can create a local function to be able to use in our event listener to add to our current value
  function inputNum(click) {
    console.log(Number(currentValueAndResult.innerText))
    if (currentValueAndResult.innerText == '0' || !(Number(currentValueAndResult.innerText))) {
      currentValueAndResult.innerText = '';
    }
    currentValueAndResult.innerText += click.target.innerText;
  }
  
  numButtons.forEach(button => button.addEventListener('click', inputNum))
  //we need to create a local function to handle the operator clicks
  function inputOp(click) {
    if (expression.innerText == '0') {
      expression.innerText = '';
    }
    if (!Number(currentValueAndResult.innerText)) {
      return;
    }
    expression.innerText += ` ${currentValueAndResult.innerText} ${click.target.innerText} `
    currentValueAndResult.innerText = click.target.innerText
  }

  opButtons.forEach(button => button.addEventListener('click', inputOp))
  
  //we need to set an event listener in that if a number button is pressed, we add it to our h1 string.
  // this.evaluate = function() {
// }
  // we need to set up a click event on our evaluation button to return the result of the current expression
  this.expression = expression
  this.evaluate = function() {
    this.evalButton.addEventListener('click', () => {
      if (!Number(currentValueAndResult.innerText)) {
        currentValueAndResult.innerText = 'Error!';
      }
      this.expression.innerText += currentValueAndResult.innerText;
      currentValueAndResult.innerText = eval(this.expression.innerText);
    })
  }
  this.evaluate();
}

const calculator = new Calculator();
calculator.evaluate();