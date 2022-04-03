/*  Pseudo Code

-Click numbers -> they're concatenated into display   - DONE
-Click an operator:
     - concatenated number is saved as previous operand
     - operator is saved as operator
-Click more numbers
     - previous numbers are removed from display
     - new numbers are concatenated into display 
- Click another operand 
     - concatenated number is saved as current operand
     - operation is performed with PREVIOUSLY saved operator
     - result is displayed 
     - result is saved as previous operand
     - operator is saved as operator for next operation 
-Click equals
     - operation is performed with previously saved operator
     - result is displayed 
     - result is saved as previous operand
     - Click equals multiple times?  same operation is repeated with result, previous operator, and current operand (which hasn't changed)


*/

//Calculator Object Constructor function, to handle calculations
function Calculator() {

    this.add = (n1, n2) => n1 + n2
    this.subtract = (n1, n2) => n1 - n2
    this.multiply = (n1, n2) => n1 * n2
    this.divide = (n1, n2) => n1 / n2

    this.changeSign = n1 => Math.sign(n1) === 1 ? -n1 : Math.abs(n1)
    this.percent = n1 => n1 / 100
    this.clear = () => {
        n1 = 0 
        n2 = 0
    }

}

//Calculator Interface Constructor function, to handle DOM manipulation
function CalculatorInterface() {

    let previousOperand =  ''
    let operator = ''
    let currentOperand = ''
    
    this.isOperatorSet = false

    //Add clicked number to current operand and show in output div
    this.concatenateOperand = (n) => {
        currentOperand += n
        document.querySelector('.output').innerHTML = currentOperand
    }

    this.setPreviousOperand = () => {
        previousOperand = currentOperand
        console.log(previousOperand)
    }

    this.resetCurrentOperand = () => {
        currentOperand = ''
        console.log(currentOperand)
    }

    this.setOperator = (op) => {
        operator = op
        console.log(operator)
    }

    this.performCalculation = () => {
        console.log(previousOperand, operator, currentOperand)
        let result = 0
        switch (operator) {
            case '+': result = calc.add(parseFloat(previousOperand), parseFloat(currentOperand)); break;
            case '-': result = calc.subtract(parseFloat(previousOperand), parseFloat(currentOperand)); break;
            case '*': result = calc.multiply(parseFloat(previousOperand), parseFloat(currentOperand)); break;
            case '/': result = calc.divide(parseFloat(previousOperand), parseFloat(currentOperand)); break;
        } 
        document.querySelector('.output').innerHTML = result
        currentOperand = result
    }

    this.resetAll = () => {
        currentOperand = ''
        previousOperand = ''
        operator = ''
        this.isOperatorSet = false
        document.querySelector('.output').innerHTML = ''
    }
    
    //Makes currentOperand a read-only property, accessible outside the function
    this.getCurrentOperand = function() {
        return currentOperand
    }

    Object.defineProperty(this, 'currentOperand', {
        get: function() {
            return currentOperand
        }
    })

    //Makes previousOperand a read-only property, accessible outside the function
    this.getPreviousOperand = function() {
        return previousOperand
    }

    Object.defineProperty(this, 'previousOperand', {
        get: function() {
            return previousOperand
        }
    })
}

//Instantiate new calculator and calculator interface objects
const calc = new Calculator()
const interface = new CalculatorInterface()

//Number Button constructor; on click, concatenate currentOperand
function NumberButton(btn) {
    btn.addEventListener('click', e => interface.concatenateOperand(e.target.innerHTML))
}

//Instantiate new number buttons
const numberBtns = document.querySelectorAll('.number')
numberBtns.forEach(btn => new NumberButton(btn))

//Operator button constructor
function OperatorButton(btn) {

    btn.addEventListener('click', e => {

        //If currentOperand is undefined (i.e. when 2 operators are clicked in a row), set the operator and do not perform calculation
        if (!interface.currentOperand) {
            interface.setOperator(e.target.value)
            return
        }

        //Allows chaining multiple operations
        if (interface.isOperatorSet) {
            interface.performCalculation()
        }

        interface.isOperatorSet = true
        interface.setPreviousOperand()
        interface.resetCurrentOperand()
        interface.setOperator(e.target.value)
    })

}

//Instantiate new operator buttons
const operatorBtns = document.querySelectorAll('.operator')
operatorBtns.forEach(btn => new OperatorButton(btn))

//Equals Button Constructor
function EqualsButton(btn) {

    btn.addEventListener('click', e => { 

        if (!interface.currentOperand) {
            interface.setOperator(e.target.value)
            return
        }

        interface.performCalculation()
        interface.isOperatorSet = false
        interface.setPreviousOperand()
        interface.resetCurrentOperand()
    })

}

//Instantiate new equals button
const equalsButton = new EqualsButton(document.querySelector('#equals'))

//All-Clear Button Constructor
function AllClearButton(btn) {
    btn.addEventListener('click', interface.resetAll)
}

//Instantiate All-Clear Button 
const allClearButton = new AllClearButton(document.querySelector('#all-clear'))

