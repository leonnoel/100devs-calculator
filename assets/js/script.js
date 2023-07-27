class Calculator {
    constructor() {
      this.result = 0;
    }
  
    clear() {
      this.result = 0;
      return this;
    }
  
    evaluateExpression(expression) {
      const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
      };
  
      const performOperation = (num1, operator, num2) => {
        switch (operator) {
          case '+':
            return num1 + num2;
          case '-':
            return num1 - num2;
          case '*':
            return num1 * num2;
          case '/':
            return num1 / num2;
          default:
            throw new Error("Invalid operator");
        }
      };
  
      const numbers = [];
      const operators = [];
  
      let numBuffer = '';
      let prevChar = null;
  
      for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
  
        if (char >= '0' && char <= '9' || char === '.') {
          numBuffer += char;
        } else {
          if (numBuffer) {
            numbers.push(parseFloat(numBuffer));
            numBuffer = '';
          }
  
          if (char === '-' && (prevChar === null || prevChar === '(')) {
            numBuffer += char; // Treat '-' as a negative sign for the next number
          } else if (char === '(') {
            operators.push(char);
          } else if (char === ')') {
            while (operators.length > 0 && operators[operators.length - 1] !== '(') {
              const operator = operators.pop();
              const num2 = numbers.pop();
              const num1 = numbers.pop();
              numbers.push(performOperation(num1, operator, num2));
            }
            operators.pop(); // Pop '(' from the stack
          } else {
            while (
              operators.length > 0 &&
              precedence[operators[operators.length - 1]] >= precedence[char]
            ) {
              const operator = operators.pop();
              const num2 = numbers.pop();
              const num1 = numbers.pop();
              numbers.push(performOperation(num1, operator, num2));
            }
            operators.push(char);
          }
        }
  
        prevChar = char;
      }
  
      if (numBuffer) {
        numbers.push(parseFloat(numBuffer));
      }
  
      while (operators.length > 0) {
        const operator = operators.pop();
        const num2 = numbers.pop();
        const num1 = numbers.pop();
        numbers.push(performOperation(num1, operator, num2));
      }
  
      this.result = numbers[0];
      return this;
    }
  
    getResult() {
      return this.result;
    }
  }
  
  const buttons = document.querySelectorAll(".button");
  const display = document.querySelector(".display");
  const calculator = new Calculator();
  
// Function to update display and perform calculations
function updateDisplayAndCalculate(input) {
    if (input === "C") {
      // Clear the display and calculator result
      display.textContent = "0";
      calculator.clear();
    } else if (input === "=") {
      // Evaluate the expression with parentheses and PEMDAS logic
      try {
        const result = calculator.evaluateExpression(display.textContent).getResult();
        display.textContent = result;
      } catch (error) {
        display.textContent = "Error";
      }
    } else if (input === "Backspace" || input === "Delete") {
      // Delete the last input character
      display.textContent = display.textContent.slice(0, -1);
    } else {
      // Append the input to the display
      display.textContent =
        display.textContent === "0" ? input : display.textContent + input;
    }
  }
  
  // Event listener for keyboard input
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    const validKeys = "0123456789.+-*/()=BackspaceDelete";
    if (validKeys.includes(key)) {
      event.preventDefault();
      updateDisplayAndCalculate(key);
    }
  });
  
  // Event listeners for calculator buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      updateDisplayAndCalculate(buttonText);
    });
  });
  