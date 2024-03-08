//Create a NodeList of all html elements with .button class
const btns = document.querySelectorAll(".button");
const display = document.getElementById("display");
let storedNumber = null;
let displayNumber = "";
let operator = null;
let operator2 = null;
display.value = "";
let equalEntered = false;
//map through node list and add an eventListener that fires on click.
// anonymous function so that the actual function with an argument (buttonPress) can be attached to the event listener
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    buttonPress(btn.textContent);
  })
);
//calculate function
function computation() {
  switch (operator) {
    case "+":
      display.value = +storedNumber + Number(displayNumber);
      break;
    case "-":
      display.value = +storedNumber - Number(displayNumber);
      break;
    case "X":
      display.value = +storedNumber * Number(displayNumber);
      break;
    case "/":
      display.value = +storedNumber / Number(displayNumber);
      break;
  }
  storedNumber = display.value; //store the calculated number
  operator = operator2; //in scenario where user is entering values and operators without pushing =
  operator2 = null;
  displayNumber = ""; //resets the displayNumber variable
}

//evaluate when keypress is an operator
function operatorEval(buttonValue) {
  //check to make sure no number is stored from previous calculation
  if (storedNumber == null) {
    operator = buttonValue;
    storedNumber = displayNumber;
  }
  //run if there is a stored number from previous calculation
  else {
    //scenario: previous calculation completed with equal
    if (equalEntered) {
      operator = buttonValue;
      equalEntered = false; //reset flag for equal being pushed.
    }
    //scenario: previous calculation not completed because = wasn't entered.
    //instead operator was entered again.
    //must store operator2 and run computation with operator1
    //eg user enters, 2+2+ (when second operator is pressed store it and must compute 2+2)
    else {
      operator2 = buttonValue;
      computation();
    }
  }
  displayNumber = "";
}

function displayScreen(buttonValue) {
  display.value = "";
  displayNumber += buttonValue;
  display.value = displayNumber;
}

//evaluate button entered and call appropriate function
function buttonPress(buttonValue) {
  if (buttonValue == "=") {
    equalEntered = true;
    computation();
  } else if (
    buttonValue == "+" ||
    buttonValue == "-" ||
    buttonValue == "X" ||
    buttonValue == "/"
  ) {
    operatorEval(buttonValue);
  } else {
    displayScreen(buttonValue);
  }
}
