//things that a calculator has to do
//accept user inputs of number, operator, number
//if display = 0 then clicked number should overwrite display
//numbers can be longer than one digit
//should accept decimal numbers - should not accept multiple decimals in one string
//should not accept more than one operator per equation
//store inputs
//recognize inputs and perform calculations
//return a result
const calculator = {
    display: '0',
    prevNum: null,
    checkForOperation: false,
    operator: null,
}

function numToDisplay(num) {
    const {display, checkForOperation} = calculator;
   if(checkForOperation === true) {
       calculator.display = num;
       calculator.checkForOperation = false;
   }else{
       //if current value of display is 0, overwrite otherwise add to string of nums in input
        calculator.display = display === '0' ? num : display + num;
   }
}

function decimalToDisplay(decimal){
    if(calculator.checkForOperation === true){
        calculator.display = '0.'
        calculator.checkForOperation = false;
        return;
    }
    if(!calculator.display.includes(decimal)){
        calculator.display += decimal;
    }
}

function operatorToDisplay(op2){
    const {prevNum, display, operator} = calculator
    const valueOnClick = parseFloat(display);
    if(operator && calculator.checkForOperation) {
        calculator.operator = op2;
        return;
    }
    if(prevNum === null && !isNaN(valueOnClick)){
        calculator.prevNum = valueOnClick;
    }else if (operator){
        const result = maffs(prevNum, valueOnClick, operator);
        calculator.display = `${parseFloat(result.toFixed(8))}`;
        calculator.prevNum = result;
    }
    calculator.checkForOperation = true;
    calculator.operator = op2;
}
function maffs(prevNum, currentNum, operator){
    if(operator === '+'){
        return prevNum + currentNum;
    }else if(operator === '-'){
        return prevNum - currentNum;
    }else if(operator === "*"){
        return prevNum * currentNum;
    }else if (operator === '/'){
        return prevNum / currentNum;
    }
    return currentNum;
}

function reset(){
    calculator.display = '0';
    calculator.prevNum = null;
    calculator.checkForOperation = false;
    calculator.operator = null;
}

function updateDisplay(){
    const display = document.querySelector('.screen')
    display.value = calculator.display;
}

updateDisplay();

//destructuring assignment - target variable represents element clicked and if the element != button, return early - if 
const keys = document.querySelector('.keys');
keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
        return;
}

    switch(value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            operatorToDisplay(value);
            break;
        case '.':
            decimalToDisplay(value);
            break;
        case 'AC':
            reset();
            break;
        default:
            if(Number.isInteger(parseFloat(value))){
                numToDisplay(value);
            }
    }
    updateDisplay();
});
