// ? accept user inputs of number, operator , number
// ? accepts decimal numbers
// ? store inputs
// ? recognize inputs and perform calculations
// ? return a result to dom

// ? accept longer arithmetic operations
// ? display ALL input as it is being entered
// ? sore previous total as start of next operation
// ? clear button should return to zero
// ? prevent invalid inputs

const keys = document.querySelector(".calc-buttons");

keys.addEventListener("click", (event) => {
  // !DECONSTRUCTION
  const { target } = event;
  const { value } = target;
  if (!target.matches("button")) {
    return;
  } else {
    // console.log(event);
    // console.log(target);
    // console.log(value);
    // pass value to parse method
    calculator.parseInput(value);
  }
});

const calculator = {
  displayText: "0",
  prevTotal: null,

  parseInput(value) {
    // ? Have any special buttons been clicked(.,=,AC)
    switch (value) {
      case "=":
        this.calcAnswer(this.displayText);
        break;
      case "AC":
        this.clearAll();
        break;
      case ".":
        if (this.displayText == '0') {
          this.addText("0.");
        } else {
          this.addText(value);
        }
        break;
      default:
        this.addText(value);
        break;
    }
  },
  addText(value) {
    if (this.displayText === "0") {
      this.displayText = "";
    } else if (this.prevTotal !== null) {
      this.displayText = this.prevTotal;
      this.prevTotal = null;
    }
    // user has entered invalid sequence don't proceed'
    // ! change to better statement. Last character not a special character
    if (isNaN(+value) && isNaN(+this.displayText)) {
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
    }
    this.displayText += value;
    this.outputText(this.displayText);
  },
  outputText(text) {
    document.querySelector(".answer").value = text;
  },
  calcAnswer(equation) {
    let result = Function("return " + equation)();
    this.outputText(result);
    this.displayText = result
  },
  clearAll() {
    this.displayText = "0";
    this.prevTotal = null;
    this.outputText(this.displayText);
  },
};
