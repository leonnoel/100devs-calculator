function Calculator() {
    let operator = '';
    let prevValue = '';
    let currentValue = '';
    let decimal = false;   // track if decimal has been used

    // get value method
    this.appendVal = function(event) {
        let key = event.target.innerHTML;

        if(key === '.') {
            if(currentValue === '') {
                currentValue = '0.';
            } else if (!decimal) {
                currentValue += key;
            }
            decimal = true;
        } else {
            currentValue += key;
        }

        display(currentValue);
    };

    // calculate
    this.calculate = function(event) {
        let key = event.target.innerHTML;

        // check if currentValue is not empty and doesn't end with a decimal point
        if(currentValue !== '' && currentValue.slice(-1) !== '.') {
            if(key === '=') {
                currentValue = String(calcMethods[operator](+prevValue, +currentValue));
                // reset operator
                display(currentValue);
            } else {
                operator = key;
                prevValue = currentValue;
                // reset properties
                currentValue = '';
                decimal = false;
            }
        }
    };

    // display method
    let display = function(val) {
        document.querySelectorAll('.calc-display')[0].innerHTML = val;
    };

    let calcMethods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '/': (a, b) => a / b
    }

// ##############################
//       debug section
// ##############################
 
    // this.getProp = function() {
    //     console.log('operator ', operator);
    //     console.log('prevValue ', prevValue);
    //     console.log('currentValue ', currentValue);
    // }
}

const calc = new Calculator();

// add event listener to all numbers to add number to the display
document.querySelectorAll('.numbers').forEach(number => number.addEventListener('click', e => calc.appendVal(e)));
document.querySelectorAll('.operator').forEach(op => op.addEventListener('click', e => calc.calculate(e)));


// use cases
// [x] When a number is pressed, and the display is empty the number appears on the display 
// [x] When a number is pressed, and the display has a number, the pressed number is added to the end (append)
// [x] when an operator is pressed, check if there is a non null number, true? add currentValue to values, false? reset currentValue and display
// [x] when the decimal button is pressed, and the display is empty, the display shows 0.
// [x] when the equal button is pressed, perform the calculation based on two values and the operator, then show the result on display 
