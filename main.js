// Required abilities of a calculator:
// accept user inputs of number, operator, and number
// should accept decimal numbers
// store inputs
// recognize inputs and perform calculations
// return a result

// Optional features:
// Should accept longer arithmetic operations.
// display all the input as it is being entered
// store previous total as start of next operation in the tempResult
// clear all button should clear all entries
// clear last entity button should clear the last entity
// should prevent invalid inputs (operators next ot each other, two decimals points)
// Allow negative numbers to be used

const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const allClearButton = document.querySelector(".all-clear");
const clearLastEntity = document.querySelector(".last-entity-clear");
const equalButton = document.querySelector(".equal");
const negativeButton = document.querySelector(".negative");

class Calculator {
  constructor(display1, display2, tempResult, previousOperand, currentOperand) {
    // Top Row display
    this.display1 = display1;
    // Bottom Row right display
    this.display2 = display2;
    // Bottom Row left display - shows the temporary result before you press the equals sign
    this.tempResult = tempResult;
    // The previous number entered
    this.previousOperand = previousOperand;
    // The current number entered
    this.currentOperand = currentOperand;
    // The operation button pressed
    this.operation = "";
    // The result of the operation
    this.result = null;
    // Whether the number contains a decimal
    this.haveDot = false;
    // what will be displayed in display one
    this.displayNumber = " ";
    // To Clear All Of Our inputs and set it to the default values as soon as we create a new calculator
    this.allClear();
  }

  allClear() {
    this.display1.innerText = "";
    this.display2.innerText = 0;
    this.tempResult.innerText = "";
    this.operation = undefined;
    this.haveDot = false;
    this.previousOperand = "";
    this.currentOperand = "";
    this.result = null;
  }

  clearLastEntity() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  addDecimal(number) {
    if (number === "." && !this.haveDot) {
      this.haveDot = true;
    }
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    if (number === "." && this.currentOperand === "") return;

    if (this.currentOperand.includes("-") && this.haveNegative) return;
    this.addDecimal(number);
    this.currentOperand += number.toString();
    console.log(this.currentOperand);
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand += this.currentOperand + " " + this.operation + " ";
    this.currentOperand = "";
    console.log(this.previousOperand);
    console.log(this.operation);
  }

  compute() {
    let newValueNum;
    const valueInMemory = parseFloat(this.previousOperand);
    const currentValueNum = parseFloat(this.currentOperand);
    if (isNaN(valueInMemory) || isNaN(currentValueNum)) return;

    switch (this.operation) {
      case "+":
        newValueNum = valueInMemory + currentValueNum;
        break;
      case "-":
        newValueNum = valueInMemory - currentValueNum;
        break;
      case "*":
        newValueNum = valueInMemory * currentValueNum;
        break;
      case "/":
        newValueNum = valueInMemory / currentValueNum;
        break;
      case "%":
        newValueNum = valueInMemory % currentValueNum;
        break;
      default:
        break;
    }
    this.result = newValueNum;
    this.currentOperand = newValueNum;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplayNumber() {
    if (!this.previousOperand === "") {
      this.currentOperand = "";
      this.display2.innerText = this.currentOperand;
      this.tempResult.innerText = this.result;
      console.log(this.tempResult);
    } else {
      this.display2.innerText = this.currentOperand;
      this.display1.innerText = this.previousOperand;
      this.tempResult.innerText = this.result;
      // console.log(this.tempResult.innerText);
      // console.log(this.display2.innerText);
    }
    this.display1.innerText = `${this.previousOperand} ${this.currentOperand} `;
  }

  updateDisplay2Style() {
    if (this.currentOperand.length > 15) {
      this.display2.style.fontSize = "1rem";
      this.display2.style.paddingTop = "3.82rem";
    } else if (this.currentOperand.length > 11) {
      this.display2.style.fontSize = "1.2rem";
      this.display2.style.paddingTop = "3.42rem";
    } else if (this.currentOperand.length > 8) {
      this.display2.style.fontSize = "1.7rem";
      this.display2.style.paddingTop = "2.92rem";
    } else if (this.currentOperand.length > 6) {
      this.display2.style.fontSize = "2rem";
      this.display2.style.paddingTop = "2.72rem";
    }
  }
}

const calOne = new Calculator(display1, display2, tempResult);

negativeButton.addEventListener("click", (e) => {
  let currentValue = calOne.currentOperand;
  if (currentValue === "-0") {
    calOne.appendNumber("0");
    return;
  }

  if (currentValue.search(/^[1-9|(|)]/) !== -1) {
    calOne.currentOperand = "";
    currentValue = "-" + currentValue;
    calOne.appendNumber(currentValue);
    calOne.updateDisplayNumber(currentValue);
  } else if (currentValue[0] === "-") {
    currentValue = currentValue.substr(1, currentValue.length - 1);
    calOne.appendNumber(currentValue);
    calOne.updateDisplayNumber(currentValue);
  }
});

numberButtons.forEach((number) => {
  number.addEventListener("click", (e) => {
    calOne.appendNumber(number.innerText);
    calOne.updateDisplayNumber();
    calOne.updateDisplay2Style();
    // console.log(number.innerText);
  });
});

operationButtons.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    calOne.chooseOperation(operation.innerText);
    calOne.updateDisplayNumber();
    calOne.updateDisplay2Style();
    // console.log(operation.innerText);
  });
});

allClearButton.addEventListener("click", (e) => {
  calOne.allClear();
  // calOne.updateDisplayNumber();
  // calOne.updateDisplay2Style();
});

