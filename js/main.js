class Calculator {
  constructor() {
    this.displayValue = "0";
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
  }

  updateDisplay() {
    const display = document.querySelector(".calculator-screen");

    display.value = this.displayValue;
  }
}
