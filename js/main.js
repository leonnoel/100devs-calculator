import Calculator from "./calculator_class.js";

// const numbers = document.querySelectorAll('.button.number');
// const operators = document.querySelectorAll('.button.operator');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display span');

display.innerHTML = "0";

for (const button of buttons) {
    button.addEventListener('click', buttonClicked);
}

// for (const number of numbers) {
//     number.addEventListener('click', numberClicked);
// }

// for (const operator of operators) {
//     operator.addEventListener('click', operatorClicked);
// }

function buttonClicked() {
    const value = this.dataset.value;
    const type = this.dataset.type;
    display.innerHTML = c.issueCommand(value, type);
}

// function numberClicked() {
//     const number = this.dataset.value;
//     display.innerHTML = c.issueCommand(+number);
// }

// function operatorClicked() {
//     const operatorType = this.dataset.operator;
//     display.innerHTML = c.issueCommand(operatorType, 'operator');
// }

const c = new Calculator();
// console.log(c.issueCommand(2))
// console.log(c.issueCommand(3))
// console.log(c.issueCommand(6))
// console.log(c.issueCommand(7))
// console.log(c.issueCommand(2))