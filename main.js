/* Functionality of a calculator:
Accept user input:
* Numbers
* Operators,
* Decimal numbers
Display input as it's being entered
Store input:
* Previous total becomes Start of next operation
Prevent invalid input
Return the result
*/

// Listen for clicks anywhere inside the container
const numberPad = document.querySelector('.calculator-buttons');
// Button is clicked and event function is called
numberPad.addEventListener('click', event => {
    // Checks event object
    if (event.target.matches('button')) {
    /*  console log(event) returns an object 
        Object has 'target' property.
        Target property contains 'button' value
        The conditional only runs if the click contains 'button' value 
            If true, open the object's target property and pass the button's value to calculator
    */
   calculator.parseInput(event.target.value);
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

            // 
            case '.':
                break;
        }
    }
}