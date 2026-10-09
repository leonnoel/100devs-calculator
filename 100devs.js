
function Calculator() {
  this.firstNumber = 0
  this.secondNumber = 0
  this.operator = null
  this.clear = function ()  {
    this.firstNumber = 0
    this.secondNumber = 0
    this.operator = null
  }

this.digit = function (num) {
  if (this.operator === null) {
    this.firstNumber = num;
  } else {
    this.secondNumber = num;
  }
}
this.setOperator = function (op) {
this.operator = op
}
this.equals = function () {
if (this.operator === '+') {
  return this.firstNumber + this.secondNumber
}
else if (this.operator === '-') {
  return this.firstNumber - this.secondNumber
}
else if (this.operator === 'x') {
  return this.firstNumber * this.secondNumber
}
else if (this.operator === '/') {
  return this.firstNumber / this.secondNumber
}
}
}
const calculatorButtons = document.querySelectorAll('[data-digit]');

const calc = new Calculator();
calculatorButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    calc.digit (Number(button.dataset.digit));
    screen.textContent = button.dataset.digit
    console.log(calc);
  });
});

const calculatorOperator = document.querySelectorAll('[data-op]');

calculatorOperator.forEach(function (button) {
  button.addEventListener('click', function () {
    calc.setOperator(button.dataset.op);
    console.log(calc);
  });
});

const equal = document.querySelector('[data-equals]');
  const screen = document.getElementById('screen');

equal.addEventListener('click', function () {
  console.log(calc.equals())
screen.textContent = calc.equals()
});









