class Calculator {
    //Where to place display text for the calculator 
    constructor(previousOperandButton, currentOperandButton){
        this.previousOperandButton = previousOperandButton
        this.currentOperandButton = currentOperandButton
        //Need to set the calculator to the default values every time we create a new calculator 
        this.clear()
    }

    //This is the AC aka All Clear function - clearing out all the variables 
    //Current and Previous Displays should have nothing in them and there shouldn't be any operation selected 
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    //Need to convert the current operand into a string and svae the first till the second last number 
    delete (){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    //Appending numbers to each other on the display  
    //Need to convert into a string b/c we need numbers to be appended and not added 
    //We also want our user to only be able to add one period NOT multiple periods and we don't currently have a period 
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return 
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    //What happens when a user clicks on an operation 
    //Setting the current operand to the previous one and setting the current operand to an empty string 
    //If the current operation is empty, we want to stop 
    //If the previous operation is NOT an empty string, we want to perform the calculation
    chooseOperation(operation){

        if(this.currentOperand === '') return 
        if(this.previousOperand !== ''){
            this.calculate()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    //Performing the calculation 
    //Converting the string into a number and then checking if the previous/current is not a number 
    calculate(){
        let computation 
        let previous = parseFloat(this.previousOperand)
        let current = parseFloat(this.currentOperand)
        if(isNaN(previous) || isNaN(current)) return 

        switch (this.operation){
            case '+':
                computation = previous + current 
                break
            case '-':
                computation = previous - current 
                break
            case 'x':
                computation = previous * current 
                break
            case '/':
                computation = previous / current 
                break
            default:
                return
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }


    //Splitting the number to get the integer part and decimal part 
    //Ensuring when a user clicks on a decimal point, it shows up on the display - checkin
    //If the integer is not a number, then show an empty string. If it is a number, then show the localstring with no decimal places  
    getDisplayNumber(number){

        let numToString = number.toString()
        let intPart = parseFloat(numToString.split('.')[0])
        let decimalPart = numToString.split('.')[1]

        let integerDisplay 
        if(isNaN(intPart)){
            integerDisplay = ''
        }
        else {
            integerDisplay = intPart.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }

        //If the user did enter a period with some numbers after it 
        if (decimalPart != null){
            return `${integerDisplay}.${decimalPart}`
        }

        else {
            return integerDisplay
        }
        
    }

    //Updating the values within the calculator 
    //Display values need to be constantly updated every time the calculator is called 
    updateDisplay(){
        this.currentOperandButton.innerText = this.getDisplayNumber(this.currentOperand)
        
        if(this.operation != null){
            this.previousOperandButton.innerText = `${this.getDisplayNumber(this.previousOperand)}${this.operation}`
        }
        else {
            //Once the equals to is pressed
            this.previousOperandButton.innerText = ''
        }
         
    }



}

let numbersButtons = document.querySelectorAll('.number')
let operationButtons = document.querySelectorAll('.operation')
let previousOperandText = document.querySelector('.previous-display')
let currentOperandText = document.querySelector('.current-display')
let equalsButton = document.querySelector('.equals')
let allClearButton = document.querySelector('.all-clear')
let deleteButton = document.querySelector('.delete')

let calculator = new Calculator(previousOperandText, currentOperandText)

numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.calculate()
    calculator.updateDisplay()
})


allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})


deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

