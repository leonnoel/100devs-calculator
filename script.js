let screen = document.querySelector("#screenText")
let container = document.querySelector('#buttonArea');
var currentValue = 0;
var currentEquation = "none";
document.querySelector("#screen").addEventListener("click", clear);
document.querySelector("#screen").addEventListener("click", reset);
function reset(){currentValue = 0; currentEquation = "none"};
function clear(){screen.innerText = "";};


function divide(num){
    return currentValue / num;
}
function multiply(num){
    return currentValue * num;
}
function add(num){
    return currentValue + num;
}
function subtract(num){
    return currentValue - num;
}


class NumberButton{
    constructor(text, className){
        this.text = text;
        this.element = document.createElement('button');
        this.element.className = className;
        this.element.innerText = text;
        this.element.onclick = this.onClick.bind(this);
        this.element.style.cursor = 'pointer';
    }
    onClick(){
        screen.innerText += this.text;
    }
}

class DivideButton extends NumberButton {
    constructor(text, className){
        super(text, className)
    }
    onClick(){
        let value = parseInt(screen.innerText)
        currentValue = value;
        currentEquation = "divide"
        clear();
    }
}

class MultiplyButton extends NumberButton {
    constructor(text, className){
        super(text, className)
    }
    onClick(){
        let value = parseInt(screen.innerText)
        currentValue = value;
        currentEquation = "multiply"
        clear();
    }
}

class AddButton extends NumberButton {
    constructor(text, className){
        super(text, className)
    }
    onClick(){
        let value = parseInt(screen.innerText)
        currentValue = value;
        currentEquation = "add"
        clear();
    }
}

class SubtractButton extends NumberButton {
    constructor(text, className){
        super(text, className)
    }
    onClick(){
        let value = parseInt(screen.innerText)
        currentValue = value;
        currentEquation = "subtract"
        clear();
    }
}

class EqualsButton extends NumberButton {
    constructor(text, className){
        super(text, className)
    }
    onClick(){
        let value = parseInt(screen.innerText)
        if(currentEquation == "divide"){
            screen.innerText = divide(value);
        } else if(currentEquation == "multiply"){
            screen.innerText = multiply(value);
        } else if(currentEquation == "add"){
            screen.innerText = add(value);
        } else if (currentEquation == "subtract"){
            screen.innerText = subtract(value)
        }
    }
}



const button7 = new NumberButton("7", "button");
const button8 = new NumberButton("8", "button");
const button9 = new NumberButton("9", "button");
const buttonDivide = new DivideButton("/", "button");
const button4 = new NumberButton("4", "button");
const button5 = new NumberButton("5", "button");
const button6 = new NumberButton("6", "button");
const buttonMultpily = new MultiplyButton("x", "button");
const button1 = new NumberButton("1", "button");
const button2 = new NumberButton("2", "button");
const button3 = new NumberButton("3", "button");
const buttonAdd = new AddButton("+", "button");
const button0 = new NumberButton("0", "button");
const buttonDecimal = new NumberButton(".", "button");
const buttonEquals = new EqualsButton("=", "button");
const buttonSubtract = new SubtractButton("-", "button");


container.appendChild(button7.element);
container.appendChild(button8.element);
container.appendChild(button9.element);
container.appendChild(buttonDivide.element);
container.appendChild(button4.element);
container.appendChild(button5.element);
container.appendChild(button6.element);
container.appendChild(buttonMultpily.element);
container.appendChild(button1.element);
container.appendChild(button2.element);
container.appendChild(button3.element);
container.appendChild(buttonAdd.element);
container.appendChild(button0.element);
container.appendChild(buttonDecimal.element);
container.appendChild(buttonEquals.element);
container.appendChild(buttonSubtract.element);