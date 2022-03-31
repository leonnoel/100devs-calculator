'use strict';

/*
Things a calculator needs to do:

- do math
- pemdas



*/

class Calculator {
  constructor() {
    this.operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
  }

  // example: [56, '+', 36, 'x', 5, '/', 2, '-', 8, '+', 51, 'x', 7, '/', 0.2, '=']
  // should answer 1923
  calculate(arr) {
    let wArr = arr.map((num) => (num === 'x' ? '*' : num));

    let index = 0;
    while (wArr.includes('*') || wArr.includes('/')) {
      if (wArr[index] === '*' || wArr[index] === '/') {
        let computation = this.operations[wArr[index]](
          wArr[index - 1],
          wArr[index + 1]
        );

        wArr.splice(index - 1, 3, computation);
        index--;
      }
      index++;
    }

    index = 0;
    while (wArr.includes('+') || wArr.includes('-')) {
      if (wArr[index] === '+' || wArr[index] === '-') {
        let computation = this.operations[wArr[index]](
          wArr[index - 1],
          wArr[index + 1]
        );

        wArr.splice(index - 1, 3, computation);
        index--;
      }
      index++;
    }

    return wArr[0];
  }
}

/*
Things the interface needs to do:

- display numbers as they are clicked on the screen (done)
- add comma's for numbers over 999
- allow numbers to be stringed together like 458 + 69 + 2 / 2 (done)
- set up buttons (done)
- numbers scale down as numbers start pushing the boundary of display
- deactivate equal when operator is at the end (done)
- handle decimals (done)
- error handling decimals
*/

class Interface {
  #operationArr;
  #tempNum;
  constructor(displayEl, equalEl, calculator) {
    this.displayEl = displayEl;
    this.equalEl = equalEl;
    this.calculator = calculator;
    this.displayArr = [];
    this.currentInput = [];
    this.#operationArr = ['+', '-', 'x', '/'];
    this.#tempNum = [];
  }

  ButtonEventHandler(e) {
    e.preventDefault();
    // guard clause for user clicking between buttons
    if (e.target.nodeName !== 'BUTTON') return;

    let textInButton = e.target.textContent;
    // add spaces around operation
    if (this.#operationArr.indexOf(textInButton) !== -1)
      textInButton = ' ' + textInButton + ' ';

    // add space to =
    if (textInButton === '=') textInButton = ' ' + textInButton;

    this.currentInput.push(textInButton);
    // console.log(textInButton);
    this.handleButtonClick();
  }

  handleButtonClick() {
    this.displayEl.textContent += this.currentInput[0];
    this.deactivateEqual();
    this.numberHandler(this.currentInput.shift());
  }

  deactivateEqual() {
    const arrLength = this.currentInput.length;
    this.equalEl.disabled = false;
    if (
      this.#operationArr.indexOf(this.currentInput[arrLength - 1].trim()) !== -1
    )
      this.equalEl.disabled = true;
  }
  numberHandler(num) {
    if (this.#operationArr.indexOf(num.trim()) !== -1 || num.trim() === '=') {
      this.displayArr.push(Number(this.#tempNum.join('')));
      this.#tempNum = [];
      this.displayArr.push(num.trim());
      return;
    }
    num === '.' ? this.#tempNum.push(num) : this.#tempNum.push(Number(num));
  }

  deactivateDecimal() {}

  runCalc() {}
}

// setup
const displayEl = document.querySelector('#display');
const equalEl = document.querySelector('#equal');

const calc = new Calculator();
const calcInterface = new Interface(displayEl, equalEl, calc);

const calculatorBtnContainer = document.querySelector('#btns');

calculatorBtnContainer.addEventListener(
  'click',
  calcInterface.ButtonEventHandler.bind(calcInterface)
);

// prettier-ignore
let test = [56, '+', 36, 'x', 5, '/', 2, '-', 8, '+', 51, 'x', 7, '/', 0.2]

console.log(calc.calculate(test));
