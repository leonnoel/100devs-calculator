//declare Calculator constructor
function Calculator() {
    this.total = 0;
    this.input = '';
    this.operator = '=';
    this.equals = function() {
        if (this.operator === '+') {
            this.total += Number(this.input);
        } else if (this.operator === '-') {
            this.total -= Number(this.input);
        } else if (this.operator === '/') {
            this.total /= Number(this.input);
        } else if (this.operator === 'x') {
            this.total *= Number(this.input);
        }
    }
}

//create new Calculator
let calc = new Calculator();
let output = document.querySelector("#output");

//set event listeners on buttons
let numButtons = document.querySelectorAll(".number");
numButtons.forEach(button => {
    button.addEventListener("click", numberClick)
})

let opButtons = document.querySelectorAll(".operator");
opButtons.forEach(button => {
    button.addEventListener("click", operatorClick)
})

//declare button click callbacks
function numberClick(event) {
    calc.input += this.innerText;
    output.innerText = calc.input;
}

function operatorClick(event) {
    if (calc.operator !== '=') {
        calc.equals();
        output.innerText = String(calc.total.toFixed(4)).length >= String(calc.total).length ? String(calc.total) : String(calc.total.toFixed(4));
    } else {
        calc.total = Number(output.innerText);
    }
    calc.operator = this.innerText;
    calc.input = '';
}
 