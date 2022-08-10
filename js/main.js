// DOM elements

const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('.num')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals') 

// Calculator class

 class Calculator {
        constructor(number) {
            this.value = number
            this.num = null
            this.operator = null
        }
    add() {
        this.value += this.num
    }
    subtract() {
        this.value -= this.num
    }
    multiply() {
        this.value *= this.num
    }
    divide() {
        if (this.num == 0) {
            display.innerText = "ERROR!"
        }
        this.value /= this.num
    }

    showValue() {
        display.textContent = this.value
    }
    addNumber(number) {
        if (display.innerText == '0' || display.innerText == 'ERROR!' || display.innerText == ' ' || this.operator) {display.innerText = ''}
        if (number !== '.') {
            display.innerText += number
        } else if (number == '.') {
            if (display.textContent.indexOf('.') >= 0) {
                return
            }
            display.innerText += number
        }
        alert(`Value: ${this.value}\nNumber: ${this.num}\nOperator: ${this.operator}`)
    }
    getValueFromDisplay() {
        if (!this.value) {
            this.value = Number(display.innerText)
        }
        else {
            this.num = Number(display.innerText)
        }
    }

    addOperator(op) {
        this.getValueFromDisplay()
        if (!this.num) {
            this.operator = op
        }
        else {
            alert("The operator else is actually being run")
            this.calculate()
            this.operator = op
        }
        alert(`Value: ${this.value}\nNumber: ${this.num}\nOperator: ${this.operator}`)
    }
    calculate() {
        this.getValueFromDisplay()
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
    equalsFunction() { /* Not currently useful but there was a reason I originally had this separate from calculating */
        this.calculate()
        alert(`Value: ${this.value}\nNumber: ${this.num}\nOperator: ${this.operator}`) 
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

// Keyboard support

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (!isNaN(keyName) || keyName == '.') {
        calc.addNumber(keyName);
    }
    if (keyName == 'Enter') {
        calc.equalsFunction();
    }
    if (keyName == '+' || keyName == '-') {
        calc.addOperator(keyName);
    }
    if (keyName == '/') {
        calc.addOperator('divide');
    }
    if (keyName == '*') {
        calc.addOperator('x');
    }
    if (keyName == ',') {            // Support for locales that use commas for decimals
        calc.addNumber('.');
    }
});

