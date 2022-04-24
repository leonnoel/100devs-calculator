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
        // calculate answer
        break;
      case "AC":
        // clear screen and stored values
        break;
      case ".":
        if (this.displayText == 0) {
          // pass '0.' into add text method
        } else {
          // add value to text string
        }
        break;
      default:
        // add value to text str
        break;
    }
  },
  addText(value) {
    if (this.displayText === "0") {
      this.displayText == "";
    }else if (this.prevTotal !== null){
        this.displayText = this.prevTotal
        this.prevTotal = null
    }
    // user has entered invalid sequence don't proceed'
    if(''){

    }
    this.displayText += value
    // output display text to screen
  },
};





















function clearMakeZero() {
}
function multiply(num1, num2) {}
function divide(num1, num2) {}
function minus(num1, num2) {}
function addition(num1, num2) {}
