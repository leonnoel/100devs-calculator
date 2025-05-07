const displayScreen = document.querySelector('.screen')

function Calculator() {
    this.currentInput = '';
    this.currentOp = '';
    this.result = '';

    this.inputNumber = function (num) {
        this.currentInput += num;
        displayScreen.textContent = this.currentInput;
        console.log(`button pressed ${this.currentInput}`)
    }
    this.inputOperator = function (op) {
        this.currentOp = op;
        this.previousInput = this.currentInput;
        this.currentInput = '';
        displayScreen.textContent = this.previousInput;
        console.log(`button pressed ${this.currentOp}`)
        console.log(`logged old input ${this.previousInput}`)
    }
    this.calculate = function (equal) {
        let varA = Number(this.previousInput)
        let varB = Number(this.currentInput)

        if (this.currentOp == "*") {
            this.result = varA * varB
        } else if (this.currentOp == "/") {
            this.result = varA / varB
        } else if (this.currentOp == "+") {
            this.result = varA + varB
        } else if (this.currentOp == "-") {
            this.result = varA - varB
        }

        this.currentInput = this.result
        displayScreen.textContent = this.result;
        console.log(`button pressed ${equal}`)
        console.log(`result ${this.result}`)
    }

    this.clear = function (clear){
        this.currentInput = '';
        this.previousInput = '';
        this.currentOp = '';
        this.result = '';
        displayScreen.textContent = ''
    }



}

const calc = new Calculator();

const numberButtons = document.querySelectorAll('.number');
const opsButtons = document.querySelectorAll('.operator');
const equalButtons = document.querySelectorAll('.equal');
const clearButtons = document.querySelectorAll('.clear');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const numValue = button.textContent;
        calc.inputNumber(numValue);
    });
});

opsButtons.forEach(ops => {
    ops.addEventListener('click', () => {
        const opValue = ops.textContent;
        calc.inputOperator(opValue)
    })
})

equalButtons.forEach(equal => {
    equal.addEventListener('click', () => {
        const equalValue = equal.textContent;
        calc.calculate(equalValue)
    })
})

clearButtons.forEach(clear => {
    clear.addEventListener('click', () => {
        const clearValue = clear.textContent;
        calc.clear(clearValue)
    })
})