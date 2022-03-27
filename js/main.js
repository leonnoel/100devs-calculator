function Calculator(display) {
  let enteredValues = [];
  let currentNumber = "0";
  const operators = ["/", "*", "+", "-"];

  const calcs = {
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  let updateDisplay = () => {
    if (display) display.innerText = currentNumber;
  };

  this.calculate = function () {
    for (const operator of operators) {
      const actionIndex = enteredValues.indexOf(operator);
      while (actionIndex >= 0) {
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
    return answer;
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
      if (currentNumber === "0" && value !== ".") {
        currentNumber = value;
      } else {
        currentNumber += value;
      }
    }
    updateDisplay();
  };

  this.reset = function () {
    enteredValues = [];
    currentNumber = "0";
    updateDisplay();
  };
}

const display = document.querySelector(".calc-display");

const calc = new Calculator(display);

const buttons = document.querySelectorAll(".calc-value");
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    calc.enterValue(e.target.value);
  });
}
