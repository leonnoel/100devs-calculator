function Calculator() {
  this.screen = null;
  this.screenVal = "";
  this.operation = null;
  this.a = 0;
  this.b = 0;

  this.add = function add() {
    return this.a + this.b;
  };

  this.substract = function substract() {
    return this.a - this.b;
  };

  this.multiply = function multiply() {
    return this.a * this.b;
  };

  this.divide = function divide() {
    return this.a / this.b;
  };
  
  this.calculate = function calculate() {
    this.b = +this.screenVal;
    this.clear();
    let result = 0;
    switch (this.operation) {
      case "+":
        result = this.add();
        break;
      case "-":
        result = this.substract();
        break;
      case "*":
        result = this.multiply();
        break;
      case "/":
        result = this.divide();
        break;
      default:
        break;
    }
    this.screen.innerText = result;
  };

  this.type = function type(value) {
    this.screenVal += value;
    this.updateScreenVal()
  };

  this.setOperation = function setOperation(value) {
    this.a = +this.screenVal;
    this.operation = value;
    this.clear();
  };

  this.clear = function clear() {
    this.screenVal = "";
    this.updateScreenVal()
  };

  this.updateScreenVal = function updateScreenVal() {
    this.screen.innerText = this.screenVal;
  }

  this.listeners = {
    "+": this.setOperation,
    "-": this.setOperation,
    "/": this.setOperation,
    "*": this.setOperation,
    "=": this.calculate,
    "C": this.clear
  }
  
  this.getListener = function getListener(value) {
    if (value in this.listeners) {
      return this.listeners[value].bind(this)(value)
    }

    return this.type.bind(this)(value)
  }
}

const calculator = new Calculator();

export default calculator;
