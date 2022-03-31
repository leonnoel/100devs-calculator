const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display").querySelector('h2');
let currentValue = '0';
let previousOperation;

// Calculator Object with the values and operations
const calculator = {
    firstNumber: null, 
    secondNumber: null,

    sum(){
        return this.firstNumber + this.secondNumber;
    },
    sub(){
        return this.firstNumber - this.secondNumber;
    },
    mult(){
        return this.firstNumber * this.secondNumber;
    },
    div(){
        return this.firstNumber / this.secondNumber;
    }
}

// Add listeners to the calculator buttons
operators.forEach(button => button.addEventListener("click", calculate));
numbers.forEach(button => button.addEventListener("click", appendNumber));

// When the user presses a number button or point, add the value to screen
function appendNumber(click){
    value = click.target.innerText;
    // If the current value on screen is 0, and the new value is also 0, keep only one 0, if not, append the new value
    currentValue = (currentValue === '0') ? value : currentValue + value;
    display.innerText = currentValue;
}

// When the user presses any operation button, calculate the result
function calculate(click){
    if (!calculator.firstNumber){
        calculator.firstNumber = Number(currentValue);
    }else{
        calculator.secondNumber = Number(currentValue);
    }
    // Depending on the last operation chosen, calculate and show the result
    switch (previousOperation){
        case '+':
            calculator.firstNumber = calculator.sum();
            display.innerText = Number(calculator.firstNumber.toFixed(4));
            break;
        case '-':
            calculator.firstNumber = calculator.sub();
            display.innerText = Number(calculator.firstNumber.toFixed(4));
            break;
        case 'x':
            calculator.firstNumber = calculator.mult();
            display.innerText = Number(calculator.firstNumber.toFixed(4));
            break;
        case '/':
            calculator.firstNumber = calculator.div();
            display.innerText = Number(calculator.firstNumber.toFixed(4));
            break;

    }
    //After the calculation is done, reset the screen value and save the current operator
    currentValue = '0';
    previousOperation = click.target.innerText;
}