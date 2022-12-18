// Calculator
class Calculator {
  constructor() {
    this.allSpans = document.querySelectorAll("span");
    this.numberSet = new Set(
      ".",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    );
    this.operationSet = new Set("/", "*", "+", "-");
    this.calcStr = "";
    this.displayStr = "";
    this.#initializeEventHandlers();
  }
  #initializeEventHandlers = () => {
    for (let el of this.allSpans) {
      el.addEventListener("click", (evt) => this.#addToCalculation(evt));
    }
    // this.seven.addEventListener("click", (evt) => this.addToCalculation(evt));
    // this.eight.addEventListener("click", (evt) => this.addToCalculation(evt));
    // this.nine.addEventListener("click", (evt) => this.addToCalculation(evt));
  };
  #addToCalculation = (evt) => {
    const evtValue = evt.target.textContent;
    if (evtValue === "=") {
      this.#evaluate();
    } else {
      this.#setCalcStr(`${evtValue}`);
      this.#setDisplayStr(this.#getCalcStr());
      this.#display();
    }
  };
  #display = () => {
    this.allSpans[0].textContent = this.#getDisplayStr();
  };
  #evaluate = () => {
    const evalStr = this.#getCalcStr();
    const operArr = [];
    const valArr = [];
    const sumOperArr = [];
    const sumValArr = [];
    const digitSet = new Set([
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ]);
    const operSet = new Set(["+", "-", "/", "*"]);
    const sumOperSet = new Set(["+", "-"]);

    for (const el of evalStr) {
      if (digitSet.has(el)) {
        valArr.push(el);
      } else if (operSet.has(el)) {
        operArr.push(el);
      }
    }

    for (let i = operArr.length - 1; i >= 0; i--) {
      const oper = operArr[i];
      if (sumOperSet.has(oper)) {
        sumValArr.push(valArr.pop());
        sumOperArr.push(operArr.pop());
      } else {
        const secondVal = +valArr.pop();
        const firstVal = +valArr.pop();

        if (oper === "*") {
          valArr.push(`${firstVal * secondVal}`);
        } else {
          valArr.push(`${firstVal / secondVal}`);
        }

        operArr.pop();
      }
    }

    sumValArr.push(valArr.pop());

    for (let i = sumOperArr.length - 1; i >= 0; i--) {
      const firstVal = +sumValArr.pop();
      const secondVal = +sumValArr.pop();
      if (sumOperArr[i] === "+") {
        sumValArr.push(`${firstVal + secondVal}`);
      } else {
        sumValArr.push(`${firstVal - secondVal}`);
      }

      sumOperArr.pop();
    }
    this.#setDisplayStr(sumValArr.pop());
    this.#display();
    this.#resetCalcStr();
  };
  #setCalcStr = (input) => {
    this.calcStr += input;
  };
  #setDisplayStr = (input) => {
    this.displayStr = input;
  };
  #getCalcStr = () => {
    return this.calcStr;
  };
  #getDisplayStr = () => {
    return this.displayStr;
  };
  #resetCalcStr = () => {
    this.calcStr = "";
  };
}

const myCalculator = new Calculator();
