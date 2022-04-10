const calculator = {

initialize() {
  const buttonSet = Array.from(document.querySelectorAll(".calc-button"));
  buttonSet.forEach(button => button.addEventListener("click", this.updateArray));
  document.querySelector(".equals").addEventListener("click", this.evaluateProblem);
  console.log("Calculator is running");
},

updateArray(click) {
  probArr.push(click.target.value);
  document.querySelector(".display-main").innerText = probArr.join("");
  console.log("Array is updated")
},

evaluateProblem() {
  document.querySelector(".display-main").innerText = eval(probArr.join(""));
  document.querySelector(".display-secondary").innerText = probArr.join("");
  console.log("Problem is evaluated")
},

};

const probArr = [];
calculator.initialize();