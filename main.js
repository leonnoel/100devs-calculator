//CREATING THE BUTTONS
const buttonsSection = document.querySelector('#buttonsSection');

const buttonText = {
  seven: 7,
  eight: 8,
  nine: 9,
  divide: '/',
  four: 4,
  five: 5,
  six: 6,
  multiply: 'x',
  one: 1,
  two: 2,
  three: 3,
  add: '+',
  zero: 0,
  decimal: '.',
  evaluate: '=',
  subtract: '-',
};
for (let key in buttonText) {
  const button = document.createElement('span');
  button.classList.add('round');
  button.textContent = `${buttonText[key]}`;
  buttonsSection.appendChild(button);
}

//BUTTON FUNCTIONALITY OF DISPLAYING ON SCREEN
const screen = document.querySelector('#display');
const buttons = document.querySelectorAll('span');
let expression;

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    if (e.target.textContent == '=') {
      expression = screen.textContent;
      console.log(evalExpression(expression));
    } else {
      screen.textContent += button.textContent;
    }
  });
}

function evalExpression(str) {
  return str.split('').map((value) => {
    if (Number(value)) {
      return Number(value);
    } else {
      return value;
    }
  });
}
