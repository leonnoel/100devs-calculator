// General functionality:
    // Calculator values and operations are stored in the calc object.
    // There is an event listener for buttons. The input from each button is the value of the inner HTML text.
    // calc.addToEquation() is the main function that wraps around most other methods in the object.
        // addToEquation checks in the input and, if valid, either adds the input to the equation or evaluates the equation.
        // Evaluates only 1 operation at a time (ie., [term1] [operator] [term2]). If there is a complete operation and  another operator is clicked, the operation will evaluate before the new operator is added (I was too lazy to deal with order of operations).

// Improvements
    // Features
        // Handle addition of new operators such as **, ()
        // Pressing '=' twice clears the equation

    // Known issues
        // Supports ~40 characters afterwhich they go offscreen.
        // Once values become too large for `number` they are converted to Scientific notation and calculations break
        // Leading negative sign breaks calculations



document.addEventListener('click', buttonClick)


function makeCalc(equation) {
    this.equation = equation;
    this.equalsCounter = 0;
    this.operations = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        'x' : (a, b) => a * b,
        "/" : (a, b) => a / b,
    }

    this.addToEquation = function(input) {
        // If invalid button is pressed, ignore it.
        if (!this.isValidInput(input)) return this.equation  

        // Check if equals has been pressed x2 in a row. If so clear equation.
        if (this.isDoubleEquals(input)) return this.equation  

        // If input is an operator or '=' and the current equation is a complete equation, 
        // evaluate operation before concatenating next operator
        if ((this.isValidOperator(input) || input === '=') && this.isCompleteEquation()) { 
            this.equation = this.calculate()
        }
        
        if (input === '=') return this.equation

        this.equation = this.equation + input
        return this.equation
    }

    this.splitEquation = function() {
        eq = this.equation.split(/([x+\-*/])/)
        eq = eq.map(item => item.trim())
        return eq
    }

    this.calculate = function() {
        eq = this.splitEquation();
        return String(this.operations[eq[1]](+eq[0], +eq[2]));
    }

    this.isCompleteEquation = function() {
        eq = this.splitEquation();
        // A complete equation is: [term1] [operator] [term2]
        // Cases handled: 
            // Equation has 1 operator.
            // The first term is either empty or a valid number (treated as 0 if omitted)
            // The second term is non-empty and a valid number
            // The operator is valid.
        if (eq.length != 3 
            || isNaN(+eq[0]) 
            || eq[2] == '' 
            || isNaN(+eq[2]) 
            || !'+-*/x'.includes(eq[1])) {
            return false // not a valid equation
        } else {
         return true 
        }
    }

    this.isDoubleEquals = function(input) {
        if (input === '=') {
            this.equalsCounter += 1
        } else {
            this.equalsCounter = 0
        }
        if (this.equalsCounter >= 2) {
            this.equalsCounter = 0;
            this.equation = ''
            return true
        }
        return false
    }

    this.isValidOperator = function(input) {
        return input in this.operations
    }

    this.endsWithOperator = function() {
        return this.equation.slice(-1) in this.operations
    }

    this.hasDecimal = function() {
        eq = this.splitEquation()
        for (i=0; i < eq.length; i++) {
            let splits = eq[i].split('.').length
            if(splits > 1) return false
        }
        return true
    }

    this.isValidInput = function(input) {
        const validOperator = this.isValidOperator(input);
        if (this.endsWithOperator() && validOperator) return false    // check if 2 operators in a row
        if (! this.hasDecimal() && input ==='.') return false     // Check if term has a decimal & is adding a new one. No more than 1 per term.
        return true
    }

}


const calc = new makeCalc('')


function buttonClick(e) {
    if (e.target.tagName === 'BUTTON') {
        value = e.target.innerText
        calc.equation = calc.addToEquation(value);
        updateDisplay()
    }
}

function updateDisplay() {
    document.querySelector('output').innerText = calc.equation
}


