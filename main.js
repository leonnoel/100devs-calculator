const calculator = {

  initialize() {
    const buttonSet = Array.from(document.querySelectorAll(".calc-button"));
    buttonSet.forEach(button => button.addEventListener("click", this.updateArray));
    document.querySelector(".equals").addEventListener("click", this.evaluateProblem);
  },

  updateArray(click) {
    probArr.push(click.target.value);
    document.querySelector(".display-main").innerText = probArr.join("");
  },

  evaluateProblem() {
    let solution = eval(probArr.join(""));
    document.querySelector(".display-main").innerText = solution;
    document.querySelector(".display-secondary").innerText = probArr.join("");
    probArr = [solution];
  },

};

let probArr = [];
calculator.initialize();