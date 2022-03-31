let calculator = new CalculatorDisplayer();

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
document.querySelector('#point').addEventListener('click', calculator.select);

document.querySelector('#plus').addEventListener('click', calculator.setOperator);
document.querySelector('#minus').addEventListener('click', calculator.setOperator);
document.querySelector('#times').addEventListener('click', calculator.setOperator);
document.querySelector('#divide').addEventListener('click', calculator.setOperator);
document.querySelector('#equals-to').addEventListener('click', calculator.calculate);






function CalculatorDisplayer() {
    this.a = null;
    this.b = null;
    this.isA = true;

    this.result = 0;

    this.reset = false;
    this.operator = null;
    this.methods = {
        "*": function (a, b) {
            return Number(a) * Number(b);
        },
        "/": function (a, b) {
            return Number(a) / Number(b);
        },
        "+": function (a, b) {
            return Number(a) + Number(b);
        },
        "-": function (a, b) {
            return Number(a) - Number(b);
        },
    
    }

    this.calculate = function() {
        if (isNaN(this.a) || isNaN(this.b)) {
            document.querySelector('#output-number').innerText = 'Error';
        } else {
            this.result = this.methods[this.operator](this.a,this.b);

            if (isNaN(this.result) || this.result === Infinity || this.result === -Infinity) {
                document.querySelector('#output-number').innerText = 'Error';
            } else {
                document.querySelector('#output-number').innerText = Number.parseFloat((this.result).toFixed(4));
            }    

        }

        this.reset = true;

    }.bind(this);

    this.select = function(val) {
        if (this.reset) {
            this.a = null;
            this.b = null;
            this.result = 0;
            this.reset = false;
        }

        let digit = changeExpToNumber(val.target.id);

        if (this.isA) {
            this.a === null ? this.a = digit : this.a += digit;
        } else {
            this.b === null ? this.b = digit : this.b += digit;
        }

        document.querySelector('#output-number').innerText = this.isA ? this.a : this.b;

    }.bind(this);

    this.setOperator = function(val) {
        this.isA = !this.isA;

        let operator = val.target.id;

        if (operator === 'times') {
            this.operator = '*';
        } else if (operator === 'divide') {
            this.operator = '/';
        } else if (operator === 'minus') {
            this.operator = '-';
        } else if (operator === 'plus') {
            this.operator = '+';
        }

    }.bind(this);



    const changeExpToNumber = function(val) {
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
        } else if (val === 'point') {
            return '.'
        }
    }



}

