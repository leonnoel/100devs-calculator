// ====================================================================================================
// HELPERS
// ====================================================================================================
hasWhitespace = (str) => /\s/g.test(str);

isNumeric = (str) =>
  str === 0 || (!hasWhitespace(str) && !isNaN(parseFloat(str)));

// ====================================================================================================
// HTML
// ====================================================================================================

// Cache html elements
const inputField = document.querySelector("input");
const h2 = document.querySelector("h2");

// Add listeners to all buttons
document
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", onButton));

// Listen to key press
document.addEventListener("keypress", onKey);

// Listen to input
inputField.addEventListener("input", onInput);

// Button event
function onButton(event) {
  let button = event.target.id;
  inputField.value += button;
  inputField.dispatchEvent(new Event("input"));
}

// Key event
function onKey(event) {
  if (event.key === "Enter") {
    inputField.value += "=";
    inputField.dispatchEvent(new Event("input"));
  }
}

// Input event
function onInput(event) {
  event.target.value = calculator.processInput(event.target.value);
  h2.innerHTML = isNumeric(calculator.intermediate)
    ? calculator.intermediate
    : "";
}

// ====================================================================================================
// CALCULATOR
// ====================================================================================================
let calculator = new Calculator();

function Calculator() {
  //this.entries = [];
  this.intermediate;
  this.lastResult;

  this.leftOperand;
  this.lastOperator;
  this.rightOperand;

  this.processInput = function (input) {
    let filtered = filterInput(input);
    return filtered;
  };

  this.reset = function () {
    this.entries = [];
    this.intermediate = undefined;
    this.lastOperator = undefined;
    this.rightOperand = undefined;
  };

  this.operators = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };

  hasOperator = (str) => {
    return str.split("").some((char) => isOperator(char));
  };

  isOperator = (op) => {
    return Object.keys(this.operators).includes(op);
  };

  // TODO: Handle processing intermediate with decimals as entry # > 1
  // TODO: Handle negatives as the first input
  // TODO: Handle floating point precision errors
  filterInput = (input) => {
    let entries = [];
    
    if (isNumeric(this.lastResult)) {
      if (!input || !input.includes("=")) {
        this.lastResult = undefined;
      }
      else if (isNumeric(input.slice(-1)) || input.slice(-1) === '.') {
        input = input.slice(-1);
        this.lastResult = undefined;
      }
    }

    [...input].forEach((char) => {
      let lastEntry = entries.at(-1);

      // if this is the first entry
      if (!lastEntry) {
        switch (true) {
          case isNumeric(char):
            entries.push(char);
            break;
          case char === ".":
            entries.push("0.");
            break;
        }
        this.leftOperand = parseFloat(char);
      }
      // rest of the entries
      else {
        switch (true) {
          case isNumeric(char):
            // # or #.
            if (isNumeric(lastEntry) || lastEntry === ".") {
              entries[entries.length - 1] += char;

              if (entries.length > 1) {
                this.rightOperand = parseFloat(entries[entries.length - 1]);
                
                if (entries.length == 3)
                  this.leftOperand = parseFloat(entries[0]);
                processIntermediate();
              }
              else {
                this.leftOperand = parseFloat(entries[entries.length - 1]);
              }
            }
            // operator
            else if (isOperator(lastEntry)) {
              entries.push(char);
              this.rightOperand = parseFloat(char);
              processIntermediate();
            }
            break;
          case char === ".":
            // operator
            if (isOperator(lastEntry)) {
              entries.push("0.");
              this.rightOperand = parseFloat(char);
              processIntermediate();
            }
            // # but NOT #.
            else if (isNumeric(lastEntry) && !lastEntry.includes(".")) {
              entries[entries.length - 1] += char;
            }
            break;
          case isOperator(char):
            this.intermediate = undefined;
            // operator
            if (isOperator(lastEntry)) {
              entries[entries.length - 1] = char;
              this.lastOperator = char;
            }
            // # or #.
            else if (isNumeric(lastEntry) || lastEntry === ".") {
              entries.push(char);
              this.lastOperator = char;
            }
            break;
          case char === "=":
            if (isNumeric(this.intermediate)) {
              this.lastResult = this.intermediate;
              this.intermediate = undefined;
            } else if (isNumeric(this.lastResult)) {
              processIntermediate();
              this.lastResult = this.intermediate;
              this.intermediate = undefined;
            }
            break;
        }
      }
    });

    return isNumeric(this.lastResult) ? this.lastResult : entries.join("");
  };

  processIntermediate = () => {
    if (!isNumeric(this.leftOperand) || !this.lastOperator || !isNumeric(this.rightOperand))
      this.intermediate = undefined;
    else {
      this.intermediate = this.operators[this.lastOperator](
        this.leftOperand,
        this.rightOperand
      );
      this.leftOperand = this.intermediate;
    }
  };
}
