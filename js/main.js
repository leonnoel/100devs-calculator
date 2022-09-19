function Calculator() {
    this.memory = '';
    this.screen = '';

    this.currentOperator = '';

    this.showMemory = false;

    // Equations
    // Parameters: Operater 
    // Returns: answer
    this.equate = operation => {
        if (!['add', 'divide', 'subtract', 'multiply'].includes(operation)) console.error('Not a valid operator');

        switch (operation) {
            case 'add': return `${+this.memory + +this.screen}`;
            case 'subtract': return `${+this.memory - +this.screen}`;
            case 'divide': return `${+this.memory / +this.screen}`;
            case 'multiply': return `${+this.memory * +this.screen}`;
        }
    }

    //Enter number
    this.enterNumber = n => {
        if (this.showMemory) {
            this.showMemory = false;
        }
        this.screen += `${n}`;
    }

    // Equals
    this.equals = () => {
        // verify an equation can be made
        if (!this.screen || !this.memory) {
            console.error('Both memory and screen must have content to run equals');
        } else {
            // set the answer to memory
            this.memory = this.equate(this.currentOperator);
            // clear screen
            this.screen = '';
            this.showMemory = true;
            // clear operator
            this.currentOperator = '';
        }
    }

    // set operator
    this.setOperator = (operator) => {
        // if both screen and memory are empty, do nothing
        if (!this.screen && !this.memory) {
            console.error('No screen or memory content');
            return;
        } else if (this.screen && this.memory) {
            this.memory = this.equate(this.currentOperator);
            this.screen = '';
            this.showMemory = true;
        } else if (this.screen) {
            this.memory = this.screen;
            this.screen = '';
            this.showMemory = true;
        }
        this.currentOperator = operator;
    }

    // add decimal
    this.enterDecimal = () => {
        if (!this.screen) {
            this.screen = '0.';
        } else if (!this.screen.includes('.')){
            this.screen += '.';
        }
    }
}



const calc = new Calculator();
/*
    BUTTONS AND LOGIC
*/
// button objects and screen
const screen = document.querySelector('.screen');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('#equal');


// update view screen function
function updateScreen (calcObj, screenVar) {
    if (calcObj.showMemory) {
        screenVar.innerText = calcObj.memory;
    } else {
        screenVar.innerText = calcObj.screen;
    }
}

// numbers event
numButtons.forEach(button => button.addEventListener('click', (e) => {
    calc.enterNumber(e.target.id);
    updateScreen(calc, screen);
}))

// decimal event
decimalButton.addEventListener('click', (e) => {
    calc.enterDecimal();
    updateScreen(calc, screen);
})

// operator event
operatorButtons.forEach(button => button.addEventListener('click', e => {
    let op = e.target.id;
    console.log(op);
    console.log(typeof op);
    calc.setOperator(op);
    updateScreen(calc, screen);
}))

// equals

equalsButton.addEventListener('click', () => {
    console.log(calc.currentOperator);
    calc.equals();
    updateScreen(calc, screen);
})

