let result=0;
let operand=0;
let operator = undefined;
let operation = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "/": (a, b) => a / b,
    "=": (a, b) => b
}
document.getElementById('equal').addEventListener('click', calculate);
Array.from(document.querySelectorAll('.number')).forEach(element => element.addEventListener('click', storeNumber));
Array.from(document.querySelectorAll('.operator')).forEach(element => element.addEventListener('click', storeOperator));


function storeNumber(){
    if (operator===undefined){
        result = (result===0) ? this.textContent : result + this.textContent;
        document.querySelector('h2').textContent = result;
    }
    else{
        operand = (operand===0) ? this.textContent : operand + this.textContent;
        document.querySelector('h2').textContent = operand;
    }
}

function storeOperator(){
    if (operand !== 0 && result !== 0){
        calculate();
        operand=0;
    }
    operator = this.textContent;
}

function calculate(){
    if(operand===0){
        document.querySelector('h2').textContent = result;
    }
    else{
        result = operation[operator](Number(result),Number(operand));
        operand = 0;
        operator = undefined;
        document.querySelector('h2').textContent = result;
    }
}
