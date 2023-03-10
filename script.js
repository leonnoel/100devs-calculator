const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 9000, fill: "forwards" }
  );
};
const buttons = document.querySelectorAll(".btn-container  button");
const displayInput = document.querySelector("#display");
let calc = new Calculator(displayInput);
buttons.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let { target } = e;
    // console.log("clicked" + target.value);
    // clac.parseInput(target.value);
    console.log(target.type);
    if (!target.matches("button")) {
      return;
    } else {
      calc.parseInput(target.value);
    }
  });
});

function Calculator(displayElement) {
  let preValue = null;
  this.display = displayElement.value;
  this.parseInput = function (value) {
    if (value === 0) {
      this.display = "";
    }

    switch (value) {
      case "=":
        this.calculate(this.display);
        break;
      case "ac":
        this.clearAll();
        break;
      case ".":
        if (this.display == 0) {
          this.addText("0.");
        } else {
          if (this.display.slice(this.display.length - 1) == ".") {
            return;
          } else {
            this.addText(value);
          }
        }
        break;
      default:
        this.addText(value);
    }
  };
  this.addText = function (input) {
    // console.log(input);
    if (this.display == 0) {
      this.display = "";
    } else if (preValue) {
      this.display = preValue;
      preValue = null;
    }
    if (isNaN(+input) && isNaN(+this.display)) {
      if (isNaN(this.display.slice(-1))) {
        return;
      }
    }
    this.display += input;
    console.log(this.display);
    this.outputText(this.display);
  };
  this.calculate = function (equation) {
    let answer = Function("return " + equation)();
    this.outputText(answer);
    preValue = answer;
  };
  this.outputText = function (text) {
    displayElement.value = text;
  };
  this.clearAll = function () {
    console.log("triggered");
    this.display = displayElement.value = "0";
    preValue = null;
  };
}
