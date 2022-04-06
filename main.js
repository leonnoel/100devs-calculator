function Calculator(previousNumber,currentNumber){
    this.previousNumber = previousNumber;
    this.currentNumber = currentNumber;
    this.currentOperand = '';
    this.previousOperand = '';
    this.operator = undefined;

    this.appendNumber = function(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        if(this.sum){
            this.currentOperand = '';
            this.sum = 0;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    this.updateDisplay = function(){
        this.currentNumber.textContent = this.currentOperand
        this.previousNumber.textContent = '';
        if(this.previousOperand && this.operator){
            this.previousNumber.textContent = `${this.previousOperand} ${this.operator}`
        }
    }
    this.checkOperator = function (operator){
        this.operator = operator;
        if(this.currentOperand && this.previousOperand){
            this.calculate();
            return;
        }
        if(this.currentOperand === '') return
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    this.calculate = function (){
        if(this.currentOperand === '' || this.previousOperand === '') return
        let sum = 0;
        this.sum = sum;
        let prev = parseFloat(this.previousOperand)
        let next = parseFloat(this.currentOperand)
        switch (this.operator){
            case '+': this.sum = prev + next;
            break;
            case '-': this.sum = prev - next;
            break;
            case 'x': this.sum = prev * next;
            break;
            case '/': this.sum = prev / next;
            break;
            default: return;
        }
        this.currentOperand = this.sum;
        this.operator = undefined;
        this.previousOperand = ''

    }
}

const buttons = document.querySelectorAll('.button')

buttons.forEach(button => button.addEventListener('click', ()=>{
    calculator.appendNumber(button.textContent);
    calculator.updateDisplay();
}));

const operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach(operator => operator.addEventListener('click', ()=>{
    calculator.checkOperator(operator.textContent);
    calculator.updateDisplay();
}));

const equals = document.querySelector('.equals')
equals.addEventListener('click', ()=>{
    calculator.calculate();
    calculator.updateDisplay();
});

const previousNumber = document.querySelector('.previousNumber')
const currentNumber = document.querySelector('.currentNumber')

const calculator = new Calculator(previousNumber, currentNumber)

































// function Calculator(firstNumber, secondNumber){

//     this.previousOperandTextElement = firstNumber;
//     this.currentOperandTextElement = secondNumber;
//     this.currentOperand = '';
//     this.previousOperand = '';


//     this.appendNumber = function(number){
//         if(number === '.' && this.currentOperand.includes('.')) return
//         this.currentOperand = this.currentOperand.toString() + number.toString()
//     }
//     this.updateDisplay = function(){
//         this.currentOperandTextElement.textContent = this.currentOperand
//         this.previousOperandTextElement.textContent = this.previousOperand
//     }
//     this.checkOperator = function(operator){
//         if (this.currentOperand === '') return
//         if (this.previousOperand !== ''){
//             this.compute()
//         }
//         this.operator = operator;
//         this.previousOperand = this.currentOperand;
//         this.currentOperand = '';


//     }
//     this.compute = function(){
//         let computation;
//         const prev = parseFloat(this.previousOperand)
//         const next = parseFloat(this.currentOperand)
//             switch (this.operator){
//                 case '+' : computation = prev + next
//                 break;
//                 case '-' : computation = prev - next
//                 break;
//                 case 'x' : computation = prev * next
//                 break;
//                 case '/' : computation = prev / next
//                 break;
//                 default: return
//             }
//         this.previousOperand = '';
//         this.currentOperand = computation;
//         this.operator = undefined;
        
//     }

// }

// const prevNum = document.querySelector('.previousNumber')
// const nextNum = document.querySelector('.currentNumber')

// const numericalButtons = document.querySelectorAll('.button');
// numericalButtons.forEach(button=> button.addEventListener('click', ()=>{
//     calculator.appendNumber(button.textContent)
//     calculator.updateDisplay();

// }));

// const operatorButtons = document.querySelectorAll('.operator');
// operatorButtons.forEach(operatorButton=> operatorButton.addEventListener('click', ()=>{
//         calculator.checkOperator(operatorButton.textContent)
//         calculator.updateDisplay();
// }));

// const equalButton = document.querySelector('.equals');
// equalButton.addEventListener('click', ()=>{
//     calculator.compute();
//     calculator.updateDisplay();
// })
// const calculator = new Calculator(prevNum, nextNum);

