// function numsCollector(e) {
//   console.log(e.target.innerText);
// }
// listen for clicks

// add event listener for each btn
// the function for each btn is check for the btn inner text
// if the inner is nums
// fire another function that update the screen text add numbers one beside the next and check if there is a dot(.) that it not allowed two or more dots in the same text
// if the inner is operator
// save the number
// activate the operator
// listern for the btns click
// repeat the function to update the screen
// if the btn inner is =
// the fire the calculatrion method
// it result the (first num)(operator)(second num) and return the resutl
// fire the update the screen function to show the result
// round the number to lets say 5 digits with the .toFixed(5)

function Calculator() {
  this.num1 = "";
  this.num2 = "";
  this.result = "";
  this.currentOp = "";

  this.collectNum = function (val) {
    // enhancement :) if the result is in the screen consider it the num1 to accept another operation on the result
    if (this.currentOp !== "" && this.result !== "") {
      this.num1 = this.result;
      this.updateScreen();
    } else {
      this.result = "";
    }
    let num = this.currentOp === "" ? "num1" : "num2";
    if (this[num].length === 10) {
      return;
    } else if (val === ".") {
      //   check to stop add  more than one dot
      this[num].indexOf(".") === -1 ? (this[num] += val) : (this[num] += "");
    } else {
      this[num] += val;
    }
    this.updateScreen();
  };
  this.collectOp = function (op) {
    // handle the negative numbers (when press - before the first num)
    if (this.num1 === "" && this.result === "" && op === "-") {
      console.log("here : ", op);
      this.num1 = "-";
    } else {
      this.currentOp = op;
    }
  };

  this.updateScreen = function () {
    let h1 = document.querySelector("h1");
    let screen =
      // for the enhancement about make operation on the result
      this.result !== "" && this.currentOp !== ""
        ? this.num2
        : // normal flow
        this.result !== ""
        ? this.result
        : this.num2 == ""
        ? this.num1
        : this.num2;
    h1.innerText = screen;
  };

  this.checkNumLength = function (num) {
    if (num.length <= 10) {
      this.result = num;
    } else {
      //   use toExponential to shtrim the number to fixed on the screen and show the scientific form of the num :)
      this.result = String(Number(num).toExponential(6));
      //   if (num.indexOf(".") !== -1) {
      //     this.result = Number(num).toFixed(num.length - 10);
      //   } else {
      //     console.log(String(Number(num).toExponential(6)));
      //     this.result = String(Number(num).toExponential(6));
      //   }
    }
    this.clear();
  };
  this.sum = function () {
    this.checkNumLength(String(+this.num1 + +this.num2));
  };
  this.sub = function () {
    this.checkNumLength(String(+this.num1 - +this.num2));
  };
  this.multi = function () {
    this.checkNumLength(String(+this.num1 * +this.num2));
  };
  this.divide = function () {
    this.checkNumLength(String(+this.num1 / +this.num2));
  };

  this.calculate = function () {
    switch (this.currentOp) {
      case "+":
        this.sum();
        this.updateScreen();
        break;
      case "-":
        this.sub();
        this.updateScreen();
        break;
      case "×":
        this.multi();
        this.updateScreen();
        break;
      case "÷":
        this.divide();
        this.updateScreen();
        break;
    }
  };
  this.clear = function () {
    this.num1 = "";
    this.num2 = "";
    this.currentOp = "";
  };
}

let cal = new Calculator();

document
  .querySelectorAll(".nums")
  .forEach((e) =>
    e.addEventListener("click", (e) => cal.collectNum(e.target.innerText))
  );
document
  .querySelectorAll(".op")
  .forEach((e) =>
    e.addEventListener("click", (e) => cal.collectOp(e.target.innerText))
  );
document.querySelector(".eq").addEventListener("click", (e) => cal.calculate());
