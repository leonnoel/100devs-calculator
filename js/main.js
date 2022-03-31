function Calculator() {
    this.a = null;
    this.b = null;
    this.isA = true;

    this.total = 0;
    
    this.reset = false;
    this.operator = null;
    this.methods = {
        "+": (a,b) => Number(a)+Number(b),
        "-": (a,b) => Number(a)-Number(b),
        "*": (a,b) => Number(a)*Number(b),
        "/": (a,b) => Number(a)/Number(b),
    }

    this.calculate = function() {
        if (isNaN(this.a) || isNaN(this.b)) {
            document.querySelector('#number').innerText = 'Error';
        } else {
            this.total = this.methods[this.operator](this.a,this.b);

            if (isNaN(this.total) || this.total === Infinity || this.total === -Infinity) {
                document.querySelector('#number').innerText = 'Error';
            } else {
                document.querySelector('#number').innerText = Number.parseFloat((this.total).toFixed(4));
            }    

        }
        
        this.reset = true;

    }.bind(this);

    this.select = function(val) {
        if (this.reset) {
            this.a = null;
            this.b = null;
            this.isA = true;
            this.total = 0;
            this.reset = false;
            this.operator = null;
        }

        let digit = convertToDigit(val.target.id);
        
        if (this.isA) {
            this.a === null ? this.a = digit : this.a += digit;
        } else {
            this.b === null ? this.b = digit : this.b += digit;
        }

        document.querySelector('#number').innerText = this.isA ? this.a : this.b;

    }.bind(this);

    this.setOperator = function(val) {
        this.isA = !this.isA;

        let op = val.target.id;

        if (op === 'plus') {
            this.operator = '+';
        } else if (op === 'minus') {
            this.operator = '-';
        } else if (op === 'multiply') {
            this.operator = '*';
        } else if (op === 'divide') {
            this.operator = '/';
        }

    }.bind(this);



    const convertToDigit = function(val) {
        if (val === 'one') {
            return '1';
        } else if (val === 'two') {
            return '2';
        } else if (val === 'three') {
            return '3';
        } else if (val === 'four') {
            return '4';
        } else if (val === 'five') {
            return '5';
        } else if (val === 'six') {
            return '6';
        } else if (val === 'seven') {
            return '7';
        } else if (val === 'eight') {
            return '8';
        } else if (val === 'nine') {
            return '9';
        } else if (val === 'zero') {
            return '0';
        } else if (val === 'dot') {
            return '.'
        }
    }



}

const calculator = new Calculator();

document.querySelector('#one').addEventListener('click', calculator.select);
document.querySelector('#two').addEventListener('click', calculator.select);
document.querySelector('#three').addEventListener('click', calculator.select);
document.querySelector('#four').addEventListener('click', calculator.select);
document.querySelector('#five').addEventListener('click', calculator.select);
document.querySelector('#six').addEventListener('click', calculator.select);
document.querySelector('#seven').addEventListener('click', calculator.select);
document.querySelector('#eight').addEventListener('click', calculator.select);
document.querySelector('#nine').addEventListener('click', calculator.select);
document.querySelector('#zero').addEventListener('click', calculator.select);
document.querySelector('#dot').addEventListener('click', calculator.select);

document.querySelector('#plus').addEventListener('click', calculator.setOperator);
document.querySelector('#minus').addEventListener('click', calculator.setOperator);
document.querySelector('#multiply').addEventListener('click', calculator.setOperator);
document.querySelector('#divide').addEventListener('click', calculator.setOperator);
document.querySelector('#equal').addEventListener('click', calculator.calculate);
