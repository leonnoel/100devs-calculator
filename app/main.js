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
  };
  #addToCalculation = (evt) => {
    const evtValue = evt.target.textContent;
    console.log(evtValue.charCodeAt());
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
    const evalStrLen = evalStr.length;
    const operArr = [];
    const valArr = [];
    const sumOperArr = [];
    const sumValArr = [];
    const digitSet = new Set([
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
      "9",
    ]);
    const operSet = new Set(["+", "/", "*"]);
    const sumOperSet = new Set(["+"]);

    for (let i = 0; i < evalStrLen; i++) {
      const el = evalStr[i];
      console.log("el", el);
      if (digitSet.has(el)) {
        let startIndex = i;
        let endIndex = -1;
        while (digitSet.has(evalStr[i])) {
          ++i;
        }
        endIndex = i;
        console.log("positive", startIndex, endIndex, i);
        valArr.push(evalStr.slice(startIndex, endIndex));
        --i;
      } else if (el === "-") {
        ++i;
        let startIndex = i;
        let endIndex = -1;
        while (digitSet.has(evalStr[i])) {
          ++i;
        }
        --startIndex;
        endIndex = i;
        valArr.push(evalStr.slice(startIndex, endIndex));
        console.log("negative", startIndex, endIndex, i);
        --i;
        operArr.push("+");
        valArr.push("0");
      } else if (operSet.has(el)) {
        operArr.push(el);
        console.log(operArr);
      }
    }
    console.log("valarr", valArr);

    for (let i = operArr.length - 1; i >= 0; i--) {
      const oper = operArr[i];
      if (sumOperSet.has(oper)) {
        sumValArr.push(valArr.pop());
        sumOperArr.push(operArr.pop());
        console.log(sumOperArr);
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

    while (valArr.length > 0) {
      sumValArr.push(valArr.pop());
    }

    console.log(sumOperArr);

    for (let i = sumOperArr.length - 1; i >= 0; i--) {
      const firstVal = +sumValArr.pop();
      const secondVal = +sumValArr.pop();
      console.log(firstVal, secondVal);
      sumValArr.push(`${firstVal + secondVal}`);

      sumOperArr.pop();
    }
    this.#setDisplayStr(sumValArr.pop());
    this.#display();
    this.#resetCalcStr();
    this.#setCalcStr(this.#getDisplayStr());
  };
  #setCalcStr = (input) => {
    this.calcStr += input;
    console.log(this.calcStr);
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
