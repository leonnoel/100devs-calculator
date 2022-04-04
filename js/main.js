// add event listeners to all buttons
let allButtons = document.querySelectorAll('span')
for (let item of allButtons) {
    item.addEventListener('click', buttonClicked)
}

function buttonClicked (event) {
    // make button click variable
    let buttonValue = event.target.innerText
    // make readOut variables
    let readOut = document.querySelector('.readOut')
    let readOutValue = readOut.innerText
    // Clear button
    if (buttonValue === 'clr') {
        calculator.clear()
    // Making sure operators don't repeat
    if (isNaN(buttonValue) && isNaN(calculator.previousButton)) {
        return
    }
    // check if button clicked is an operator
    }else if (buttonValue === '=' || buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' || buttonValue === '/') {
        if (!(calculator.currentOp)) {
            calculator.valueBeforeOp = Number(readOutValue)
            calculator.currentOp = buttonValue
            readOut.innerText += buttonValue
            calculator.previousButton = buttonValue
        } else {
            calculator.valueAfterOp = Number(readOutValue.slice(readOutValue.indexOf(calculator.currentOp) + 1))
            calculator.newOp = buttonValue
            calculator.checkOperationType(calculator.currentOp)
        }
        
    }else if (readOut.innerText.length > 13) {
        // limiting number of characters in input
        alert(`Sorry you've reached the maximum number of characters that can be input. Please refresh and try again.`)
    }else {
        // add button clicked to readOut
        readOut.innerText += buttonValue
        calculator.previousButton = buttonValue
    }
    
}
// make calculator object
const calculator = {
    // object has properties of current value, clear read out, and previous button clicked
    valueBeforeOp: 0,
    currentOp: '',
    valueAfterOp: 0,
    newOp: '',
    previousButton: null,
    // object has methods of add, subtract, multiply, divide, equals, check operation type, update readout, total length check
    addValues: function(num1, num2) {
        total = num1 + num2
        this.valueBeforeOp = total
        this.updateReadOut(this.totalLengthCheck(total))
    },
    subtractValues: function(num1, num2) {
        total = num1 - num2
        this.valueBeforeOp = total
        this.updateReadOut(this.totalLengthCheck(total))
    },
    multiplyValues: function(num1, num2) {
        total = num1 * num2
        this.valueBeforeOp = total
        this.updateReadOut(this.totalLengthCheck(total))
    },
    divideValues: function(num1, num2) {
        total = num1 / num2
        this.valueBeforeOp = total
        this.updateReadOut(this.totalLengthCheck(total))
    },
    checkOperationType: function(operator) {
        switch (operator) {
            case '+':
                this.addValues(this.valueBeforeOp, this.valueAfterOp)
                break;
            case '-':
                this.subtractValues(this.valueBeforeOp, this.valueAfterOp) 
                break;
            case 'x':
                this.multiplyValues(this.valueBeforeOp, this.valueAfterOp)
                break;
            case '/':
                this.divideValues(this.valueBeforeOp, this.valueAfterOp)
        } 
    },
    updateReadOut(output) {
        if (this.newOp !== '=') {
            document.querySelector('.readOut').innerText = output + this.newOp
        }else {
            document.querySelector('.readOut').innerText = output
            this.currentOp = ''
        }
    },
    // String needs to be 14 characters or less
    totalLengthCheck(num) {
        if (String(num).length < 15) {
            return num
        } else if (String(num).includes('.')) {
            // need to figure out home many characters in front of dot and behind dot
            let splitArray = String(num).split('.')
            // use toFixed to round to correct decimal places
            return num.toFixed(14 - splitArray[0].length)
        }else {
            console.log(num)
            // convert to power of 10 notation
            console.log('big num')
            return Number.parseFloat(num).toExponential(8)
        }
    },
    clear () {
    this.valueBeforeOp = 0
    this.valueAfterOp = 0
    this.currentOp = ''
    this.newOp = ''
    document.querySelector('.readOut').innerText = ''
    }
    
}
// TODO fix equals with not previous operator
// TODO fix sequential operators that are different

    // user presses number
        // run length checks
    // user presses operator
        // run length checks
        // store value before operator
        // store operator
    // user presses number
        // run length checks
    // user presses operator
        // store value after operator
        // check previous operator
            // run operation function with values
            // store output as value before operator
            // store new operator
