function Calculator(n) {
  // Private Properties
  let self = this;
  let numLastPush = false;
  let calcComplete = false;
  this.calcName.innerHTML = n;
  this.periodCount = 0;

  // Click on Button Press
  (this.buttons = document.querySelectorAll(".button")),
    (this.playClick = function () {
      new Audio("629020__kolombooo__button-click.ogg").play();
    }),
    self.buttons.forEach((button) => {
      button.addEventListener("click", self.playClick);
    });

  (this.name = n),
    // Calculation functions and elements
    (this.total = 0),
    (this.equals = function () {}),
    (this.memory = []),
    (this.operator = ""),
    (this.output = "");
  // Keypad elements
  (this.one = document.querySelector("#one")),
    (this.two = document.querySelector("#two")),
    (this.three = document.querySelector("#three")),
    (this.four = document.querySelector("#four")),
    (this.five = document.querySelector("#five")),
    (this.six = document.querySelector("#six")),
    (this.seven = document.querySelector("#seven")),
    (this.eight = document.querySelector("#eight")),
    (this.nine = document.querySelector("#nine")),
    (this.zero = document.querySelector("#zero")),
    (this.multiply = document.querySelector("#multiply")),
    (this.divide = document.querySelector("#divide")),
    (this.plus = document.querySelector("#plus")),
    (this.subtract = document.querySelector("#subtract")),
    (this.period = document.querySelector("#period")),
    (this.equals = document.querySelector("#equals")),
    (this.display = document.querySelector("#display")),
    (this.subDisplay = document.querySelector("#subDisplay")),
    (this.calcName = document.querySelector("#calcName")),
    // Button Press and Display Functions
    (this.updateDisplay = function () {
      self.display.innerHTML = self.operator;
      if (numLastPush === true) {
        self.subDisplay.innerHTML = self.operator;
      } else {
        self.subDisplay.innerHTML = self.memory.join(" ") + self.operator;
      }
    }),
    (this.pressOne = function () {
      if (calcComplete) {
        calcComplete = false;
        self.pressOne;
      } else {
        self.operator += "1";
        self.updateDisplay();
        console.log(self.operator);
        self.numLastPush = true;
      }
    }),
    (this.pressTwo = function () {
      self.operator += "2";
      self.updateDisplay();
      console.log(self.operator);
      self.numLastPush = true;
    }),
    (this.pressThree = function () {
      self.operator += "3";
      self.updateDisplay();
      console.log(self.operator);
      self.numLastPush = true;
    }),
    (this.pressFour = function () {
      self.operator += "4";
      self.updateDisplay();
      console.log(self.operator);
      self.numLastPush = true;
    }),
    (this.pressFive = function () {
      self.operator += "5";
      self.updateDisplay();
      console.log(self.operator);
      self.numLastPush = true;
    }),
    (this.pressSix = function () {
      self.operator += "6";
      self.updateDisplay();
      console.log(self.operator);
      self.numLastPush = true;
    }),
    (this.pressSeven = function () {
      self.operator += "7";
      self.updateDisplay();
      console.log(self.operator);
      self.numLastPush = true;
    }),
    (this.pressEight = function () {
      self.operator += "8";
      self.updateDisplay();
      console.log(self.operator);
      self.numLastPush = true;
    }),
    (this.pressNine = function () {
      self.operator += "9";
      self.updateDisplay();
      console.log(self.operator);
      self.numLastPush = true;
    }),
    (this.pressZero = function () {
      self.operator += 0;
      self.updateDisplay();
      console.log(self.operator);
      self.numLastPush = true;
    }),
    (this.pressPeriod = function () {
      // N.B There can be only one period, and if it's at the start - there should be a 0 before it //
      if (self.operator.length > 0 && self.periodCount === 0) {
        self.operator += ".";
        self.updateDisplay();
        console.log(self.operator);
        self.numLastPush = true;
        self.periodCount++;
      } else if (self.operator.length <= 0 && self.periodCount === 0) {
        self.operator += "0.";
        self.updateDisplay();
        console.log(self.operator);
        self.numLastPush = true;
        self.periodCount++;
      } else {
        // Do Nothing.
      }
    }),
    //  Set of methods for bridging number values in the array with operators
    (this.pressDivide = function () {
      self.periodCount = 0;
      if (self.numLastPush) {
        console.log("press /");
        if (self.calcComplete) {
          // If calc is complete, push the subtotal from the last calculation and run the operator function again.
          self.memory.push(self.total);
          self.calcComplete = false;
          self.total = "";
          self.memory.push("/");
          self.display.innerHTML = "/";
          self.subDisplay.innerHTML = self.memory.join(" ");
        } else {
          // If the calc isn't complete, push the last number and then the operator to the
          self.memory.push(self.operator);
          self.operator = "";
          self.numLastPush = false;
          self.memory.push("/");
          self.display.innerHTML = "/";
          self.subDisplay.innerHTML = self.memory.join(" ");
        }
      } else {
        // Do nothing so no double operators
      }
    }),
    (this.pressMultiply = function () {
      self.periodCount = 0;
      if (self.numLastPush) {
        console.log("press *");
        if (self.calcComplete) {
          // If calc is complete, push the subtotal from the last calculation and run the operator function again.
          self.memory.push(self.total);
          self.calcComplete = false;
          self.total = "";
          self.memory.push("*");
          self.display.innerHTML = "*";
          self.subDisplay.innerHTML = self.memory.join(" ");
        } else {
          // If the calc isn't complete, push the last number and then the operator to the
          self.memory.push(self.operator);
          self.operator = "";
          self.numLastPush = false;
          self.memory.push("*");
          self.display.innerHTML = "*";
          self.subDisplay.innerHTML = self.memory.join(" ");
        }
      } else {
        // Do nothing so no double operators
      }
    }),
    (this.pressPlus = function () {
      self.periodCount = 0;
      if (self.numLastPush) {
        console.log("press +");
        if (self.calcComplete) {
          // If calc is complete, push the subtotal from the last calculation and run the operator function again.
          self.memory.push(self.total);
          self.calcComplete = false;
          self.total = "";
          self.memory.push("+");
          self.display.innerHTML = "+";
          self.subDisplay.innerHTML = self.memory.join(" ");
        } else {
          // If the calc isn't complete, push the last number and then the operator to the
          self.memory.push(self.operator);
          self.operator = "";
          self.numLastPush = false;
          self.memory.push("+");
          self.display.innerHTML = "+";
          self.subDisplay.innerHTML = self.memory.join(" ");
        }
      } else {
        // Do nothing so no double operators
      }
    }),
    (this.pressMinus = function () {
      self.periodCount = 0;
      if (self.numLastPush) {
        console.log("press -");
        if (self.calcComplete) {
          // If calc is complete, push the subtotal from the last calculation and run the operator function again.
          self.memory.push(self.total);
          self.calcComplete = false;
          self.total = "";
          self.memory.push("-");
          self.display.innerHTML = "-";
          self.subDisplay.innerHTML = self.memory.join(" ");
        } else {
          // If the calc isn't complete, push the last number and then the operator to the
          self.memory.push(self.operator);
          self.operator = "";
          self.numLastPush = false;
          self.memory.push("-");
          self.display.innerHTML = "-";
          self.subDisplay.innerHTML = self.memory.join(" ");
        }
      } else {
        // Do nothing so no double operators
      }
    }),
    (this.pressEquals = function () {
      // Make sure a number was the last input.
      if (self.numLastPush) {
        // Update memory with the last number
        self.memory.push(self.operator);

        // make a string of the whole array
        self.output = self.memory.join(" ");

        // calculate and send it to the display
        console.log(self.output);
        self.total = Function("return " + self.output)();
        self.display.innerHTML = self.total;
        self.subDisplay.innerHTML = self.total;
        // reset and wait to see if the user wants to continue.
        self.resetCalc();
        self.calcComplete = true;
      } else {
        // Do Nothing if last push was an operator
      }
    }),
    (this.resetCalc = function () {
      self.memory.length = 0;
      self.operator = "";
      self.output = 0;
      self.periodCount = 0;
      console.log(
        `Memory Reset: Memory is ${self.memory}, Operator is ${self.operator}, Output is ${self.output}`
      );
    });
  // Event Listeners for the buttons
  this.one.addEventListener("click", self.pressOne),
    this.two.addEventListener("click", self.pressTwo),
    this.three.addEventListener("click", self.pressThree),
    this.four.addEventListener("click", self.pressFour),
    this.five.addEventListener("click", self.pressFive),
    this.six.addEventListener("click", self.pressSix),
    this.seven.addEventListener("click", self.pressSeven),
    this.eight.addEventListener("click", self.pressEight),
    this.nine.addEventListener("click", self.pressNine),
    this.zero.addEventListener("click", self.pressZero),
    this.period.addEventListener("click", self.pressPeriod);
  this.divide.addEventListener("click", self.pressDivide);
  this.multiply.addEventListener("click", self.pressMultiply);
  this.plus.addEventListener("click", self.pressPlus);
  this.minus.addEventListener("click", self.pressMinus);
  this.equals.addEventListener("click", self.pressEquals);
}

let calcy = Calculator("Calcy 386-DX");
