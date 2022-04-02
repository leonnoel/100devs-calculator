//class for NumberButton, Mult, Divide, Add, Subtract, Equals
//function for calculating: math.evaluate(string)
//when a number or operator button is pressed, add the innertext to the string
//if the button is the decimal or an operator, check if equation.endsWith('') any operator or decimal maybe use string.match(regex)
//when the equals button is pressed, evaluate the expression
//whenever the equation (the string) is changed, update the innertext of calcScreen
//call constructors to create const for each button
//function to clear equation
//after an equation is evaluated, the next button press should call the clear function before generating the new equation
//i came across the math.js evaluate function while planning this out and didn't realize it was from an external library.
//so since i came this far already (i coded the actual calculator part last) there's no going back now. i'm still going to use math.js

let calcScreen = document.querySelector("#calcScreen");
let equation = "";
function clear() {
    equation = "";
    calcScreen.innerText = equation;
}
let reset = false;


//I wanted to hide the above stuff in a Calculator class, but when I do that and extend numberbutton from the calculator class,
//it gives me an error about super constructors so i think i'm doing something wrong
//so for now equation will be accessible by the user
class CalculatorButton {
    constructor(element) {
        this.element = element;
    }
    static operators = new RegExp(/[.*/\-\+]/g)
    static regex = new RegExp(/[.*/\-\+]$/g)
}
class NumberButton extends CalculatorButton {
    constructor(element) {
        super(element) //oh, i understand what it meant by super constructors now
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
                equation = math.evaluate(equation); //is it cheating to use a library for this? 
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