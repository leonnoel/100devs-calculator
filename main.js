//Selectors
const screen = document.querySelector('#screen');
let buttons = Array.from(document.querySelectorAll('.button'));
let operators = Array.from(document.querySelectorAll('.operator'));
const clearBtn = document.querySelector('#clear');
const evalBtn = document.querySelector('.eval');

//Objects
function Ti86 () {
    let processed, addedOperator, hiddenTotal  = 0;
    this.addValue = function(e) {
    var clickElement = e.target.textContent
        if(processed === true) {
            processed = false;
            addedOperator = false;
            screen.innerText = clickElement;
            hiddenTotal = clickElement;
            return;
        }

        if(screen.innerText === '0') {
            screen.innerText = clickElement;
            hiddenTotal = screen.innerText;
        } else {
            console.log(clickElement);
            screen.innerText += clickElement;
            hiddenTotal += clickElement;
            console.log(hiddenTotal);
        }
    }
    this.operator = function(e) {
        var clickElement = e.target.textContent;
        screen.innerText = '';
        if(processed === true) {
            processed = false;
            hiddenTotal += clickElement;
            return;
        }
        hiddenTotal += clickElement;
    }
    this.clear = function() {
        screen.innerText = ''
        hiddenTotal = 0;
    }
    this.evaluate = function() {
        screen.innerText = eval(hiddenTotal);
        console.log(hiddenTotal);
        console.log(eval(screen.innerText));
        processed = true;
        hiddenTotal = eval(hiddenTotal)
    }
}

let calc = new Ti86;

//Event Listeners
buttons.map( item => {
    item.addEventListener('click' ,calc.addValue);
});
operators.map(item => {
    item.addEventListener('click', calc.operator)
});
clearBtn.addEventListener('click', calc.clear);
evalBtn.addEventListener('click', calc.evaluate);