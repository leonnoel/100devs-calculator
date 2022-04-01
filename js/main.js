
const listOfButtons = document.querySelectorAll('button').forEach(item => item.addEventListener('click', elementClicked))
function elementClicked(click){
    calc.buttonPressed(click.target.innerText)
}



//ISSUES TO FIX:
// add '.' functionality
// 




function Calculator() {
    let num1 = ''
    let num2 = ''
    let operator = ''    
    let result = NaN
    
    const updateDisplay = function() {
        const display = !result ? `${num1} ${operator} ${num2}` : result    
        document.querySelector('#display').innerText = display
        //result = NaN

        console.log(`${num1}  ${operator}  ${num2}  =  ${result}`)
    }

    const operatorPressed = function(str) {
        if (operator === '') {
            operator = str
        } else if (num2 === '') {
            operator = str
        } else {
            equals()
        }
        updateDisplay()
    }

    const equals = function() {
        result = eval(num1+operator+num2)
        num1 = result
        num2 = ''
        operator = ''
        updateDisplay()
        result = NaN
    }

    this.buttonPressed = function(str) {
        if (str === 'C') {
            num1 = ''
            num2 = ''
            operator = ''
            result = 0
            updateDisplay()
        }
        if ( parseInt(str) === 0 || Number(str) && operator === '') {
            if (parseInt(str) === 0 && num1 === '0') {
                num1 = '0'
            } else if (num1 === '0' && Number(str)) {
                num1 = ''
                num1 += str
            } else {
                num1 += str
            }
            updateDisplay()
        } else if (str === '+' || str === '-' || str === 'X' || str === '/') {
            operatorPressed(str === 'X' ? '*': str)
        } else if (Number(str)) {
            num2 += str
            updateDisplay()
        } else if (str === '=') {
            equals()
        }
    }
}

let calc = new Calculator()





