//Create a NodeList of all html elements with .button class
const btns = document.querySelectorAll(".button");
const display = document.getElementById("display");
let num1;
let operator = null;
let operator2 = null;
display.value = "";
//map through node list and add an eventListener that fires on click.
// anonymous function so that the actual function with an argument (buttonPress) can be attached to the event listener
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    buttonPress(btn.textContent);
  })
);
function calculation() {
  switch (operator) {
    case "+":
      display.value = num1 + Number(display.value);
      break;
    case "-":
      display.value = num1 - Number(display.value);
      break;
    case "X":
      display.value = num1 * Number(display.value);
      break;
    case "/":
      display.value = num1 / Number(display.value);
      break;
  }
  num1 = display.value;
  operator = operator2;
  operator2 = null;
}
function buttonPress(buttonValue) {
  if (buttonValue == "=") {
    calculation();
  } else if (
    buttonValue == "+" ||
    buttonValue == "-" ||
    buttonValue == "X" ||
    buttonValue == "/"
  ) {
    if (operator == null) {
      operator = buttonValue;
      num1 = Number(display.value);
      display.value = "";
      //   isOperatorStored = true;
    } else {
      operator2 = buttonValue;
      calculation();
    }
  } else {
    if (operator != null) {
      display.value = "";
    }
    display.value += buttonValue;
  }
}
