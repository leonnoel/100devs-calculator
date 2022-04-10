const calculator = {
initialize() {
  const buttonSet = Array.from(document.querySelectorAll(".calc-button"));
  buttonSet.forEach(button => button.addEventListener("click", this.updateArray));
  document.querySelector(".equals").addEventListener("click", this.evaluateProblem);
  console.log("Calculator is running");
},

updateArray() {
  console.log("Array is updated")
},

evaluateProblem() {
  console.log("Problem is evaluated")
},

};

calculator.initialize();