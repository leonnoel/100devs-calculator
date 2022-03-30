// Declaring consts variables
const display = document.getElementById('display')
const numberKeys = document.querySelectorAll('[data-number]')
const operatorKeys = document.querySelectorAll('[data-operator]')
const equalKey = document.querySelector('.eq')
const actionAc = document.querySelector('.ac')
const actionDel = document.querySelector('.del')
const actionDot = document.querySelector('.dot')

// Declaring variables
let firstValue, operand, secondValue, currentOperand;

// Object constructor
class Calc {
    constructor(firstValue, operand, secondValue) {
        this.firstValue = firstValue;
        this.secondValue = secondValue;
        this.operand = operand;
    }

    // this shows the number on #display
    appEndValue(number) {
        if (display.textContent === '0') {
            display.textContent = number;
        } else {
            display.textContent += number;
        }

        if (equalKey.className.includes('pressed')) {
            display.textContent = number;
            equalKey.classList.remove('pressed');
        }
    }
    // Get the operand and assign value show on screen as firstValue and turn display to 0 to get the second value
    operator(operand) {
        firstValue = display.textContent;
        currentOperand = operand;
        if (display.textContent !== '0') {
            display.textContent = '0';
        }
    }

    // Delete values one by one 
    del() {
        display.textContent = display.textContent.toString().slice(0, -1)
        if(display.textContent === ''){
            display.textContent = '0';
        }
    }
    // clear al values
    aC() {
        display.textContent = '0';
        firstValue = '';
        secondValue = '';
        currentOperand = '';
    }
//    identifies the calculation to be done by the current operand
    operate() {
        let result;
        switch (currentOperand) {
            case '+':
                result = parseFloat(firstValue) + parseFloat(secondValue);
                break;
            case '-':
                result = parseFloat(firstValue) - parseFloat(secondValue);
                break;
            case '/':
                if (secondValue === '0') {
                    result = 'not divisible'
                } else {
                    result = parseFloat(firstValue) / parseFloat(secondValue);
                }
                break;
            case 'x':
                result = parseFloat(firstValue) * parseFloat(secondValue);
                break;
           
        }
        return result
    }

    // Get the second value from number displayed, do the calculation and show the result on the display!
    evaluate() {
        secondValue = display.textContent
        equalKey.classList.add('pressed');
        display.textContent = calc.operate(firstValue, operand, secondValue)
    }

    // uso del punto para crear decimales. asegura que solo se pueda imprimir en los datos 1 vez.
    decimal() {
        actionDot.classList.add('pressed')
        if (display.textContent.includes('.'))return
        if (display.textContent === '0') {
            display.textContent = display.textContent + "."
        } else {
            display.textContent = display.textContent + '.'
        }
    }
}

// object created
let calc = new Calc(firstValue, operand, secondValue)

// event listeners
numberKeys.forEach((key) =>
    key.addEventListener('click', () => calc.appEndValue(key.textContent))
);

operatorKeys.forEach(opKey => {
    opKey.addEventListener('click', () => {
        calc.operator(opKey.textContent)
    })
});

equalKey.addEventListener('click', () => calc.evaluate())

actionAc.addEventListener('click', () => calc.aC())

actionDel.addEventListener('click', () => calc.del())

actionDot.addEventListener('click', () => calc.decimal())
// event listeners
