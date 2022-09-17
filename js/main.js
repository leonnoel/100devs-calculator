function Calculator() {
    this.memory = '';
    this.primary = '';

    this.currentOperator = '';

    // Equations
    // Parameters: Operater 
    // Returns: answer
    this.equate = operation => {
        if (!['add', 'divide', 'subtract', 'multiply'].includes(operation)) console.log('Not a valid operator');

        switch (operation) {
            case 'add': return `${+this.memory + +this.screen}`;
            case 'subtract': return `${+this.memory - +this.screen}`;
            case 'divide': return `${+this.memory / +this.screen}`;
            case 'multiply': return `${+this.memory * +this.screen}`;
        }
    }

    //Enter number
    this.enterNumber = n => this.screen += `${n}`;

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
        }
    }

    // set operator
    this.setOperator = (operator) => {
        // if both screen and memory are empty, do nothing
        if (!this.screen && !this.memory) {
            return;
        } else if (this.screen && this.memory) {
            this.memory = this.equate(this.currentOperator);
            this.screen = '';
        } else if (this.screen) {
            this.memory = this.screen;
            this.screen = '';
        }
        this.operator = operator;
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


test = new Calculator();
test.memory = 2;
test.screen = 3;
test.currentOperator = 'add';
test.enterNumber(5);
