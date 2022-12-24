class Calculator {

    constructor( input, output ) {
        this.screenLength = 10,
        this.buttons = document.querySelectorAll(input),
        this.screen = document.querySelector(output),
        this.input,
        this.temp = [],
        this.a,
        this.b,
        this.operator = "",
        this.result,
        this.equalBuffer = false,
        this.operatorBuffer = false,
        this.operations = {
            '/': () => this.a / this.b,
            '×': () => this.a * this.b,
            '+': () => this.a + this.b,
            '−': () => this.a - this.b
        }
    }

    start() {
        // Start calculator, read input and react to it.
        this.buttons.forEach( button => button.addEventListener( 'click', () => {
            this.input = button.innerText;
            this.manageInput();
        } ) );
    }

    manageInput() {
        // Erase 1 character.
        if ( this.input === '←' ) {
            // Prevent operators from being erased.
            if (!Object.keys( this.operations ).some( el => this.screen.innerText.includes( el ) )) this.erase();
        }
        // Prepare (clear) screen after operator use/error.
        else if ( Object.keys( this.operations ).some( el => this.screen.innerText.includes( el ) ) || this.screen.innerText === 'err: num 2 big' ) {
            this.clearScreen();
        }
        // Input number minding length limitation.
        if ( this.screen.innerText.length < this.screenLength && ( +this.input || this.input === '0' ) ) {
            this.inputNumber();
            // Allow change of operator without b2b calculation.
            this.operatorBuffer = false;
        // Input dot ('.') with limited use.
        } else if ( this.input === '.' ) {
            this.inputDot();
        // Handle operator selection: Save first number, set operator, await for second number.
        } else if ( Object.keys( this.operations ).some( el => this.input.includes( el ) ) ) {
            this.manageOperator();
        // Produce result of the operation by using screen state with operator's and preceding number's bindings.
        } else if ( this.input === '=' && this.operator ) {
            // Prevent problems when misusing '=' while using operators.
            if ( this.operatorBuffer ) this.screen.innerText = this.operator;
            else {
            this.calculate();
            // Prepare for new set of calculations.
            this.a = 0;
            }
        // Reset calculator.
        } else if ( this.input === 'C' ) {
            this.reset();
        }
    }

    clearScreen() {
        this.screen.innerText = '';
    }

    inputNumber() {
        // Allow back to back calculations.
        // Prevents number to be preceded by 0.
        if ( this.screen.innerText === '0' ) this.clearScreen();
        this.screen.innerText += this.input;
        this.temp.push(this.input);
    }

    inputDot(){
        if ( !this.screen.innerText.includes( '.' ) ) {
            this.screen.innerText += this.input;
            this.temp.push(this.input);
        }
    }

    changeOperator() {
        this.operator = this.input;
    }

    calculate() {
        // Allow further '=' input to repeat last operation.
        if ( this.equalBuffer ) {
            this.a = +this.temp.join('');
            this.result = this.operations[this.operator]();
        // Normal operation.
        } else { 
            this.b = +this.temp.join('');
            this.result = this.operations[this.operator]();
            this.equalBuffer = true;
        }
        // Limit decimals.
        if ( String( this.result ).includes( '.' )) this.result = Number( this.result.toFixed( 4 ) );
        // Limit result length.
        if ( String( this.result ).length > 11 ) {
            this.reset();
            this.screen.innerText = 'err: num 2 big';
        }
        // Print result.
        else {
            this.screen.innerText = this.result;
            this.temp = String(this.result).split('');
        }
    }

    manageOperator() {
        // Turn off b2b '=' mode.
        this.equalBuffer = false;
        // Chain calculus.
        if (this.a && this.temp[0] && !this.operatorBuffer) {
            if (this.result) { 
                this.a = this.result;
            }
            this.calculate();
            this.equalBuffer = false;
            this.a = this.result;
        // Ready first operand.
        } else if (!this.operatorBuffer) this.a = +this.temp.join('');
        // Clears temp for next use.
        this.temp = []; 
        // Prepare next operator.
        this.changeOperator();
        this.screen.innerText = this.input;
        // Allow change of operator without b2b calculation.
        this.operatorBuffer = true;
    }

    reset() {
        this.temp = [];
        this.a = 0;
        this.b = 0;
        this.operator = '';
        this.screen.innerText = '0';
        this.equalBuffer = false;
        this.operatorBuffer = false;
    }

    erase() {
        this.screen.innerText = this.screen.innerText.split( '' ).slice( 0, -1 ).join( '' );
        this.temp.pop();
    }
}

const calculadora = new Calculator( '.button', '.screen' );

calculadora.start();