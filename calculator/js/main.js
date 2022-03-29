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
    let num = this.currentOp === "" ? "num1" : "num2";
    if (this[num].length === 10) {
      return;
    } else if (val === ".") {
      this[num].indexOf(".") === -1 ? (this[num] += val) : (this[num] += "");
    } else {
      this[num] += val;
    }
    console.log(this.num1 + " " + this.currentOp + " " + this.num2);
    this.updateScreen();
  };
  this.collectOp = function (op) {
    this.currentOp = op;
    console.log(this.num1);
    console.log(this.num2);
    console.log(this.currentOp);
    console.log(this.result);
  };

  this.updateScreen = function () {
    let h1 = document.querySelector("h1");
    let screen =
      this.result !== ""
        ? this.result
        : this.num2 == ""
        ? this.num1
        : this.num2;
    h1.innerText = screen;
  };

  this.sum = function () {
    this.result = this.num1 + this.num2;
    this.clear();
  };
  this.sub = function () {
    this.result = this.num1 - this.num2;
    this.clear();
  };
  this.multi = function () {
    this.result = this.num1 * this.num2;
    this.clear();
  };
  this.divide = function () {
    this.result = this.num1 / this.num2;
    this.clear();
  };

  this.calculate = function () {
    // console.log(this.num1);
    // console.log(this.num2);
    console.log(this.currentOp);
    // console.log(this.result);
    switch (this.currentOp) {
      case "+":
        this.sum();
        break;
      case "-":
        this.sub();
        break;
      case "×":
        this.multi();
        break;
      case "÷":
        this.divide();
        break;
    }
  };
  this.clear = function () {
    console.log("reached");
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
document.querySelector(".eq").addEventListener("click", cal.calculate);
