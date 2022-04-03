let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach(e => e.addEventListener('click',calculate))

let clearInit = true;
let clearLater = false;

function calculate(e) {
    let value = e.target.getAttribute('value');
    let displayed = document.querySelector('.display-box').getAttribute('value');
    const operators = ['+','-','*','/'];
    const special =  ['+','-','*','/','='];
    console.log(clearLater);
    if (clearLater) {
        document.querySelector('.display-box').setAttribute('value','');
        displayed = '';
    }
    if (clearInit && special.includes(value) && clearLater) {
        document.querySelector('.display-box').setAttribute('value','');
    } else {
        // console.log('here')
        if (value === '=') {
            const inputCal = displayed.split(' ');
            // console.log(...inputCal)
            let calculator = new Calculator(...inputCal);
            displayedEqual = calculator.calculate();
            document.querySelector('.display-box').setAttribute('value',displayedEqual);
            clearLater = true;
            clearInit = false;
        } 
        else if (value === 'C') {
            document.querySelector('.display-box').setAttribute('value','')
            clearInit = true;
        } else if (operators.includes(value)) {
            value = ' ' + value + ' ';
            document.querySelector('.display-box').setAttribute('value',displayed+value)
            clearLater = false;
            clearInit = false
        } else {
            // console.log('add')
            document.querySelector('.display-box').setAttribute('value',displayed+value);
            clearLater = false;
            clearInit = false;
        }
    }
    
}

function Calculator(a,operator,b) {
    this.num1 = Number(a);
    this.num2 = Number(b);
    this.operator = operator;
    this.calculate = function() {
        if (this.operator === '*') {
            return this.num1*this.num2
        }
        if (this.operator === '+') {
            return this.num1 + this.num2
        }
        if (this.operator === '-') {
            return this.num1 - this.num2
        }
        if (this.operator === '/') {
            return this.num1/this.num2
        }
    }

}
