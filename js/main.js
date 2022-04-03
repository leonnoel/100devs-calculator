// add event listeners to all buttons
let allButtons = document.querySelectorAll('.buttons span')
for (let item of allButtons) {
    item.addEventListener('click', buttonClicked)
}

function buttonClicked (event) {
    // make button click variable
    let buttonValue = event.target.innerHTML
    
    // make a readOut variables
    let readOut = document.querySelector('.readOut')
    let readOutValue = readOut.innerHTML

    // Making sure operators don't repeat
    if (isNaN(buttonValue) && isNaN(calculator.previousButton)) {
        return
    }
    // limiting number of characters in input
    if (readOut.innerText.length > 13) {
        alert(`Sorry you've reached the maximum number of characters that can be input. Please refresh and try again.`)
        // check if read out needs to be cleared
    }else if (calculator.clearReadOut === true) {
        readOut.innerHTML = ''
        calculator.clearReadOut = false
        readOut.innerHTML += buttonValue
        calculator.previousButton = buttonValue
    // check if button is equals
    }else if (buttonValue === '=') {
        calculator.checkOperationType(readOutValue)
        calculator.previousButton = buttonValue
    } else {
        // add button clicked to readOut
        readOut.innerHTML += buttonValue
        calculator.previousButton = buttonValue
        console.log(readOut.innerText.length)
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
        document.querySelector('.readOut').innerHTML = output
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
<<<<<<< HEAD
            // use toFixed to round to correct decimal places
            return num.toFixed(14 - splitArray[0].length)
        }else {
            console.log(num)
            // convert to power of 10 notation
            return Number.parseFloat(num).toExponential(8)
=======
            // Figure out how much to round the decimals places, 
            let decicalPlaces = 14 - splitArray[0] - 1
            // TODO
>>>>>>> refs/remotes/origin/answer
        }
        // checkout
    }
    
}
// TODO need to limit amount of characters in input
// TODO need to get multiple operations working in one string and order of ops correct

// user presses number
    // readout updates
// user presses operator
    // need validation so operators don't repeat
        // readout updates
// user presses number
    // readout updates
// user presses equals
    // math happens
        // readout updates