/* Functionality of a calculator:
Accept user input:                                  yes
* Numbers                                           yes
* Operators,                                        yes
* Decimal numbers                                   yes
Display input as it's being entered                 yes
Store input: 
* Previous total becomes Start of next operation    yes
Prevent invalid input                               no accepts two decimals 
Return the result                                   yes
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
    // Start of parseInput  (Method 1)
    parseInput(value) 
    {
        // Have any of the operators, equals, decimals, or AC been clicked?
        switch(value) 
        {
            case '=':
                // If equals sign is clicked, call calculateAnswer function
                this.calculateAnswer(this.displayText)
                break;

            case 'AC':
                // If all-clear is clicked, Clear the screen and store values
                this.clearAll()
                break;

                /* If decimal is clicked, two situations: 
                1) The decimal is the first character in the string -> Zero displays ahead of the decimal (example: 0.1)
                2) The first character in the string is not 0 -> Zero disappears and updates to 1 (example: 1.5)
                */
            case '.':
                // 1) If display begins with 0 and decimal is clicked, add string 
                if (this.displayText == 0) {
                    this.addText('0.');
                // 2) else add value to string  
                } else {
                    this.addText(value);
                }
                break;
                // Default case adds value to string
            default:
                this.addText(value);
                break;
        }

    },
    // End of parseInput    (Method 1)

    /* Method 2
    addText function takes in event.target.value from event listener
        method checks value and displayText then concatenates value to displayText
    */
    // Start of addText     (Method 2)
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

        /* 2nd condition - If isNaN is true //-> do not allow the input 
        1) If value is not a number         //-> do not allow the input
        2) If displayText is not a number   //-> do not allow the input
        Use Number constructor (or +) on value to convert data type from string to number
        Operators data type cannot convert to number
        isNaN returns boolean for 2nd conditional 
        */
        // if value & displayText are not a number
        if (isNaN(Number(value)) && isNaN(Number((this.displayText)))) {
            // If last index is not a number//->  do not allow the input
            if (isNaN(this.displayText.slice(-1))) {
                // do not allow input
                return;
            }
        }
        /* No condition - Two things will happen:
        1 - Concatenate value to displayText
        2 - Display displayText to .calculator-screen */
        this.displayText += value
        this.outputText(this.displayText)
    },
    // End of addText       (Method 2)

    /* Method 3
    outPutText function takes in value from event.target.value
        then displays value on .calculator-screen in html
    */
    // Start of outPutText  (Method 3)
    outputText(value) {
        // input element used for .calculator-screen -> can't use innerText/HTML
        // Change value in on .calculator-screen -> displays value in html
        document.querySelector('.calculator-screen').value = value;
    },
    // End of outPutText    (Method 3)

    /*
    Method 4
    calculateAnswer function
    */
    // Start of calculateAnswer (Method 4)
    calculateAnswer(equation) {
        // result Function is similar to and safer than than eval function
        let result = Function("return " + equation)()
        // result displays on .calculator-screen
        this.outputText(result)
    },
    // End of calculateAnswer   (Method 4)
    
    /*
    Method 5
    clearAll function sets both calculator properties back to their starting state
    */
    // Start of clearAll        (Method 5)
    clearAll() {
        // Properties set to default 
        this.displayText = '0',
        this.previousTotal = null,
        this.outputText(this.displayText)
    }
    // End of clearAll          (Method 5)
}