let operationString = document.querySelector('.operation-string');
let resultString = document.querySelector('.result-string');
let keyboardItem = document.querySelectorAll('.keyboard__item');
let equalSign = document.querySelector('.keyboard__equal');

let errorMessage = document.querySelector('.error-message');

let operands = [];
let operators = [];
let currentNumber = [];
let operatorsSet = ['/','x','+','-']
let result;

let operationFunc ;

let errorMessageFunction = m => {
    errorMessage.textContent = m;
    errorMessage.classList.add('error-message--show');
    setTimeout( _ => errorMessage.classList.remove('error-message--show'),3500)
}

let resultFunction = _ => {
    if (currentNumber.length > 0) {
        operands.push(currentNumber.join(''))
        currentNumber = []
    }
    if (operands.length < 2 || operands.length == operators.length) {
        errorMessageFunction('Not a valid format')
    } else {
        switch (operators[0]) {
            case '+':
                result = Number(operands[0]) + Number(operands[1])
                break;
            case '/':
                result = Number(operands[0]) / Number(operands[1])
                break;
            case 'x':
                result = Number(operands[0]) * Number(operands[1])
                break;
            case '-':
                result = Number(operands[0]) - Number(operands[1])
                break;
            default:
                break;
        }
        if (result % 1 !== 0) {
            resultString.textContent = `=${result.toFixed(3)}`;       
        }else{
            resultString.textContent = `=${result}`;
        }
    }
}

keyboardItem.forEach(el => {
    el.addEventListener('click', function() {
        if (operatorsSet.includes(el.textContent)) {
            if (currentNumber.length == 0) {
                errorMessageFunction('No operation specified')
            }else{
                operators.push(el.textContent)
                operands.push(currentNumber.join(''))
                currentNumber = []
                operationString.textContent = operationString.textContent+""+el.textContent;
            }
        }else if (el.textContent == '.') {
            if (currentNumber.length == 0) {
                operationString.textContent = operationString.textContent+'0'+el.textContent;
                currentNumber.push('0',el.textContent);
            }else if(currentNumber.includes(el.textContent)) {
                errorMessageFunction('Invalid format')
            } else{
                operationString.textContent = operationString.textContent+""+el.textContent;
                currentNumber.push(el.textContent);
            }
            
        }else{
            operationString.textContent = operationString.textContent+""+el.textContent;
            currentNumber.push(el.textContent);
        }
    });
});

equalSign.addEventListener('click', resultFunction);