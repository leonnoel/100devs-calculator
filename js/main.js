function Calculator() {
  let enteredValues = [];
  let currentNumber = "0";
  const operators = ["/", "*", "+", "-"];

  const calcs = {
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function () {
    for (const operator of operators) {
      while (enteredValues.indexOf(operator) >= 0) {
        const actionIndex = enteredValues.indexOf(operator);
        // get the the values either side of the required action
        const [first, action, second] = enteredValues.slice(
          actionIndex - 1,
          actionIndex + 2
        );
        const result = calcs[action](first, second);
        // Replace the 3 values with the result of the operation
        enteredValues[actionIndex - 1] = result;
        enteredValues.splice(actionIndex, 2);
      }
    }
    const answer = enteredValues.pop();
    currentNumber = answer;
    console.log(answer);
  };

  this.enterValue = function (value) {
    if (value === "=") {
      enteredValues.push(parseFloat(currentNumber));
      this.calculate();
    } else if (operators.includes(value)) {
      enteredValues.push(parseFloat(currentNumber));
      enteredValues.push(value);
      currentNumber = "0";
    } else {
      // if number store number in string
      currentNumber += value;
    }
  };

  this.reset = function () {
    enteredValues = [];
    currentNumber = "0";
  };
}

const calc = new Calculator();

for (let char of "9/3*4+3-2=") {
  calc.enterValue(char); // returns 13
}

calc.reset();

for (let char of "9-3*4+3/2=") {
  calc.enterValue(char); // returns -4.5
}
