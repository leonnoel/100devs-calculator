

const calculator = {
    display: document.getElementById('display'),
    currentInput: '',
    operator: '',
    firstOperand: null,
    secondOperand: null,
    
    clear() {
        this.currentInput = '';
        this.operator = '';
        this.firstOperand = null;
        this.secondOperand = null;
        this.updateDisplay();
    },

        appendDigit(digit) {
            if (digit === '.' && this.currentInput.includes('.')) return;
            this.currentInput += digit;
            this.updateDisplay();
          },
    

          setOperator(operator) {
            if (this.firstOperand === null) {
              this.firstOperand = parseFloat(this.currentInput);
              this.operator = operator;
              this.currentInput = '';
            } else if (this.currentInput !== '') {
              this.secondOperand = parseFloat(this.currentInput);
              this.calculate();
              this.operator = operator;
              this.currentInput = '';
            }
          },

          calculate() {
            if (this.firstOperand !== null && this.secondOperand !== null) {
              switch (this.operator) {
                case '+':
                  this.currentInput = (this.firstOperand + this.secondOperand).toString();
                  break;
                case '-':
                  this.currentInput = (this.firstOperand - this.secondOperand).toString();
                  break;
                case '*':
                  this.currentInput = (this.firstOperand * this.secondOperand).toString();
                  break;
                case '/':
                  this.currentInput = (this.firstOperand / this.secondOperand).toString();
                  break;
              }
              this.firstOperand = parseFloat(this.currentInput);
              this.secondOperand = null;
              this.operator = '';
              this.updateDisplay();
            }
          },
    
          updateDisplay() {
            this.display.value = this.currentInput;
          },
        };

        document.querySelector('.zero').addEventListener('click', () => calculator.appendDigit('0'));
        document.querySelector('.one').addEventListener('click', () => calculator.appendDigit('1'));
        document.querySelector('.two').addEventListener('click', () => calculator.appendDigit('2'));
        document.querySelector('.three').addEventListener('click', () => calculator.appendDigit('3'));
        document.querySelector('.four').addEventListener('click', () => calculator.appendDigit('4'));
        document.querySelector('.five').addEventListener('click', () => calculator.appendDigit('5'));
        document.querySelector('.six').addEventListener('click', () => calculator.appendDigit('6'));
        document.querySelector('.seven').addEventListener('click', () => calculator.appendDigit('7'));
        document.querySelector('.eight').addEventListener('click', () => calculator.appendDigit('8'));
        document.querySelector('.nine').addEventListener('click', () => calculator.appendDigit('9'));
        
        document.querySelector('.divide').addEventListener('click', () => calculator.appendDigit('/'));
        document.querySelector('.multiply').addEventListener('click', () => calculator.appendDigit('*'));
        document.querySelector('.add').addEventListener('click', () => calculator.appendDigit('+'));
        document.querySelector('.decimal').addEventListener('click', () => calculator.appendDigit('.'));
        document.querySelector('.subtract').addEventListener('click', () => calculator.appendDigit('-'));
        document.querySelector('.equals').addEventListener('click', () => {
            calculator.calculate();
          });
