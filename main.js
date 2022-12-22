class Calculator {

    constructor( input, output ) {
        this.screenLength = 10,
        this.buttons = document.querySelectorAll(input),
        this.screen = document.querySelector(output),
        this.input,
        this.a = 0,
        this.b = 0,
        this.operator = "",
        this.result,
        this.buffer = false,
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
        // Prepare (clear) screen after operator use/error.
        if ( Object.keys( this.operations ).some( el => this.screen.innerText.includes( el ) ) || this.screen.innerText === 'err: num 2 big' ) {
            this.clearScreen();
        }
        // Input number minding length limitation.
        if ( this.screen.innerText.length < this.screenLength && ( +this.input || this.input === '0' ) ) {
            this.inputNumber();
        // Input dot ('.') with limited use.
        } else if ( this.input === '.' ) {
            this.inputDot();
        // Handle operator selection: Save first number, set operator, await for second number.
        } else if ( Object.keys( this.operations ).some( el => this.input.includes( el ) ) ) {
            this.manageOperator();
        // Produce result of the operation by using screen state with operator's and preceding number's bindings.
        } else if ( this.input === '=' && this.operator ) {
            this.calculate();
        // Reset calculator.
        } else if ( this.input === 'C' ) {
            this.reset();
        // Erase 1 character.
        } else if ( this.input === '←' && !Object.keys( this.operations ).some( el => this.screen.innerText.includes( el ) ) ) {
            this.erase();
        }
    }

    clearScreen() {
        this.screen.innerText = '';
    }

    inputNumber() {
        if ( this.screen.innerText === '0' ) this.clearScreen();
        this.screen.innerText += this.input;
    }

    inputDot(){
        if ( !this.screen.innerText.includes( '.' ) ) {
            this.screen.innerText += this.input;
        }
    }

    changeOperator() {
        this.operator = this.input;
    }

    calculate() {
        // Allow further '=' input to repeat last operation.
        if ( this.buffer ) {
            this.a = +this.screen.innerText;
            this.result = this.operations[this.operator]();
        // Normal operation.
        } else { 
            this.b = +this.screen.innerText;
            this.result = this.operations[this.operator]();
            this.buffer = true;
        }
        // Limit decimals.
        if ( String( this.result ).includes( '.' )) this.result = Number( this.result.toFixed( 4 ) );
        // Limit result length.
        if ( String( this.result ).length > 11 ) this.screen.innerText = 'err: num 2 big';
        // Print result.
        else this.screen.innerText = this.result;
    }

    manageOperator() {
        // Allow further '=' input to repeat last operation.
        if ( this.buffer ) {
            this.reset();
            this.screen.innerText = +this.result;
        }
        // Allow back to back calculations.
        if ( this.operator ) {
            this.calculate();
            this.reset();
            this.a = +this.result;
        // Ready first operand.
        } else this.a = +this.screen.innerText;
        // Prepare next operator.
        this.changeOperator();
        this.screen.innerText = this.input;
    }

    reset() {
        this.a = 0;
        this.b = 0;
        this.operator = '';
        this.screen.innerText = '0';
        this.buffer = false;
    }

    erase() {
        this.screen.innerText = this.screen.innerText.split( '' ).slice( 0, -1 ).join( '' );
    }
}

const calculadora = new Calculator( '.button', '.screen' );

calculadora.start();