class Calculator {
    constructor(prevNumText, currentNumText) {
        this.prevNumText = prevNumText;
        this.currentNumText = currentNumText;
        this.clear();
    }

    clear() {
        this.currentNum = '';
        this.prevNum = '';
        this.operation = undefined;
    }

    delete() {
        this.currentNum = this.currentNum.toString().slice(0, -1);
        this.updateDisplay();
    }

    appendNumber(number) {
        if (number === '.' && this.currentNum.includes('.')) return;
        this.currentNum = this.currentNum.toString() + number.toString();
        if(this.currentNum.length > 10) {
            this.currentNum = this.currentNum.toString().slice(0, 10)}
        this.updateDisplay();
    }

    chooseOperation(operation) {
        if (this.currentNum === '') return;
        if (this.prevNum !== '') {
            this.compute();
        }
        this.operation = operation;
        this.prevNum = this.currentNum;
        this.currentNum = '';
    }

    compute() {
        let answer = '';
        const prev = parseFloat(this.prevNum)
        const current = parseFloat(this.currentNum)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                answer = prev + current;
                break
            case '-':
                answer = prev - current;
                break
            case 'x':
                answer = prev * current;
                break
            case '/':
                answer = prev / current;
                break
            default:
                return
        }
        this.currentNum = answer;
        this.operation = undefined;
        this.prevNum = '';
        this.updateDisplay();
    }

    getDisplayNumber(number) {
        const stringNum = number.toString();
        const integerDigits = parseFloat(stringNum.split('.')[0]);
        const decimalDigits = stringNum.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentNumText.innerText = this.getDisplayNumber(this.currentNum);
        if (this.operation != null) {
            this.prevNumText.innerText = `${this.prevNum} ${this.operation}`;
        } else {
            this.prevNumText.innerText = '';
        }
    }
}

const numbButts = document.querySelectorAll('.number');
const opButts = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('calculator__button--equals');
const deleteButton = document.getElementById('calculator__button--delete');
const clearButton = document.getElementById('calculator__button--clear');
const prevNumText = document.querySelector('.prevNum');
const currentNumText = document.querySelector('.currentNum');
const calculator = new Calculator(prevNumText, currentNumText);

numbButts.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

opButts.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})