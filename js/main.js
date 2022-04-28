// a class will allow storage of all information typed in the display
class Calculator {
    //contains all inputs and functions for calculator
    constructor(previousOperandTextElement, currentOperandTextElement) {
        //gives us a way to set these text elements inside our calculator class
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    //makes a clean slate any times the calculator is created
    clear () {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    // adds number to the screen every time it's clicked. passes number user selected.
    appendNumber(number) {
        //this allows only one period to be displayed
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    // happens anytime a user clicks on an operation. passes operation user selected.
    chooseOperation(operation) {
        if(this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    // takes values inside of calculator and creates a single value to display on output.
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '÷':
                computation = prev / current;
                break;
            case 'x':
                computation = prev * current;
                break;
            default: 
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    // update the values inside of our output.
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}

// Variables of the different buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

//actually creates the calculator
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

//loops through the number buttons listening for a click event. When clicked, the innerText of the button is appended and the display updated.
numberButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

//loops through each operation button and listens for a click event. Once clicked, the chooseOperation function runs and is passed the inner text of the operator button. The display is then updated.
operationButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

//listens for a click on the = button, then computes and updates the display.
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})