function Calculator() {
  let total = 0;
  let num1 = '';
  let num2 = '';
  let operator = '';
  let display = '';

  this.pushZero = function () {
    operator === '' ? (num1 += '0') : (num2 += '0');
    console.log('Push Zero');
  };
  this.pushOne = function () {
    operator === '' ? (num1 += '1') : (num2 += '1');
  };
  this.pushTwo = function () {
    operator === '' ? (num1 += '2') : (num2 += '2');
  };
  this.pushThree = function () {
    operator === '' ? (num1 += '3') : (num2 += '3');
  };
  this.pushFour = function () {
    operator === '' ? (num1 += '4') : (num2 += '4');
  };
  this.pushFive = function () {
    operator === '' ? (num1 += '5') : (num2 += '5');
  };
  this.pushSix = function () {
    operator === '' ? (num1 += '6') : (num2 += '6');
  };
  this.pushSeven = function () {
    operator === '' ? (num1 += '7') : (num2 += '7');
  };
  this.pushEight = function () {
    operator === '' ? (num1 += '8') : (num2 += '8');
  };
  this.pushNine = function () {
    operator === '' ? (num1 += '9') : (num2 += '9');
  };
  this.pushDecimal = function () {
    operator === '' ? (num1 += '.') : (num2 += '.');
  };
  this.pushPlus = function () {
    operator = '+';
  };
  this.pushMinus = function () {
    operator = '-';
  };
  this.pushDivide = function () {
    operator = '/';
  };
  this.pushMultiply = function () {
    operator = '*';
  };
  this.pushEquals = function () {
    num1 = num1 * 1;
    num2 = num2 * 1;

    if (operator === '+') {
      total = num1 + num2;
    } else if (operator === '-') {
      total = num1 - num2;
    } else if (operator === '*') {
      total = num1 * num2;
    } else if (operator === '/') {
      total = num1 / num2;
    } else if (operator === '') {
      document.querySelector('.result').innerText = 'Error';
    }

    document.querySelector('.result').innerText = total;
  };

  this.pushUpdate = function () {
    display = num1 + operator + num2;
    document.querySelector('.problem').innerText = display;
  };
}

let calc = new Calculator();

document.querySelector('.zero').addEventListener('click', calc.pushZero);
document.querySelector('.one').addEventListener('click', calc.pushOne);
document.querySelector('.two').addEventListener('click', calc.pushTwo);
document.querySelector('.three').addEventListener('click', calc.pushThree);
document.querySelector('.four').addEventListener('click', calc.pushFour);
document.querySelector('.five').addEventListener('click', calc.pushFive);
document.querySelector('.six').addEventListener('click', calc.pushSix);
document.querySelector('.seven').addEventListener('click', calc.pushSeven);
document.querySelector('.eight').addEventListener('click', calc.pushEight);
document.querySelector('.nine').addEventListener('click', calc.pushNine);
document.querySelector('.plus').addEventListener('click', calc.pushPlus);
document.querySelector('.minus').addEventListener('click', calc.pushMinus);
document.querySelector('.divide').addEventListener('click', calc.pushDivide);
document
  .querySelector('.multiply')
  .addEventListener('click', calc.pushMultiply);
document.querySelector('.equals').addEventListener('click', calc.pushEquals);
document.querySelector('.decimal').addEventListener('click', calc.pushDecimal);
document
  .querySelector('.keyContainer')
  .addEventListener('click', calc.pushUpdate);
