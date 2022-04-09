//Calculator guts - quick maffs

//User input: mouse clicks and numeric key entry and symbols and enter key
//  mouse clicks (smurfs on all buttons)
//  numeric keys
//  decimal
//  operator keys
//  backspace & delete
//display all input as it is being entered

// store inputs
//perform calculations
//return result... display on calculatorScreen
//  previous total becomes start of new operation
//prevent invalid input
//      operators next to each other
//      two decimals

//repeat the last operation when equals is pressed
//limit input to number of chars that will fit

const keys = document.querySelector('.calculatorButtons');
    keys.addEventListener('click', event => {
        const {target} = event
        const {value} = target
        if (!target.matches('button')) {
            return;
        }
        else {
            //pass to parse method
            console.log('parsing...')
        }
    })
