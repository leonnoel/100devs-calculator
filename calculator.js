"use strict"

document.querySelectorAll('.button').forEach((node) => {
    node.addEventListener('click', update);
})

const screen = document.querySelector('.screen');

function update(event) {
    let char = event.currentTarget.innerText;
    let display = calc.calculate(char);
    screen.innerText = display;

}





function Calculator() {

    let state = '';
    let currentOperandsCount = 0;
    const operands = ['+', '-', '=', '/', '*'];

    this.calculate = (char) => {

        if (stateCheck(char)) return state;
        state += char;
        return state;
    }

    let stateCheck = (char) => {

        if (operands.includes(char)) {
            currentOperandsCount++;
        }

        if (currentOperandsCount === 2) {

            if (operands.includes(char) && operands.includes(state.slice(-1))) {

                state = state.slice(0, -1) + char;
                currentOperandsCount = 1;
                return true;
            }



            if (char === '=') {
                state = Function("return " + state)();
                currentOperandsCount = 0;
                return true;
            }
            state = Function("return " + state)();
            currentOperandsCount = 1;
        }
    }

    this.reset = () => {
        state = '';
        currentOperandsCount = 0; 
    }

}

const calc = new Calculator();















