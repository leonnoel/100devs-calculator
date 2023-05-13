function Calculator() {
    let result = 0;
    let num1 = 0;
    let num2 = 0;
    const operationsArray = ["division", "multiplication", "addition", "substraction"];
    let operation = "";
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(x => x.addEventListener("click", function(e) {
        if (e.target.getAttribute("id") == "seven") {
            screen.textContent += "7";
        } else if (e.target.getAttribute("id") == "eight") {
            screen.textContent += "8";
        } else if (e.target.getAttribute("id") == "nine") {
            screen.textContent += "9";
        } else if (e.target.getAttribute("id") == "four") {
            screen.textContent += "4";
        } else if (e.target.getAttribute("id") == "five") {
            screen.textContent += "5";
        } else if (e.target.getAttribute("id") == "six") {
            screen.textContent += "6";
        } else if (e.target.getAttribute("id") == "one") {
            screen.textContent += "1";
        } else if (e.target.getAttribute("id") == "two") {
            screen.textContent += "2";
        } else if (e.target.getAttribute("id") == "three") {
            screen.textContent += "3";
        } else if (e.target.getAttribute("id") == "zero") {
            screen.textContent += "0";
        } else if (e.target.getAttribute("id") == "decimal") {
            screen.textContent += ".";
        } else if (operationsArray.includes(e.target.getAttribute("id"))) {
            num1 = parseFloat(screen.textContent);
            operation = e.target.getAttribute("id");
            screen.textContent = "";
        } else if (e.target.getAttribute("id") == "equal") {
            num2 = parseFloat(screen.textContent);
            if (operation == "division") {
                divide();
            } else if (operation == "multiplication") {
                multiply();
            } else if (operation == "addition") {
                sum();
            } else if (operation == "substraction") {
                substract();
            }

            screen.textContent = result;
            if (operation == "") {
                num1 = 0;
                screen.textContent = "";
            }
            operation = "";
        }
    }));
    
    let sum = function() {
        result = num1 + num2;
    };

    let substract = function() {
        result = num1 - num2;
    };

    let multiply = function() {
        result = num1 * num2;
    };

    let divide = function() {
        if (num2 == 0) {
            result = "Cannot divide by zero";
        } else {
            result = num1 / num2;
        }
    };
}

let calculator = new Calculator();
