// Functionality of a calculator:
// Accept user input. Numbers, operators, decimal numbers
// Display input as it's being entered
// Store input. Previous total becomes Start of next operation
// Prevent invalid input
// Return a result

// Listen for clicks anywhere inside the container
const keys = document.querySelector('.calculator-buttons');
    // Function called on click
    keys.addEventListener('click', event => {

        // Checks event object. If target property was clicked from button element
        if (event.target.matches('button')) {

            // Routes value from event object's target property to method
            calculator.parseInput(event.target.value)
        } else {
            return;
        }
})

const calculator = {
    // Text that shows up when calculator is first opened
    displayText: '0',

    // Value passed in from event listener
    parseInput(value) {
        // Checks displayText value and set displayText to blank
        if (this.displayText === '0') {
            this.displayText = ''
        }
        // Have any of the operators, equals, decimals, or AC been clicked?
        switch(value) {
            // Calculate the answer
            case '=':
                break;

            // Clear the screen and store values
            case 'AC':
                break;

            // Decimal
            case '.':
                break;
        }
    }
}