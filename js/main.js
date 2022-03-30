class Calculator {
    constructor() {
    }

    add(a,b) {
        return a + b;
    }

    subtract(a,b) {
        return a - b;
    }

    multiply(a,b) {
        return a * b;
    }

    divide (a,b) {
        return a / b;
    }
}

let calc = new Calculator();
let resultInWindow = false;
let windowText = document.querySelector('.window span');
document.addEventListener('keydown', keyPress);

//function to check if an operator already exists in window
function includesOperator(str) {
    return str.includes('+') || str.includes('-') || str.includes('*') || str.includes('/');
}

// function to handle key press events
function keyPress(key) {
    if( resultInWindow && +key.key >= 0 && +key.key <= 9)  {
        windowText.innerText = '';
        resultInWindow = false;
    }

    // if key pressed is 0-9 or a decimal point concat key to string
    if ( (+key.key >= 0 && +key.key <= 9)) {
        windowText.innerText += key.key;
    } else {
        switch(key.key) {
            case '.':
                // if there isn't already a point concat one into window
                if(!windowText.innerText.includes('.') || includesOperator(windowText.innerText)) {
                        windowText.innerText += '.';
                }
                break;
            case 'Backspace':
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
                // if window isn't blank and doesn't already contain + sign then add + sign
                if(windowText.innerText !== '' && !includesOperator(windowText.innerText)) {
                    windowText.innerText += '-';
                    resultInWindow = false;
                }
                break;
            case '*':
                // if window isn't blank and doesn't already contain + sign then add + sign
                if(windowText.innerText !== '' && !includesOperator(windowText.innerText)) {
                    windowText.innerText += '*';
                    resultInWindow = false;
                }
                break;
            case '/':
                // if window isn't blank and doesn't already contain + sign then add + sign
                if(windowText.innerText !== '' && !includesOperator(windowText.innerText)) {
                    windowText.innerText += '/';
                    resultInWindow = false;
                }
                break;
            case 'Enter':
                let text = windowText.innerText;
                let operands = [];

                // if addition add and show result
                if(text.includes('+')) {
                    operands = text.split('+');
                    if(operands[1] !== '') {
                        let sum = calc.add(+operands[0], +operands[1]);
                        windowText.innerText = sum;

                        //set result in window bool to true
                        //(so window can be cleared above when user types)
                        resultInWindow = true;
                    }  
                }

                // if subtraction subtract and show result
                if(text.includes('-')) {
                    operands = text.split('-');
                    if(operands[1] !== '') {
                        let difference = calc.subtract(+operands[0], +operands[1]);
                        windowText.innerText = difference;

                        //set result in window bool to true
                        //(so window can be cleared above when user types)
                        resultInWindow = true;
                    }  
                }



                // if multiplication multiply and show result
                if(text.includes('*')) {
                    operands = text.split('*');
                    if(operands[1] !== '') {
                        let product = calc.multiply(+operands[0], +operands[1]);
                        windowText.innerText = product;

                        //set result in window bool to true
                        //(so window can be cleared above when user types)
                        resultInWindow = true;
                    }  
                }


                // if division divide and show result
                if(text.includes('/')) {
                    operands = text.split('/');
                    if(operands[1] !== '') {
                        let quotient = calc.divide(+operands[0], +operands[1]);
                        windowText.innerText = quotient;

                        //set result in window bool to true
                        //(so window can be cleared above when user types)
                        resultInWindow = true;
                    }  
                }



                break;
        }
    }
    // switch(key.key) {
    //     case '0':
    //         windowText.innerText += '0';
    //         break;
    //     case '1':
    //         windowText.innerText += '1';
    //         break;  
    //     case '2':
    //         windowText.innerText += '2';
    //         break;
    //     case '3':
    //         windowText.innerText += '3';
    //         break;  
    //     case '4':
    //         windowText.innerText += '4';
    //         break;
    //     case '5':
    //         windowText.innerText += '5';
    //         break;  
    //     case '6':
    //         windowText.innerText += '6';
    //         break;
    //     case '7':
    //         windowText.innerText += '7';
    //         break;
    //     case '8':
    //         windowText.innerText += '8';
    //         break;  
    //     case '9':
    //         windowText.innerText += '9';
    //         break;
    //     case 'Backspace':
    //         windowText.innerText += 'p';
    //         break;
                    
    // }
  }



  