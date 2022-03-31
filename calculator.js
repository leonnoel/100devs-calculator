'use strict';

/*
Things a calculator needs to do:

- do math (done)
- pemdas  (done)



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

    // modify's array to compute all
    this.#filterOutPemdasOperations('*', '/', wArr);
    this.#filterOutPemdasOperations('+', '-', wArr);
    return wArr[0];
  }

  #filterOutPemdasOperations(op1, op2, arr) {
    let index = 0;
    while (arr.includes(op1) || arr.includes(op2)) {
      if (arr[index] === op1 || arr[index] === op2) {
        let computation = this.operations[arr[index]](
          arr[index - 1],
          arr[index + 1]
        );

        arr.splice(index - 1, 3, computation);
        index--;
      }
      index++;
    }
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
- allow for negative numbers
*/

class Interface {
  #operationArr;
  #tempNum;
  constructor(displayEl, equalEl, calculator, decimalEl) {
    this.displayEl = displayEl;
    this.equalEl = equalEl;
    this.decimalEl = decimalEl;
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
    let currentNum = this.currentInput[0];
    this.displayEl.textContent += currentNum;
    this.deactivateEqual();
    this.numberHandler(this.currentInput.shift());
    if (currentNum.trim() === '=') this.displayAnswer(this.runCalc());
    this.deactivateDecimal();
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
    // if in an operator or = combine previous entered numbers into a full number
    if (this.#operationArr.indexOf(num.trim()) !== -1 || num.trim() === '=') {
      // push full number into display array
      if (this.#tempNum.length > 0)
        this.displayArr.push(Number(this.#tempNum.join('')));
      this.#tempNum = [];
      // push the operator
      num.trim() !== '=' ? this.displayArr.push(num.trim()) : '';
      return;
    }
    num === '.' ? this.#tempNum.push(num) : this.#tempNum.push(Number(num));
  }

  deactivateDecimal() {
    const arrLength = this.#tempNum.length;
    if (arrLength === 0) return;
    this.decimalEl.disabled = false;
    if (this.#tempNum.includes('.')) this.decimalEl.disabled = true;
  }

  runCalc() {
    return this.calculator.calculate(this.displayArr);
  }

  displayAnswer(answer) {
    this.displayEl.textContent = answer;
    this.displayArr = [];
    this.displayArr.push(answer);
  }
}

// setup
const displayEl = document.querySelector('#display');
const equalEl = document.querySelector('#equal');
const decimalEl = document.querySelector('#decimal');

const calc = new Calculator();
const calcInterface = new Interface(displayEl, equalEl, calc, decimalEl);

const calculatorBtnContainer = document.querySelector('#btns');

calculatorBtnContainer.addEventListener(
  'click',
  calcInterface.ButtonEventHandler.bind(calcInterface)
);

// prettier-ignore
// let test = [56, '+', 36, 'x', 5, '/', 2, '-', 8, '+', 51, 'x', 7, '/', 0.2]

// console.log(calc.calculate(test));
