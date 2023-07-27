// Calculator class
class Calculator {
  
  constructor() {
    this.result = 0;
  }

  // Method to clear the current result
  clear() {
    this.result = 0;
    return this;
  }

  // Method to evaluate an arithmetic expression
  evaluateExpression(expression) {
    // Operator precedence rules
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };

    // Function to perform an arithmetic operation
    const performOperation = (num1, operator, num2) => {
      // Determine the operation to perform based on the operator
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

    // Arrays to hold the numbers and operators
    const numbers = [];
    const operators = [];

    // Buffer to build up numbers as we iterate through the expression
    let numBuffer = '';
    // Variable to hold the previous character
    let prevChar = null;

    // Iterate over each character in the expression
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      // If the character is a number or a decimal point
      if (char >= '0' && char <= '9' || char === '.') {
        // Add it to the number buffer
        numBuffer += char;
      } else {
        // If the buffer is not empty, convert it to a number and add it to the numbers array
        if (numBuffer) {
          numbers.push(parseFloat(numBuffer));
          numBuffer = '';
        }

        // If the character is a minus sign and it's at the start of the expression or after an opening parenthesis
        if (char === '-' && (prevChar === null || prevChar === '(')) {
          // Treat it as a negative sign for the next number
          numBuffer += char;
        } else if (char === '(') {
          // If the character is an opening parenthesis, add it to the operators array
          operators.push(char);
        } else if (char === ')') {
          // If the character is a closing parenthesis, perform operations until an opening parenthesis is found
          while (operators.length > 0 && operators[operators.length - 1] !== '(') {
            const operator = operators.pop();
            const num2 = numbers.pop();
            const num1 = numbers.pop();
            numbers.push(performOperation(num1, operator, num2));
          }
          // Remove the opening parenthesis
          operators.pop();
        } else {
          // If the character is an operator, perform operations while the top operator in the stack has equal or higher precedence
          while (
            operators.length > 0 &&
            precedence[operators[operators.length - 1]] >= precedence[char]
          ) {
            const operator = operators.pop();
            const num2 = numbers.pop();
            const num1 = numbers.pop();
            numbers.push(performOperation(num1, operator, num2));
          }
          // Add the operator to the operators array
          operators.push(char);
        }
      }

      // Update the previous character
      prevChar = char;
    }

    // If there's a number left in the buffer, add it to the numbers array
    if (numBuffer) {
      numbers.push(parseFloat(numBuffer));
    }

    // Perform remaining operations
    while (operators.length > 0) {
      const operator = operators.pop();
      const num2 = numbers.pop();
      const num1 = numbers.pop();
      numbers.push(performOperation(num1, operator, num2));
    }

    // The result is the last number in the array
    this.result = numbers[0];
    return this;
  }

  // Method to get the current result
  getResult() {
    return this.result;
  }
}

// Get all the buttons and the display
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
// Create a new Calculator
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
