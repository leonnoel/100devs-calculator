let calcScreen = document.querySelector("#calcScreen");
let equation = "";
function clear() {
    equation = "";
    calcScreen.innerText = equation;
}
let reset = false;

class CalculatorButton {
    constructor(element) {
        this.element = element;
    }
    static operators = new RegExp(/[.*/\-\+]/g)
    static regex = new RegExp(/[.*/\-\+]$/g)
}
class NumberButton extends CalculatorButton {
    constructor(element) {
        super(element) 
        this.element.addEventListener('click', run)
        function run() {
            if (reset == true) { 
                clear();
                reset = false;
            }
            if (equation.length < 9 || (CalculatorButton.operators.test(equation) && equation.length < 11)) {
                equation += this.innerText;
                calcScreen.innerText = equation;
            }
        }
    }
}
class OperatorButton extends CalculatorButton {
    constructor(element) {
        super(element)
        this.element.addEventListener('click', run)
        function run() {
            if (reset == true) {
                clear();
                reset = false;
            }
            if (equation.length == 0) {
                return;
            } else if (equation.length < 9 && !CalculatorButton.regex.test(equation)) {
                equation += this.innerText;
                calcScreen.innerText = equation;
            } else {
                equation.replace(CalculatorButton.regex, this.innerText)
            }
        }
    }
}
class EqualsButton extends CalculatorButton {
    constructor(element) {
        super(element)
        this.element.addEventListener('click', evaluate)
        function evaluate() {
            if (equation.length) {
                equation = eval(equation); 
                calcScreen.innerText = equation.toString().substring(0, 13);
                reset = true;
            } else return;
        }
    }
}
const num1 = new NumberButton(document.querySelector('#num1'))
const num2 = new NumberButton(document.querySelector('#num2'))
const num3 = new NumberButton(document.querySelector('#num3'))
const num4 = new NumberButton(document.querySelector('#num4'))
const num5 = new NumberButton(document.querySelector('#num5'))
const num6 = new NumberButton(document.querySelector('#num6'))
const num7 = new NumberButton(document.querySelector('#num7'))
const num8 = new NumberButton(document.querySelector('#num8'))
const num9 = new NumberButton(document.querySelector('#num9'))
const num0 = new NumberButton(document.querySelector('#num0'))
const add = new OperatorButton(document.querySelector('#add'))
const subtract = new OperatorButton(document.querySelector('#subtract'))
const divide = new OperatorButton(document.querySelector('#divide'))
const mult = new OperatorButton(document.querySelector('#mult'))
const decimal = new OperatorButton(document.querySelector('#dec'))
const equals = new EqualsButton(document.querySelector('#equals'))