class Calculator {
  constructor(a, operator, b) {
    this._a = a;
    this._b = b;
    this._operator = operator;
    this.operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
  }

  get a() {
    return this._a;
  }

  set a(value) {
    this._a = value;
  }

  get b() {
    return this._b;
  }

  set b(value) {
    this._b = value;
  }

  get operator() {
    return this._operator;
  }

  set operator(value) {
    this._operator = value;
  }

  updateDisplay() {
    display.value = `${this.a}${this.operator}${this.b}`;
  }

  updateNumber(value) {
    if (!this.operator) {
      this.a = this.a + value;
    } else {
      this.b = this.b + value;
    }
    if (value === '.') {
      this.disableDecimal();
    }
    this.updateDisplay();
  }

  updateOperator(value) {
    if (!this.operator) {
      this.operator = value;
      if (decimal.hasAttribute('disabled')) {
        this.enableDecimal();
      }

      this.updateDisplay();
    }
  }

  disableDecimal() {
    decimal.setAttribute('disabled', '');
  }

  enableDecimal() {
    decimal.removeAttribute('disabled');
  }

  calculate() {
    if (this.operator !== '' && this.b !== '') {
      this.a = '' + this.operators[this.operator](+this.a, +this.b);
      this.operator = '';
      this.b = '';
      if (this.a.includes('.')) {
        this.disableDecimal();
      } else {
        this.enableDecimal();
      }
      this.updateDisplay();
    }
  }
}

const calculator = new Calculator('', '', '');

const display = document.querySelector('.display');
const decimal = document.querySelector('#decimal');
const btns = document.querySelectorAll('button');
btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    if (e.target.className === 'number') {
      calculator.updateNumber(e.target.value);
    } else if (e.target.className === 'operator') {
      calculator.updateOperator(e.target.value);
    } else if (e.target.className === 'calculate') {
      calculator.calculate();
    }
  })
);
