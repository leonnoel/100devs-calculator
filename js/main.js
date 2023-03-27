// declaration of variables
const currentInput = document.querySelector('#input')
const answer = document.querySelector('#answer')
const num = document.querySelectorAll('.btn')
const clear = document.querySelector('#clear')
const back = document.querySelector('#back')
const eq = document.querySelector('#equals')
let realTimeScreen = []

// calculator object to store methods
const calculator = {
    clearScreen() {
        answer.innerHTML = ''
        currentInput.innerHTML = ''
        realTimeScreen = ['']
    },
    compute() {
        answer.innerHTML = `${+parseFloat(eval(realTimeScreen.join(''))).toFixed(3)}`
    },
    backspace() {
        if (answer.innerHTML == '') {
            realTimeScreen.pop()
            currentInput.innerHTML = realTimeScreen.join('');
        }
    },
}

// clear, equals, backspace event listeners
clear.addEventListener('click', calculator.clearScreen)
eq.addEventListener('click', calculator.compute)
back.addEventListener('click', calculator.backspace)

// number button loop
num.forEach(x => {
    x.addEventListener('click', () => {
        if (/[+-\/*]/.test(realTimeScreen[realTimeScreen.length - 1]) && /[+-\/*]/.test(x.innerHTML) || realTimeScreen[0] === undefined && /[+-\/*]/.test(x.innerHTML)) {
            return
        } else if (answer.innerHTML !== '' && /[+-\/*]/.test(x.innerHTML)) {
            realTimeScreen = [answer.innerHTML]
        } else if (answer.innerHTML !== '') {
            calculator.clearScreen()
        }
        answer.innerHTML = ''
        realTimeScreen.push(x.innerHTML)
        currentInput.innerHTML = realTimeScreen.join('');
        console.log(realTimeScreen)
    })
})
