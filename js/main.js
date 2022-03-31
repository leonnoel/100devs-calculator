class Calculator {
    constructor() {
    }

    calculate(text) {
        
        let operands = [];

        // if addition, add and return result
        if(text.includes('+')) {
            operands = text.split('+');
            if(operands[1] !== '') {
                return +operands[0] + +operands[1];
            }  
        }
        // if subtraction, subtract and return result
        if(text.includes('-')) {
            operands = text.split('-');
            if(operands[1] !== '') {
                return +operands[0] - +operands[1];
            }  
        }
        // if multiplication, multiply and return result
        if(text.includes('*')) {
            operands = text.split('*');
            if(operands[1] !== '') {
                return +operands[0] * +operands[1];
            }  
        }
        // if division, divide and return result
        if(text.includes('/')) {
            operands = text.split('/');
            if(operands[1] !== '') {
                return operands[1] > 0 ? +operands[0] / +operands[1] : undefined;
            }  
        }
    }
}

// define global variables
let calc = new Calculator();
let resultInWindow = false;
let windowText = document.querySelector('.window span');

// add keystroke event listener
document.addEventListener('keydown', keyDown);

//function to check if an operator already exists in string 
function includesOperator(str) {
    return str.includes('+') || str.includes('-') || str.includes('*') || str.includes('/');
}

// function to handle key press events
function keyDown(key) {
    // if there's already a result in the window and key 0-9 is pressed
    // clear the window
    if( resultInWindow && +key.key >= 0 && +key.key <= 9)  {
        windowText.innerText = '';
        resultInWindow = false;
    }

    // if key pressed is 0-9 concat key to string
    // else we move into the switch to handle other key presses
    if ( (+key.key >= 0 && +key.key <= 9)) {
        windowText.innerText += key.key;
    } else {
        // switch that handles the non digit keys
        switch(key.key) {
            case '.':
                // if there isn't already a point in the current operand or there
                // is an operand, concat a point into window
                // DOESN'T WORK RIGHT, multiple points can be added to 2nd operand
                if(!windowText.innerText.includes('.') || includesOperator(windowText.innerText)) {
                        windowText.innerText += '.';
                }
                break;
            case 'Backspace':
                // if backspace is pressed, remove last digit from window
                let digits = windowText.innerText.split('');
                digits.pop();
                windowText.innerText = digits.join('');
                break;
            case '+':
                // if window isn't blank and doesn't already contain + sign then add + sign
                if(windowText.innerText !== '' && !includesOperator(windowText.innerText)) {
                    windowText.innerText += '+';
                    resultInWindow = false;
                }
                break;
            case '-':
                // if window isn't blank and doesn't already contain - sign then add - sign
                if(windowText.innerText !== '' && !includesOperator(windowText.innerText)) {
                    windowText.innerText += '-';
                    resultInWindow = false;
                }
                break;
            case 'X':
            case 'x':
            case '*':
                // if window isn't blank and doesn't already contain *, x, or X then add * sign
                if(windowText.innerText !== '' && !includesOperator(windowText.innerText)) {
                    windowText.innerText += '*';
                    resultInWindow = false;
                }
                break;
            case '/':
                // if window isn't blank and doesn't already contain / sign then add / sign
                if(windowText.innerText !== '' && !includesOperator(windowText.innerText)) {
                    windowText.innerText += '/';
                    resultInWindow = false;
                }
                break;

            // equals or enter key is pressed (do calculation and show in window)
            case '=':    
            case 'Enter':
                windowText.innerText = calc.calculate(windowText.innerText);
                resultInWindow = true;
                break;
        }
    }
  }



  