class Calculator {
  constructor() {
    this.displayValue = "0";
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
  }

  parseInput(value) {
    if (this.displayValue === "0") {
      this.displayValue = "";
    }

    switch (value) {
      case "=":
        //calculate answer
        break;
      case "AC":
        //clear screen and stored values
        break;
      case ".":
        if (this.displayValue == 0) {
          //pass '0.' into add text method
        } else {
          //add value to text string
        }
    }
  }

  updateDisplay() {
    const display = document.querySelector(".calculator-screen");

    display.value = this.displayValue;
  }

  setDisplayValue(value) {
    this.displayValue = value;
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
  }
});
