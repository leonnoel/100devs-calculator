const keys = document.querySelector('.button-container')
keys.addEventListener('click', event => {
    // get value of event target
    const {target} = event
    const {value} = target
    // stop if something other than a button is clicked
    if (!target.matches('button')) {
        return
    } else {
        calculator.parse(value)
    }
})

const calculator = {
    expression: '0',

    parse(value) {
        switch (value) {
            case 'clear':
                this.clear()
                break;
            case 'percent':
                // make percent
                break;
            case 'sign':
                // make positive or negative
                break;
            case '.':
                if (this.expression == 0) {
                    this.validate('0.')
                } else {
                    this.validate('.')
                }
                break;
            case '=' :
                console.log(this.expression)
                this.calculate(this.expression)
                break;
            default: 
                this.validate(value)
                break;
        }
    },   

    validate(value) {
        if (this.expression === '0') {
            this.expression = ''
        }
        // if (value != parseInt(value) && this.expression[-1] != parseInt(this.expression[-1])) {
        //     return
        // }
        this.expression += value
        // output displayText to screen
        this.display(this.expression)
    },

    // display a value on the calculator screen
    display(value) {
        document.querySelector('.screen').value = value
    },

    // reset expression and calculator screen to 0
    clear() {
        this.expression = '0'
        this.display('0')
    },

    // calculate and display result, store in expression for next inputs
    calculate(expression) {
        let result = new Function('return ' + expression)()
        // alternative: let result = eval(expression) 
        this.display(result) 
        this.expression = result
    }
}