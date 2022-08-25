class Calculator {
    constructor() {
        this.displayText = '0';
    }
    parseInput(value) {
        switch(value) {
            case '=':
                this.calculate(this.displayText);
                break;
            case 'AC':
                this.clearScreen();
                break;
            case '.':
                this.inputDecimal(value);
                break;
            default:
                this.addText(value);
                break;
        }
    }
    addText(value) {
        this.displayText = this.displayText === '0' ? 
            value : this.displayText + value;
        this.outputText(this.displayText);
    }
    inputDecimal(decimal) {
        // regex to check if the last operator has digits after
        let isLastCharOperand = this.displayText.match(/[^-\+\/\*]*$/g)[0];
        // if the variable is an empty string then last char 
        // must be an operator
        if (isLastCharOperand.length === 0) {
            this.displayText += '0.';
        // checks if digits after the last operator has a decimal
        // or if the calculator display starts with a 0
        } else if (!isLastCharOperand.includes(decimal) || 
            this.displayText === '0') {
            this.displayText += decimal;
        }
        this.outputText(this.displayText);
    }
    outputText(text) {
        document.querySelector('.calc-screen').value = text;
    }
    calculate(equation) {
        let result = Function('return ' + equation)();
        this.displayText = String(result).includes('.') ? 
            parseFloat(result.toFixed(7)) : result;
        this.outputText(this.displayText);
    }
    clearScreen() {
        this.displayText = '0';
        this.outputText(this.displayText);
    }
}

// get user input and ensure it's valid
const keys = document.querySelector('.calc-buttons');
const calc = new Calculator();
keys.addEventListener('click', event => {
    // shorthand for object deconstruction
    // same as event.target or event.target.value
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')) {
        return;
    } else {
        calc.parseInput(value);
    }
});
