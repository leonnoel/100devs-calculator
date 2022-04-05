let Calculator = class {
  constructor() {
    this.total = 0;
    this.preOpr = 0;
    this.postOpr = 0;
    this.strAns = "0";
    this.strUpperDisp = "";
    this.lastOpr = "";
    this.newPass = true;
    this.postSet = false;
  }

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

  setEquals(total, context) {
    this.total = total;

    this.strUpperDisp = `${this.preOpr} ${this.lastOpr} ${this.postOpr} ${context}`;
    this.preOpr = this.total;
    this.postOpr = 0;

    this.lastOpr = context;
    this.strAns = this.total.toString();
    this.newPass = true;
    this.postSet = false;
  }

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
      }
    }

    return this.preOpr;
  }

  processNumber(number) {

    console.log(this);
    if(this.strAns.includes(".") && number === ".") {
      //No duplicate decimal points
      return;
    }

    let symbol = (this.newPass && number == "." ? ("0"+number) : number);

    if(this.newPass) {
      this.strAns = symbol;
      this.newPass = false;
    } else {
      this.strAns += symbol;
    }
  }

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

const calculator = new Calculator();

// const allButtons = Array.from(document.getElementsByClassName('button'));
  const operButtons = Array.from(document.getElementsByClassName('operation'));
  const numberButtons = Array.from(document.getElementsByClassName('number'));
  const clearButton = document.getElementById('clear').addEventListener('click', function() {
  calculator.clearScreen();
  calculator.setDisplay();
});

const equalsButton = document.getElementById('equals').addEventListener('click', function() {
  calculator.preSetCalculation(this.textContent.trim());
  const retVal = calculator.calculate();
  console.log(retVal);
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
