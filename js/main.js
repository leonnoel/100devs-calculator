

// NUMBER KEY EVENT LISTENERS
document.querySelector('#zero').addEventListener('click', function(){pressKey(0)})
document.querySelector('#one').addEventListener('click', function(){pressKey(1)})
document.querySelector('#two').addEventListener('click', function(){pressKey(2)})
document.querySelector('#three').addEventListener('click', function(){pressKey(3)})
document.querySelector('#four').addEventListener('click', function(){pressKey(4)})
document.querySelector('#five').addEventListener('click', function(){pressKey(5)})
document.querySelector('#six').addEventListener('click', function(){pressKey(6)})
document.querySelector('#seven').addEventListener('click', function(){pressKey(7)})
document.querySelector('#eight').addEventListener('click', function(){pressKey(8)})
document.querySelector('#nine').addEventListener('click', function(){pressKey(9)})
// DECIMAL KEY EVENT LISTENER
document.querySelector('#decimal').addEventListener('click', function(){pressKey('.')})


// OPERATOR KEY EVENT LISTENERS
document.querySelector('#divide').addEventListener('click', function(){pressKey('/')})
document.querySelector('#multiply').addEventListener('click', function(){pressKey('x')})
document.querySelector('#add').addEventListener('click', function(){pressKey('+')})
document.querySelector('#subtract').addEventListener('click', function(){pressKey('-')})

// EQUALS KEY EVENT LISTENER
document.querySelector('#equals').addEventListener('click', function() {pressKey('=')})

// RESET AND BACKSPACE LISTENERS
document.querySelector('#reset').addEventListener('click', pressReset)
// document.querySelector('#backspace').addEventListener('click', pressBackspace)

// ------INITIALIZE DISPLAY TO 0------------
document.querySelector('#result').innerText = 0



// DECLARE OPERAND AND OPERATOR VARIABLES
const inputArray = []
let result = 0
let isResult = false
let decimalWaiting = false

// ------RESET AND BACKSPACE BUTTONS --------
function pressReset() {
  while (inputArray.length) { inputArray.pop(); }
  result = 0
  isResult = false
  decimalWaiting = false
  document.querySelector('#result').innerText = 0
  document.querySelector('.equation').innerText = null
  console.log(inputArray)
}
function pressBackspace() {
  //THIS IS THE WAY OF THE FUTURE- MUST REWRITE NUMBER KEYS TO NOT AUTOMATICALLY JOIN UNLESS EQUALS OR.. OPERATOR PRESSED..... but when operator pressed, if you want to backspace for than once... holy shit. so maybe only when doMath is run.... read through array and put it al together THEN. THIS BE DA WAY.... but not yet. Trying to work with current codebase, just need a more complex function here for backspace for now.
  // inputArray.pop()
  // document.querySelector('#result').innerText = inputArray
  // console.log(inputArray)


  //as I said above, trying to work with current codebase, just need a more complex function here for backspace for now. Such follows, copied from decimalPressed and modded:
//Reset isResult flag.


if(inputArray[0] === undefined || inputArray[0] == 0) { //if array empty or equal to 0, ignore.
  console.log('ignoring backspace cuz already empty')
  return
}

lastArrayItem = getLastArrayItem(inputArray) //grab last array item for comparison

////if last array item is not a number and not a decimal(it's an operator), push a decimal point while waiting for a number- we're at 0.0
if(isNaN(lastArrayItem)){ 
  inputArray.push('0.')
  result = '0.'
  return
}

//if the last array item is a decimal, OR if it is not evenly divisible by 1(meaning it is not an integer, and therefore already contains a decimal point), ignore
if(lastArrayItem === '.' || lastArrayItem % 1 != 0) { 
  console.log('ignored due to previous decimal or previous value containing a float')
  return
}

//If last array item is a number... place decimal in array and merge when new number entered
if(!isNaN(lastArrayItem)) {
  result = `${lastArrayItem}.`
  inputArray.push('.')
  decimalWaiting = true
  return
  
}
}

// ----OPERAND AND OPERATOR BUTTONS----
// Push a key function:
function pressKey(currentButton) {
  if(currentButton === '=') { //if they pressed equals, just do the math and get out
    doMath('=')
  }
  else if(currentButton === '.') { 
    decimalPressed()
  }
  else if(isNaN(currentButton)) { //if button pressed is not a number, it is an operator. call operator processing function.
    operatorPressed(currentButton) 
  } else {            //else, then button is a number. call number processing function.
    numberPressed(currentButton) 
  }

  console.log(inputArray)
  console.log(`array length: ${inputArray.length}`)
  console.log(`result is ${result}`)
  // if(isResult === true) 
  // result = removeFloatingZeroes(result) ////passes result in to have floating zeroes removed, returning new result value from the function
  // result = trimDigits(result) //passes result in to be trimmed, returning new result value fromthe function
  fillResultWindow()
  fillEquationWindow(currentButton)
  console.log(`decimalWaiting is ${decimalWaiting}`)
  console.log(`isResult is ${isResult}`)
  console.log(`----END OF BUTTONPRESS-----`)
}


