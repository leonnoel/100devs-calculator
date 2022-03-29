const BTN_INPUTS = Array.from(document.querySelectorAll('.button')),
    DISPLAY = document.querySelector('.calculator-display');

DISPLAY.innerText = '0';

let calc = new Calculator();

BTN_INPUTS.forEach(b => b.addEventListener('click', e => {
    console.log(`button clicked`);
    console.log(e.currentTarget.innerText);
    calc.btnInput = e.currentTarget.innerText;
}));

// listen for keypress -> not very accessible for keyboards without keypads
// document.addEventListener('keypress', logKey);
// function logKey(e) {
//     console.log(e.code);
// } 

function Calculator() {
    const defaultCurrent = '0',
        defaultMemory = null,
        defaultOperator = null,
        defaultLastInput = null,
        defaultLastOperator = null;
    let current = defaultCurrent,
        memory = defaultMemory,
        lastInput = defaultLastInput,
        lastOperator = defaultLastOperator,
        operator = defaultOperator;
    
    this.add = (a, b) => (Number(a) + Number(b)).toString();
    this.sub = (a, b) => (Number(a) - Number(b)).toString();
    this.mul = (a, b) => (Number(a) * Number(b)).toString();
    this.div = (a, b) => (Number(a) / Number(b)).toString();
    this.setDisplay = (s) => {
        DISPLAY.innerText = s.slice(0, 9); 
    }
    this.reset = () => {
        current = defaultCurrent;
        memory = defaultMemory;
        operator = defaultOperator;
        lastInput = defaultLastInput;
        lastOperator = defaultLastOperator;
        this.setDisplay(current);
    }

    Object.defineProperty(this, 'btnInput', {
        set: function(val) {
            const INPUTS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
            if (INPUTS.includes(val)) {
                if (current === '0') {
                    if (val !== '0' && val !== '.') current = val;
                    else if (val === '.') current = current.concat(val);
                } else if (current.length < 9) {
                    if (val !== '.' || (val === '.' && !current.includes('.'))) current = current.concat(val);
                }
                this.setDisplay(current);
            } else { // on an operation or = input
                if (!memory && !operator) {
                    if (val === '=') { // if = is entered
                        if (lastInput && lastOperator) { // repeat last operation if stored
                            memory = current
                            current = lastInput;
                            operator = lastOperator;
                        }
                    } else { // if an operation is entered
                        memory = current;
                        operator = val;
                        current = '0';
                        this.setDisplay(current);
                    }
                }
                if (current === '0' && val !== operator) operator = val;
                if (current !== '0') { // calculation happens if memory and operator are occupied and current is not zero
                    lastInput = current; //need to figure out how to preserve lastInput
                    lastOperator = operator
                    switch (operator) {
                        case '+':
                            current = this.add(memory, current);
                            break;
                        case '-':
                            current = this.sub(memory, current);
                            break;
                        case '/':
                            current = this.div(memory, current);
                            break;
                        case 'x':
                            current = this.mul(memory, current);
                            break;
                    }
                    this.setDisplay(current)
                    memory = null;
                    operator = null;
                    if (val !== '=') {
                        memory = current;
                        operator = val;
                        current = '0';
                    }
                }
            }
            console.log(current, memory, operator, lastInput, lastOperator);
        }
    });
}