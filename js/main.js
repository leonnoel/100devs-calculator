// Create a class that will be used to create our JS calculator object
class Calculator {

    // constructor to create our calculator, uses the elements which will contain our results as a display
    constructor(previousEntryTextElement, currentEntryTextElement){
        this.previousEntryTextElement = previousEntryTextElement
        this.currentEntryTextElement = currentEntryTextElement   
        this.initialize()
    }

    // initializes the calculator, clears all entries and sets all values to their default
    initialize() {
        this.previousEntryTextElement.innerText = ''
        this.currentEntryTextElement.innerText = '0'
        this.currentOperator = ''
        this.currentNumber = '0'
        this.previousNumber = ''
        this.computeFlag = false
    }

    // appends the user entry so it can be displayed correctly
    appendNumber(number) {
        // converts number to string
        number = number.toString()

        // no multiple decimals
        if (number === '.' && this.currentNumber.includes('.')) return

        // formatting for leading zero with multiple scenarios
        if (this.currentNumber === '0' && number !== '.') {
            this.currentNumber = ''
        }
        else if (this.computeFlag === true && this.currentNumber === ''){
            this.computeFlag = false
            if (number === '.') return this.currentNumber = '0' + number
            else return this.currentNumber = number
        }
        else if (this.currentNumber === '' && number === '.') return this.currentNumber = '0' + number

        // prevents users from modifying a string if it is an answer to a calculation
        if (this.computeFlag){
            this.computeFlag = false
            return this.currentNumber = number
        }

        // appends the current number
        this.currentNumber += number

    }

    // updates the display fields which contain previous entries and the current entry
    updateDisplay() {

        // when calculation is invalid provide the user with an error
        if (this.currentNumber === 'Infinity' || this.currentNumber === '-Infinity' || this.currentNumber === 'ERR' ){
            this.currentNumber = ''
            this.previousNumber = ''
            this.previousEntryTextElement.innerText = this.previousNumber
            return this.currentEntryTextElement.innerText = 'ERR! CANNOT DIVIDE BY 0'
        }

        // display the current entry or the answer to a computation
        this.currentEntryTextElement.innerText = this.formatDisplay(this.currentNumber)

        // display the previous entry and the operator being used in the computation, if previous entry blank display nothing
        if (this.previousNumber !== ''){
            this.previousEntryTextElement.innerText = `${this.formatDisplay(this.previousNumber)} ${this.currentOperator}`
        }
        else {
            this.previousEntryTextElement.innerText = this.formatDisplay(this.previousNumber)
        }
    }

    // use a regex expression to format the number to be displayed, it will add commas to all numbers before the decimal
    formatDisplay(numberString) {
        return numberString.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    // sets the operator and computes answers so the user can avoid having to constantly re renter numbers
    chooseOperation(operator){
        // sets the operator chosen by the user
        this.currentOperator = operator
        // if no current number then do nothing and return
        if (this.currentNumber === '') return
        // if there is a previous entry and a current value entered compute
        if (this.previousNumber !== ''){
            this.compute()
        }
        // set the result to the previous number and clear the current number
        this.previousNumber = this.currentNumber
        this.currentNumber = ''
    }

    compute(){
        // initialize the result variable and convert entered numbers to floats
        let result
        let prevNum = parseFloat(this.previousNumber)
        let currentNum = parseFloat(this.currentNumber)

        // if any of the entered numbers are not valid return and do nothing
        if (isNaN(prevNum) || isNaN(currentNum)) return

        // compute and convert the result into a string
        switch(this.currentOperator){
            case '+':
                result = (prevNum + currentNum).toString()
                break

            case '-':
                 result = (prevNum - currentNum).toString()
                 break

            case '×':
                result = (prevNum * currentNum).toString()
                break

            case '÷':
                result = (prevNum / currentNum).toString()
                break
        }

        // clear the previous number, if the result is invalid set the current number to be an error code "ERR!"
        this.previousNumber = ''
        if (isNaN(result)){
            this.currentNumber = 'ERR'
        }
        else{
            this.currentNumber = result
        }

        // set the flag to indicate a calculation has been completed
        this.computeFlag = true

    }

    // deletes the entry so the user can edit the input
    delete() {
        if (!this.computeFlag){
        this.currentNumber = this.currentNumber.slice(0,-1)
    }
}

}

// user query selectors to select the various elements of our calculator
const previousEntryTextElement = document.querySelector('.previous-entry')
const currentEntryTextElement = document.querySelector('.current-entry')
const digitKeys = document.querySelectorAll('.digit')
const operations = document.querySelectorAll('.operation')
const equals = document.querySelector('.equals')
const AC = document.querySelector('.clear')
const deleteKey = document.querySelector('.delete')


// create the calculator object
const myCalc = new Calculator(previousEntryTextElement,currentEntryTextElement)

// create an event listener for the digit keys, this will append our entry and display it
digitKeys.forEach(button => {
    button.addEventListener('click', () => {
        myCalc.appendNumber(button.innerText)
        myCalc.updateDisplay()
    })
})

// create an event listener for the operation keys + - * /, this will choose the operation and display it
operations.forEach(button => {
    button.addEventListener('click', () => {
        myCalc.chooseOperation(button.innerText)
        myCalc.updateDisplay()
    })
})

// create an event listener for the = key, this will compute the result of our entry and display it
equals.addEventListener('click', () => {
    myCalc.compute()
    myCalc.updateDisplay()
})

// create an event listener for the AC key, this will erase all our entries and reset the calculator 
AC.addEventListener('click', () => {
    myCalc.initialize()
    myCalc.updateDisplay()
})

// deletes our current input incase the user would like to change what they are entering without losing their previous computation
deleteKey.addEventListener('click', () => {
    myCalc.delete()
    myCalc.updateDisplay()
})