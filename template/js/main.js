// Use strict
"use strict";

let calculator = {
    display: "",
    calculate: function(input) {
        let inputSplit = input.replace(/([\+\-\x\/])/g, ",$1,").split(",")
        let a = inputSplit[0]
        let operator = inputSplit[1] 
        let b = inputSplit[2]
        if ( /[0-9]/.test(a) && /[0-9]/.test(b) && /[\+\-\x\/]/.test(operator) ) {
            if (inputSplit.length === 3) {
                return {
                    "+": +a + +b,
                    "-": +a - +b,
                    "x": +a * +b,
                    "/": +a / +b
                }[operator]
            } else {
                inputSplit.splice(0, 3, {
                    "+": +a + +b,
                    "-": +a - +b,
                    "x": +a * +b,
                    "/": +a / +b
                }[operator])
                return this.calculate(inputSplit.join(""))
            }
        } else {
            return "Syntax Error"
        }
    }

}

// Listener
Array.from( document.querySelectorAll(".input")).forEach( a => a.addEventListener("click", displayInput) )
document.querySelector("#equal").addEventListener("click", displayOutput)


function displayInput(e) {
    let answer = document.querySelector("#answer")
    calculator.display += e.target.innerHTML
    answer.innerHTML = calculator.display
}

function displayOutput() {
    let answer = document.querySelector("#answer")
    let ans = Math.round((calculator.calculate(calculator.display) + Number.EPSILON) * 10000000000) / 10000000000
    calculator.display = ans
    answer.innerHTML = ans
}


