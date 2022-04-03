// add event listeners to all buttons
let allButtons = document.querySelectorAll('.buttons span')
for (let item of allButtons) {
    item.addEventListener('click', buttonClicked)
}

function buttonClicked (event) {
    // make button click variable
    let buttonValue = event.target.innerText
    
    // make readOut variables
    let readOut = document.querySelector('.readOut')
    let readOutValue = readOut.innerText

    // Making sure operators don't repeat
    if (isNaN(buttonValue) && isNaN(calculator.previousButton)) {
        return
    }
    // check if read out needs to be cleared
    if (calculator.clearReadOut === true) {
        readOut.innerText = ''
        calculator.clearReadOut = false
        readOut.innerText += buttonValue
        calculator.previousButton = buttonValue
    // check if button is equals
    }else if (buttonValue === '=') {
        calculator.checkOperationType(readOutValue)
        calculator.previousButton = buttonValue
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
    currentValue: 0,
    clearReadOut: false,
    previousButton: null,
    // object has methods of add, subtract, multiply, divide, equals, check operation type, update readout, total length check
    addValues: function(readOutString) {
        let stringArray = readOutString.split('+')
        let total = 0
        for (i = 0; i < stringArray.length; i++) {
            total += Number(stringArray[i])
        }
        this.updateReadOut(this.totalLengthCheck(total))
    },
    subtractValues: function(readOutString) {
        let stringArray = readOutString.split('-')
        let total = stringArray[0]
        for (i = 1; i < stringArray.length; i++) {
            total -= Number(stringArray[i])
        }
        this.updateReadOut(this.totalLengthCheck(total))
    },
    multiplyValues: function(readOutString) {
        let stringArray = readOutString.split('x')
        let total = stringArray[0]
        for (i = 1; i < stringArray.length; i++) {
            total *= Number(stringArray[i])
        }
        this.updateReadOut(this.totalLengthCheck(total))
    },
    divideValues: function(readOutString) {
        let stringArray = readOutString.split('/')
        let total = stringArray[0]
        for (i = 1; i < stringArray.length; i++) {
            total /= Number(stringArray[i])
        }
        this.updateReadOut(this.totalLengthCheck(total))
    },
    checkOperationType: function(readOutString) {
        if (readOutString.includes('+')) {
            this.addValues(readOutString)
        }else if (readOutString.includes('-')) {
            this.subtractValues(readOutString)
        }else if (readOutString.includes('x')) {
            this.multiplyValues(readOutString)
        }else if (readOutString.includes('/')) {
            this.divideValues(readOutString)
        }
    },
    updateReadOut(output) {
        document.querySelector('.readOut').innerText = output
        this.clearReadOut = true
    },
    // String needs to be 14 characters or less
    totalLengthCheck(num) {
        if (String(num).length < 15) {
            return num
        } else if (String(num).includes('.')) {
            // need to figure out home many characters in front of dot and behind dot
            console.log("float")
            let splitArray = String(num).split('.')
            // use toFixed to round to correct decimal places
            return num.toFixed(14 - splitArray[0].length)
        }else {
            console.log(num)
            // convert to power of 10 notation
            return Number.parseFloat(num).toExponential(8)
        }
    }
    
}
// TODO need to get multiple operations working in one string and order of ops correct
    // Probably easier if I calculate as the values are input into calc.
function evalString (readOutString) {
    // create array of operators
    let operatorArray = readOutString.split('').filter(item => item === 'x' || item === '/' || item === '+' || item === '-').map(element => element === 'x' ? '*' : element)
    console.log('operator array' + operatorArray)
    // create array of values
    let valuesArray =readOutString.split('').filter(item => Number(item))
    console.log('initial val array' + valuesArray)
    for (let i = 0; i < operatorArray.length; i++) {
        if (operatorArray[i] === '*') {
            let newValueArray = valuesArray.splice(i,2)
            console.log('new val array' + newValueArray)
            valuesArray.splice(i,0, newValueArray[0] * newValueArray[1])
            console.log('val array' + valuesArray)
        }
    }
    console.log('final array' + valuesArray)
}



// user presses number
    // check if readout is too long if not
        // readout updates
// user presses operator
    // check if readout is too long if not
        // need validation so operators don't repeat
            // readout updates
// user presses number
    // check if readout is too long if not
        // readout updates
// user presses equals
    // math happens
        // readout updates