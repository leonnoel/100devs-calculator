function Calulator(previousNumber, currentNumber) {
  (this.previousNumber = previousNumber), (this.currentNumber = currentNumber); // these will display the values on screen

  this.resetVariables = () => {
    this.currentNum = ""; // set these to empty string or they will be undefined and won't be able to iterate ove them
    this.previousNum = "";
    this.operator = undefined;
  };
  this.resetVariables();

  this.setNumber = (number) => {
    //what to do with the dot
    if (this.currentNum.includes(".") || number === ".") return;
    // console.log('no more dots')
    this.currentNum += number.toString(); // adds the number to the currentNum variable
  };

  this.setOperatorLogic = (operator) => {
    // deal with operators typed in when empty
    if (this.currentNum === "") return; // if current number is empty don't add operator
    if (this.previousNum !== "") {
      this.computeLogic();
    }
    this.operator = operator;
    this.previousNum = this.currentNum;
    this.currentNum = "";

    //deal with how the previous is stored when clicking on the operator
  };

  this.displayOnScreen = () => {
    this.currentNumber.innerText = this.currentNum;
    if (this.previousNum !== "") {
      // if previousNum is not empty otherwise if empty you get udnefined on screen
      this.previousNumber.innerText = `${this.previousNum}${this.operator}`;
    } else {
      this.previousNumber.innerText = ""; // empty 
    }
  };

  this.computeLogic = () => {
    let calc = "";
    const prev = parseFloat(this.previousNum);
    const current = parseFloat(this.currentNum);

    // if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case "+":
        calc = this.previousNum + this.currentNum;
        break;
      case "-":
        calc = this.previousNum - this.currentNum;
        break;

      case "x":
        calc = this.previousNum * this.currentNum;
        break;

      case "/":
        calc = this.previousNum / this.currentNum;
        break;

      default:
        break;
    }

    this.currentNum = calc;
    this.previousNum = "";
    this.operator = "";
    console.log(this.previousNum);
  };
}

const numberKeys = document.querySelectorAll(".button");
const OperatorKeys = document.querySelectorAll(".operator");
const equalsKey = document.querySelector(".equals");
const currentNumber = document.querySelector(".currentNum");
const previousNumber = document.querySelector(".previousNum");
const calculator = new Calulator(previousNumber, currentNumber);

// eventlisteners
numberKeys.forEach((number) =>
  number.addEventListener("click", () => {
    calculator.setNumber(number.innerText);

    calculator.displayOnScreen();
  })
);

OperatorKeys.forEach((operator) =>
  operator.addEventListener("click", () => {
    console.log(operator.innerText);
    calculator.setOperatorLogic(operator.innerText);
    calculator.displayOnScreen();
  })
);

equalsKey.addEventListener("click", () => {
  calculator.computeLogic();
  calculator.displayOnScreen();
});

