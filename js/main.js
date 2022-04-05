class Calculator {
  constructor() {
    this.displayText = "0";
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
    this.prevTotal = null;
  }

  parseInput(value) {
    switch (value) {
      case "=":
        //calculate answer
        break;
      case "AC":
        //clear screen and stored values
        break;
      case ".":
        if (this.displayText == 0) {
          this.addText("0.");
        } else {
          this.addText(value);
        }
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

  setdisplayText(value) {
    this.displayText = value;
  }
}

const testCalc = new Calculator();

console.log("present");

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
