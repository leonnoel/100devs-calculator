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
                this.calculate(`${this.expression} * .01`)
                break;
            case 'sign':
                // change positive values to negative, and vice-versa
                this.expression = '-' + this.expression
                this.display(this.expression)
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
        // if input is a number, remove the default zero
        if (value == parseInt(value)) {
            if (this.expression === '0') {
                this.expression = ''
            } else if (this.expression === '-0') {
                this.expression = '-'
            }
        } // if input is not a number, stop if it's a repeat
          else if (this.expression.slice(-1) == value) {
            return
        } // prevent multiple decimal points
          // ISSUE: expressions with multiple decimal numbers
          else if (this.expression.includes('.') && value == '.') {
            return 
        }

        // limit length of expression displayed
        if (this.expression.length > 9) {
            return
        } else {
            // output expression to screen
            this.expression += value
            this.display(this.expression)
        }
    },

    display(value) {
        document.querySelector('.screen').value = value
    },

    clear() {
        this.expression = '0'
        this.display('0')
    },

    calculate(expression) {
        // calculate result
        let result = new Function('return ' + expression)() /* alt: let result = eval(expression) */
        // store result in expression for next input
        this.expression = String(result).slice(0,10)
        this.display(this.expression) 
    }
}