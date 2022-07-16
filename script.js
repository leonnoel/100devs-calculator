class Calculator {
  constructor() {
    this.display = document.querySelector('.calculator__display');
    this.keys = document.querySelectorAll('.key');
    this.firstOperand = document.querySelector('.first-operand');
    this.secondOperand = document.querySelector('.second-operand');
    this.operation = document.querySelector('.operation');
    this.operand = 0;
    this.result = 0;
  }

  calculate() {
    if (this.operation.innerText === '+') {
      this.result = this.add(
        this.firstOperand.innerHTML,
        this.secondOperand.innerHTML
      );
    }
    if (this.operation.innerText === '/') {
      this.result = this.divide(
        this.firstOperand.innerHTML,
        this.secondOperand.innerHTML
      );
    }
    if (this.operation.innerText === 'X') {
      this.result = this.multiply(
        this.firstOperand.innerHTML,
        this.secondOperand.innerHTML
      );
    }
    if (this.operation.innerText === '-') {
      this.result = this.subtract(
        this.firstOperand.innerHTML,
        this.secondOperand.innerHTML
      );
    }
    this.operation.innerHTML = '';
    this.secondOperand.innerHTML = '';
    this.operand = 0;

    this.result = this.result.toString();

    if (this.result.length > 4) {
      this.result = this.result.slice(0, 5);
    }

    this.firstOperand.innerHTML = Math.round(this.result * 100) / 100;
  }

  divide(a, b) {
    return +a / +b;
  }

  add(a, b) {
    return +a + +b;
  }

  subtract(a, b) {
    return +a - +b;
  }

  multiply(a, b) {
    return +a * +b;
  }

  updateDisplay(input) {
    const operations = ['/', 'X', '+', '-'];

    if (input === '=' && this.secondOperand.innerHTML !== '') {
      this.calculate();
      return;
    } else if (input === '=' && this.operation.innerHTML !== '') {
      return;
    }

    if (input === '.') {
      if (
        this.firstOperand.innerHTML.split('')[
          this.firstOperand.innerHTML.length - 1
        ] === '.' ||
        this.secondOperand.innerHTML.split('')[
          this.secondOperand.innerHTML.length - 1
        ] === '.'
      ) {
        return;
      }
    }

    if (operations.includes(input)) {
      if (this.firstOperand.textContent === '') {
        return;
      }

      if (this.operation.innerHTML !== '') {
        if (this.secondOperand.innerHTML !== '') {
          this.calculate();
        } else {
          this.operand--;
          this.operation.innerHTML = '';
        }
      }
      this.operation.innerHTML = `<span> ${input} </span>`;
      this.operand++;
      return;
    }

    if (this.operand === 0) {
      this.firstOperand.textContent += input;
    }

    if (this.operand === 1) {
      this.secondOperand.textContent += input;
    }
  }

  init() {
    this.keys.forEach((k) =>
      k.addEventListener('click', (e) =>
        this.updateDisplay(e.target.textContent)
      )
    );
  }
}

const calculator = new Calculator();

calculator.init();
