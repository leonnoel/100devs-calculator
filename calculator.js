const numbers = document.querySelectorAll('.numbers');
const decimal = document.querySelectorAll('.decimal');
const operator = document.querySelectorAll('.operator');
const clear = document.querySelectorAll('.clear');
const backspace = document.querySelectorAll('.backspace');
const equals = document.querySelectorAll('.equals');
const display = document.getElementById('display');

let previousKeyType = '';
let mathOperator = '';
let secondNum = '';
let firstNum = '';

function Calculator() {
    this.add = function(a,b) {
        return Math.round((parseFloat(a) + parseFloat(b)) * 10000) / 10000;
    }
    this.subtract = function(a,b) {
        return Math.round((parseFloat(a) - parseFloat(b)) * 10000) / 10000; 
    }
    this.multiply = function(a,b) {
        return Math.round((parseFloat(a) * parseFloat(b)) * 10000) / 10000;
    }
    this.divide = function(a,b) {
        if (b == 0) {
            return 'Cannot divide by zero';
        } else {
            return Math.round((parseFloat(a) / parseFloat(b)) * 10000) / 10000;
        }
    }
    this.operate = function(mathOperator, firstNum, secondNum) {
        if (mathOperator == '+') {
            result = this.add(firstNum, secondNum);
            display.textContent = result;
        } else if (mathOperator == '-') {
            result = this.subtract(firstNum, secondNum);
            display.textContent = result;
        } else if (mathOperator == 'x') {
            result = this.multiply(firstNum, secondNum);
            display.textContent = result; 
        } else if (mathOperator == '/') {
            result = this.divide(firstNum, secondNum);
            display.textContent = result;
        }
    }
}

const calculator = new Calculator()

numbers.forEach((button) => {
    button.addEventListener('click',() => {
        if (display.textContent === '0' || previousKeyType === 'operator') {
            display.textContent = button.textContent;
            previousKeyType = '';
        } else if (display.textContent != '0') {
            display.textContent = display.textContent + button.textContent;
        }
    });
});

decimal.forEach((button) => {
    button.addEventListener('click',() => {
        if (!display.textContent.includes('.')) {
            display.textContent = display.textContent + '.';
        }
    });
});

operator.forEach((button) => {
    button.addEventListener('click',() => {
        Array.from(button.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
        if (firstNum && mathOperator && previousKeyType != 'operator') {
            secondNum = display.textContent;
            let calcVal = calculator.operate(mathOperator, firstNum, secondNum)
            calcVal = display.textContent
            firstNum = calcVal;
        }
        mathOperator = button.textContent;
        button.setAttribute('data-first-number',display.textContent);
        firstNum = button.getAttribute('data-first-number')
        button.classList.add('is-depressed');
        button.setAttribute('data-previous-key-type', 'operator');
        previousKeyType = button.getAttribute('data-previous-key-type');
    });
});

clear.forEach((button) => {
    button.addEventListener('click',() => {
        display.textContent = 0;
        firstNum = '';
        secondNum = '';
        previousKeyType = '';
        mathOperator = '';
        Array.from(button.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
    });
});

equals.forEach((button) => {
    button.addEventListener('click',() => {
        Array.from(button.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
        secondNum = display.textContent;
        calculator.operate(mathOperator, firstNum, secondNum)
    });
});