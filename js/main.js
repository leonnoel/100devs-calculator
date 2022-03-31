// Use strict
"use strict";

// Create calculator object
let calculator = {
    // Set display property - holds the current display in the calculator
    display: "",

    // Set calculate method - calculates answer from the given expression of the user
    getAnswer: function() {
        function calculate(input) {
            // Parse the display to numbers and operators
            let inputSplit = input.replace(/([\+\-\x\/])/g, ",$1,").split(",")
            let num1 = inputSplit[0]
            let operator = inputSplit[1] 
            let num2 = inputSplit[2]
            // Check if the input follows the syntax
            if ( /[0-9]/.test(num1) && /[0-9]/.test(num2) && /[\+\-\x\/]/.test(operator) ) {
                // If input is valid, solve for the answer
                let answer = {
                    "+": +num1 + +num2,
                    "-": +num1 - +num2,
                    "x": +num1 * +num2,
                    "/": +num1 / +num2
                }[operator]
                if (inputSplit.length === 3) {
                    return answer
                } else {
                    inputSplit.splice(0, 3, answer)
                    return  calculate(inputSplit.join(""))
                }
            } else if (/[0-9]/.test(num1) && inputSplit.length === 1) {
                // Special case: if there is only number, return input
                return input
            } else {
                // Otherwise, show syntax error
                return "Syntax Error"
            }
        }
        // Execute recursion function
        return calculate(this.display)
    }

}

// Listen to user inputs (show inputs on display)
Array.from( document.querySelectorAll(".input")).forEach( a => a.addEventListener("click", showInput) )

// Listen to equals (show answer on display)
document.querySelector("#equal").addEventListener("click", showAnswer)

// Get display element
let display = document.querySelector("#display")

function showInput(e) {
    // Add user inputs to the calculator display
    calculator.display += e.target.innerHTML
    // Show current calculator display
    display.innerHTML = calculator.display
}

function showAnswer() {
    // Set calculator display to answer or syntax error
    let result = roundAnswer(calculator.getAnswer())
    calculator.display =  result === "NaN" ? "Syntax Error" : result
    // Show current calculator display
    display.innerHTML = calculator.display
}

function roundAnswer(x) {
    // Round answer to 10 decimal places, only when necessay
    return (Math.round((+x + Number.EPSILON) * 10000000000) / 10000000000).toString()
}