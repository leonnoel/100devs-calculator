//get values from the html and store them in variables

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const previousValueTextElement = document.querySelector('[data-previous-value]')
const currentValueTextElement = document.querySelector('[data-current-value]')

//create a Calculator Object 

class Calculator {
    //create a constructor function
    constructor(previousValueTextElement, currentValueTextElement) {
        this.previousValueTextElement = previousValueTextElement
        this.currentValueTextElement = currentValueTextElement
        //clear calculator to default 
        this.clear()
    }

    //create a clear method that sets the values to default

    clear(){
        this.currentValue = ''
        this.previousValue = ''
        this.operation = undefined
    }

    //create a method that appends numbers together

    appendNumber(number){
    //check to make sure current value is defined
        if(this.currentValue === undefined){
            this.currentValue = ''
        }

    //if statement to ensure there's only one decimal point
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString()
    }

    //create a delete method that deletes the last value that the user inputs in the current value. Change value to string and use slice to create a new string. 

    delete(){
        this.currentValue = this.currentValue.toString().slice(0, -1)
    }


    //create an operation method that takes in the operator selected

    chooseOperator(operator){
    //check if current value is empty
        if(this.currentValue === "") return
    //check if previous value is empty, if not compute method is run
        if(this.previousValue != ''){
            this.compute()
        }
        //update values
        this.previousValue = this.currentValue
        this.currentValue = ''
        this.operation = operator

    }

    //create a compute method that executes the operations. 

    compute() {
        //create variable to store computed value
        let computation 
        //check to make sure values are numbers
        const prev = parseFloat(this.previousValue)
        const current = parseFloat(this.currentValue)
        //check to make sure prev and current values are numbers 
        if(isNaN(prev) || isNaN(current)) return
        //create switch statement to execute correct operands
        switch (this.operation){
            case '+': 
                computation = prev + current
                break;
            case '-': 
                computation = prev - current
                break;
            case '*': 
                computation = prev * current
                break;
            case '÷': 
                computation = prev / current
                break;
            default: 
                return
        }
        //update values
            this.currentValue = computation
            this.previousValue = ''
            this.operation = undefined
    }


    //create an updateDisplay method that updates the output screen when called

    updateDisplay(){
        this.currentValueTextElement.innerText = this.currentValue
        if(this.operation != null){
        this.previousValueTextElement.innerText = `${this.previousValue} ${this.operation}`
        } else {
            this.previousValueTextElement.innerText = ""
        }
    }
}


//create a new Calculator

let calculator = new Calculator(previousValueTextElement, currentValueTextElement)


//create an event listener for the AC button to run the clear method and update the display

allClearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

//create an event listener for all number buttons and append them to the display

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

//create an event listener for the delete button that runs the delete method and updates the display

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

//create an event listener for the operator buttons that executes the operator method

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

//create an event listener for the equals button that runs the compute method and updates the display 

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})