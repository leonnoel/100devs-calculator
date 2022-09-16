function Calculator() {
    this.leftSide = '';
    this.rightSide = '';
    this.total = 0;
    this.leftSideFocus = true;

    this.reset = () => {
        this.leftSide = 0;
        this.rightSide = 0;
        this.total = 0;
    }
    
    // Math
    this.add = () => this.total = +this.leftSide + +this.rightSide;
    this.subtract = () => this.total = +this.leftSide - +this.rightSide;
    this.multiply = () => this.total = +this.leftSide * +this.rightSide;
    this.divide = () => this.total = +this.leftSide / +this.rightSide;

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

}