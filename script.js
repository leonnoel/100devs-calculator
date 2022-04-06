/*
  Program by TribalK
*/
let Calculator = class {
  //Constructor function
  constructor() {
    this.total = 0;         //total of calculation
    this.preOpr = 0;        //first numeric value in each calculation
    this.postOpr = 0;       //second numeric value in each calculation
    this.strAns = "0";      //screen to display current total
    this.strUpperDisp = ""; //screen to display upper calculations
    this.lastOpr = "";      //last operator set (held when setting an equals or arithmetic after setting the postOpr value)
    this.newPass = true;    //awaiting a new action to commence on the calculator
    this.postSet = false;   //determines if the postOpr value had been set to do calculations
  }

  //result all values to default
  clearScreen() {
    this.total = 0;
    this.preOpr = 0;
    this.postOpr = 0;
    this.strAns = "0";
    this.strUpperDisp = "";
    this.lastOpr = "";
    this.newPass = true;
    this.postSet = false;
  }

  //Setting display for equals sign getting clicked
  setEquals(total, context) {
    this.total = total;

    //We want to avoid a situation such as "0 = 0 =", only one equals sign operator should be present
    if(this.lastOpr === context) {
      this.strUpperDisp = `${this.total} ${this.lastOpr}`;
    } else {
      //ex: "2 + 3 ="
      this.strUpperDisp = `${this.preOpr} ${this.lastOpr} ${this.postOpr} ${context}`;
    }

    this.preOpr = this.total;
    this.postOpr = 0;

    this.lastOpr = context;
    this.strAns = this.total.toString();
    this.newPass = true;
    this.postSet = false;
  }

  //Determine which values and operators we want to set before we calculate arithmetic
  preSetCalculation(context) {
    //Not yet ready to change total, prevent doubling by spam clicking operators.
    if(this.newPass) {
      this.strUpperDisp = this.total.toString() + context;
      this.lastOpr = context;
      //Set numeric value before operator
    } else if(this.preOpr == 0) {
      this.preOpr = Number(this.strAns);
      this.lastOpr = context;
      //Set numeric value after operator
    } else if(this.postOpr == 0) {
        this.postOpr = Number(this.strAns);
        this.postSet = true;
    }
  }
  //Calculate based on operator
  calculate() {
    if(this.postSet) {
      switch(this.lastOpr) {
        case '+': {
          return this.preOpr + this.postOpr;
          break;
        }
        case '-': {
          return this.preOpr - this.postOpr;
          break;
        }
        case 'x': {
          return this.preOpr * this.postOpr;
          break;
        }
        case '/': {
          return this.preOpr / this.postOpr;
          break;
        }
        //The user replaces the existing value with another number entirely.
        case '=': {
          return this.postOpr;
          break;
        }
      }
    }
    //Not ready to calculate anything, return the pre-saved value
    return this.preOpr;
  }

  processNumber(number) {
    if(this.strAns.includes(".") && number === ".") {
      //No duplicate decimal points
      return;
    }

    //Prepend 0 to string if nothing is present before decimal point.
    let symbol = (this.newPass && number == "." ? ("0"+number) : number);

    //Either start writing to screen or add onto screen
    if(this.newPass) {
      this.strAns = symbol;
      this.newPass = false;
    } else {
      this.strAns += symbol;
    }
  }

  //Set total fields after arithmetic calculation.
  //Screen display changes based on total.
  setTotals(total, context) {
    this.total = total;
    this.preOpr = total;
    this.postOpr = 0;
    this.strUpperDisp = this.total.toString() + context;

    this.lastOpr = context;
    this.strAns = this.total.toString();
    this.newPass = true;
    this.postSet = false;
  }

  //Display changes made to the calculator screen after any button is selected.
  setDisplay() {
    const screen = document.querySelector('#stack');
    const answer = document.querySelector('#answer');

    answer.innerText = this.strAns;

    if(this.strUpperDisp.length>1) {
      screen.innerText = this.strUpperDisp;
    } else {
      screen.innerText = "-";
    }
  }
}

//Create new object
const calculator = new Calculator();

//Event Listeners
const operButtons = Array.from(document.getElementsByClassName('operation'));
const numberButtons = Array.from(document.getElementsByClassName('number'));

const clearButton = document.getElementById('clear').addEventListener('click', function() {
  calculator.clearScreen();
  calculator.setDisplay();
});

const equalsButton = document.getElementById('equals').addEventListener('click', function() {
  calculator.preSetCalculation(this.textContent.trim());
  const retVal = calculator.calculate();
  calculator.setEquals(retVal,this.textContent.trim());
  calculator.setDisplay();
});

operButtons.forEach(option => {option.addEventListener('click', function() {
    calculator.preSetCalculation(this.textContent.trim());
    const retVal = calculator.calculate();
    calculator.setTotals(retVal,this.textContent.trim());
    calculator.setDisplay();
  })
})

numberButtons.forEach(option => {option.addEventListener('click', function() {
    calculator.processNumber(this.textContent.trim());
    calculator.setDisplay();
  })
})
