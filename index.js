function Calculator(currentValueTextElement, previousValueTextElement){
    this.currentValueTextElement = currentValueTextElement; 
    this.previousValueTextElement = previousValueTextElement;
    this.currentOperand = '';
    this.previousOperand = ''; 
    this.operation = undefined; 

    this.concatNums = function(number){
        if(number === '.' && this.currentOperand.includes('.')) return; 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    this.chooseOperation = function(operator){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.evaluate(); 
        } 
        this.operation = operator; 
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';  
    }

    this.evaluate = function(){
        let evaluation; 
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(previous) || isNaN(current)) return; 
        switch(this.operation){
            case '+': evaluation = previous + current; break;
            case '-': evaluation = previous - current; break; 
            case '/': evaluation = previous / current; break; 
            case 'x': evaluation = previous * current; break; 
            default:  return; 
        }
        this.currentOperand = evaluation.toFixed(4); 
        this.operation = undefined; 
        this.previousOperand = '';
    }

    this.updateDisplay = function(){
       this.currentValueTextElement.innerText = this.currentOperand;
       this.previousValueTextElement = this.previousOperand;  
    }

    this.deleteOne = function(arg){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
}

const numberButtons = [...document.querySelectorAll('[data-number]')];
const operatorsButtons = [...document.querySelectorAll('[data-operator]')];
const equalsButton = document.querySelector('[data-equals]');
const currentValueTextElement = document.querySelector('[data-currentValue]');


const calculator = new Calculator(currentValueTextElement, 0)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.concatNums(button.innerText)
        calculator.updateDisplay()
    })
})

operatorsButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.chooseOperation(operator.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.evaluate()
    calculator.updateDisplay()
})

window.addEventListener('keydown', button => {
   if(button.key !== 'Backspace') return; 
   calculator.deleteOne(); 
   calculator.updateDisplay(); 
})