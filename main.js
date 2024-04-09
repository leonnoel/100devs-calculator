class Calculator {
  constructor() {
    this.screen = '';
    this.operand = '';
    this.operation = null;
    this.firstValue = false;
    this.a = 0;
    this.b = 0;

    this.add = function() {
      return this.a + this.b;
    }

    this.substract = function() {
      return this.a - this.b;
    }

    this.multiply = function() {
      return this.a * this.b;
    }

    this.divide = function() {
      return this.a / this.b;
    }

    this.setOperation = function(value) {
      this.operation = value;
      this.a = this.screen;
      this.operand = '';
      this.firstValue = true
    }

    this.calculate = function() {
      this.b = this.operand;
      let result = 0;
      switch (this.operation) {
        case 'x':
          result = this.multiply();
          break;
        case '+':
          result = this.add();
            break; 
        case '-':
          result = this.substract();
          break;
        case '÷':
          result = this.divide()
          break;
      }
      this.updateScreen(result);
      this.a = result;
    }

    this.updateScreen = function(value) {
      this.screen += value;
      this.operand += value;
    }

    this.clear = function() {
      this.screen = '';
      this.firstValue = false;
      this.operand = '';
    }
  }
}

const calculator = new Calculator();

const screen = document.querySelector('.placeholder');

const numberButtons = document.querySelectorAll('[data-number]');
const deleteBtn = document.querySelector('[data-delete]');
const operations = document.querySelectorAll('[data-operation');
const equalBtn = document.querySelector('[data-equal');



numberButtons.forEach(x => {
  x.addEventListener('click', () => {
    calculator.updateScreen(x.innerText);
    screen.innerText = calculator.screen;
  })
})

operations.forEach(x => {
  x.addEventListener('click', () => {
    calculator.setOperation(x.innerText);
    calculator.updateScreen(x.innerText);
    screen.innerText = calculator.screen;
  })
})

deleteBtn.addEventListener('click', () => {
  calculator.clear();
  screen.innerText = calculator.screen;
})

