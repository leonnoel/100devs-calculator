//Required abilities of a calculator:
//accept user inputs of number, operator, and another number
//should accept decimal numbers
//store inputs
//recognize inputs and perform calculations
//return a result

//Optional features:
//accept longer arithmetic operations
//display the input as it is being entered
//store previous total as start of next operation
//clear button should clear all entries
//should prevent invalid inputs (operators next to each other, two decimal points)

const keys = document.querySelector(".calculator-buttons");
keys.addEventListener("click", (event) => {
  const { target } = event;
  const { value } = target;
  if (!target.matches("button")) {
    return;
  } else {
    calculator.parseInput(value);
    //pass to parse method
  }
});

const calculator = {
  displayText: "0",
  prevTotal: null, //null is 'not exist', not zero

  parseInput(value) {
    //have any of the 'special buttons' been clicked
    switch (value) {
      case "=":
        //calculate the answer
        this.calcAnswer(this.displayText);
        break;
      case "AC":
        //clear screen and stored values
        this.clearAll();
        break;
      case ".":
        if (this.displayText == 0) {
          this.addText("0.");
        } else {
          this.addText(value);
        }
        break;
      default:
        this.addText(value);
      //add value to text string
    }
  },

  addText(value) {
    if (this.displayText === "0") {
      //can't start with a non-number
      if (isNaN(+value)) {
        return;
      }
      this.displayText = "";
    } else if (this.prevTotal !== null) {
      //store previous total as start of next operation
      this.displayText = this.prevTotal;
      this.prevTotal = null;
    }

    //no operators next to each other
    if (isNaN(+value) && isNaN(+this.displayText)) {
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
    }

    //can't allow 3.. or 3.3.
    if (
      this.displayText.slice(-1) === "." ||
      this.displayText[this.displayText.length - 2] === "."
    ) {
      if (value === ".") {
        return;
      }
    }

    this.displayText += value;
    this.outputText(this.displayText);
  },

  outputText(text) {
    document.querySelector(".calculator-screen").value = text;
  },

  calcAnswer(equation) {
    let result = Function("return " + equation)();
    this.outputText(result);
  },

  clearAll() {
    this.displayText = "0";
    this.prevTotal = null;
    this.outputText(this.displayText);
  },
};
