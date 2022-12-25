function Calculator() {
    'use strict';

    let str = '';
    let op = '';
    let total = 0;

    this.getDataValue = function(e) {
        const numValue = e.target.getAttribute('data-value');
        str += numValue;
        display.textContent = str;
    };
    this.getOpValue = function(e) {
        const opValue = e.target.getAttribute('data-value');
        op = opValue;
        console.log(op);
    };
    this.calculation = function() {
        if (total === 0) {
            total += Number(str);
            console.log('it was zero');
            str = '';
        } else {
            if (str !== '') {
                switch (op) {
                    case '+':
                        total += Number(str);
                        break;
                    case '-':
                        total -= Number(str);
                        break;
                    case '*':
                        total *= Number(str);
                        break;
                    case '/':
                        total /= Number(str);
                        break;
                }
                total > 0 ? display.textContent = Math.abs(total) : display.textContent = -Math.abs(total);
                str = '';
            }
        };
        this.equals = function() {
            alert('hi');
        }
    }

    // actions
    const display = document.querySelector('.calculator--display');
    let numberBtns = Array.from(document.querySelectorAll('.calculator--btn')); // gets array
    let opBtns = Array.from(document.querySelectorAll('.calculator--op')); // gets array
    let equalBtn = document.querySelector('.calculator--equals');
    numberBtns.forEach(btn => btn.addEventListener('click', this.getDataValue));
    opBtns.forEach(btn => btn.addEventListener('click', this.getOpValue));
    opBtns.forEach(btn => btn.addEventListener('click', this.calculation));
    equalBtn.addEventListener('click', this.calculation);
}

const calc = new Calculator();







