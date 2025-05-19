class Calculator{
    constructor(currentDisplay,previousNumber,displayScreen){
        this.currentDisplay = currentDisplay
        this.previousNumber = previousNumber
        this.displayScreen = displayScreen
        this.operator = ''
        this.equalsPressed = false
        this.operatorPressed = false
        this.maxNumberInScreen = 9
        
        
    }
    numClick(e){
        //Checking to see if the display is currently holding at least 1 element, and that element is NOT a number (confirming it's an operator basically)
        if (this.operator !== '' && isNaN(displayScreen.innerText) || this.equalsPressed == true){
            this.displayScreen.innerText = ''
            this.equalsPressed = false
            this.displayTextSizeCalculator(this.displayScreen.innerText.length)
            
        }
        //Limits the number of characters on my display screen so it doesn't run out of the screen, kind of "rolls" the numbers by slicing the first one if a number is entered after the length is already max to mimick an actual calculator
        if (this.displayScreen.innerText.length >= this.maxNumberInScreen){
            this.displayScreen.innerText = this.displayScreen.innerText.slice(1)
            this.displayScreen.innerText += e.target.value
            this.displayTextSizeCalculator(this.displayScreen.innerText.length)
        }
        //basically checking if there's either nothing, or less than 6 numbers on the display
        else{
            this.displayScreen.innerText += e.target.value
        }
        this.operatorPressed = false
        
    }
    operatorClick(e){
        // Setting the operator to the value of the operator button clicked, then setting the previous number to what's currently on the screen (should be a number of maximum 6 numbers in length), then sets the inner text value to the current operator
        if (this.operatorPressed == false){
            this.operator = e.target.value
            this.previousNumber = this.displayScreen.innerText
            this.displayScreen.innerText = this.operator
            this.operatorPressed = true
        }
        console.log(`Previous number: ${this.previousNumber} \n Operator: ${this.operator}`)
        
    }
    equalsClick(e){
        if (this.operator == '+'){
            this.equalsPressed = true
            let mathResult = (Number(this.previousNumber) + Number(this.displayScreen.innerText))
            this.displayScreen.innerText = mathResult
            console.log(mathResult.length)
            this.displayTextSizeCalculator(String(mathResult).length)
        }
        if (this.operator == '-'){
            this.equalsPressed = true
            let mathResult = (Number(this.previousNumber) - Number(this.displayScreen.innerText))
            this.displayScreen.innerText = mathResult
            console.log(mathResult.length)
            this.displayTextSizeCalculator(String(mathResult).length)
        }
        if (this.operator == '/'){
            this.equalsPressed = true
            let mathResult = (Number(this.previousNumber) / Number(this.displayScreen.innerText))
            this.displayScreen.innerText = mathResult
            console.log(mathResult.length)
            this.displayTextSizeCalculator(String(mathResult).length)
        }
        if (this.operator == 'x'){
            this.equalsPressed = true
            let mathResult = (Number(this.previousNumber) * Number(this.displayScreen.innerText))
            this.displayScreen.innerText = mathResult
            console.log(String(mathResult).length)
            this.displayTextSizeCalculator(String(mathResult).length)
        }

    }
    displayTextSizeCalculator(n){
        if (n === 0) {
            this.displayScreen.style.fontSize = '5em'
            this.maxNumberInScreen = 8
        }
        if (n >= 9) {
            this.displayScreen.style.fontSize = '4em'
            this.maxNumberInScreen = 11
        }
        if (n >= 11) {
            this.displayScreen.style.fontSize = '3em'
            this.maxNumberInScreen = 15
        }
        if (n >= 15) {
            this.displayScreen.style.fontSize = '2.5em'
            this.maxNumberInScreen = 18
        }
    }
    periodClick(){
        if (!this.displayScreen.innerText.includes('.')){
            this.displayScreen.innerText += '.'
        }
    }
}


const displayScreen = document.getElementById('displayScreen')
let numButtons = document.querySelectorAll('.numButton')
let operatorButtons = document.querySelectorAll('.operator')
let equalButton = document.getElementById('equals')
const calculator = new Calculator('',0,displayScreen)
let dotButton = document.getElementById('dotButton')

dotButton.addEventListener('click',(e)=>calculator.periodClick(e))
equalButton.addEventListener('click',(e)=>calculator.equalsClick(e))
numButtons.forEach((button) => button.addEventListener('click',(e) => calculator.numClick(e)))
operatorButtons.forEach((button)=> button.addEventListener('click', (e)=> calculator.operatorClick(e)))

//5-17-25//
// === TO DO ===
// - Prevent operator input if an operator is already on the display *COMPLETE 
// - Create `this.equalsClick()`: *COMPLETE 
//     • Takes `this.previousNumber`, `this.operator`, and `this.currentDisplay` *COMPLETE 
//     • Performs the correct calculation *COMPLETE 
//     • Updates `this.currentDisplay` with the result *COMPLETE 
//     • Sets `this.previousNumber = this.currentDisplay` *COMPLETE 
//     • Resets `this.operator` to an empty string *COMPLETE 
// - Add functionality for the decimal point ('.') button: *COMPLETE 
//     • If `!this.currentDisplay.includes('.')`, add '.' *COMPLETE 
//     • Else, do nothing

//5-18-25//
// === TO DO ===
// - Handle main number overflow: *COMPLETE
//     • If `this.currentDisplay.length > 9`, reduce font size *COMPLETE
//     • Dynamically shrink font but never below minimum threshold *COMPLETE
//     • Reset font size when display clears or shortens *COMPLETE

// - Prevent numbers from being pushed off screen:
//     • Wrap display in a container with `overflow: hidden` or horizontal scroll *COMPLETE
//     • Use `text-align: right` to keep numbers aligned correctly *COMPLETE
//     • Consider using monospace font for visual consistency *COMPLETE

// - Ensure numbers stay on one line:
//     • Apply `white-space: nowrap` to prevent wrapping *COMPLETE

// - Add test cases for overflow behavior:
//     • Input long number sequences (e.g., '1234567890123') *COMPLETE
//     • Test long decimals and operations (e.g., '1234.5678 + 8765.4321') *COMPLETE
//     • Confirm layout and scaling behave as expected *COMPLETE

