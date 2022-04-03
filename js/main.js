let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach(e => e.addEventListener('click',calculate)) 

function calculate(e) {
    let value = e.target.getAttribute('value')
    let displayed = document.querySelector('.display-box').getAttribute('value')
    if (value === '=') {
        const inputCal = displayed.split(' ');
        console.log(...inputCal)
        let calculator = new Calculator(...inputCal);
        displayedEqual = calculator.calculate();
        document.querySelector('.display-box').setAttribute('value',displayedEqual)
    } 
    else if (value === 'C') {
        document.querySelector('.display-box').setAttribute('value','')
    } else {
        const operators = ['+','-','*','/'];
        let valueNew = operators.includes(value)?` ${value} `:value;
        document.querySelector('.display-box').setAttribute('value',displayed+valueNew)
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
