let calculator = {
    value: 0,
    lastNumber: 0,
    lastOperator: '+',
    display: document.querySelector('#result'),
    numbers: document.querySelectorAll('.number'),
    operators: document.querySelectorAll('.operator'),
    numberArray: [],
    operatorArray: [],
    logNumber: function() {
        // Initialize the display to show 0
        calculator.display.innerText = calculator.value

        // Add an event listener to all of the numbers
        // When a number is clicked, the number is added to the end of value
        // EG if 7 is clicked 0 => 07
        // That value is then converted to a number with the unary operator
        // 07 => 7, 00004 => 4
        // Lastly the number is displayed
        for (let i = 0; i < calculator.numbers.length; i++) {
            calculator.numbers[i].addEventListener("click", function() {
                calculator.value += calculator.numbers[i].innerText
                calculator.value = +calculator.value
                calculator.display.innerText = calculator.value
            })
        }
    },
    addDecimal: function() {
        // Allows a decimal to be added only if allowDecimal property is true
        // Only one decimal can be added
        document.querySelector('#decimal').addEventListener('click', function() {
            // First we check if the currently displayed number has a decimal, if so we prevent another from being added
            if (calculator.value.toString().includes('.')) return
            
            // Note the value is displayed as a string, if we were to convert it to a Num the decimal would be dropped
            calculator.value += '.'
            calculator.display.innerText = calculator.value
        })
    },
    evalOperators: function() {
        // Everytime an operator is clicked we add the value on display to numberArray and the operator to operatorArray
        for (let i = 0; i < calculator.operators.length; i++) {
            calculator.operators[i].addEventListener('click', function() {
                switch (calculator.operators[i].innerText) {
                    case '+':
                        calculator.numberArray.push(+calculator.value)
                        calculator.operatorArray.push('+')
                        break
                    case '-':
                        calculator.numberArray.push(+calculator.value)
                        calculator.operatorArray.push('-')
                        break
                    case 'x':
                        calculator.numberArray.push(+calculator.value)
                        calculator.operatorArray.push('*')
                        break
                    case '/':
                        calculator.numberArray.push(+calculator.value)
                        calculator.operatorArray.push('/')
                        break
                    default:
                        console.error('evalOperators failed')
                }

                //Reset the value and display
                calculator.value = 0
                calculator.display.innerText = calculator.value
            })
        }
    },
    evalAnswer: function() {
        document.querySelector('#equal').addEventListener('click', function() {
            // Before we evaluate the answer, push the current displayed number, even if its zero
            calculator.numberArray.push(calculator.value)

            // lastNumber and lastOperator are used for repeated equal sign inputs from the user
            // The repeatLastEquation function is ran when no operators are given
            if (calculator.numberArray.length > 0 && calculator.operatorArray.length > 0) {
                calculator.lastNumber = calculator.numberArray[calculator.numberArray.length - 1]
                calculator.lastOperator = calculator.operatorArray[calculator.operatorArray.length - 1]
            }
            if (calculator.operatorArray.length === 0) {
                return calculator.repeatLastEquation()
            }
            
            let total = calculator.numberArray.shift()

            // We slowly collapse the numberArray and operatorArray to zero accumulating all values to total on the way
            while (calculator.operatorArray.length > 0) {
                switch (calculator.operatorArray.shift()) {
                    case '+':
                        total += calculator.numberArray.shift()
                        break
                    case '-':
                        total -= calculator.numberArray.shift()
                        break
                    case '*':
                        total *= calculator.numberArray.shift()
                        break
                    case '/':
                        total /= calculator.numberArray.shift()
                        break
                    default:
                        console.error('evalAnswer failed')
                }
            }
            // This allows us to continue operations on the evaluated answer
            // This also means to start a new operation, we must refresh the page
            calculator.value = total
            calculator.display.innerText = calculator.value
        })
    },
    // Similar to evalAnswer but allows user to repeat equation over and over without erasing the original equation
    repeatLastEquation: function() {
        let total = calculator.numberArray.shift()
        
        switch (calculator.lastOperator) {
            case '+':
                total += calculator.lastNumber
                break
            case '-':
                total -= calculator.lastNumber
                break
            case '*':
                total *= calculator.lastNumber
                break
            case '/':
                total /= calculator.lastNumber
                break
            default:
                console.error('repeatLastEquation failed')
        }

        calculator.value = total
        calculator.display.innerText = calculator.value
    }
}

calculator.logNumber()
calculator.addDecimal()
calculator.evalOperators()
calculator.evalAnswer()