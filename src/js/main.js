const displayFirstEl = document.querySelector('.display__first');
const displaySecondEl = document.querySelector('.display__second');
const tempResultEl = document.querySelector('.display__temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equlEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const lastEntityClearEl = document.querySelector('.last-entity-clear');

let displayFirstNum = '';
let displaySecondNum = '';
let result = null;
let lastOperation = '';
let hasDot = false;

numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !hasDot) {
            hasDot = true;
        } else if (e.target.innerText === '.' && hasDot) {
            return;
        }
        displaySecondNum += e.target.innerText;
        displaySecondEl.innerText = displaySecondNum
    })
})