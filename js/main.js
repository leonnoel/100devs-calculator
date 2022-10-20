/* = = = = = = = = = = = Variables = = = = = = = = = = = */

let currentNum = "";
let previousNum = "";
let operator = "";

// Display
const displayNumber = document.querySelector(".screen")

// Keys
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".all-clear");


/* = = = = = = = = = = = Event Listeners = = = = = = = = = = = */

// Number Buttons
numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        parseNumber(e.target.value);
    });
});

// Operator Buttons
operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        parseOperator(e.target.value);
    })
})

// Decimal Button
decimal.addEventListener("click", parseDecimal);

// Equal Button
equal.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "") {
        calc();
    }
});

// Clear Button
allClear.addEventListener("click", clear);


/* = = = = = = = = = = = Functions = = = = = = = = = = = */

// Store Numbers
function parseNumber(number) {
    if (previousNum == "" && currentNum == "" && displayNumber.value === "-") {
        currentNum = operator;
        displayNumber.value = currentNum;
    }
    if (previousNum !== "" && currentNum !== "" && operator === "") {
        previousNum = "";
        displayNumber.value = currentNum;
    }
    if (currentNum.length < 10) {
        currentNum += number;
        displayNumber.value = currentNum;
    }
}

// Store Operators
function parseOperator(op) {
    if (previousNum === "") {
        previousNum = currentNum;
        operatorCheck(op);
    } else if (currentNum === "") {
        operatorCheck(op);
    } else {
        calc();
        operator = op;
        displayNumber.value += operator;
    }
}

// Continue Operators
function operatorCheck(text) {
    operator = text;
    displayNumber.value = previousNum + operator;
    currentNum = "";
}

// Store Decimal
function parseDecimal(dot) {
    if (currentNum == false) {
        currentNum = "0.";
    } else if (currentNum.includes(".")) {
        return;
    } else {
        currentNum += dot.target.value;
    }
    displayNumber.value = currentNum;
}

// Calculate
function calc() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    switch (operator) {
        case "+":
            previousNum = previousNum + currentNum;
            break;
        case "-":
            previousNum = previousNum - currentNum;
            break;
        case "*":
            previousNum = previousNum * currentNum;
            break;
        case "/":
            if (currentNum <= 0) {
                previousNum = "Error"
                displayResults();
                return;
            }
            previousNum = previousNum / currentNum;
            break;
        default:
            return;
    }

    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResults();
}

// Round Number
function roundNumber(num) {
    return Math.round(num * 1000000) / 1000000;
}

// Display Results
function displayResults() {
    if (previousNum.length < 10) {
        displayNumber.value = previousNum;
    } else {
        displayNumber.value = previousNum.slice(0, 9) + "...";
    }
    operator = "";
    currentNum = "";
}

// Clear
function clear() {
    displayNumber.value = "0";
    previousNum = "";
    currentNum = "";
    operator = "";
}