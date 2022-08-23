// get user input and ensure it's valid
const keys = document.querySelector('.calc-buttons');
keys.addEventListener('click', event => {
    // shorthand for object deconstruction
    // same as event.target or event.target.value
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')) {
        return;
    } else {
        let calc = new Calculator();
        calc.parseInput(value);
    }
});

class Calculator {
    constructor() {
        this.displayText: '0';
        this.previousTotal: null;
    }
    parseInput(value) {
        switch(value) {
            case '=':
                // calculate answer
                break;
            case 'AC':
                // clear screen and stored values
                break;
            case '.':
                if (this.displayText === 0) {
                    // pass string of 0. into add text method
                } else {
                    // add value to text string
                }
                break;
            default:
                // add value to text string
        }
    }
    addText(value) {
        if (this.displayText === '0') {
            this.displayText = '';
        } else if (this.prevTotal) {
            this.displayText = this.prevTotal;
            this.prevTotal = null;
        }
    }
}
