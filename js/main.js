// store the current value stored in calculator working memory
let currentTotal = 0

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
    appendToCurrentInput(buttonText)
}

// returns true if the value is an operator character (/*+-)
function isOperator(value) {
    if(value === "/" || value === "*" || value === "+" || value === "-") {
        return true
    } else { return false }
}

// each time a button is pressed, append the value (and the input field value if applicable) to the current equation string
function appendToCurrentInput(valueToAppend) {
    // if current input is empty, disregard any attempt to engage an operator (/*+-)
    if(inputField.value === "" && isOperator(valueToAppend)) { return }
    // otherwise, append the value to the input field
    //console.log(`Input Value before: (${inputField.value}) valueToAppend: (${valueToAppend})`)
    let appendedValue = inputField.value.concat(valueToAppend)
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
        //console.log(`Input Value after: ${inputField.value}`)
    }
}

// when the user selects "Equals", append the final input field value and parse the current equation
function calculate() {
    // parse the current equation into numeric arithmetic, calculate the result and display it to the input field
}