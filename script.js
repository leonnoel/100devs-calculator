const buttons = document.querySelectorAll("button");
const displayNum = document.querySelector(".display");
var firstOperand = "";
var secondOperand = "";
var operator = null;
var prevOperator = null;
var operatorPressed = false;
var waitingForOperand = false;

// TO DO:
// FIX DECIMAL -> OPERATOR -> NUM = NaN
// set . to 0 if no other numbers are pressed

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        // reset font size
        document.querySelector(".display").style.fontSize = "";
        if (displayNum.innerText === "Cannot divide by 0") {
            clearDisplay();
            clearVariables();
        }

        if (!button.classList.contains("operator") && !button.classList.contains("function")) {
            if (button.getAttribute("data-num") === ".") {
                if (displayNum.textContent.includes(".")){
                    return;
                }
            }
            if (operatorPressed) {
                clearDisplay();
            }
            operatorPressed = false;
            // updateDisplay(button.innerText);
            displayNum.textContent = parseFloat(displayNum.textContent) !== 0 ? displayNum.textContent + button.innerText : button.innerText;

        // operator button is pressed
        } else if (button.classList.contains("operator")) {
            if (operatorPressed && button.innerText !== "=" && waitingForOperand !== true) {
                operator = button.innerText;
                waitingForOperand = true;
                console.log("waitingForOperand now set to true");
                return;
            }
            // after we hit = we need to store the next operand to be used
            if (waitingForOperand) {
                secondOperand = displayNum.innerText;
                console.log(`new secondOperand: ${secondOperand}`);
            }
            if (firstOperand === "" && !isNaN(parseFloat(displayNum.innerText))) {
                firstOperand = displayNum.innerText;
            } else if (operator) {
                // for repeated = button presses
                const result = secondOperand === "" ? operate(parseFloat(firstOperand), parseFloat(displayNum.innerText), operator) : operate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
                prevOperator = operator;
                secondOperand = secondOperand !== "" ? secondOperand : displayNum.innerText;
                displayNum.innerText = String(result);  
            }

            // console.log(operator);
            // console.log("display: " + parseFloat(displayNum.innerText)); 
            // operator = button.innerText !== "=" ? button.innerText : "";
            operator = button.innerText;
            console.log(`updating operator to ${operator}`);
            operatorPressed = true;
            firstOperand = displayNum.innerText;

            // BUG IS HERE, I'M SETTING OPERATOR TO PREVIOUS OPERATOR SO IT WILL NEVER TAKE THE NEW OPERATOR VALUE
            // for repeated = button presses
            if (operator === "=") {
                waitingForOperand = false;
                operator = prevOperator;
            } else {
                // operator = button.innerText
                secondOperand = "";
            }
            
            // console.log(`${firstOperand} ${button.getAttribute("data-ops")}`);
        // clear button is pressed
        } else if (button.classList.contains("function") && button.innerText == "AC") {
            // const display = document.querySelector(".display");
            // display.textContent = "0";
            clearDisplay();
            clearVariables();
            // firstOperand = "";
            // operator = null;
            // secondOperand = "";
            // operatorPressed = false;
        }
    // console.log(`firstOperand: ${firstOperand}`);
    // console.log(`secondOperand: ${secondOperand}`);
    // console.log(`operator: ${operator}`);
    // console.log(`operatorPressed: ${operatorPressed}`);
    // console.log(`prevOperator: ${prevOperator}`);
    // console.log(`waitingForOperand: ${waitingForOperand}`);
    // console.log("------------------------------------------------");
    });
});

document.addEventListener("keydown", function(event) {
    const keyPress = event.key;
    // console.log(keyPress);
    // console.log(`first: ${firstOperand}`);
    // console.log(`second: ${secondOperand}`);

    if (!isNaN(keyPress)) {
        document.querySelector(`[data-num="${keyPress}"]`).click();
    }
    else if (document.querySelector(`[data-ops="${keyPress}"]`)) {
        document.querySelector(`[data-ops="${keyPress}"]`).click();
    }
    else if (keyPress == "Enter") {
       document.querySelector('[data-ops="="]').click();
    }
    else if (keyPress == "Escape") {
        document.querySelector('[data-ops="clear"]').click();
    }
});
/*
function updateDisplay(num) {
    const display = document.querySelector(".display");
    display.textContent = parseFloat(display.textContent) !== 0 ? display.textContent + num : num;
}
*/

// +,-,x,/,=
function operate(firstNum, secondNum, operatorVal) {
    // console.log(firstOperand, secondOperand);
    if (operatorVal === "+") {
        // console.log(firstOperand, secondOperand, operator);
        return firstNum + secondNum;
    } else if (operatorVal === "-") {
        return firstNum - secondNum;
    } else if (operatorVal === "x") {
        return firstNum * secondNum;
    } else if (operatorVal === "/") {
        if (secondNum === 0) {
            document.querySelector(".display").style.fontSize = "21px";
            return "Cannot divide by 0"
        }
        return firstNum / secondNum;
    }
    // return secondOperand;
}

function clearDisplay() {
    const display = document.querySelector(".display");
    display.textContent = "0";
}

function clearVariables() {
    firstOperand = "";
    secondOperand = "";
    operator = null;
    prevOperator = null;
    operatorPressed = false;
    waitingForOperand = false;
}