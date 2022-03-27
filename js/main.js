function Calculator() {
  let enteredValues = [];
  let currentValue = "0";
  const operators = ["/", "*", "+", "-"];

  let calcs = {
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function () {
    for (let operator of operators) {
      while (enteredValues.indexOf(operator) >= 0) {
        let actionIndex = enteredValues.indexOf(operator);
        let action = enteredValues[actionIndex];
        let result = calcs[action](
          enteredValues[actionIndex - 1],
          enteredValues[actionIndex + 1]
        );
        enteredValues[actionIndex - 1] = result;
        enteredValues.splice(actionIndex, 2);
      }
    }
    let answer = enteredValues[0];
    currentValue = answer;
    console.log(answer);
  };

  this.enterValue = function (value) {
    if (value === "=") {
      // if "=" selected complete computation
      enteredValues.push(parseFloat(currentValue));
      // enteredValues.push(value);
      this.calculate();
    } else if (operators.includes(value)) {
      // if operand add previous pending value to enteredValues, add operand after
      enteredValues.push(parseFloat(currentValue));
      enteredValues.push(value);
      currentValue = "0";
    } else {
      // if number store number in string
      currentValue += value;
    }
  };

  this.reset = function () {
    enteredValues = [];
    currentValue = "0";
  };
}

let calc = new Calculator();

for (let char of "9/3*4+3-2=") {
  calc.enterValue(char); // returns 13
}

calc.reset();

for (let char of "9-3*4+3/2=") {
  calc.enterValue(char); // returns -4.5
}
