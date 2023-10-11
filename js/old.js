function Calculator() {
    let display = '0';
    
    this.clear = function () {
        display = '0';
        document.querySelector('.display').innerText = display;
    };

    this.updateDisplay = function (char) {
        if ( display === '0' ) {
            if (String(char).includes('+') || String(char).includes('-') || 
                String(char).includes('*') || String(char).includes('/') ) {
                display += ` ${char} `;
            } else {
                display = String(char);
            }
        } else {
            display += char;
        }
        document.querySelector('.display').innerText = display;
    };

    this.equals = function() {
        let numbers = [];
        let num1, num2;

        if ( display.includes('+') ) {

            numbers = display.split(' + ');
            num1 = Number(numbers[0]);
            num2 = Number(numbers[1]);
            display = String(num1 + num2);
            document.querySelector('.display').innerText = display ;

        } else if ( display.includes('-') ) {

            numbers = display.split(' - ');
            num1 = Number(numbers[0]);
            num2 = Number(numbers[1]);
            display = String(num1 - num2);
            document.querySelector('.display').innerText = display;

        } else if ( display.includes('*') ) {

            numbers = display.split(' * ');
            num1 = Number(numbers[0]);
            num2 = Number(numbers[1]);
            display = String(num1 * num2);
            document.querySelector('.display').innerText = display ;

        }  else if ( display.includes('/') ) {

            numbers = display.split(' / ');
            num1 = Number(numbers[0]);
            num2 = Number(numbers[1]);

            num2 === 0  ? display = 'undefined': display = String(num1 / num2);
           
            document.querySelector('.display').innerText = display;

        }
    }

    Object.defineProperty( this, 'display', {
        get: function() {
            return display;
        },
    });

}

const calc = new Calculator();


document.querySelector('.clear-btn').addEventListener('click', () => calc.clear());

document.querySelector('#dot').addEventListener('click', () => {
    let dotCount = 0;
    
    for (let i = 0; i < calc.display.length; i++ ) {
        if ( calc.display[i] === '.' ) {
            dotCount++;
        }
    }

    if ( dotCount < 2 && ( calc.display.indexOf('.') !== calc.display.length - 1 ) ) {
        calc.updateDisplay('.');
    }
});

document.querySelector('#add').addEventListener('click', () => calc.updateDisplay(' + '));
document.querySelector('#subtract').addEventListener('click', () => calc.updateDisplay(' - '));
document.querySelector('#multiply').addEventListener('click', () => calc.updateDisplay(' * '));
document.querySelector('#divide').addEventListener('click', () => calc.updateDisplay(' / '));
document.querySelector('#equals').addEventListener('click', () => calc.equals());

document.querySelector('#zero').addEventListener('click', () => calc.updateDisplay(0));
document.querySelector('#one').addEventListener('click', () => calc.updateDisplay(1));
document.querySelector('#two').addEventListener('click', () => calc.updateDisplay(2));
document.querySelector('#three').addEventListener('click', () => calc.updateDisplay(3));
document.querySelector('#four').addEventListener('click', () => calc.updateDisplay(4));
document.querySelector('#five').addEventListener('click', () => calc.updateDisplay(5));
document.querySelector('#six').addEventListener('click', () => calc.updateDisplay(6));
document.querySelector('#seven').addEventListener('click', () => calc.updateDisplay(7));
document.querySelector('#eight').addEventListener('click', () => calc.updateDisplay(8));
document.querySelector('#nine').addEventListener('click', () => calc.updateDisplay(9));