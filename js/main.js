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
let windowText = document.querySelector('.window span');
document.addEventListener('keydown', keyPress);

function keyPress(key) {
    if ( (+key.key >= 0 && +key.key <= 9) || key.key === '.') {
        windowText.innerText += key.key;
    } else {
        switch(key.key) {
            case 'Backspace':
                let digits = windowText.innerText.split('');
                digits.pop();
                windowText.innerText = digits.join('');
                break;
            case '+':
                windowText.innerText = +2 + +2;
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



  