clearLastEntity.addEventListener("click", (e) => {
  calOne.clearLastEntity();
  calOne.updateDisplayNumber();
  calOne.updateDisplay2Style();
});

equalButton.addEventListener("click", (button) => {
  calOne.compute();
  calOne.updateDisplayNumber();
  calOne.updateDisplay2Style();
});

// class Calculator {
//   constructor(display1, display2, tempResult, dis2Num, dis1Num) {
//     this.display1 = display1;
//     this.display2 = display2;
//     this.tempResult = tempResult;
//     this.operation = "";
//     this.haveDot = false;
//     this.result = null;
//     this.dis2Num = dis2Num;
//     this.dis1Num = dis1Num;
//     this.allClear();
//   }

//   allClear() {
//     this.dis2Num = "";
//     this.dis1Num = "";
//     this.display1.innerText = "";
//     this.display2.innerText = "";
//     this.tempResult.innerText = "";
//     this.result = null;
//     this.lastOperation = "";
//     this.haveDot = false;
//   }

//   clearLastEntity() {
//     this.dis2Num = this.dis2Num.slice(0, -1);
//     // console.log(this.dis2Num);
//   }

//   appendNumber(number) {
//     if (number === "." && this.haveDot) {
//       return;
//     }

//     if (number === "." && !this.dis2Num.includes(".")) {
//       this.haveDot = true;
//     }

//     if (number === "0" && this.dis2Num === "") {
//       return;
//     }
//     this.dis2Num += number.toString();
//     console.log(this.dis2Num);
//   }

//   chooseOperation(operation) {
//     this.operation = operation.innerText;
//     // console.log(this.lastOperation)

//     if (this.dis2Num === "") {
//       return;
//     }

//     this.dis1Num += `${this.dis2Num} ${this.operation} `;
//     this.dis2Num = "";

//     // console.log(this.dis1Num);
//     // console.log(this.result);
//   }

//   compute() {
//     let computation;
//     const prev = this.dis1Num;
//     console.log(prev);
//     const current = this.dis2Num;
//     // console.log(current);

//     switch (this.operation) {
//       case "+":
//         computation = parseFloat(prev) + parseFloat(current);
//         break;
//       case "-":
//         computation = parseFloat(prev) - parseFloat(current);
//         break;
//       case "*":
//         computation = parseFloat(prev) * parseFloat(current);
//         break;
//       case "/":
//         computation = parseFloat(prev) / parseFloat(current);
//         break;
//       case "%":
//         computation = parseFloat(prev) % parseFloat(current);
//         break;
//       default:
//         return;
//     }

//     this.result = computation;
//     console.log(this.result);
//     // this.dis1Num = this.dis2Num;
//     // this.dis2Num = '';
//     this.lastOperation = "";
//   }

//   equalButton() {
//     if (!this.dis2Num || !this.dis1Num) {
//       return;
//     }
//     this.result = this.dis1Num;
//     this.display2.innerText = this.result;
//     this.tempResult.innerText = "";
//     this.dis2Num = result;
//   }

//   updateDisplayNumber(number, operation) {
//     if (!this.dis1Num === "") {
//       this.display1.innerText = this.dis1Num;
//       this.dis2Num = "";
//       this.display2.innerText = this.dis2Num;
//       this.tempResult.innerText = this.result;
//       console.log(this.tempResult);
//     } else {
//       this.display2.innerText = this.dis2Num;
//       this.display1.innerText = this.dis1Num;
//       this.tempResult.innerText = this.result;
//       // console.log(this.tempResult.innerText);
//       // console.log(this.display2.innerText);
//     }
//   }

//   updateDisplay2Style(number) {
//     if (this.dis2Num.length > 15) {
//       this.display2.style.fontSize = "1rem";
//       this.display2.style.paddingTop = "3.82rem";
//     } else if (this.dis2Num.length > 11) {
//       this.display2.style.fontSize = "1.2rem";
//       this.display2.style.paddingTop = "3.42rem";
//     } else if (this.dis2Num.length > 8) {
//       this.display2.style.fontSize = "1.7rem";
//       this.display2.style.paddingTop = "2.92rem";
//     } else if (this.dis2Num.length > 6) {
//       this.display2.style.fontSize = "2rem";
//       this.display2.style.paddingTop = "2.72rem";
//     }
//   }
// }

// const calculator = new Calculator(display1, display2, tempResult);

// numberButtons.forEach((number) => {
//   number.addEventListener("click", (e) => {
//     calculator.appendNumber(number.innerText);
//     calculator.compute();
//     calculator.updateDisplayNumber();
//     calculator.updateDisplay2Style();
//     // console.log(number.innerText)
//   });
// });

// allClearButton.addEventListener("click", (e) => {
//   calculator.allClear();
//   calculator.updateDisplayNumber();
// });

// clearLastEntity.addEventListener("click", (e) => {
//   calculator.clearLastEntity();
//   calculator.updateDisplay2Style();
//   calculator.updateDisplayNumber();
// });

// operationButtons.forEach((operation) => {
//   operation.addEventListener("click", (e) => {
//     // console.log(e.target.innerText)
//     calculator.chooseOperation(operation);
//     calculator.updateDisplay2Style();
//     calculator.updateDisplayNumber();
//     calculator.compute();
//   });
// });

// equalButton.addEventListener("click", (e) => {
//   calculator.compute();
//   calculator.chooseOperation();
//   calculator.equalButton();
//   calculator.updateDisplayNumber();
// });
