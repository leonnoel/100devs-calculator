// Define the Calculator class which will encapsulate all calculator operations and behaviors.
class Calculator {
    // Constructor initializes default state of the calculator.
    constructor() {
        // Set the default value of the calculator's display.
        this.displayValue = '0'; 
        // Cache the DOM element that displays the calculator's output to ensure efficient updates.
        this.displayElement = document.querySelector('.display'); 
        // Display the default value to the user.
        this.updateUI();
    }
    // Utility method to synchronize the UI with the internal state of the calculator.
    updateUI() {
        this.displayElement.innerText = this.displayValue;
    }
    // Reset the calculator display to its initial state.
    clear() {
        this.displayValue = '0';
        this.updateUI();
    }
    // Update the displayed value based on user input.
    updateDisplay(char) {
        // Handle the special case where the display is at its initial state.
        // Allow arithmetic operators to be appended after 0.
        // Otherwise, replace the initial 0 with the character or append the character.
        // ...
        if (this.displayValue === '0' && ['+', '-', '*', '/'].includes(char)) {
            this.displayValue += ` ${char} `;
        } else if (this.displayValue === '0') {
            this.displayValue = String(char);
        } else {
            this.displayValue += char;
        }
        // Update the UI after modifying the internal state.
        this.updateUI();
    }
    // Evaluate the arithmetic expression displayed on the calculator.
    evaluate() {
        // Attempt to evaluate the expression.
        // If the expression is valid, display the result.
        // If there's an error in evaluation, display an error message.
        // ...
        try {
            this.displayValue = String(new Function(`return ${this.displayValue}`)());
            this.updateUI();
        } catch {
            this.displayValue = 'Error';
            this.updateUI();
        }
    }
    // Handle the addition of the decimal point to the display.
    addDot() {
        // Check how many decimal points are currently in the display.
        // If there's less than 2 and the last character isn't a decimal point, add a new one.
        // ...
        const dotCount = (this.displayValue.match(/\./g) || []).length;
        if (dotCount < 2 && this.displayValue[this.displayValue.length - 1] !== '.') {
            this.updateDisplay('.');
        }
    }
}
// Create a new Calculator instance.
const calc = new Calculator();
// Attach event listeners for calculator functionalities:

// Clear the calculator's display when the clear button is clicked.
document.querySelector('.clear-btn').addEventListener('click', () => calc.clear());
// Add a decimal point to the current number on the display.
document.querySelector('#dot').addEventListener('click', () => calc.addDot());
// Evaluate the current expression on the display when the equals button is clicked.
document.querySelector('#equals').addEventListener('click', () => calc.evaluate());

// Define a mapping of DOM elements to their respective arithmetic operations.
const operators = {
    '#add': ' + ',
    '#subtract': ' - ',
    '#multiply': ' * ',
    '#divide': ' / '
};

// Loop through each operator button and attach an event listener.
// On click, the respective arithmetic operation is appended to the display.
for (const [key, value] of Object.entries(operators)) {
    document.querySelector(key).addEventListener('click', () => calc.updateDisplay(value));
}
// For each numeric button (0-9), attach an event listener.
// Append the respective number to the display when clicked.
for (let i = 0; i <= 9; i++) {
    document.querySelector(`#num${i}`).addEventListener('click', () => calc.updateDisplay(i));
}
