class Calculator {
  //This class functions as a basic calculator. It can add, subtract, divide, and multiply.
  constructor() {
      this.nums = []; //Queue of numbers for calculation
      this.op = ""; //Operand selected
  }
  clear() {
    //Clear stored data
    this.op = "";
    this.nums = [];
  }
  addNum(num) {
    //Add number to the calculator queue
    this.nums.push(Number(num));
    if (this.canCalc()) {this.eval()}
  }
  setOp(op) {
    //Set pending operand
    this.op = op;
    if (this.canCalc()) {this.eval()}
  }
  getOp() {
    //Return pending operand
    return this.op;
  }
  getLastNum() {
    //Return last number in queue. If there are none, return 0.
    if (this.nums === []) {
      return 0;
    } else {
      return this.nums[this.nums.length-1];
    }
  }
  getNumCount() {
    return this.nums.length;
  }
  opPending() {
    return (this.op !== "")
  }
  canCalc() {
    return (this.opPending() && this.getNumCount() > 1)
  }
  eval() {
    if (this.op !== "" && this.nums.length > 1) {
      //Evaluate two numbers

      //Because of the ordering of the queue, number 2 pops off first.
      let num2 = this.nums.pop();
      let num1 = this.nums.pop();
      let result = 0;
      switch (this.op) {
          case "add":
              result = num1 + num2;
              break;
          case "minus":
              result = num1 - num2;
              break;
          case "times": 
              result = num1 * num2;
              break;
          case "divide":
              result = num1 / num2;
              break;
          default:
              console.error(`No operator available; eval() called in error`)
              break;
      }
      this.nums.push(result); //Store result in queue
      this.op = "";      //Clear operand after calculation
  }
}
}

class CalculatorDisplay {
  // User interface and display of the calculator.
  // Monitors input and issues commands to the calculator.
  // Outputs info to the DOM

  constructor() {
    this.calc = new Calculator(); //Link to calculator Object so they can talk
    this.output = document.querySelector('.calculator_display'); //HTML element for calculator display
    this.input = ''; //Stores user input
    this.operands = {
      'times': '*',
      'add': '+',
      'minus': '-',
      'divide': '/',
    }
  }

  getDisplay() {
    let displayStr = '';
    if (this.calc.getNumCount() > 0) {
      //If there's an operation pending, show it on the left side
      //ex. 2 x (input)
      displayStr += this.calc.getLastNum();
      if (this.calc.opPending()) {
        displayStr += ` ${this.operands[this.calc.getOp()]}`
      }
    }
    if (this.input !== "") {
      //Show user's input, if any
      displayStr += ` ${this.input}`
      this.output.textContent = this.input;
    } 
    if (displayStr === '') {
      //Show 0 if there's nothing to display.
      displayStr = '0';
    }
    return displayStr;
  }
  update() {
    //Update browser display
    this.output.textContent = this.getDisplay();
  }
  enterDigit(dig) {
    //Add digits to the display as the user selects them
    this.input += dig;
    this.input = this.input.replace(/^0+/,"") //Remove leading zeroes
  }
  addDecimal() {
    //Add a decimal. But only if there isn't one already.
    if (!/[.]/g.test(this.input)) {
      this.input += "."
    }
  }
  enterOp(op) {
    if (this.calc.canCalc()) {
      this.calculate();
    }
    if (this.input !== '') {
      //If there's any input, send to the calculator first.
      this.calc.addNum(this.input);
      this.input = '';
    }
    this.calc.setOp(op)
  }

  calculate() {
    //Evaluates user input, if possible.
    //If not, does nothing.
    if (this.input !== 0) {
      this.calc.addNum(Number(this.input));
      this.input = '';
    }
    if (this.calc.canCalc()) {
      this.calc.eval();
      this.input = '';
    }
  }

  clear() {
    //Clear display, pending operators, and calculator memory
    this.input = 0;
    this.displayStr = 0;
    this.calc.clear();
  }

}


//**************************************************************/
//
//     DOM Interface
// 
//**************************************************************/
const keys = document.querySelector('.calculator_keys'); //All the buttons on the calculator display
display = new CalculatorDisplay();

// Event listener for calculator button clicks
keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
  const key = e.target; //Which button got clicked
  const action = key.dataset.action; //Any action associated with that button

    //Logic tree: 
    //Sends key value or action to the appriate subroutines in the calculator.
    if (!action) {
      //If there's not an associated action, it's a number key. Enter number.
      display.enterDigit(key.textContent); 
    } else {
      //Otherwise it's an operator key. Call different functions based on 'action'
      switch (action) {
        case "clear":
          display.clear();
          break;
        case "decimal":
          display.addDecimal();
          break;
        case "add":
        case "minus":
        case "times":
        case "divide":
          display.enterOp(action);
          break;
        case "calculate":
          display.calculate();
          break;
        default:
          console.log(`Problem with action: ${action}`)
      }
    }
    display.update();
  }
})