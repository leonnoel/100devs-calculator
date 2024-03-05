//Create a NodeList of all html elements with .button class
let btns = document.querySelectorAll(".button");

//map through node list and add an eventListener that fires on click.
// anonymous function so that the actual function with an argument (buttonPress) can be attached to the event listener
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    buttonPress(btn.textContent);
  })
);

function buttonPress(buttonValue) {
  alert(`${buttonValue}`);
}
