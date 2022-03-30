function Calculator() {
    const operations = ['+', '-', 'x', '/', '^', '%'], that = this;
    let operation, input = '', inputArray = [];

    // Helper function to calculate factorial
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Breaks up an equation into sequential operations (not order of operations) and returns the result of a calculation
    this.calculate = function() {
        // Expands factorials (or removes them if used incorrectly)
        inputArray.forEach((item, index) => {
            if (item.charAt(item.length - 1) === '!') {
                item = item.slice(0, -1);
                inputArray[index] = factorial(Number(item));
            } else if (item.includes('!')) {
                inputArray[index] = item.replace('!', '');
            }
        });

        // Scan equation
        for ( i = 0; i < inputArray.length; i++) {
            let lastItem = i > 0 ? inputArray[i - 1] : 0;
            let nextItem = inputArray[i + 1];
            let item = inputArray[i];

            // Checks for a valid operation i.e. number operator number
            if (operations.includes(item)) {
                if (!isNaN(lastItem) && !isNaN(nextItem)) {
                    // Updates result inplace in inputArray
                    operation = new Operation([lastItem, item, nextItem]);
                    inputArray.splice(i - 1, 2);
                    i--;
                    inputArray[0] = String(operation.result);
                // Only evalulates last operator in case of sequential operators
                } else if (operations.includes(nextItem)) {
                    inputArray.splice(i, 1);
                    i--; 
                }
            }
        }

        input = inputArray[0];
        return inputArray[0];
    }

    // Records a button press
    this.input = function() {
        // Performs calculation
        if (this.innerHTML === '=') {
            that.calculate(); 
        // Resets number input when an operator is entered
        } else if (operations.includes(this.innerHTML)) {
            inputArray.push(this.innerHTML);
            input = '';
        // Appends digit to number input
        } else if (input) {
            input += this.innerHTML;
            inputArray[inputArray.length - 1] = input;
        // Creates a number input
        } else {
            inputArray.push(this.innerHTML);
            input = this.innerHTML;
        }

        that.render();

        // Clears the display and input
        if (this.innerHTML === 'C') {
            inputArray = [];
            input = '';
            document.querySelector('#display span').innerHTML = '0';
        }
    }

    // Displays the equation on the calculator
    this.render = function() {
        let string = '';
        inputArray.forEach((item) => {
            string += `${item} `;
        });

        document.querySelector('#display span').textContent = string;
    }
}

// Creates an object from a string of a starting value, an operator and a value. Creates a BOS operation
function Operation(input) {
    const a = Number(input[0]);
    const operator = input[1]
    const b = Number(input[2]);
    
    this.performOperation = function() {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '/':
                return a / b;
            case 'x':
                return a * b;
            case '^':
                return a ** b;
            case '%':
                return a % b;
        }
    }
    
    Object.defineProperty(this, 'result', {
        get: function() {
            return this.performOperation()
        }
    });
}

// Create calculator and add event listeners to button elements
const calculator = new Calculator();
const buttons = Array.prototype.slice.call(document.querySelectorAll('button'));

buttons.forEach(el => el.addEventListener("click", calculator.input));