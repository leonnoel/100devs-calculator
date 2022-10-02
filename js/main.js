class Calculator {

    // setup the constructor to build the calculator object

    constructor(previousNumberText, currentNumberText){
        this.previousNumberText = previousNumberText
        this.currentNumberText = currentNumberText 
        this.initialize()
    }

    // initialize the calculator and reset it
    initialize() {
        this.previousNumberText.innerText = ''
        this.currentNumberText.innerText = '0'
        this.operator = ''
    }

    // append current number with users input digit
    appendCurrentNumber(number){
        // prevents multiple decimal points from being entered
        if (number === '.' && this.currentNumberText.innerText.includes('.')) {
            return
        }

        // removes the leading zero from the initialization step after a digit is entered - keeps the leading zero if there is no leading digit prior to a decimal being entered
        if (this.currentNumberText.innerText === '0' && number !== '.') {
            this.currentNumberText.innerText = ''
        }

        // appends string
        this.currentString = this.currentNumberText.innerText + number
    }

    // update the calculators display fields
    updateDisplay() {
        this.currentNumberText.innerText = this.currentString
    }

}


// select the display field elements where the previous result and current result will go
let previousNumberText = document.querySelector('.previous-entry')
let currentNumberText = document.querySelector('.current-entry')

// create the calculator object using the class constructor defined above
const myCalc = new Calculator(previousNumberText,currentNumberText)

// select the number buttons on the calculator
let numberButtons = document.querySelectorAll('.digit')


// add an event listener to each of the number buttons which will cause the display to be updated with the users input
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        myCalc.appendCurrentNumber(button.innerText)
        myCalc.updateDisplay()
    })
})


