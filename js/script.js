// let currentDisplay = "";
// let previousDisplay = "";
// let currentOperator = "";

// const maxCharacters = 100;

// // EVENT LISTENERS
// const numbers = document.querySelectorAll(".numberBtn");
// for(let i = 0; i < numbers.length; i++){
//     numbers[i].addEventListener('click', () => appendNumber(numbers[i]))
// }

// const operations = document.querySelectorAll(".operationBtn");
// for(let i = 0; i < operations.length; i++){
//     operations[i].addEventListener('click', function(){
//         if(!isNaN(currentDisplay)){
//         if(currentDisplay != "0" || currentDisplay != ''){
//             if(currentOperator != ""){calculate(previousDisplay, currentDisplay)}
//             currentOperator = operations[i].innerText;
//             previousDisplay = `${currentDisplay}`;
//             updateDisplay();
//             currentDisplay = "0";
//         }else{
//             currentOperator = operations[i].innerText;
//             prevDisplay = '0';
//             updateDisplay();
//             currentDisplay = "0";
//         }
//     }
//     })
// }

// const equals = document.querySelector('.equalsBtn');
// equals.addEventListener('click', () => calculate(previousDisplay, currentDisplay));

// const display = document.querySelector('.display'); 
// const prevDisplay = document.querySelector('.prevDisplay'); 

// const allClearBtn = document.querySelector('.allClearBtn');
// allClearBtn.addEventListener('click', () => allClear());

// const ellipsisBtn = document.querySelector('.ellipsisBtn');
// ellipsisBtn.addEventListener('click', () => appendEllipsis());

// const delBtn = document.querySelector('.delBtn');
// delBtn.addEventListener('click', () => removeNumber())

// function allClear(){
//     currentDisplay = "0";
//     previousDisplay = "";
//     currentOperator = "";
//     updateDisplay();
// }
// function removeNumber(){
//     currentDisplay = currentDisplay.slice(0, currentDisplay.length -1);
//     if(currentDisplay.length === 0){ currentDisplay = '0'}
//     updateDisplay();
// }
// function appendNumber(button){
//     if(currentDisplay == 0){currentDisplay = button.innerText}
//     else if(currentDisplay.length <= maxCharacters){currentDisplay += button.innerText;}
//     updateDisplay();
// }

// function appendEllipsis(){
//     if(!currentDisplay.includes('.')){
//         currentDisplay += '.';
//     }
//     updateDisplay();
// }

// function add(num1, num2){
//     return num1 + num2;
// }
// function subtract(num1, num2){
//     return num1 - num2;
// }
// function multiply(num1, num2){
//     return num1 * num2;
// }
// function divide(num1, num2){
//     if(num2 == 0){return "Cannot divide by zero"}
//     return num1 / num2;
// }
// function updateDisplay(){
//     display.innerText = Number(currentDisplay).toLocaleString();
//     prevDisplay.innerText = `${previousDisplay} ${currentOperator}`;
// }

// // currentDisplay.length <= 8 ? Number(currentDisplay).toLocaleString() : Number(currentDisplay).toExponential(2).toString() // FOR EXPONENTIAL FORM, GOTTA FIX SOME SHIT FIRST THOUGH

// function calculate(num1, num2){

    
//     if(currentDisplay != ""){
//         switch (currentOperator){
//             case '+':
//                 previousDisplay += ` ${currentOperator} ${num2} =`;
//                 currentDisplay = add(parseFloat(num1), parseFloat(num2));
//                 break;
//             case '-':
//                 previousDisplay += ` ${currentOperator} ${num2} =`;
//                 currentDisplay = subtract(parseFloat(num1), parseFloat(num2));
//                 break;
//             case '*':
//                 previousDisplay += ` ${currentOperator} ${num2} =`;
//                 currentDisplay = multiply(parseFloat(num1), parseFloat(num2));
//                 break;
//             case '/':
//                 previousDisplay += ` ${currentOperator} ${num2} =`;
//                 currentDisplay = divide(parseFloat(num1), parseFloat(num2));
//                 break;
//         } 
//         currentOperator = '';
//         updateDisplay();
//     }
// }
// allClear();



