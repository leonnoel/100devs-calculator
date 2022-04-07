// store the current value stored in calculator working memory, and the current operator if selected
let currentTotal = NaN // the current total stored in memory
let activeOperator = "" // the current operator (/*+-) stored in memory
let currentRightHandSideValue = NaN // the current value on the right side of the current operator, stored in memory
let currentTotalDisplayed = false

// store the input field, numbers can be typed in or added using the number buttons
const inputField = document.getElementById("inputField")
inputField.innerText = 0

// operatorActive is true if an operator button has been pressed, becomes false when the equals button is pressed
let operatorActive = false

// set up event listeners for all buttons
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', event => {
    console.log(`Button Pressed: ${button.innerText}`)
    buttonPressed(button)
  })
);

function resetButtonStyles() {
    buttons.forEach(button => button.classList.remove("active"))
}

// callback function for buttons, determine what needs to be appended to the current equation
function buttonPressed(button) {
    const buttonText = button.innerText
    // return out if there is no innerText
    if(buttonText === null) { return }
    // if the equals button is pressed, call the calculate function and return out
    if(buttonText === "=") {
        calculate()
        return
    }
    // if an operator key ( / * + - ) is pressed, process that input
    if(isOperator(buttonText)) {
        resetButtonStyles()
        button.classList.add("active")
        processOperator(buttonText)
    } 
    else { // with any other button, append the inner text to the current equation
        processInput(buttonText)
    }
}

// returns true if the value is an operator character (/*+-)
function isOperator(value) {
    if(value === "/" || value === "*" || value === "+" || value === "-") {
        return true
    } else { return false }
}

// Called when an operator ( / * + - ) is pressed
function processOperator(operatorText) {
    const tempInputNumber = parseFloat(inputField.value)

    // if the parsed number is NaN, return out
    if(isNaN(tempInputNumber)) { 
        console.log(`inputField value is ${tempInputNumber}!`)
        return
    }

    console.log(`current operator ${activeOperator} replaced with ${operatorText}`)

    // make the operator button light up to show the user it is active
    // TODO:

    // if the current input is the right-hand-value, call calculate()
    console.log(`Current Total TEST: ${currentTotal}`)
    if(!currentTotalDisplayed && !isNaN(currentTotal)) {
        console.log("Operator chain")
        calculate()
        activeOperator = operatorText
        return
    }

    // otherwise store the current number and operator
    activeOperator = operatorText
    currentTotal = tempInputNumber
    currentTotalDisplayed = true
    console.log(`Current Total: ${currentTotal}`)
}

// Called when a number button is pressed
function processInput(newInput) {
    newNumber = parseFloat(newInput)
    if(isNaN(newNumber)) { // check for NaN
        console.log(`New Number is ${newNumber}!`)
        return
    }

    // if the current total is displayed, the new unput is starting a right-hand-value to display
    if(currentTotalDisplayed) {
        console.log(`New RHV is ${newNumber}!`)
        inputField.value = newNumber
        currentTotalDisplayed = false
        return
    }

    // otherwise continue to append values to the current input field

    //console.log(`Input Value before: (${inputField.value}) valueToAppend: (${valueToAppend})`)
    let appendedValue = inputField.value.concat(newInput)
    //console.log(`Appended Value: ${appendedValue}`)

    appendedNumber = parseFloat(appendedValue)
    // if the parsed number is NaN, return out
    if(isNaN(appendedNumber)) { 
        console.log(`Parsed Number is ${appendedNumber}!`)
        return
    }
    // otherwise check maxlength, then assign the parsed number back to the input field value
    if (inputField.value.length < inputField.maxLength) {
        inputField.value = appendedNumber
        currentTotalDisplayed = false
    }
}

// when the user selects "Equals", append the final input field value and parse the current equation
function calculate() {
    // parse the current equation into numeric arithmetic, calculate the result and display it to the input field
    let tempInputNumber = parseFloat(inputField.value)
    let calculatedValue = 0

     // if the parsed number is NaN, return out
    if(isNaN(tempInputNumber)) { 
         console.log(`inputField value is ${tempInputNumber}!`)
        return
    }

    // if there is no current operator, return out
    if(activeOperator === "") { return }

    // if there is already a right-hand-side value (equals button chaining), use it as the RHS value in the arithmetic
    if(!isNaN(currentRightHandSideValue) && currentTotalDisplayed) {
        tempInputNumber = currentRightHandSideValue
        console.log("Equals button chaining")
    }

    console.log(`Current Equation: ${currentTotal} ${activeOperator} ${tempInputNumber}`)
    // Perform the arithmetic on the two values
    switch (activeOperator) {
        case "/":
            calculatedValue = currentTotal / tempInputNumber
            break;
        case "*":
            calculatedValue = currentTotal * tempInputNumber
            break;
        case "+":
            calculatedValue = currentTotal + tempInputNumber
             break;
        case "-":
            calculatedValue = currentTotal - tempInputNumber
            break;
        default:
            console.log(`invalid operator: ${activeOperator}!`)
            break;
    }

    console.log(`Equation Result: ${calculatedValue}`)

    // update the stored current total value and display it in the input field
    currentRightHandSideValue = tempInputNumber
    currentTotal = calculatedValue
    inputField.value = currentTotal
    currentTotalDisplayed = true
}
