class Calculator {
  constructor(UIcurrentInput, UIpreviousInput) {
    this.UIcurrentInput = UIcurrentInput;
    this.UIpreviousInput = UIpreviousInput;
    this.currentDigit = '';
    this.previousDigit = '';
    this.operand = undefined;
    this.displayString;
  }
  appendNumber(digit) {
    if (digit === '.' && this.currentDigit.includes('.')) {
      return;
    }
    this.currentDigit += digit;
  }
  getDisplay() {
    const numberString = parseFloat(this.currentDigit.split('.')[0]),
      decimalString = this.currentDigit.split('.')[1];
    let integerDisplay;

    if (isNaN(numberString)) {
      integerDisplay = '';
    } else {
      integerDisplay = numberString.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }

    if (decimalString != null) {
      this.displayString = `${integerDisplay}.${decimalString}`;
    } else {
      this.displayString = `${integerDisplay}`;
    }
  }
  upDateDisplay() {
    this.UIcurrentInput.textContent = this.displayString;
  }
  chooseOperation(operation) {
    if (this.currentDigit === '') {
      return;
    }

    if (this.previousDigit != null) {
      this.compute();
    }

    let currentCalSum = this.currentDigit;
    this.operand = operation;
    this.previousDigit = currentCalSum;
    this.UIpreviousInput.textContent = this.previousDigit + ' ' + this.operand;
    this.currentDigit = ' ';
    this.getDisplay();
    this.upDateDisplay();
  }
  compute() {
    let computation,
      prev = parseFloat(this.previousDigit),
      current = parseFloat(this.currentDigit);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operand) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '×':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;

      default:
        return;
    }

    this.currentDigit = computation.toString();

    this.operand = undefined;
    this.previousDigit = ' ';
  }
}
