// store the current value stored in calculator working memory, and the current operator if selected
let currentTotal = 0 // the current total stored in memory
let currentOperator = "" // the current operator (/*+-) stored in memory
let currentRightHandSideValue = NaN // the current value on the right side of the current operator, stored in memory
let currentTotalDisplayed = false

// store the input field, numbers can be typed in or added using the number buttons
const inputField = document.getElementById("inputField")

// operatorActive is true if an operator button has been pressed, becomes false when the equals button is pressed
let operatorActive = false

// set up event listeners for all buttons
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', event => {
    console.log(`Button Pressed: ${button.innerText}`)
    buttonPressed(button.innerText)
  })
);


// callback function for buttons, determine what needs to be appended to the current equation
function buttonPressed(buttonText) {
    // return out if there is no innerText
    if(buttonText === null) { return }
    // if the equals button is pressed, call the calculate function and return out
    if(buttonText === "=") {
        calculate()
        return
    }

    // with any other button, append the inner text to the current equation
    processInput(buttonText)
}

// returns true if the value is an operator character (/*+-)
function isOperator(value) {
    if(value === "/" || value === "*" || value === "+" || value === "-") {
        return true
    } else { return false }
}

// each time a button is pressed, append the value (and the input field value if applicable) to the current equation string
function processInput(newInput) {
    const operatorValue = isOperator(newInput)
    // if current input is empty, disregard any attempt to engage an operator (/*+-)
    if(inputField.value === "" && operatorValue) { return }

    // if an operator was selected after another operator already active, change the current operator and return
    if(operatorValue && currentOperator != "") {
        console.log(`current operator ${currentOperator} replaced with ${newInput}`)
        currentOperator = newInput
    }

    // if the input is not empty and an operator was selected...
    if(operatorValue) {
        const tempInputNumber = parseFloat(inputField.value)

        // if the parsed number is NaN, return out
        if(isNaN(tempInputNumber)) { 
            console.log(`inputField value is ${tempInputNumber}!`)
            return
        }

        // if the right-hand-value total already has a value stored, selecting an operator will cause a calculate() with the current operator before updating to the new operator (operator chaining)
        /*if(currentOperator != "" && !isNaN(currentRightHandSideValue)) {
            console.log("Operator chain - calculate results with stored RHS value")
            calculate()
            currentOperator = newInput
            return
        }*/

        // otherwise, update the current total to the input field value, store the current operator, and clear the input field
        currentOperator = newInput
        currentTotal = tempInputNumber
        inputField.value = ""
        return
    }

    // otherwise the value is a number or decimal point, so append the value to the input field

    //console.log(`Input Value before: (${inputField.value}) valueToAppend: (${valueToAppend})`)
    let appendedValue = inputField.value.concat(newInput)
    //console.log(`Appended Value: ${appendedValue}`)

    parsedNumber = parseFloat(appendedValue)
    // if the parsed number is NaN, return out
    if(isNaN(parsedNumber)) { 
        console.log(`Parsed Number is ${parsedNumber}!`)
        return
    }
    // otherwise check maxlength, then assign the parsed number back to the input field value
    if (inputField.value.length < inputField.maxLength) {
        inputField.value = parsedNumber
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
    if(currentOperator === "") { return }

    // if there is already a right-hand-side value (equals button chaining), use it as the RHS value in the arithmetic
    if(!isNaN(currentRightHandSideValue) && currentTotalDisplayed) {
        tempInputNumber = currentRightHandSideValue
    }

    console.log(`Current Equation: ${currentTotal} ${currentOperator} ${tempInputNumber}`)
    // Perform the arithmetic on the two values
    switch (currentOperator) {
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
            console.log(`invalid operator: ${currentOperator}!`)
            break;
    }

    console.log(`Equation Result: ${calculatedValue}`)

    // update the stored current total value, display it in the input field, reset the current operator
    currentRightHandSideValue = tempInputNumber
    currentTotal = calculatedValue
    inputField.value = currentTotal
    currentTotalDisplayed = true
}
