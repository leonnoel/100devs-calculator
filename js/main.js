//Declare answer variable
let str = "";

//Function for each button press on calculator
const seven = () => (document.querySelector("#answer").innerText = str += 7);
const eight = () => (document.querySelector("#answer").innerText = str += 8);
const nine = () => (document.querySelector("#answer").innerText = str += 9);
const divide = () => (document.querySelector("#answer").innerText = str += "/");
const four = () => (document.querySelector("#answer").innerText = str += 4);
const five = () => (document.querySelector("#answer").innerText = str += 5);
const six = () => (document.querySelector("#answer").innerText = str += 6);
const times = () => (document.querySelector("#answer").innerText = str += "x");
const one = () => (document.querySelector("#answer").innerText = str += 1);
const two = () => (document.querySelector("#answer").innerText = str += 2);
const three = () => (document.querySelector("#answer").innerText = str += 3);
const plus = () => (document.querySelector("#answer").innerText = str += "+");
const zero = () => (document.querySelector("#answer").innerText = str += 0);
const dot = () => (document.querySelector("#answer").innerText = str += ".");
const equals = () => {
  document.querySelector("#answer").innerText = eval(str);
  str = "";
};
const minus = () => (document.querySelector("#answer").innerText = str += "-");

//Add event listeners to each button on the calculator
document.getElementById("seven").addEventListener("click", seven);
document.getElementById("eight").addEventListener("click", eight);
document.getElementById("nine").addEventListener("click", nine);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("four").addEventListener("click", four);
document.getElementById("five").addEventListener("click", five);
document.getElementById("six").addEventListener("click", six);
document.getElementById("times").addEventListener("click", times);
document.getElementById("one").addEventListener("click", one);
document.getElementById("two").addEventListener("click", two);
document.getElementById("three").addEventListener("click", three);
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("zero").addEventListener("click", zero);
document.getElementById("dot").addEventListener("click", dot);
document.getElementById("equals").addEventListener("click", equals);
document.getElementById("minus").addEventListener("click", minus);
