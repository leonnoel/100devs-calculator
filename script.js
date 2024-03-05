//Create a NodeList of all html elements with .button class
const btns = document.querySelectorAll(".button");
const display = document.getElementById("display");
let num1;
let input = 0;
let operator;
//map through node list and add an eventListener that fires on click.
// anonymous function so that the actual function with an argument (buttonPress) can be attached to the event listener
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    buttonPress(btn.textContent);
  })
);

function buttonPress(buttonValue) {
  if (buttonValue == "=") {
    switch (operator) {
      case "+":
        alert(num1 + Number(input));
        break;
      case "-":
        alert(num1 - Number(input));
        break;
      case "X":
        alert(num1 * Number(input));
        break;
      case "/":
        alert(num1 / Number(input));
        break;
        num1 = 0;
        input = "";
        operator = "";
    }
  } else if (
    buttonValue == "+" ||
    buttonValue == "-" ||
    buttonValue == "X" ||
    buttonValue == "/"
  ) {
    operator = buttonValue;
    num1 = Number(input);
    input = "";
    alert(num1);
  } else {
    input += buttonValue;
    alert(input);
  }
}
