let displayValue = ''

//add event listeners to each of the buttons
let buttons = document.querySelectorAll('.row div');

function buttonListener(button) {
    let value = button.innerHTML
    if (value === '=') {
        button.addEventListener('click', evaluate)
    } else {
        let updateFunction = () => updateValue(value)
        button.addEventListener('click', updateFunction)
    }
}

buttons.forEach(b => buttonListener(b))

function updateValue(char) {
    if (char === 'X') {
        char = '*'
    }
    displayValue += char
    document.querySelector('#display').innerHTML = displayValue
}

function evaluate() {
    displayValue = eval(displayValue)
    document.querySelector('#display').innerHTML = displayValue
}