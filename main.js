/**************** BUTTONS *************** */
// display
const display = document.querySelector('h2');

// input keys
const keyStrokes = document.querySelector('.calc');

keyStrokes.addEventListener('click', event => {
    calc.read(event.target.innerHTML);
})

/************** FUNCTIONALITY ****************** */

const calc = {
    // initial values in null state
    currentValue: null,
    localStorage: null,
    operator: null,

    // set up arithmetic opeartions
    sum: function() {
        this.currentValue += this.localStorage;
    }, 
    difference: function() {
        this.currentValue -= this.localStorage;
    },
    product: function() {
        this.currentValue *= this.localStorage;
    },
    quotient: function() {
        this.currentValue /= this.localStorage;
    },
    calculate: function(exe) {
        switch (exe){
            case '*' :
                this.product();
                break;
            case '+' :
                this.sum();
                break;
            case '/' :
                this.quotient();
                break;
            case '-' :
                this.difference();
                break;
        }
    },

    total: function() {
        this.displayText = this.currentValue;
        display.innerHTML = this.displayText;
    },

    clear: function() {
        this.currentValue = null;
        this.localStorage = null;
        this.operator = null;
        display.innerHTML = null;
    },

    read: function(input) {
        if (input === '=') {
            display.innerHTML = null;
            this.currentValue = Number(this.currentValue);
            this.localStorage = Number(this.localStorage);
            this.calculate(this.operator);
            this.total();
        } else if (input === '*' ||  input === '+' || input === '/' || input === '-'){
            this.operator = input;
            //display.innerHTML = null;
        } else if (this.operator === null && this.currentValue === null) {
            this.currentValue = input.toString();
            display.innerHTML = this.currentValue;
        } else if (this.operator === null && this.currentValue !== null){
            this.currentValue += input.toString();
            display.innerHTML = this.currentValue;
        } else if (this.operator != null && this.localStorage === null) {
            this.localStorage = input.toString();
            display.innerHTML = this.localStorage;
        } else if (this.operator != null && this.localStorage !== null && input !== '=') {
            this.localStorage += input.toString();
            display.innerHTML = this.localStorage;
        } 
        console.log(this.currentValue);
    },
}

// clear out calculator
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    calc.clear();
    console.log('cleared out values');
})