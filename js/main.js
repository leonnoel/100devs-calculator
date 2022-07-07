const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');
const display = calculator.querySelector('.calculator_display');
calculator.dataset.operator = '';
calculator.dataset.previousNum = '';


// Event listener for calculator button clicks
keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
  const key = e.target
  const action = key.dataset.action
  let displayNum = display.textContent;
  let prevNum = calculator.dataset.previousNum;
  let operator = calculator.dataset.operator;

  if (!action) {
    //If calc display is 0, replace with button press. Otherwise append button value (as a string)
    if (display.textContent === '0') {
      display.textContent = key.textContent;
    } else {
      console.log("old val: ", displayNum)
      display.textContent += key.textContent;
    }
  }

  //Highlight active operator key after user clicks it 
  //TODO: Call calculate when prevValue,prevOperator, non-zero currentNum exist and user clicks an operator
  //      Ex. 81+9 gets calculated when user enters +-%*
  //TODO: Handle multiple operator presses. 
  if (
    action === 'add' ||
    action === 'minus' ||
    action === 'times' ||
    action === 'divide'
  ) {
    calculator.dataset.operator = action;
    if (prevNum !== '0') {
      calculator.dataset.previousNum = displayNum
      calculator.dataset.operator = action;
      key.classList.add('is-depressed') //  :(
      display.textContent = '0';
    }
  }

  //If user clicks the decimal key, add a '.' only if there isn't already one
  if (action === 'decimal' && !/[.]/g.test(displayNum)) {
    display.textContent += '.';
  }

  //Reset display and currentCalc to 0 if user clicks the clear button ("AC")
  if (action === 'clear') {
    display.textContent = '0';
  }

  //Calculate result when = button is clicked
  //TODO: Limit output to the number of digits that fit on the screen
  //      Extra: convert extra large or extra small numbers to an exponent (ex 2 * 10^8)
  if (action === 'calculate') {
    display.textContent = calculate(prevNum,displayNum,operator);
  }
  }

})


function calculate(num1,num2,operator) {
  let result = 0;
  switch(operator) {
    case "plus":
      return (parseFloat(num1) + parseFloat(num2));
      break;
    case "minus":
      return (parseFloat(num1) - parseFloat(num2));
      break;
    case "times":
      return (parseFloat(num1) * parseFloat(num2));
      break;
    case "divide":
      return (parseFloat(num1) / parseFloat(num2));
      break;
  }
}

/* On operator:
    save old num, operator type
      user could press operator keys multiple times. so just rewrite old num/operator until they enter a second num
    second num: allow number entry as before
    If user clicks an operator or enter, calculate last result

*/