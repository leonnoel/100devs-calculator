
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
        console.log(`${num1}  ${operator}  ${num2}  =  ${result}`)
    }

    const operatorPressed = function(str) {
        if (operator === '') {
            operator = str
        } else if (num2 === '') {
            operator = str
        } else if (num1 && num2) { 
            equals()
            operator = str
        } else {
            console.log("Hello????? is anyone there??????")
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

    const clearAll = function() {
        num1 = ''
        num2 = ''
        operator = ''
        result = 0
        updateDisplay()
        document.querySelector('#display').innerText = 0
    }
 
    this.buttonPressed = function(str) {
        if (str === 'C') {
            clearAll()
        }

        if (str === '.' || parseInt(str) === 0 || Number(str) && operator === '') { //Checking if num1 is empty
            if (parseInt(str) === 0 && num1 === '0') {
                num1 = '0'
            } else if (num1 === '0' && Number(str)) {
                num1 = ''
                num1 += str
            } else if (str === '.') {
                num1 = num1.includes('.') ? num1 : num1.concat('.')
            } else {
                num1 += str
            }
            updateDisplay()
        } else if (str === '+' || str === '-' || str === 'x' || str === '/') { //Checking if operator is empty
            operatorPressed(str === 'x' ? '*': str)
        } else if (Number(str) || str === '.') {
            if (str === '.') {
                num1 = num1.includes('.') ? num1 : num1.concat('.')
            }
            num2 += str
            updateDisplay()
        } else if (str === '=') {
            equals()
        } else if (num1 && result) {
            console.log('DOES THIS EVER EVEN RUUUUNNNN????????')
            clearAll()
            num1 += str
        }
    }
}

let calc = new Calculator()





