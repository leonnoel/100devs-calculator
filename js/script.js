let currentDisplay = "";
let previousDisplay = "";
let currentOperator = "";

const maxCharacters = 100;

// EVENT LISTENERS
const numbers = document.querySelectorAll(".numberBtn");
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', () => appendNumber(numbers[i]))
}

const operations = document.querySelectorAll(".operationBtn");
for(let i = 0; i < operations.length; i++){
    operations[i].addEventListener('click', function(){
        if(!isNaN(currentDisplay)){
        if(currentDisplay != "0" || currentDisplay != ''){
            if(currentOperator != ""){calculate(previousDisplay, currentDisplay)}
            currentOperator = operations[i].innerText;
            previousDisplay = `${currentDisplay}`;
            updateDisplay();
            currentDisplay = "0";
        }else{
            currentOperator = operations[i].innerText;
            prevDisplay = '0';
            updateDisplay();
            currentDisplay = "0";
        }
    }
    })
}

const equals = document.querySelector('.equalsBtn');
equals.addEventListener('click', () => calculate(previousDisplay, currentDisplay));

const display = document.querySelector('.display'); 
const prevDisplay = document.querySelector('.prevDisplay'); 

const allClearBtn = document.querySelector('.allClearBtn');
allClearBtn.addEventListener('click', () => allClear());

const ellipsisBtn = document.querySelector('.ellipsisBtn');
ellipsisBtn.addEventListener('click', () => appendEllipsis());

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', () => removeNumber())

function allClear(){
    currentDisplay = "0";
    previousDisplay = "";
    currentOperator = "";
    updateDisplay();
}
function removeNumber(){
    currentDisplay = currentDisplay.slice(0, currentDisplay.length -1);
    if(currentDisplay.length === 0){ currentDisplay = '0'}
    updateDisplay();
}
function appendNumber(button){
    if(currentDisplay == 0){currentDisplay = button.innerText}
    else if(currentDisplay.length <= maxCharacters){currentDisplay += button.innerText;}
    updateDisplay();
}

function appendEllipsis(){
    if(!currentDisplay.includes('.')){
        currentDisplay += '.';
    }
    updateDisplay();
}

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num2 == 0){return "Cannot divide by zero"}
    return num1 / num2;
}
function updateDisplay(){
    display.innerText = Number(currentDisplay).toLocaleString();
    prevDisplay.innerText = `${previousDisplay} ${currentOperator}`;
}

// currentDisplay.length <= 8 ? Number(currentDisplay).toLocaleString() : Number(currentDisplay).toExponential(2).toString() // FOR EXPONENTIAL FORM, GOTTA FIX SOME SHIT FIRST THOUGH

function calculate(num1, num2){

    
    if(currentDisplay != ""){
        switch (currentOperator){
            case '+':
                previousDisplay += ` ${currentOperator} ${num2} =`;
                currentDisplay = add(parseFloat(num1), parseFloat(num2));
                break;
            case '-':
                previousDisplay += ` ${currentOperator} ${num2} =`;
                currentDisplay = subtract(parseFloat(num1), parseFloat(num2));
                break;
            case '*':
                previousDisplay += ` ${currentOperator} ${num2} =`;
                currentDisplay = multiply(parseFloat(num1), parseFloat(num2));
                break;
            case '/':
                previousDisplay += ` ${currentOperator} ${num2} =`;
                currentDisplay = divide(parseFloat(num1), parseFloat(num2));
                break;
        } 
        currentOperator = '';
        updateDisplay();
    }
}
allClear();