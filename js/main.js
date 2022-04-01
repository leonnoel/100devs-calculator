let calculation = ""
let screen = document.querySelector("#screen")

document.querySelector("#zero").addEventListener("click", function() {
    calculation += "0"
    screen.textContent = calculation
})
document.querySelector("#one").addEventListener("click", function() {
    calculation += "1"
    screen.textContent = calculation
})
document.querySelector("#two").addEventListener("click", function() {
    calculation += "2"
    screen.textContent = calculation
})
document.querySelector("#three").addEventListener("click", function() {
    calculation += "3"
    screen.textContent = calculation
})
document.querySelector("#four").addEventListener("click", function() {
    calculation += "4"
    screen.textContent = calculation
})
document.querySelector("#five").addEventListener("click", function() {
    calculation += "5"
    screen.textContent = calculation
})
document.querySelector("#six").addEventListener("click", function() {
    calculation += "6"
    screen.textContent = calculation
})
document.querySelector("#seven").addEventListener("click", function() {
    calculation += "7"
    screen.textContent = calculation
})
document.querySelector("#eight").addEventListener("click", function() {
    calculation += "8"
    screen.textContent = calculation
})
document.querySelector("#nine").addEventListener("click", function() {
    calculation += "9"
    screen.textContent = calculation
})
document.querySelector("#dot").addEventListener("click", function() {
    calculation += "."
    screen.textContent = calculation
})
document.querySelector("#plus").addEventListener("click", function() {
    calculation += "+"
    screen.textContent = calculation
})
document.querySelector("#minus").addEventListener("click", function() {
    calculation += "-"
    screen.textContent = calculation
})
document.querySelector("#multiply").addEventListener("click", function() {
    calculation += "*"
    screen.textContent = calculation
})
document.querySelector("#divide").addEventListener("click", function() {
    calculation += "/"
    screen.textContent = calculation
})
document.querySelector("#equal").addEventListener("click", function() {
    let result = plusOrMinus(calculation)
    calculation = ""
    screen.textContent = result
})

function plusOrMinus(subCalculation) {
    if (subCalculation.length == 0) {
        throw "Empty calculation"
    }
    for (let i = 0; i < subCalculation.length; i++) {
        if (subCalculation[i] == "+") {
            return plusOrMinus(subCalculation.substring(0, i)) + plusOrMinus(subCalculation.substring(i + 1))
        }
        if (subCalculation[i] == "-") {
            return plusOrMinus(subCalculation.substring(0, i)) - plusOrMinus(subCalculation.substring(i + 1))
        }
    }
    return multiplyOrDivide(subCalculation)
}
function multiplyOrDivide(subCalculation) {
    if (subCalculation.length == 0) {
        throw "Empty calculation"
    }
    for (let i = 0; i < subCalculation.length; i++) {
        if (subCalculation[i] == "*") {
            return multiplyOrDivide(subCalculation.substring(0, i)) * multiplyOrDivide(subCalculation.substring(i + 1))
        }
        if (subCalculation[i] == "/") {
            return multiplyOrDivide(subCalculation.substring(0, i)) / multiplyOrDivide(subCalculation.substring(i + 1))
        }
    }
    return Number(subCalculation)
}