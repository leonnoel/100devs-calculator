
const listOfButtons = document.querySelectorAll('button').forEach(item => item.addEventListener('click', elementClicked))
function elementClicked(click){
    calc.buttonPressed(click.target.innerText)
}


function Calculator() {
    let num1 = ''
    let num2 = ''
    let operator = ''    
    let result = NaN
    
    const updateDisplay = function() {
        const display = !result ? `${num1} ${operator} ${num2}` : result    
        document.querySelector('#display').innerHTML = display
        //result = NaN

        console.log(`${num1}  ${operator}  ${num2}  =  ${result}`)
    }

    const operatorPressed = function(str) {
        if (operator === '') {
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
     
        if (Number(str) && operator === '') {
            num1 += str
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





