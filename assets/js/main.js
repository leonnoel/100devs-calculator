// Calculator

// Variables
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelectorAll('.button');
const display = document.querySelector('.display');

// Functions
// Function to make the calculator work
let calcWork = (e) => {
    // set variables
    let key = e.target;
    let action = key.dataset.action;
    let keyContent = key.textContent;
    let displayedNum = display.textContent;
    let previousKeyType = calculator.dataset.previousKeyType;

    // if there is no action
    if (!action) {
        // if the display is 0 or the previous key was an operator, replace the display with the key content
        if (displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent;
        // otherwise, add the key content to the display
        } else {
            display.textContent = displayedNum + keyContent;
        }
        // set the previous key type to number
        calculator.dataset.previousKeyType = 'number';
    }

    // if the action is an operator
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
        // add the is-depressed class to the operator key
        key.classList.add('is-depressed');
        // set the previous key type to operator
        calculator.dataset.previousKeyType = 'operator';
        // set the first value to the displayed number
        calculator.dataset.firstValue = displayedNum;
        // set the operator to the action
        calculator.dataset.operator = action;
    }

    // if the action is decimal
    if (action === 'decimal') {
        // if the previous key type is an operator, add a 0 before the decimal but otherwise add the decimal
        display.textContent = displayedNum + '.';
    }

    // if the action is clear
    if (action === 'clear') {
        // log message to console
        console.log('clear key!');
        // set the display to 0
        display.textContent = '0';
    }

    // if the action is calculate
    if (action === 'calculate') {
        // set variables
        let firstValue = calculator.dataset.firstValue;
        let operator = calculator.dataset.operator;
        let secondValue = displayedNum;

        // evaluate the calculation, set the display to the result
        display.textContent = evaluate(firstValue, operator, secondValue);
    }
}

// Function to evaluate the calculation
let evaluate = (n1, operator, n2) => {
    let result = '';

    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2);
    }

    return parseFloat(result);
}

// Event Listeners
// Add event listener to each key to make the calculator work
keys.forEach(key => key.addEventListener('click', calcWork));

// Add event listener to each key to remove the is-depressed class
keys.forEach(key => key.addEventListener('transitionend', e => {
    if (e.propertyName === 'transform') {
        e.target.classList.remove('is-depressed');
    }
}));

// Add event listener to the window to remove the is-depressed class when the mouse is released
window.addEventListener('mouseup', e => {
    keys.forEach(key => key.classList.remove('is-depressed'));
});

// Add event listener to the window to remove the is-depressed class when the mouse leaves the window

window.addEventListener('mouseleave', e => {
    keys.forEach(key => key.classList.remove('is-depressed'));
});
