//create two variables, a & b, that store the numerical values that are input into the calculator & third variable total.

let a = ''
let b = ''
let total

//create a variable that stores whether numbers should be input into storage a or b
//create a variable that stores what operation was selected
let op;
let ph = 1;

const numbers = document.querySelectorAll('.number')
Array.from(numbers).forEach(number => number.addEventListener('click', findNumber))

//Store clicked number in a variable & then run storeNumber function.
function findNumber (click) {
    let num = click.target.innerText;
    storeNumber(num, ph);
}
function storeNumber (number, pM) {
   switch (pM) {
        case 1: 
            a = a + number;
            displayNumber(a);
            break;
        case 2:
            b = b + number;
            displayNumber(b);
            break;
   }
}
function displayNumber (x) {
    document.querySelector('#answerBox').innerText = x;
}
function displayOp (x) {
    document.querySelector('#opHolder').innerText = x;
}
//operator functions
const ops = document.querySelectorAll('.op')
Array.from(ops).forEach(op => op.addEventListener('click', findOperation))

function findOperation(click) {
    op = click.target.innerText;
    ph = 2;
    displayOp(op);
}
document.querySelector('.equals').addEventListener('click', result)
function result() {
    let total;
    switch (op) {
        case '/':
            total = Number(a)/Number(b);
            displayNumber(total);
            break;
        case 'X':
            total = Number(a)*Number(b);
            displayNumber(total);
            break;
        case '+':
            total = Number(a)+Number(b);
            displayNumber(total);
            break;
        case '-':
            total = Number(a) - Number(b);
            displayNumber(total);
            break;
    }
    a = total;
    b = '';
    ph = 1;
}
document.querySelector('.AC').addEventListener('click', allClear)
function allClear() {
    a = '';
    b = '';
    total = 0;
    op = '';
    ph = 1;
    displayNumber(a);
    displayOp(op);
}