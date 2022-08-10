// DOM elements

const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('.num')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals') 

// Calculator class

 class Calculator {
        constructor(number) {
            this.displayValue = number
            this.value = number
            this.num = null
            this.operator = null
        }
    add() {
        this.getValue()
        this.value += this.num
    }
    subtract() {
        this.getValue()
        this.value -= this.num
    }
    multiply() {
        this.getValue()
        this.value *= this.num
    }
    divide() {
        this.getValue()
        if (this.num == 0) {
            this.displayValue = "ERROR!"
            this.showValue()
            this.displayValue = 0}
        this.value /= this.num
    }
    getValue() {
        this.value = this.displayValue
    }
    showValue() {
        display.textContent = this.displayValue
    }
    addNumber(number) {
        if (this.displayValue && number !== '.') {
            this.displayValue = Number(String(this.displayValue) + String(number))
            this.showValue()
        } else if (number == '.') {
            if (display.textContent.indexOf('.') >= 0) {
                return
            }
            this.displayValue = String(this.displayValue) + "."
            this.showValue()
        }
        else {
            this.displayValue = number
            this.showValue()
        }
    }
    addOperator(op) {
        if (!this.op || !this.num) {
            this.operator = op
            this.value = this.displayValue
            this.displayValue = ''
        }
        else {
            this.calculate()
            this.operator = op
        }
    }
    calculate() {
        if (this.operator == '+') {
            this.add()
        }
        if (this.operator == '-') {
            this.subtract()
        }
        if (this.operator == 'divide') {
            this.divide()
        }
        if (this.operator == 'x') {
            this.multiply()
        }
        this.num = null
        this.operator = null
        this.showValue()
    }
    equalsFunction() {
    }     
 }

// Initialize a new calculator with value 0 on page load 

 let calc = new Calculator(0)
 calc.showValue()

// Event listeners to make button clicks work

 numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.addNumber(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.addOperator(button.id);
    });
})

equalsButton.addEventListener('click', () => {
    calc.equalsFunction();       
});

function equalsFunction() {
    if (operator && buffer && !pending && lastButtonPressed !== 'op') {
        let num = makeNumber(display.textContent);
        let result = operate(operator, buffer, num);
        display.textContent = result;
        buffer = null;
        operator = null;
        pending = 1;        // Pending even though no operation is pending, because if user
    }                       // enters new numbers here, it should do new calculation, not concatenate
    lastButtonPressed = 'eq';
}

// Helper functions

function makeNumber(content) {
    if (content.indexOf('.') >= 0) {
        return parseFloat(content);
    }
    else {return parseInt(content);}
}


function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    }
    else if (operator == '-') {
        return subtract(num1, num2);
    }
    else if (operator == 'divide') {
        if (num2 !== 0) {
            return divide(num1, num2);    
        }
        return 'Error!'
    }
    else if (operator == 'x') {
        return multiply(num1, num2);
    }
}



function dealWithOperator(button) {
    let num = (display.textContent == 'Error!') ? 0 : makeNumber(display.textContent); 
    if (!buffer) {
        buffer = num;
    }
    else if (lastButtonPressed !== 'op') {
        let result = operate(operator, buffer, num);
        display.textContent = result;
        buffer = result;
    }
    pending = 1;
    operator = button;
    lastButtonPressed = 'op'
}


/*

// Equals sign button



// Keyboard support
*/
/*
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (!isNaN(keyName) || keyName == '.') {
        displayNumber(keyName);
    }
    if (keyName == 'Backspace') {
        operateInPlace('backspace');       
    }
    if (keyName == 'Enter') {
        equalsFunction();
    }
    if (keyName == '+' || keyName == '-') {
        dealWithOperator(keyName);
    }
    if (keyName == '/') {
        dealWithOperator('divide');
    }
    if (keyName == '*') {
        dealWithOperator('x');
    }
    if (keyName == ',') {            
        displayNumber('.');
    }
});

*/