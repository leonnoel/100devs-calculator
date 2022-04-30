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

// Object created with literal notation
const calculator = {
    // Property 1 displays text on calculator-screen
    displayText: '0',
    // Property 2 previousTotal becomes Start of next operation
    previousTotal: null,

    /* Method 1
    parseInput function takes in event.target.value from event listener 
        Receive good input by sanitizing (if/else)
            Routes input through default or cases (switch decision tree)
    */
    // Start of parseInput
    parseInput(value) 
    {
        // Checks displayText value and set displayText to blank
        if (this.displayText === '0') 
        {
            this.displayText = ''
        }

        // Have any of the operators, equals, decimals, or AC been clicked?
        switch(value) 
        {
            case '=':
                // If equals sign is clicked, calculate the answer
                break;

            case 'AC':
                // If all-clear is clicked, Clear the screen and store values
                break;

                /* If decimal is clicked, two situations: 
                1) The decimal is the first character in the string -> Zero displays ahead of the decimal (example: 0.1)
                2) The first character in the string is not 0 -> Zero disappears and updates to 1 (example: 1.5)
                */
            case '.':
                break;
        }

    }
    // End of parseInput
}