function MakeCalculator() {
 
  // Grab Result Window
  const resultDisplay = document.querySelector('#result')

  //Grab Equation Windowlet
  const equationWindow = document.querySelector('.equation')
  
  //Grab all the buttons so we can add event listeners via a loop
  buttons = document.querySelectorAll('.button')
  //Add event listeners to buttons
  buttons.forEach(button => {
    button.addEventListener('click', ()=> {pressButton(`${button.innerText}`)})
  })

  // Init variables
  let result = 0
  let lastKey = 'reset'
  let operator = false
  let equation = ''
  let firstOperand = null

  // Init Display window
  updateDisplay()

  //////////////////////////////////////////////
  // MAIN PRESS BUTTON FUNCTION
  function pressButton(button) {
    console.log(`${button} pressed!`)


    if(button === 'Reset') {
      resetPress()
    }

    if(button === '=') {
      equalsPressed()
    }

    if(button === '.') {
      decimalPressed()
    }

    // If button was a number, call numPress function
    if(button == +button) {
      // button = +button
      numPress(button)
      console.log(typeof button)
      reset = false
    }

    // If button was an operator, call operatorPress
    if(button === "+" || button === "-" || button === "x" || button === "÷" ) {    
      operatorPress(button)
    }

    // Update display after each button press
    updateDisplay()
  }
  // END MAIN PRESS BUTTON FUNCTION
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  // START BUTTON FUNCTIONS

  // NUMBER PRESSED
  function numPress(num) {

    // If result is currently at 0 or last button was an operator, set the result to the number pressed
    if (result === 0 || lastKey === 'operator') {
      result = num
      lastKey = 'number'
      return
    }

    // If last key was a number, concatenate new number onto end of result
    if (lastKey === 'number') {
      result = (String(result) + String(num))
      lastKey = 'number'
      return
    }

    // If last key was a decimal, concatenate
    if (lastKey === 'decimal') {
      if (num === 0) {

      } else {
        result = (String(result) + String(num))
        lastKey = 'number'
        return
      }
      lastKey = 'number'
    }
  }

  // DECIMAL PRESSED
  function decimalPressed() {
    //If a decimal there already, ignore
    if(String(result).includes('.')) return
    console.log('we decimaling')
    result = (String(result) + '.')
    lastKey = 'decimal'
  }


  // EQUALS PRESSED
  function equalsPressed() {
    if(operator === '+') {
      result = firstOperand + +result
    } else if (operator === '-') {
      result = firstOperand - +result
    } else if (operator === 'x') {
      result = firstOperand * +result
    } else if (operator === '÷') {
      result = firstOperand / +result
    }
    lastKey = 'equals'
    firstOperand = null
  }
  
  // OPERATOR PRESSED
  function operatorPress(operatorPressed) {
    if (lastKey === 'operator') {
      operator = operatorPressed
    } else {
      operator = operatorPressed
      lastKey = 'operator'
      firstOperand = +result

    }
  }


  // RESET PRESSED
  function resetPress() {
    result = 0
    lastKey = 'reset'
    firstOperand = null
    operator = false
    firstOperand = null
  }
  // END BUTTON FUNCTIONS
  //////////////////////////////////////////////

  // DISPLAY UPDATER
  function updateDisplay() {
    // Update result window
    resultDisplay.innerText = result

    // Update equation windowlet
    // if (!firstOperand) equation = result
    // else if(lastKey === 'operator') {
    //   equation = `${firstOperand} ${operator}`
    // } else if(lastKey === 'equals') {
      

    // } else equation = `${firstOperand} ${operator} ${result}`


    // equationWindow.innerText = equation
  }

}

const myCalc = new MakeCalculator()

console.log(myCalc)