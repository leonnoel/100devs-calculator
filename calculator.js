class Calculator {
  constructor() {
    this.currentNum = '';
    this.previousNum = '';
    this.operator = '';

    this.currentDisplayNumber =
      document.querySelector('.currentNumber');
    this.previousDisplayNumber =
      document.querySelector('.previousNumber');
    this.clearButton = document.querySelector('.clear');
    this.signButton = document.querySelector('.sign');
    this.percentButton = document.querySelector('.percent');
    this.undoButton = document.querySelector('.undo');
    this.decimalButton = document.querySelector('.decimal');
    this.equalButton = document.querySelector('.equal');
    this.numberButtons = document.querySelectorAll('.number');
    this.operatorButtons = document.querySelectorAll('.operator');

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.clearButton.addEventListener('click', () =>
      this.clearCalculator()
    );
    this.signButton.addEventListener('click', () =>
      this.toggleSign()
    );
    this.percentButton.addEventListener('click', () =>
      this.convertToPercent()
    );
    this.undoButton.addEventListener('click', () =>
      this.handleDelete()
    );
    this.decimalButton.addEventListener('click', () =>
      this.addDecimal()
    );
    this.equalButton.addEventListener('click', () => this.compute());

    this.numberButtons.forEach((btn) => {
      btn.addEventListener('click', (e) =>
        this.handleNumber(e.target.textContent)
      );
    });

    this.operatorButtons.forEach((btn) => {
      btn.addEventListener('click', (e) =>
        this.handleOperator(e.target.textContent)
      );
    });

    window.addEventListener('keydown', (e) => this.handleKeyPress(e));
  }

  clearCalculator() {
    this.currentNum = '';
    this.previousNum = '';
    this.operator = '';
    this.currentDisplayNumber.textContent = '0';
    this.previousDisplayNumber.textContent = '';
  }

  toggleSign() {
    this.currentNum = this.currentNum.startsWith('-')
      ? this.currentNum.slice(1)
      : '-' + this.currentNum;
    this.currentDisplayNumber.textContent = this.currentNum;
  }

  convertToPercent() {
    this.currentNum /= 100;
    this.currentDisplayNumber.textContent = this.currentNum;
  }

  handleDelete() {
    if (this.currentNum !== '') {
      this.currentNum = this.currentNum.slice(0, -1);
      this.currentDisplayNumber.textContent = this.currentNum || '0';
    }
    if (
      this.currentNum === '' &&
      this.previousNum !== '' &&
      this.operator === ''
    ) {
      this.previousNum = this.previousNum.slice(0, -1);
      this.currentDisplayNumber.textContent = this.previousNum;
    }
  }

  addDecimal() {
    if (!this.currentNum.includes('.')) {
      this.currentNum += '.';
      this.currentDisplayNumber.textContent = this.currentNum;
    }
  }

  handleNumber(number) {
    if (
      this.previousNum !== '' &&
      this.currentNum !== '' &&
      this.operator === ''
    ) {
      this.previousNum = '';
      this.currentDisplayNumber.textContent = this.currentNum;
    }
    if (this.currentNum.length <= 11) {
      this.currentNum += number;
      this.currentDisplayNumber.textContent = this.currentNum;
    }
  }

  handleOperator(op) {
    if (this.previousNum === '') {
      this.previousNum = this.currentNum;
      this.operatorCheck(op);
    } else if (this.currentNum === '') {
      this.operatorCheck(op);
    } else {
      this.compute();
      this.operator = op;
      this.currentDisplayNumber.textContent = '0';
      this.previousDisplayNumber.textContent =
        this.previousNum + ' ' + this.operator;
    }
  }

  operatorCheck(text) {
    this.operator = text;
    this.previousDisplayNumber.textContent =
      this.previousNum + ' ' + this.operator;
    this.currentDisplayNumber.textContent = '0';
    this.currentNum = '';
  }

  compute() {
    this.previousNum = Number(this.previousNum);
    this.currentNum = Number(this.currentNum);

    if (this.operator === '+') {
      this.previousNum += this.currentNum;
    } else if (this.operator === '-') {
      this.previousNum -= this.currentNum;
    } else if (this.operator === '*') {
      this.previousNum *= this.currentNum;
    } else if (this.operator === '/') {
      if (this.currentNum === 0) {
        this.previousNum = '>:(';
        this.displayResults();
        return;
      }
      this.previousNum /= this.currentNum;
    }
    this.previousNum = this.roundNumber(this.previousNum);
    this.previousNum = this.previousNum.toString();
    this.displayResults();
  }

  roundNumber(num) {
    return Math.round(num * 1000000000) / 1000000000;
  }

  displayResults() {
    if (this.previousNum.length <= 12) {
      this.currentDisplayNumber.textContent = this.previousNum;
    } else {
      this.currentDisplayNumber.textContent =
        this.previousNum.slice(0, 12) + '...';
    }
    this.previousDisplayNumber.textContent = '';
    this.operator = '';
    this.currentNum = '';
  }

  handleKeyPress(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
      this.handleNumber(e.key);
    }
    if (['+', '-', '/', '*'].includes(e.key)) {
      this.handleOperator(e.key);
    }
    if (
      e.key === 'Enter' ||
      (e.key === '=' &&
        this.currentNum != '' &&
        this.previousNum != '')
    ) {
      this.compute();
    }
    if (e.key === '.') {
      this.addDecimal();
    }
    if (e.key === 'Backspace') {
      this.handleDelete();
    }
    if (e.key === 'Escape') {
      this.clearCalculator();
    }
    if (e.key === '~') {
      this.toggleSign();
    }
    if (e.key === '%') {
      this.convertToPercent();
    }
  }
}

