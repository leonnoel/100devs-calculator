const keys = document.querySelector(".calculator-buttons");

keys.addEventListener("click", event => {
  //destructuring assignment: reaches into "event" and extracts target property which is button
  const {target} = event;
  const {value} = target;
  //check if clicked element was "button" and if so, we'll pass in the value of that button
  if (!target.matches("button")) {
    return;

  } else {
    //pass value to parse method
    calculator.parseInput(value)
    console.log(value)
  }
})

const calculator = {
  //?Initial dissplay
  displayText: "0",
  //?Allows continuation of arithmetic from last result
  prevTotal: null,

  parseInput(value) {
    //? Checks if any of the "special" buttons been clicked
    switch (value) {
      case "=":
        //? Calls calcAnswer method
        this.calcAnswer(this.displayText)
        break;

      case "AC":
        this.clearAll()
        break;

      case ".":
        if (this.displayText == 0) {
          this.addText("0.")
        } else {
          this.addText(value)
        }
        break;

        default:
          this.addText(value)
          break;
    }
  
  },

  addText(value) {
    //? Clear initial "0"
    if (this.displayText === "0") {
      this.displayText = " ";
    //? If a previous total exists, show it as display
    } else if (this.prevTotal !== null) {
      this.displayText = this.prevTotal;
      this.prevTotal = null;
    }
    /*check whether last char in displaytext AND the entered value are NOT numbers*/
    //+ is implicit type conversion
    if (isNaN(+(value)) && isNaN(+(this.displayText))) {
      //checks last character
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
    }

    this.displayText += value
    this.outputText(this.displayText)

  },

  //? Show inputted text on screen
  outputText(text) {
    document.querySelector(".calculator-screen").value = text;
  },

  calcAnswer(equation) {
    //?Similar function to "eval"- returns ressult of "equation"
    let result = Function("return " + equation)();
    this.outputText(result)
  },

  clearAll() {
    this.displayText = "0"
    this.prevTotal = null
    this.outputText(this.displayText)
  }



}




