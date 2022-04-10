let num1 = 0; // use of let, destined to change
let calcDisplay = document.getElementById("calcDisplay");
let action = document.getElementById("action");
let cleared = false;
const btns = document.querySelectorAll(".btn");

/**
 * Represents a calculator.
 * @constructor
 */
const calculator = {
  /* default value */
  currentValue: 0,

  /* one function to rule them all */
  operate(num1 = null, op, num2) {
    this.currentValue = num1 ?? this.currentValue;
    switch (op) {
      case "+":
        return (this.currentValue += num2);
      case "/":
        if (num2 === 0) {
          console.log(`You can't divize a number by 0`);
          return this.currentValue;
        }
        return (this.currentValue /= num2);
      case "x":
        return (this.currentValue *= num2);
      case "-":
        return (this.currentValue -= num2);
    }
  },
};

Array.from(btns).forEach((el) =>
  el.addEventListener("click", () => {
    if (true === el.classList.contains("num")) {
      if (num1 != "" && cleared === false) {
        calcDisplay.textContent = "";
        cleared = true;
      }
      calcDisplay.textContent += el.textContent;
    } else if (true === el.classList.contains("op")) {
      action.textContent = el.textContent;

      num1 = calcDisplay.textContent;
      cleared = false;
    } else if (true === el.classList.contains("submit")) {
      calcDisplay.textContent = calculator.operate(
        parseFloat(num1),
        action.textContent,
        parseFloat(calcDisplay.textContent)
      );
      cleared = false;
    }
  })
);
