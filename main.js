//CREATING THE BUTTONS
const buttonsSection = document.querySelector('#buttonsSection');

const buttonText = [
  7,
  8,
  9,
  '/',
  4,
  5,
  6,
  'x',
  1,
  2,
  3,
  '+',
  0,
  '.',
  '=',
  '-',
  'AC',
];
for (let i = 0; i < buttonText.length; i++) {
  const button = document.createElement('span');
  button.classList.add('round');
  button.textContent = buttonText[i];
  buttonsSection.appendChild(button);
  if (i == buttonText.length - 1) {
    button.classList.add('reset');
  }
}

//BUTTON FUNCTIONALITY OF DISPLAYING ON SCREEN
const screen = document.querySelector('#display');
const buttons = document.querySelectorAll('span');

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    if (e.target.textContent == '=') {
      let expression = screen.textContent;
      if (expression.includes('+')) {
        screen.textContent = operators['+'](...addition.eval(expression));
      } else if (expression.includes('x')) {
        screen.textContent = operators.x(...multiplication.eval(expression));
      } else if (expression.includes('-')) {
        screen.textContent = operators['-'](...subtraction.eval(expression));
      } else {
        screen.textContent = operators['/'](...division.eval(expression));
      }
    } else if (e.target.textContent == 'AC') {
      screen.textContent = '';
    } else {
      screen.textContent += `${button.textContent} `;
    }
  });
}

//CONTSTRUCTOR TO CREATE STRING INTO ARRAY OF NUMBERS
function EvalConstructor(str) {
  this.eval = function (expression) {
    return expression
      .trim()
      .split(str)
      .map((value) => {
        if (Number(value)) {
          return Number(value);
        } else {
          return Number(value.replaceAll(' ', ''));
        }
      });
  };
}

const addition = new EvalConstructor('+');
const multiplication = new EvalConstructor('x');
const subtraction = new EvalConstructor('-');
const division = new EvalConstructor('/');

//IF ELSE CASES OF WHAT TYPE OF OPERATION TO USE DEPENDING ON SCREEN TEXT
const operators = {
  x: function (num1, num2) {
    return (num1 * num2).toFixed(2);
  },
  '-': function (num1, num2) {
    return num1 - num2;
  },
  '/': function (num1, num2) {
    return (num1 / num2).toFixed(2);
  },
  '+': function (num1, num2) {
    return num1 + num2;
  },
};
