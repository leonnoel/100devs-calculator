/*  Pseudo Code
- Event listeners on number buttons 
    - on click, add number to output innerHTML
    - 
    
- Event listeners on operator buttons
    - on click, 

-Click numbers -> they're concatenated into display
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
    this.multiply = (n1, n2) => n1 + n2
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

    const inputObject = {
        previousOperand: '', 
        currentOperand: '', 
        result: ''
    }

    //clicked number is added to current operand and shown in output div
    this.concatenateOperand = (n) => {
        inputObject.currentOperand += n
        document.querySelector('.output').innerHTML = inputObject.currentOperand
    }

    this.setPreviousOperand = (n) => {
        inputObject.previousOperand = n
    }
    
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


