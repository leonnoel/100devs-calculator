document.querySelectorAll('.buttons').forEach(item => {     // numerical values buttons
    item.addEventListener("click", clickedNumber)
});

document.querySelectorAll('.operators').forEach(item => {     // operator buttons
    item.addEventListener("click", clickedOperator)
});

document.querySelector('.dot').addEventListener("click", doDecimalNumbers)   //dot, decimal numbers

document.getElementById('finalCalculation').addEventListener("click", calculating)   //  equal button/calculation

document.querySelector('.clear').addEventListener("click", allClear) // clear everything

let str = ""
let leftNumber = ""
let rightNumber = ""
let operator = ""

function clickedNumber() {
    if(operator === "") {
        leftNumber += this.value
    } else {
        rightNumber += this.value
    }  
    leftNumber = leftNumber.substring(0,5)
    rightNumber = rightNumber.substring(0,5)  
    str = leftNumber + operator + rightNumber
    document.querySelector(".result").innerText = str
}

function doDecimalNumbers () {
    if (leftNumber !== "" && operator === "" && !leftNumber.includes(".")) {
        leftNumber += "."
    } else if (operator !== "" && rightNumber !=="" && !rightNumber.includes(".")) {
        rightNumber += "."
    }
    str = leftNumber + operator + rightNumber
    document.querySelector(".result").innerText = str
}

function clickedOperator () {
    if (leftNumber !== "" && rightNumber === "") {
        operator = this.value
    }
    str = leftNumber + operator + rightNumber
    document.querySelector(".result").innerText = str
}

function calculating () {
    let numberResult = ""
    if(leftNumber === "" || rightNumber=== "" || operator=== "") {
        return 
    } else if (operator === '+') {
        numberResult = Number(leftNumber) + Number(rightNumber)
    } else if(operator === '-') {
        numberResult = Number(leftNumber) - Number(rightNumber)
    } else if(operator === 'x') {
        numberResult = Number(leftNumber) * Number(rightNumber)
    } else if(operator === '/') {
        numberResult = Number(leftNumber) / Number(rightNumber)
    }
    document.querySelector(".result").innerText = Number(numberResult)
    clearResult()
}

function clearResult() {
    str = ""
    leftNumber = ""
    rightNumber = ""
    operator = ""
}

function allClear () {
    clearResult ()
    document.querySelector(".result").innerText = ""
}