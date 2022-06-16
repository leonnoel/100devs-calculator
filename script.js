"use strict";
// Required abilities of a calculator
// 1. Accept user inputs of number, operator, and another number - DONE
// 2. Recognize inputs and perform calculations - DONE
// 3. Store inputs and recognize what they are (number, operator) - DONE
// 4. Return a result - DONE
// 5. Should accept decimal numbers - DONE

// Optional Features
// 1. Should accept longer arithmetic operations - DONE
// 2. Display all input as it is being entered - DONE
// 3. Store previous total as start of next operation - DONE
// 4. Clear button should clear all entries - DONE
// 5. Should prevent invalid inputs (operators next to each other, two decimal points) - ???

const keys = document.querySelector(".calculator-buttons");
keys.addEventListener("click", (event) => {
  // Reach into event and grab target
  const { target } = event;
  const { value } = target;
  if (!target.matches("button")) {
    return;
  } else {
    calculator.parseInput(value);
    // pass to parse method
    // console.log(value);
  }
});

const calculator = {
  displayText: "0",
  prevTotal: null,

  parseInput(value) {
    // have any of the 'special buttons' been clicked
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
          //pass '0.' into add text method
          this.addText("0.");
        } else {
          // add value to text string
          this.addText(value);
        }
        break;
      default:
        // add value to text string
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
    //user has entered an invalid sequence, dont proceed
    //check whether the last character in display AND the enterred
    // only works if no operators are in the display
    if (isNaN(+value) && isNaN(+this.displayText)) {
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
    }
    this.displayText += value;
    //output display text to screen
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
    (this.displayText = "0"),
      (this.prevTotal = null),
      this.outputText(this.displayText);
  },
};
