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

            // Then logs value from event object's target property
            console.log(event.target.value);
        } else {
            return;
        }
})

const calculator = {
    
}