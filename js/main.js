// General functionality:
    // Calculator values and operations are stored in the calc object.
    // There is an event listener for buttons. The input from each button is the value of the inner HTML text.
    // calc.addToEquation() is the main function that wraps around most other methods in the object.
        // addToEquation checks in the input and, if valid, either adds the input to the equation or evaluates the equation.
        // Evaluates only 1 operation at a time (ie., [term1] [operator] [term2]). If there is a complete operation and  another operator is clicked, the operation will evaluate before the new operator is added (I was too lazy to deal with order of operations).
    // Supports ~40 characters afterwhich they go offscreen.

// Improvements
    // Features
        // Handle addition of new operators such as **, ()
        // Pressing '=' twice clears the equation

    // testing / edge cases
        // Operator is valid
        // Each equation has only 1 operator
        // Each term has max 1 decimal place

    // error handling
        // if equation is invalid throw error
        // If using 2 operators in a row, overwrite the first operator


document.addEventListener('click', buttonClick)


function makeCalc(equation) {
    this.equation = equation;
    this.operations = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        'x' : (a, b) => a * b,
        "/" : (a, b) => a / b,
    }
    this.splitEquation = function() {
        eq = this.equation.split(/([x+\-*/])/)
        eq = eq.map(item => item.trim())
        return eq
    }

    this.calculate = function() { // Called when 'equals button' is pressed 
        eq = this.splitEquation();
        return String(this.operations[eq[1]](BigInt(eq[0]), BigInt(eq[2])));
    }

    this.addToEquation = function(input) {  // Called whenever a button other than '=' is pressed
        if ((input in this.operations || input == '=') && this.isCompleteEquation()) {    // If complete equation, evaluate before adding.
            this.equation = this.calculate()
        }

        if (input !== '=') {
            this.equation = this.equation + input
        }
        return this.equation
    }

    this.isCompleteEquation = function() {
        const eq = this.splitEquation();
         // Cases handled: 
            // Equation has 1 operator.
            // The first term is either empty or a valid number (treated as 0 if omitted)
            // The second term is non-empty and a valid number
            // The operator is valid.
        if (eq.length != 3 || isNaN(+eq[0]) || eq[2] == '' || isNaN(+eq[2]) || !'+-*/x'.includes(eq[1])) {
            return false // not a valid equation
        } else {
         return true 
        }
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


