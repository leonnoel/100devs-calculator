class Calculator{
    constructor(previousOperandElement, currentOperandElement){
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperand(operation){
        if(this.currentOperand === '') return 
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+' :
                computation = prev + current
                break
            case '-' :
                computation = prev - current
                break
            case '*' :
                computation = prev * current
                break
            case '/' :
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = ''
    }
    
    updateDisplay(){
        this.currentOperandElement.innerText = this.currentOperand;
        if(this.operation != null){
            this.previousOperandElement.innerText = `${this.previousOperand} ${this.operation}`
        }else {
            this.previousOperandElement.innerText = ''
        }
    }
}
// Create variables for DOM elements
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandElement = document.querySelector('[data-previous-operand]');
const currentOperandElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandElement, currentOperandElement)


//Listen for numbers
numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        
    })
})

// Listen for operators 
operatorButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperand(button.innerText);
        calculator.updateDisplay();
        
    })
})

// Evaluate calculation 
equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

