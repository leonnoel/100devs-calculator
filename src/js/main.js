const displayFirstEl = document.querySelector('.display__first');
const displaySecondEl = document.querySelector('.display__second');
const tempResultEl = document.querySelector('.display__temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const lastEntityClearEl = document.querySelector('.last-entity-clear');

let displayFirstNum = '';
let displaySecondNum = '';
let result = null;
let lastOperation = '';
let hasDot = false;

// Check for DOT 
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
});

// Operation loop
operationEl.forEach( operation => {
    operation.addEventListener('click', (e) => {
        if(!displaySecondNum) {return;}

        hasDot = false;
        const operationName = e.target.innerText;
        if(displayFirstNum && displaySecondNum && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(displaySecondNum);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

// Clear and show after the operation
function clearVar(name = '') {
    displayFirstNum += displaySecondNum + ' ' + name + ' ';
    displayFirstEl.innerText = displayFirstNum;
    displaySecondEl.innerText = '';
    displaySecondNum = '';
    tempResultEl.innerText = result;
}

// Actual math operation
function mathOperation() {
    if(lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(displaySecondNum);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(displaySecondNum);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(displaySecondNum);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(displaySecondNum);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(displaySecondNum);
    }
}

// Equal sign 
equalEl.addEventListener('click', (e) => {
    if(!displayFirstNum || !displaySecondNum) {return;}
    hasDot = false;
    mathOperation();
    clearVar();
    displaySecondEl.innerText = result;
    tempResultEl.innerText = '';
    displaySecondNum = result;
    displayFirstNum = '';
})

// Clear all operation
clearAllEl.addEventListener('click', (e) => {
    displayFirstEl.innerText = '0';
    displaySecondEl.innerText = '0';
    displayFirstNum = '';
    displaySecondNum = '';
    result = '';
    tempResultEl.innerText = '0'
})

// Clear last entity operation
lastEntityClearEl.addEventListener('click', (e) => {
    displaySecondEl.innerText = '';
    displaySecondNum = '';
})

// Listen for keyboard strokes
window.addEventListener('keydown', (e) => {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
    ) {
        clickButton(e.key);
    } else if (
        e.key === '+' ||
        e.key === '/' ||
        e.key === '-' ||
        e.key === '%'
    ) {
        clickOperation(e.key);
    } else if (e.key === '*') {
        clickOperation('X');
    } else if (e.key === '=' || e.key === 'Enter') {
        clickEqual();
    }
});

function clickButton(key) {
    numbersEl.forEach( button => {
        if(button.innerText === key) {
            button.click();
        }
    })
}

function clickOperation(key) {
    operationEl.forEach( button => {
        if(button.innerText === key) {
            button.click();
        }
    })
}

function clickEqual() {
    equalEl.click();
}