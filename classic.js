const display = document.querySelector(".display");
const btns = document.querySelectorAll("button");
const quote = document.querySelector("#filler");

//initializing our calculator display
let input = [];

function setUpCalc() {
  //also able to use for...of (let button of btns) {}
  btns.forEach((button) =>
    button.addEventListener("click", () => {
      //needed to use Array.from(btns) due to temp DOM node rendering issue
      const btnVal = button.textContent; //.innerText is slower and renders CSS, .textContent is faster, .value is for input elements

      switch (btnVal) {
        case "=":
          try {
            display.value = eval(display.value.replace("x", "*")); //replacing calculator x with the JS multiply operator
          } catch (error) {
            display.value = "Yea, not gonna work";
          }
          break;
        case "C":
          display.value = "";
          break;
        default:
          display.value += btnVal;
      }
    })
  );
}

setUpCalc();
