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
  let currentValueAndResult = document.querySelector('#current-value')
  let numButtons = document.querySelectorAll('.button_number');
  numButtons = Array.from(numButtons);
  console.log(numButtons);
  //we can create a local function to be able to use in our event listener to add to our current value
  function inputNum(click) {
    if (currentValueAndResult.innerText == '0') {
      currentValueAndResult.innerText = '';
    }
    currentValueAndResult.innerText += click.target.innerText;
  }
  numButtons.forEach(button => button.addEventListener('click', inputNum))
  let opButton = document.querySelectorAll('.button_operator');

  //we need to set an event listener in that if a number button is pressed, we add it to our h1 string.
  // this.evaluate = function() {

  // }
}

const calculator = new Calculator();