function Calculator() {
    this.leftSide = '';
    this.rightSide = '';
    this.total = 0;
    this.leftSideFocus = true;
    this._currentOperator = '';

    this.reset = () => {
        this.leftSide = 0;
        this.rightSide = 0;
        this.total = 0;
    }
    
    // Math
    this.add = () => +this.leftSide + +this.rightSide;
    this.subtract = () => +this.leftSide - +this.rightSide;
    this.multiply = () => +this.leftSide * +this.rightSide;
    this.divide = () => +this.leftSide / +this.rightSide;

    // data entry
    //numbers
    this.enterNumber = (n) => {
        if (this.leftSideFocus) {
            this.leftSide += `{n}`;
        } else {
            this.rightSide += `{n}`;
        }
    }
    // decimal
    this.enterDecimal = () => {
        if (this.leftSideFocus) {
            if (!this.leftSide.toString().includes('.')) {
                if (this.leftSide = 0) {
                    this.leftSide += '0.';
                } else {
                    this.leftSide += '.';
                }
            }
        } else {
            if (!this.rightSide.toString().includes('.')) {
                if (this.rightSide = 0) {
                    this.rightSide += '0.';
                } else {
                    this.rightSide += '.';
                }
            }
        }
    }

    //calc stuff
    this.equate = () => {
        // verify ready to equate
        if (!(this.leftSide && this.rightSide && this._currentOperator))

        // get operator
        // run operation and set total
        switch (this._currentOperator) {
            case 'add': return this.add();
            case 'subtract': return this.subtract();
            case 'divide': return this.divide();
            case 'multiply': return this.multiply();            
        }
    }

    // set operator
    this.setOperator = (operation) => {
        // make sure operation is valid
        if (!['add', 'divide', 'subtract', 'multiply'].includes(operation)) {
            console.error('Not a valid operator');
        }
        // check if let side has content
        if (this.leftSide) {
            // if left side has content but right side does not, just update the operator and change focus
            if (!this.rightSide) {
                console.log('operator updated');
                this._currentOperator = operation;
                this.leftSideFocus = false;
            } else {
                // right side has content
                // right side can only have content if an operator is set (not implemented yet)
                // if so, equate, set answer to left side, clear right side, set new operator, 
                const ans = this.equate();
                this.leftSide = ans.toString();
                this.rightSide = '';
                this._currentOperator = operation;
            }
        } else {
            // if not, do nothing
            return;
        }
    }

}






