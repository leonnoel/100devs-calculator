const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const buttons = $$('div')

// Main Calculator

const Calculator = function(){
    this.display = $('#display')

    this.updateDisplay = (number) => {
        this.display.value += number
    }
    //return an eval function for safety!
    function mathIt(str) {
        return new Function('return ' + str)()
    }

    //When = is pressed
    this.calculate = () => {
        let evalText = this.display.value.replace('X','*')
        this.display.value = mathIt(evalText)
    }


    this.storeInMemory = (operator) => {
        switch(operator){
            case "=":
                this.calculate()
                break
            default:
                this.updateDisplay(operator)
                break    
        }
    }
}

const calc = new Calculator()


// UI Elements

const pressed = function(event) {
    button = event.target
    button.classList.add('pressed')
}
const letgo = function(event) {
    button = event.target
    button.classList.remove('pressed')
}

const buttonPress = (event) => {
    const buttonPressed = event.target.innerHTML
    calc.storeInMemory(event.target.innerHTML)
}

buttons.forEach(button => {
    button.addEventListener('click', buttonPress)
    button.addEventListener('mousedown', pressed)
    button.addEventListener('mouseup', letgo)
})
