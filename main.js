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
//        if (this.displayText === '0') {
//            this.displayText = '';
//        } else if (this.previousTotal) {
//            this.displayText = this.previousTotal;
//            this.previousTotal = null;
//        }
//        if ( isNaN(+(value)) && isNaN(+(this.displayText)) ) {
//            return;
//        }
//        this.displayText += (this.displayText === '' && value === '.' 
//            ? `0${value}` : value);
        this.outputText(this.displayText);
    }
    inputDecimal(decimal) {
        if (!this.displayText.includes(decimal)) {
            this.displayText += decimal;
        }
        this.outputText(this.displayText);
    }
    outputText(text) {
        document.querySelector('.calc-screen').value = text;
    }
    calculate(equation) {
        let result = Function('return ' + equation)();
        this.displayText = result;
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