const calculator = new Calculator();

// //global variables
// let currentNum = '';
// let previousNum = '';
// let operator = '';

// //cache DOM variables
// const currentDisplayNumber = document.querySelector('.currentNumber');
// const previousDisplayNumber =
//   document.querySelector('.previousNumber');
// const clear = document.querySelector('.clear');
// const sign = document.querySelector('.sign');
// const percent = document.querySelector('.percent');
// const undo = document.querySelector('.undo');
// const decimal = document.querySelector('.decimal');
// const equal = document.querySelector('.equal');
// const numbers = document.querySelectorAll('.number');
// const operators = document.querySelectorAll('.operator');

// //calculator functions
// clear.addEventListener('click', clearCalculator);

// function clearCalculator() {
//   currentNum = '';
//   previousNum = '';
//   operator = '';
//   currentDisplayNumber.textContent = '0';
//   previousDisplayNumber.textContent = '';
// }

// sign.addEventListener('click', () => {
//   toggleSign();
// });

// function toggleSign() {
//   if (currentNum.indexOf('-') == 0) {
//     currentNum = currentNum.substring(1);
//   } else {
//     currentNum = '-' + currentNum;
//   }
//   currentDisplayNumber.textContent = currentNum;
// }

// percent.addEventListener('click', () => {
//   convertToPercent();
// });

// function convertToPercent() {
//   currentNum /= 100;
//   currentDisplayNumber.textContent = currentNum;
// }

// undo.addEventListener('click', () => {
//   handleDelete();
// });

// function handleDelete() {
//   if (currentNum !== '') {
//     currentNum = currentNum.slice(0, -1);
//     currentDisplayNumber.textContent = currentNum;
//     if (currentNum === '') {
//       currentDisplayNumber.textContent = '0';
//     }
//   }
//   if (currentNum === '' && previousNum !== '' && operator === '') {
//     previousNum = previousNum.slice(0, -1);
//     currentDisplayNumber.textContent = previousNum;
//   }
// }

// decimal.addEventListener('click', () => {
//   addDecimal();
// });

// function addDecimal() {
//   if (!currentNum.includes('.')) {
//     currentNum += '.';
//     currentDisplayNumber.textContent = currentNum;
//   }
// }

// equal.addEventListener('click', () => {
//   if (currentNum != '' && previousNum != '') {
//     compute();
//   }
// });

// numbers.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     handleNumber(e.target.textContent);
//   });
// });

// function handleNumber(number) {
//   if (previousNum !== '' && currentNum !== '' && operator === '') {
//     previousNum = '';
//     currentDisplayNumber.textContent = currentNum;
//   }
//   if (currentNum.length <= 11) {
//     currentNum += number;
//     currentDisplayNumber.textContent = currentNum;
//   }
// }

// operators.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     handleOperator(e.target.textContent);
//   });
// });

// function handleOperator(op) {
//   if (previousNum === '') {
//     previousNum = currentNum;
//     operatorCheck(op);
//   } else if (currentNum === '') {
//     operatorCheck(op);
//   } else {
//     compute();
//     operator = op;
//     currentDisplayNumber.textContent = '0';
//     previousDisplayNumber.textContent = previousNum + ' ' + operator;
//   }
// }

// //background calculator functions
// function operatorCheck(text) {
//   operator = text;
//   previousDisplayNumber.textContent = previousNum + ' ' + operator;
//   currentDisplayNumber.textContent = '0';
//   currentNum = '';
// }

// function compute() {
//   previousNum = Number(previousNum);
//   currentNum = Number(currentNum);

//   if (operator === '+') {
//     previousNum += currentNum;
//   } else if (operator === '-') {
//     previousNum -= currentNum;
//   } else if (operator === '*') {
//     previousNum *= currentNum;
//   } else if (operator === '/') {
//     if (currentNum === 0) {
//       previousNum = '>:(';
//       displayResults();
//       return;
//     }
//     previousNum /= currentNum;
//   }
//   previousNum = roundNumber(previousNum);
//   previousNum = previousNum.toString();
//   displayResults();
// }

// function roundNumber(num) {
//   return Math.round(num * 1000000000) / 1000000000;
// }

// function displayResults() {
//   if (previousNum.length <= 12) {
//     currentDisplayNumber.textContent = previousNum;
//   } else {
//     currentDisplayNumber.textContent =
//       previousNum.slice(0, 12) + '...';
//   }
//   previousDisplayNumber.textContent = '';
//   operator = '';
//   currentNum = '';
// }

// //keyboard support
// window.addEventListener('keydown', handleKeyPress);

// function handleKeyPress(e) {
//   e.preventDefault();
//   if (e.key >= 0 && e.key <= 9) {
//     handleNumber(e.key);
//   }
//   if (
//     e.key === '+' ||
//     e.key === '-' ||
//     e.key === '/' ||
//     e.key === '*'
//   ) {
//     handleOperator(e.key);
//   }
//   if (
//     e.key === 'Enter' ||
//     (e.key === '=' && currentNum != '' && previousNum != '')
//   ) {
//     compute();
//   }
//   if (e.key === '.') {
//     addDecimal();
//   }
//   if (e.key === 'Backspace') {
//     handleDelete();
//   }
//   if (e.key === 'Escape') {
//     clearCalculator();
//   }
//   if (e.key === '~') {
//     toggleSign();
//   }
//   if (e.key === '%') {
//     convertToPercent();
//   }
// }
