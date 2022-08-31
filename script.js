const buttons = document.querySelectorAll("button");
const displayNum = document.querySelector(".display");
var firstOperand = "";
var secondOperand = "";
var operator = null;
var operatorPressed = false;

// TO DO:
// FIX DECIMAL -> OPERATOR -> NUM = NaN
// add key presses

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        // should i use data attributes or their classes and innerText?
        // number button is pressed
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
            if (operatorPressed && button.innerText !== "=") {
                return;
            }
            if (firstOperand === "" && !isNaN(parseFloat(displayNum.innerText))) {
                firstOperand = displayNum.innerText;
            } else if (operator) {
                // uncomment to get rid of = spam
                // const result = operate(parseFloat(firstOperand), parseFloat(displayNum.innerText), operator);

                // for repeated = button presses
                const result = secondOperand === "" ? operate(parseFloat(firstOperand), parseFloat(displayNum.innerText), operator) : operate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
                var prevOperator = operator;
                secondOperand = secondOperand !== "" ? secondOperand : displayNum.innerText;
                displayNum.innerText = String(result);       
            }

            // console.log(operator);
            // console.log("display: " + parseFloat(displayNum.innerText)); 
            operator = button.innerText;
            operatorPressed = true;
            firstOperand = displayNum.innerText;

            // for repeated = button presses
            if (operator === "=") {
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
            firstOperand = "";
            operator = null;
            secondOperand = "";
            operatorPressed = false;
        }
    });
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
        return firstNum / secondNum;
    }
    // return secondOperand;
}

function clearDisplay() {
    const display = document.querySelector(".display");
    display.textContent = "0";
}


const numButtons = document.querySelectorAll('button[data-num]');
console.log(numButtons);