class Calculator {
    constructor(){
        // Selecting each element and assigning them to local variable
        this.mainDisplay = document.querySelector('.mainDisplay');
        this.subDisplay = document.querySelector('.subDisplay');
        this.numberBtns = document.querySelectorAll(".numberBtn");
        this.operatorBtns = document.querySelectorAll(".operationBtn");
        this.equalsBtn = document.querySelector('.equalsBtn');
        this.allClearBtn = document.querySelector('.allClearBtn');
        this.pointBtn = document.querySelector('.pointBtn');
        this.deleteBtn = document.querySelector('.delBtn');

        // Adding an eventListener to the Equals button, uses the calculate function.
        this.equalsBtn.addEventListener('click', () => this.calculate(this.previousNumber, this.currentNumber, this.currentOperator))
        // Adding an eventListener to the All Clear button, uses the all clear function to reset the calculator
        this.allClearBtn.addEventListener('click', () => this.allClear());
        // Adding an eventListener to the Decimal point button , uses the appendPoint function to add a point to the number and the display.
        this.pointBtn.addEventListener('click', () => this.appendPoint());

        this.deleteBtn.addEventListener('click', () => this.removeNumber());
        // Adding eventListeners to all the Number buttons, uses the appendNumber function to add the number to the end of the number.
        for(let i = 0; i < this.numberBtns.length; i++){
            this.numberBtns[i].addEventListener('click', () => this.appendNumber(this.numberBtns[i].value))
        }
        // Adding eventListeners to all the operator Buttons
        for(let i = 0; i < this.operatorBtns.length; i++){
            this.operatorBtns[i].addEventListener('click', () => this.selectOperator(this.operatorBtns[i].value))
        }

        this.currentNumber = '0';
        this.previousNumber = null;
        this.currentOperator = null;
    }

    appendNumber(num){
        if(this.currentNumber == 0){this.currentNumber = num}
        else{this.currentNumber += num;}
        this.updateDisplay();
    }

    appendPoint(){
        if(!this.currentNumber.includes('.')){
            this.currentNumber += ".";
        }
        this.updateDisplay();
    }
    calculate(num1, num2, operator){
        switch (operator){
            case '+':
                this.currentNumber = this.add(parseFloat(num1), parseFloat(num2));
                break;
            case '-':
                this.currentNumber = this.subtract(parseFloat(num1), parseFloat(num2));
                break;
            case '*':
                this.currentNumber = this.multiply(parseFloat(num1), parseFloat(num2));
                break;
            case '/':
                this.currentNumber = this.divide(parseFloat(num1), parseFloat(num2));
                break;
        } 
        this.updateDisplay();
    }
    allClear(){
        this.currentNumber = '0';
        this.previousNumber = null;
        this.currentOperator = null;
        this.subDisplay.innerText = "";
        this.updateDisplay();
    }
    selectOperator(operator){
        this.currentOperator = operator;
        this.previousNumber = this.currentNumber;
        this.currentNumber = 0;
        this.updateDisplay();
    }
    removeNumber(){
            this.currentNumber = this.currentNumber.slice(0, this.currentNumber.length -1);
            if(this.currentNumber.length === 0){ this.currentNumber = '0'}
            this.updateDisplay();
        }
    add(num1, num2){
        return num1 + num2;
    }
    subtract(num1, num2){
        return num1 - num2;
    }
    multiply(num1, num2){
        return num1 * num2;
    }
    divide(num1, num2){
        if(num2 == 0){return "Cannot divide by zero"}
        return num1 / num2;
    }
    updateDisplay(){
        this.mainDisplay.innerText = this.currentNumber;
        if(this.currentOperator != null){
            this.subDisplay.innerText = `${this.previousNumber} ${this.currentOperator}`;
        }
    }

}
let calculate = new Calculator();
