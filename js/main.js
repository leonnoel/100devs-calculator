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
        defaultOperator = null;
    let current = defaultCurrent,
        memory = defaultMemory,
        calcMemory = null,
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
    }

    Object.defineProperty(this, 'btnInput', {
        set: function(val) {
            const INPUTS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
            if (INPUTS.includes(val)) {
                if (current === '0') {
                    if (val !== '0' && val !== '.') current = val;
                } else if (current.length < 9) {
                    if (val !== '.' || (val === '.' && !current.includes('.'))) current = current.concat(val);
                }
                this.setDisplay(current);
            } else {
                if (calcMemory && current === '0') current = calcMemory;
                if (!memory) {
                    if (val !== '=') {
                        memory = current;
                        current = '0';
                        this.setDisplay(current);
                        operator = val;
                    }
                } else if (operator) {
                    switch (operator) {
                        case '+':
                            memory = this.add(memory, current);
                            break;
                        case '-':
                            memory = this.sub(memory, current);
                            break;
                        case '/':
                            memory = this.div(memory, current);
                            break;
                        case 'x':
                            memory = this.mul(memory, current);
                            break;
                    }
                    this.setDisplay(memory);
                    if (val !== '=') {
                        operator = val;
                    }
                    calcMemory = current;
                    current = '0';
                }
            }
            console.log(current, memory, operator, calcMemory);
        }
    });
}