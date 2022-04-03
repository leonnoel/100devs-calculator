const calculationZone = document.querySelector(".displayCalc");
const resultZone = document.querySelector(".displayResult");

class Calculator {
  constructor() {
    this._result = 0;
    this._selectedNumber = 0;
    this._decimal = null;
    this._lastOperation = null;
    this.initialize();
  }
  
  initialize() {
    this._result = 0;
    this._selectedNumber = 0;
    this._decimal = null;
    this._lastOperation = null;
    calculationZone.innerText = "";
    resultZone.innerText = "";
    console.log(`selectedNumber : ${this._selectedNumber} and decimal : ${this._decimal} and result : ${this._result}`);
  }
  
  calculate() {
    if (this._decimal !== null) {
      console.log(`selectedNumber : ${this._selectedNumber} and decimal : ${this._decimal}`);
      this._selectedNumber = Number(this._decimal) / 10 ** this._decimal.length + this._selectedNumber;
      console.log(`selectedNumber : ${this._selectedNumber}`);
    }
    
    switch (this._lastOperation) {
      case "+":
        this._result += this._selectedNumber;
        break;
      case "-":
        this._result -= this._selectedNumber;
        break;
      case "x":
        this._result *= this._selectedNumber;
        break;
      case "/":
        this._result = Math.round((this._result / this._selectedNumber + Number.EPSILON) * 100) / 100;
        break;
      case "%":
        this._result = Math.round(((this._result % this._selectedNumber) + Number.EPSILON) * 100) / 100;
        break;
      default:
        this._result = this._selectedNumber;
        break;
    }
    console.log(`result : ${this._result}`);
    
    this._decimal = null;
    this._selectedNumber = 0;
    console.log(`selectedNumber : ${this._selectedNumber} and decimal : ${this._decimal}`);
  }
  
  checkAndProcess(element) {
    console.log(element.innerText);
    
    if (element.classList.contains("digit")) {
      if (this._lastOperation !== null && this._selectedNumber === 0 && this._decimal === null) {
        calculationZone.innerText = `${calculationZone.innerText} ${element.innerText}`;
      } else {
        calculationZone.innerText = `${calculationZone.innerText}${element.innerText}`;
      }
      
      if (this._decimal === null && element.classList.contains("period")) {
        this._decimal = "";
        console.log(`decimal : ${this._decimal}`);
      }
      
      if (this._decimal !== null && !element.classList.contains("period")) {
        this._decimal += element.innerText;
        console.log(`decimal : ${this._decimal}`);
      } else if (!element.classList.contains("period")) {
        this._selectedNumber = this._selectedNumber * 10 + Number(element.innerText);
        console.log(`selectedNumber : ${this._selectedNumber}`);
      }
    } else if (element.classList.contains("operation")) {
      calculationZone.innerText =
        this._result !== 0 && (this._selectedNumber !== 0 || this._decimal !== null)
          ? `(${calculationZone.innerText}) ${element.innerText}`
          : `${calculationZone.innerText} ${element.innerText}`;
      
      this.calculate();
      
      this._lastOperation = element.innerText;
    }
  }
  
  displayResult() {
    if (this._selectedNumber !== 0 || this._decimal !== null) {
      this.calculate();
    }
    
    resultZone.innerText = this._result;
  }
}

const calculator = new Calculator();

const digits = document.querySelectorAll(".digit");
digits.forEach((element) => {
  element.addEventListener("click", (e) => calculator.checkAndProcess(e.target));
});

const operations = document.querySelectorAll(".operation");
operations.forEach((element) => {
  element.addEventListener("click", (e) => calculator.checkAndProcess(e.target));
});

const resultRequest = document.querySelector(".equals");
resultRequest.addEventListener("click", () => calculator.displayResult());

const acRequest = document.querySelector(".AC");
acRequest.addEventListener("click", () => calculator.initialize());
