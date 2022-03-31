//select area to display result
const display = document.getElementById('placeForResult')

//making an array out of the button collection allows access to the wonderful map function
const numberButtons = Array.from(document.getElementsByTagName('button'))

//this initial value is so that subsequent calculations can read it and clear the display without the need for a clear button
let wasCalculated = false

numberButtons.map(button => {
//adds an event listener to every button in the array
    button.addEventListener('click', calculateButton => {
//wasCalculated started off as false so this can come into effect: first step of the function is checking if wasCalculated is true, if it is then the display will be emptied
    if (wasCalculated) {
        display.innerText = '';
        wasCalculated = false
    }
//when wasCalculated is false, then pressing the equal button will calculate what's being displayed, and set wasCalculated to true
    if (calculateButton.target.value === '='){
        if (display.innerText !== ''){
            display.innerText = eval(display.innerText)
            wasCalculated = true
        }
//if the button pressed is NOT equal, then the button presses will keep adding to the display
    } else {
        display.innerText += calculateButton.target.value;
    }
    })
});