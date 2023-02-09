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
let expression;

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    if (e.target.textContent == '=') {
      expression = screen.textContent;
      if (expression.includes('+')) {
        console.log(expression);
        console.log(evalAddition(expression));
        screen.textContent = operators['+'](...evalAddition(expression));
      } else if (expression.includes('x')) {
        evalMultiplication(expression);
      } else if (expression.includes('-')) {
        evalSubtraction(expression);
      } else {
        evalDivision(expression);
      }
    } else if (e.target.textContent == 'AC') {
      screen.textContent = '';
    } else {
      screen.textContent += `${button.textContent} `;
    }
  });
}

//EVALUATION OBJECTS
function evalAddition(str) {
  return str
    .trim()
    .split('+')
    .map((value) => {
      if (Number(value)) {
        return Number(value);
      } else {
        return Number(value.replaceAll(' ', ''));
      }
    });
}
function evalMultiplication(str) {
  return str
    .trim()
    .split('x')
    .map((value) => {
      if (Number(value)) {
        return Number(value);
      } else {
        return value;
      }
    });
}
function evalSubtraction(str) {
  return str
    .trim()
    .split('-')
    .map((value) => {
      if (Number(value)) {
        return Number(value);
      } else {
        return value;
      }
    });
}
function evalDivision(str) {
  return str
    .trim()
    .split('/')
    .map((value) => {
      if (Number(value)) {
        return Number(value);
      } else {
        return value;
      }
    });
}

const operators = {
  x: function (num1, num2) {
    return Number(num1) * Number(num2);
  },
  '-': function (num1, num2) {
    return num1 - num2;
  },
  '/': function (num1, num2) {
    return num1 / num2;
  },
  '+': function (num1, num2) {
    return Number(num1) + Number(num2);
  },
};

//