//DECIMAL PRESSED
function decimalPressed() {
  //Reset isResult flag.
  if(isResult === true) {
    // console.warn('isResult decimal version has triggered me')
      inputArray.pop()
      console.log('we poppin')
    //   inputArray.push('0.')
    //   result = getLastArrayItem(inputArray) //fill display window
      isResult = false //turn isResult off again
      // return
  }

  if(inputArray[0] === undefined || isResult) { //if decimal is first, push decimal point to array and simulate on screen.
    inputArray.push('0.')
    result = '0.'
    return
  }

  lastArrayItem = getLastArrayItem(inputArray) //grab last array item for comparison

  ////if last array item is not a number and not a decimal(it's an operator), push a decimal point while waiting for a number- we're at 0.0
  if(isNaN(lastArrayItem)){ 
    inputArray.push('0.')
    result = '0.'
    return
  }

  //if the last array item is a decimal, OR if it is not evenly divisible by 1(meaning it is not an integer, and therefore already contains a decimal point), ignore
  if(lastArrayItem === '.' || lastArrayItem % 1 != 0) { 
    console.log('ignored due to previous decimal or previous value containing a float')
    return
  }

  //If last array item is a number... place decimal in array and merge when new number entered
  if(!isNaN(lastArrayItem)) {
    result = `${lastArrayItem}.`
    inputArray.push('.')
    decimalWaiting = true
    return
    
  }
  
  
  

}


// How to respond when a number key is pressed.
function numberPressed(currentNumber) {
  if(inputArray[0] === undefined) { //if this is the first key pressed (if inputArray is empty)- add current number pressed to array.
    console.log('this is the first button pressed')
    inputArray.push(currentNumber)
    result = inputArray[0]
    console.log(`your result is ${result}`)
    return
  } else console.log('not the first button pressed')

  //if this number is NOT the first key pressed, check most recent array item. THEN, if it's a number, check if it is a result. if it is a result, reset and start anew. if it is NOT a result, then append. If it's an operator, start new number in next array slot.
  lastArrayItem = getLastArrayItem(inputArray) //caluculate last array item with separate function

  //----------DECIMAL CHECKER AND PLACER----------
  if(lastArrayItem === '.' || lastArrayItem === '0.'){

    //IF THERE'S A DECIMAL WAITING, MERGE + APPEND
    if(decimalWaiting === true) {
      console.log('decimal is waiting')
      inputArray.pop() //remove last array DECIMAL
      preDecimalNumber = inputArray.pop() //remove and store the number before the decimal
      newNumber = (`${preDecimalNumber}.${currentNumber}`) //create new number concatenating decimal point and currentNumber
      inputArray.push(newNumber) //insert newNumber back into the array
    } 

    else if(decimalWaiting === false) {
    inputArray.pop() //remove last array DECIMAL 
    newNumber = (`0.${currentNumber}`) //create new number concatenating decimal point and currentNumber
    inputArray.push(newNumber) //insert newNumber back into the array
    }

    //After merging decimals above, add to array, update result
    result = getLastArrayItem(inputArray) //fill display window
    console.log(`your new decimalwaiting falsenumber is ${newNumber}`)
    return
  }

  //if last Array Item is a number, check if it is a result. if so, reset and start anew with current butten. if NOT, then add digit to previous number.
  if(!isNaN(lastArrayItem)){
    console.log('last array item is a number')
    //if the current array'd operand is a result, reset instead of appending.
    if(isResult === true) { 
      console.warn('isResult has triggered me')
      inputArray.pop()
      inputArray.push(currentNumber)
      result = getLastArrayItem(inputArray) //fill display window
      isResult = false //turn isResult off again
      return
    } 

    //if current array'd operand is not a result, then append to it
    lastNumber = inputArray.pop() //remove last array number and store it in lastNumber
    newNumber = (`${lastNumber}${currentNumber}`) //create new number concatenating lastNumber and currentNumber
    inputArray.push(newNumber) //insert newNumber back into the array
    result = getLastArrayItem(inputArray) //fill display window
    console.log(`your new number is ${newNumber}`)
  }
    else { //if last Array Item is not a number, then it's an operator. Start new number in text array slot.
      console.log('last array item is an operator')
      inputArray.push(currentNumber)
      isResult = false //set isResult to false now that an operator has been added
      result = getLastArrayItem(inputArray) //fill display window
    }
  }




