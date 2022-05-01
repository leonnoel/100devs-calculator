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
        Method will do one thing, route input through decision tree (switch statements)
    */
    // Start of parseInput (Method 1)
    parseInput(value) 
    {
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
                // 1) If display begins with 0 and decimal is clicked, add string 
                if (this.displayText == 0) {
                    this.displayText = '0.'
                // 2) else add value to string  
                } else {
                    this.displayText += value;
                }
                break;
                // Default case adds value to string
            default:
                this.displayText += value;
        }

    },
    // End of parseInput  (Method 1)

    /* Method 2
    addText function takes in event.target.value from event listener
        Method will do one thing, add value to the string
    */
    // Start of addText  (Method 2)
    addText(value) 
    {
        // addText will have two conditionals:
        // If no conditions are met, concatenate value to displayText
        // 1st condition - If value is 0, Zero disappears
        if (this.displayText === '0') 
        {   // Calculator-screen is blank and is ready to add input
            this.displayText = ''
        } 
        // else If value is not 0, check if previousTotal is equal to null
        else if (this.previousTotal !== null) {
            // If previousTotal is not null, display previousTotal 
            // (example: 3+3=6) -> previousTotal is six -> six is not null
            this.displayText = this.previousTotal;
            this.previousTotal = null;
        }

        // 2nd condition - If value is invalid, return
        if (){

        }

        // No condition met - Concatenate value to displayText
        this.displayText += value
    },
    // End of addText  (Method 2)
}