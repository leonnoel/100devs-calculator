const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = calculator.querySelector('.calculator_display')
const operatorKeys = keys.querySelectorAll('[data-type="operator"]')

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return
    
    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const {type} = key.dataset
    const {previousKeyType} = calculator.dataset
    

    // click is number or decimal
    if (type === 'number') {
        if (key.classList.value == 'decimal' &&
            displayValue.includes('.')) {
            return
        }
        if (displayValue === '0' ||
            previousKeyType === 'operator' || 
            previousKeyType === 'equal') {
            display.textContent = keyValue
        } else {
            display.textContent = displayValue + keyValue
        }
    }

    // click is operation
    if (type === 'operator') {
        operatorKeys.forEach(el => {el.dataset.state = ''})
        key.dataset.state = 'selected'

        calculator.dataset.firstNumber = displayValue
        calculator.dataset.operator = key.dataset.key
    }

    // click is equal
    if (type === 'equal') {
        if (previousKeyType !== 'number') return
        const firstNumber = parseFloat(calculator.dataset.firstNumber)
        const operator = calculator.dataset.operator
        const secondNumber = parseFloat(displayValue)

        let result = ''
        if (operator === 'plus') result = firstNumber + secondNumber
        if (operator === 'minus') result = firstNumber - secondNumber
        if (operator === 'times') result = firstNumber * secondNumber
        if (operator === 'divide') result = firstNumber / secondNumber

        display.textContent = result
        // remove below if repeated expressions allowed
        operatorKeys.forEach(el => {el.dataset.state = ''})
    }

    // click is all-clear
    if (type === 'clear') {
        display.textContent = '0'
        operatorKeys.forEach(el => {el.dataset.state = ''})
        delete calculator.dataset.firstNumber
        delete calculator.dataset.operator
    }

    calculator.dataset.previousKeyType = type
})