// How to respond when an operator key is pressed.
function operatorPressed(currentOperator) {
  isResult = false //reset isResult to avert any decimal shenanigans 
  if(inputArray[0] === undefined) { //if this operator the first key pressed (if inputArray is empty)- ignore
    return
  }
  else { //IF this operator is NOT the first key pressed, check array length. if only 1 long, add to inputArray. If 3 long, perform previous math, set answer to first array item, then add this operator to inputArray
    if(inputArray.length === 1) { //array has only 1 value in it, so add operand as second value.
      inputArray.push(currentOperator)
    }
    else if(inputArray.length === 2) { //array has 2 values- number, then operator. ignore input
      return
    }
    else if(inputArray.length === 3) { //array has 3 values- number, operator, number. solve equation, reset array, and append new operator.
      doMath()
      isResult = false
      inputArray.push(currentOperator)
    }
  }
}

//HELPER - fillEquationWindow() - updates the equation window memory display thing
function fillEquationWindow(equalsPressed) {
  if(equalsPressed === '='){
    return
  }
  else {
  let equation = inputArray.join(' ')
  console.log(equation)
  document.querySelector('.equation').innerText = equation //fill equation window
}
}

// HELPER - Fill Result/Main window
function fillResultWindow(resultToPass) { 
  if(resultToPass != undefined){ //If a value was passed in, then display that.
    document.querySelector('#result').innerText = resultToPass
  }
  else { //Otherwise, display result (global variable)
    document.querySelector('#result').innerText = result
  }
}

// HELPER - doMath() - Does all the math when equals pressed, or when operator pressed after array is 3 long [number, operator, number]
function doMath(equalsPressed) {
  if(equalsPressed = true){
    inputArray.push('=')
    fillEquationWindow()
    equalsPressed = false
    inputArray.pop()
    if(inputArray.length <= 2) return
  }

  
  operandTwo = Number(inputArray.pop())
  operator = (inputArray.pop())
  operandOne = Number(inputArray.pop())
  if(operator === '+') {
    solution = (parseFloat(operandOne) + parseFloat(operandTwo))
    .toFixed(7)  
  }
  else if(operator === '-') {
    solution = (parseFloat(operandOne) - parseFloat(operandTwo)).toFixed(7)  
  }
  else if(operator === 'x') {
    solution = (parseFloat(operandOne) * parseFloat(operandTwo)).toFixed(7)  
  }
  else if(operator === '/') {
    solution = (parseFloat(operandOne) / parseFloat(operandTwo)).toFixed(7)  
  }
  solution = removeFloatingZeroes(solution)
  inputArray.push(solution)
  console.log(`your solution is ${solution}`)
  result = solution
  isResult = true
  decimalWaiting = false
}
//MATH HELPER - ELIMINATES TRAILING ZEROES AFTER DECIMAL POINT IN FLOATS to hide wonky JS float arithmetic
function removeFloatingZeroes(solutionToSplit){
  console.log(`entered removeFloatingZeroes with ${solutionToSplit}`)
  //Immediately return the same input and ignore this function.
  // if (solutionToSplit % 1 === 0) {
  //   console.log(`solutionToSplit is ${solutionToSplit} and`)
  //   console.log(`number is integer, return input solution`)
  //   return solutionToSplit

  // }
  //Convert solution into an array, and REVERSE THAT ARRAY so we travel through the values backwards
  console.log(`solutionToSplit is ${solutionToSplit} pre split`)

  solutionToSplit = solutionToSplit.toString()
  console.log(`solutionToSplit is ${solutionToSplit} as a string`)
  console.warn(`solutionToSplit is ${solutionToSplit} and is type ${typeof solutionToSplit}`)
  solutionArray = solutionToSplit.split('').reverse()
  console.log(`solutionArray is ${solutionArray}`)
  console.log(`solutionArray is ${solutionArray}`)
  //go through each digit of the array from left to right (right to left, we're reverse, remember)
  //when a zero is detected, trim it.
  //When a non-zero digit is detected, return.
  solutionLength = solutionArray.length
  while(solutionArray[0] === '0') {
    solutionLength = solutionArray.length
    console.log(solutionArray)
    console.log(`solutionLength is ${solutionLength}`)
    solutionArray.shift() 
    console.log('we trimmin')  
  }
  console.log(`solutionArray is ${solutionArray}`)
  console.log('finished trimming zeroes, checking for unneccessary decimal')
  //
  if(solutionArray[0] === '.') solutionArray.shift()
  solutionArray.reverse()  //spin it back around
  trimmedSolution = solutionArray.join('')
  console.log('array remerged')
  return trimmedSolution
  console.log('you shouldn\'t be here')
}



// HELPER - getLastArrayItem() - Returns the value of the last item in an array
function getLastArrayItem(inputArray) {
  let arrayLength = inputArray.length
  console.log(inputArray[arrayLength - 1])
  return inputArray[arrayLength - 1]
}

// HELPER - Limit output characters to 11 long
// function trimDigits(windowValue) {
//   windowValue.toString
//   console.log(`windowValue is ${windowValue}`)

//   resultLength = windowValue.length
//   console.log(`resultLength is ${resultLength}`)
//   if(resultLength <= 10){
//     console.log('10 digits or less')
//     return
//   }
//   console.log(`${resultLength} shit long number`)

// }


// PSEUDO CODE:
 