let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach(e => e.addEventListener('click',calculate))

let clearLater = true;

function calculate(e) {
    let value = e.target.getAttribute('value');
    let displayed = document.querySelector('.display-box').getAttribute('value');
    const special =  ['+','-','*','/','=','C'];
    console.log(clearLater);
    if (clearLater) {
        if (special.includes(value)) {
            document.querySelector('.display-box').setAttribute('value','');
            displayed = '';
        } else {
            document.querySelector('.display-box').setAttribute('value',value);
            clearLater = false;
        }
    } else {
        if (value === '=') {
            const inputCal = displayed.split(' ');
            let calculator = new Calculator(...inputCal);
            displayedEqual = calculator.calculate();
            document.querySelector('.display-box').setAttribute('value',displayedEqual);
            clearLater = true;
        } 
        else if (value === 'C') {
            document.querySelector('.display-box').setAttribute('value','')
            clearInit = true;
        } else if (special.includes(value)) {
            value = ' ' + value + ' ';
            document.querySelector('.display-box').setAttribute('value',displayed+value)
            clearLater = false;
        } else {
            document.querySelector('.display-box').setAttribute('value',displayed+value);
            clearLater = false;
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
