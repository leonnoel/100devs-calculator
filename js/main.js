let keys = document.querySelector('.calc-buttons');
keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!(target.matches('button'))) {
        return;
    } else {
        calculator.parseInput(value);
    }
})

const calculator = {
    displayText: '0',
    parseInput(value) {
        switch (value) {
            case '=':
                this.calcAnswer(this.displayText)
                break;
            default:
                this.addValue(value)
                break;
        }
    },
    addValue(value) {
        if (this.displayText == '0') {
            this.displayText = ''
        }
        if (this.displayText == '' && isNaN(+(value)) && value != '.') {
            return;
        }
        if (isNaN(+(value)) && isNaN(+(this.displayText))) {
            if (isNaN(this.displayText.slice(-1))) {
                return;
            }
        }
        if ((this.displayText.slice(-1) === '.') && (value === '.')) {
            return;
        }

        this.displayText += value;
        this.showToScreen(this.displayText);
    },

    showToScreen(value) {
        document.querySelector('.calc-screen').value = value;
    },

    calcAnswer(equation) {
        let result = Function("return " + equation)();
        console.log(result)
        this.showToScreen(result);
        this.displayText = result.toString();
    }
}