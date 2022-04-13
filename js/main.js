class Calculator {
  constructor() {
    // value that will update to the display via outputText function
    this.displayText = "0";
    // first number to be operated on
    this.firstOperand = null;
    // a bool that will act as a switch once firstOperand is filled via the handleOperator function
    this.waitingForSecondOperand = false;
    // the operator (* + - /)
    this.operator = null;

    this.prevTotal = null;
  }

  parseInput(value) {
    switch (value) {
      case "=":
        //evaluate value and return
        this.calcAnswer(this.displayText);
        this.outputText(this.displayText);
        break;

      //   case "*":
      //   case "/":
      //   case "+":
      //   case "-":
      //     this.handleOperator(value);
      //     this.outputText(this.displayText);
      //     break;
      case "AC":
        this.displayText = "0";
        break;
      case ".":
        this.inputDecimal(value);
        this.outputText(this.displayText);
        break;
      default:
        this.addText(value);
        this.outputText(this.displayText);
        break;
    }
  }

  addText(value) {
    if (this.displayText === "0") {
      this.displayText = "";
      // load total into display value
    } else if (this.prevTotal !== null) {
      this.displayText = this.prevTotal;
      this.prevTotal = null;
    }
    if (isNaN(+value) && isNaN(+this.displayText)) {
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
    }
    this.displayText += value;
  }

  outputText(text) {
    const display = document.querySelector(".calculator-screen");

    display.value = text;
  }

  inputDecimal(dot) {
    if (this.displayText === "0") {
      this.addText("0.");
    } else if (!this.displayText.includes(dot)) {
      this.addText(dot);
    }
  }

  calcAnswer(equation) {
    let sanitizeEquation = equation.replace(/[^-()\d/*+.]/g, "");
    this.displayText = eval(sanitizeEquation);
    this.prevTotal = this.displayText;
  }

  handleOperator(nextOperator) {
    const inputValue = parseFloat(this.displayText);

    //verify first operand is null and that input value is not a NaN value
    if (this.firstOperand === null && !isNaN(inputValue)) {
      this.firstOperand = inputValue;
    }

    this.waitingForSecondOperand = true;
    this.operator = nextOperator;
  }
}

const testCalc = new Calculator();

const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", (event) => {
  const { target } = event;
  const { value } = target;

  if (!target.matches("button")) {
    return;
  } else {
    testCalc.parseInput(value);
    console.log(`${value}`);
  }
});
