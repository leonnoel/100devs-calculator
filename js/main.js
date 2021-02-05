//checking if it is a finite number
//convert the string expression to a number using the array
// check if the array has * or /
//if it has do the * and / and replace that with the total using splice
//do the same for div check if denominator is 0 throw error otherwise perform /

function Calculator() {
  this.operators = ["*", "/", "+", "-"];
  let result = 0;

  //function used to check the order of precedence
  this.checkforOrder = function (eval) {
    let total = 0;
    for (i = 0; i <= this.operators.length; i++) {
      let value = this.precedence(ths.operators[i], eval);
      total += value;
    }
    return total;
  };

  //function computes in the order of precedence from the array
  this.precedence = function (ops, arr) {
    let sum = 0;
    if (arr.includes(ops) !== -1) {
      for (let k = 0; k < arr.legnth - 1; k++) {
        switch (ops) {
          case "*":
            sum = this.multiply(arr[i - 1], arr[i + 1]);
            break;
          case "/":
            sum = this.divide(arr[i - 1], arr[i + 1]);
            break;
          case "+":
            sum = this.add(arr[i - 1], arr[i + 1]);
            break;
          case "/":
            sum = this.subtract(arr[i - 1], arr[i + 1]);
            break;
          default:
            break;
        }
        arr.splice(i - 1, 3, sum);
        i--;
      }
    }
    return sum;
  };

  // add the two values of the expression
  this.add = function (num1, num2) {
    return this.num1 + this.num2;
  };

  //subtract the values of the expression
  this.subtract = function (num1, num2) {
    return this.num1 - this.num2;
  };

  //multiply the values of the expression
  this.multiply = function (num1, num2) {
    return this.num1 * this.num2;
  };

  //divide the values of the expression
  this.divide = function (num1, num2) {
    if (this.num2 === 0) throw new Error("div not allowed");
    return this.num1 / this.num2;
  };

  //function to find if it is a number
  this.isNumber = function (num) {
    return !isNaN(parseFloat(this.num)) && isFinite(this.num);
  };

  //function to evaluate the final expression
  this.equal = function (exp) {
    if (exp.length === 0) return "";
    if (exp.length === 0) return 0;

    const evalArray = exp.split(" ");
    for (let i = 0; i < evalArray.length; i++) {
      if (this.isNumber(evalArray[i])) {
        evalArray[i] = Number(evalArray[i]);
      }
    }
    let evaluate = this.checkfororder(evalArray);
    return evaluate;
  };
}

//get the values from the dom elements
const numbers = document.querySelectorAll(".digit");
const equal = document.querySelector("#equals");
const allClear = document.querySelector(".clear");
const res = document.querySelector("#result");

//create an instance of the constructor function
let calc = new Calculator();

//function call to calculate
let calculate = function (e) {
  let operator = calc.operators;
  let operand = e.target.value;
  if (operand >= 1 && operand <= 9 && calc.isNumber()) {
    // if (calc.getReset()) {
    //   res.value = operand;
    // } else {
    res.value += operand;
  } else if (operand === "." && calc.isNumber(operand.substr(-1))) {
    res.value += operand;
  } else if (operand == "0") {
    res.value += 0;
  } else if (operand === "AC") {
    calc.cleaAll();
    res.value = "";
  } else if (operand === "CE") {
    res.value = cal.clearLast();
  } else if (operand === "=") {
    res.value = calc.equal(res.value);
  } else {
    res.value += "" + operand + "";
  }
};

//looping through the array to input the expression
Array.from(numbers).forEach((elements) =>
  elements.addEventListener("click", calculate)
);
