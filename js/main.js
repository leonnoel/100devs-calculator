//Constructor Functions
function ValueButton(value) {
  this.num = value;
}

function OperationButton(operation) {
  this.button = operation
}
//calculator components
const screen = document.getElementById("screen")

//click listeners
document.getElementById("1").addEventListener("click", function () { buttonPress("1"); }, false);
document.getElementById("2").addEventListener("click", function () { buttonPress("2"); }, false);
document.getElementById("3").addEventListener("click", function () { buttonPress("3"); }, false);
document.getElementById("4").addEventListener("click", function () { buttonPress("4"); }, false);
document.getElementById("5").addEventListener("click", function () { buttonPress("5"); }, false);
document.getElementById("6").addEventListener("click", function () { buttonPress("6"); }, false);
document.getElementById("7").addEventListener("click", function () { buttonPress("7"); }, false);
document.getElementById("8").addEventListener("click", function () { buttonPress("8"); }, false);
document.getElementById("9").addEventListener("click", function () { buttonPress("9"); }, false);
document.getElementById("0").addEventListener("click", function () { buttonPress("0"); }, false);
document.getElementById(".").addEventListener("click", function () { buttonPress("."); }, false);
document.getElementById("+").addEventListener("click", function () { buttonPress("+"); }, false);
document.getElementById("-").addEventListener("click", function () { buttonPress("-"); }, false);
document.getElementById("*").addEventListener("click", function () { buttonPress("*"); }, false);
document.getElementById("/").addEventListener("click", function () { buttonPress("/"); }, false);
document.getElementById("=").addEventListener("click", calculate);

//functions
function buttonPress(buttonValue){
 screen.innerText += buttonValue; 
}

function calculate(){
  let equation = screen.innerText;
  screen.innerText = eval(equation)  
}
