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
    console.log('the new value is', value);
    if (!this.operator) {
      this.a = this.a + value;
      console.log('A:', this.a);
    } else {
      this.b = this.b + value;
      console.log('B:', this.a);
    }
    if (value === '.') {
      this.toggleDecimal();
    }
    this.updateDisplay();
  }

  updateOperator(value) {
    if (!this.operator) {
      this.operator = value;
      this.toggleDecimal();
    }

    this.updateDisplay();
  }

  toggleDecimal() {
    console.log('inside toggledecimal method');
    decimal.toggleAttribute('disabled');
  }

  calculate() {
    // x operator y
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
    }
  })
);
