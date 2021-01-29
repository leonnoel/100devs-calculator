/* jshint esversion:6 */

const calculator = document.querySelector('#calculator');
const keys = calculator.querySelectorAll('.key');
const display = document.querySelector('.display');
const clearText = document.querySelector('.clearing');
let isCalculated = false;
let isOperatorOn = false;
let previousOperator = '';
let calculateTotal = 0;
let firstNum = 0;
let secondNum = 0;

function doMath (n1, operator, n2) {
    n1 = Number(n1);
    n2 = Number(n2);

    if (operator === 'add') {
        return n1 + n2;
    } else if (operator === 'minus') {
        return n1 - n2;
    } else if (operator === 'multiply') {
        return n1 * n2;
    } else {
        return n1 / n2;
    }
}

function calculate() {
    secondNum = display.textContent;
    firstNum =  doMath(firstNum, previousOperator, secondNum).toString();
        if (firstNum.length > 10) {
            firstNum = firstNum.substring(0,10);
        }
    display.textContent = firstNum;
}


function getAction(e) {
    const keyBtn = e.target;
    const action = keyBtn.dataset.action;

    if (action === 'add' || action === 'minus' || action === 'multiply' || action === 'divide') {
        if(!isOperatorOn && previousOperator !== 'enter') {
            if(previousOperator !== '') {
                calculate();
            } else {
                firstNum = display.textContent;
            } 
        }
        isOperatorOn = true;
        previousOperator = action;      
    } 
    
    else if (action === 'calculate') {
        if(!isOperatorOn && previousOperator !== 'enter' && previousOperator !== '') {
            calculate();
            isOperatorOn = false;
        }
        previousOperator = 'enter';
    } 
    
    else if (action === 'clear') {
        if (display.textContent !== '0') {
            display.textContent = 0;
            isOperatorOn = false;
            previousOperator = '';
            clearText.textContent = 'C';
        } 
    } 
    
    else if (action === 'decimal') {
        if (!display.textContent.includes('.')) {
            display.textContent += '.';
        }
        if (isOperatorOn && firstNum === display.textContent) {
            display.textContent = '0.';
            isOperatorOn = false;
        }
    } 
    
    else {
        if (display.textContent === '0' || isOperatorOn === true || previousOperator === 'enter'){
            display.textContent = keyBtn.textContent;
            isOperatorOn = false;
            if (previousOperator === 'enter') {
                previousOperator = '';
            }
            if (keyBtn.textContent !== '0') {
                clearText.textContent = 'AC';
            }    
        } else {
            display.textContent += keyBtn.textContent;
            clearText.textContent = 'AC';
        }
    }
}

keys.forEach(key => key.addEventListener('click', getAction));