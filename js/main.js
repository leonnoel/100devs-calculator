// initialize variables to store the current display and result display state
let currentDisplay = "0"; 
let resultDisplay = false; 

// Functions to append a value to the current display
function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay){
        currentDisplay = value;
    }else{
        currentDisplay += value;
    }

    resultDisplay = false;
    updateDisplay();
}

// Function to update the calculator display with the current content
function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
}

// Function to calculate and display the result
function calculateResult() {
    try {
        const result = eval(currentDisplay);
        currentDisplay += "\n=" + result.toString();
        updateDisplay();
    } catch (error) {
        currentDisplay += "\nError"
        updateDisplay();
    }
    resultDisplay = true;
}

// Function to clear the last element from the current display
function clearLastElement(){
    currentDisplay = currentDisplay.slice(0,-1);
    if(currentDisplay === "") {
        currentDisplay = "0"
    }
    updateDisplay();
}

// Function to clear the entire display
function clearDisplay(){
    currentDisplay = "0"; //Reset the current display to "0"
    updateDisplay();

    // Update the calculator display to show the cleared content
    updateDisplay();
}

