let operators = "-+/*";
const screen = document.querySelector("#screen h1");
let value = "";
document.querySelector("#seven").addEventListener("click", seven);
document.querySelector("#eight").addEventListener("click", eight);
document.querySelector("#nine").addEventListener("click", nine);
document.querySelector("#div").addEventListener("click", div);
document.querySelector("#four").addEventListener("click", four);
document.querySelector("#five").addEventListener("click", five);
document.querySelector("#six").addEventListener("click", six);
document.querySelector("#mul").addEventListener("click", mul);
document.querySelector("#one").addEventListener("click", one);
document.querySelector("#two").addEventListener("click", three);
document.querySelector("#three").addEventListener("click", three);
document.querySelector("#plus").addEventListener("click", plus);
document.querySelector("#zero").addEventListener("click", zero);
document.querySelector("#dot").addEventListener("click", dot);
document.querySelector("#equal").addEventListener("click", equal);
document.querySelector("#minus").addEventListener("click", minus);

// first when he or she inputs store it on screen
// second if an operator exist - give a red background blink warning
// third onclicking "=" eval the string
function seven() {
  value += "7";
  screen.innerText = value;
}
function eight() {
  value += "8";
  screen.innerText = value;
}
function nine() {
  value += "9";
  screen.innerText = value;
}
function six() {
  value += "6";
  screen.innerText = value;
}
function five() {
  value += "5";
  screen.innerText = value;
}

function four() {
  value += "4";
  screen.innerText = value;
}

function three() {
  value += "3";
  screen.innerText = value;
}

function two() {
  value += "2";
  screen.innerText = value;
}
function one() {
  value += "1";
  screen.innerText = value;
}

function zero() {
  value += "0";
  screen.innerText = value;
}
function dot() {
  value += ".";
  screen.innerText = value;
}

function mul() {
  let endValue = value.at(-1);
  if (endValue === undefined) {
    document.querySelector("#data").classList.add("error");
    setTimeout(() => {
      document.querySelector("#data").classList.toggle("error");
    }, 300);
    console.log("a number needed");
    return;
  }
  if (signChecker(endValue)) {
    document.querySelector("#data").classList.add("error");
    setTimeout(() => {
      document.querySelector("#data").classList.toggle("error");
    }, 300);
    console.log("only one operator accepted");
    return;
  }
  value += "*";
  screen.innerText = value;
}

function div() {
  let endValue = value.at(-1);
  console.log(endValue);
  if (endValue === undefined) {
    document.querySelector("#data").classList.add("error");
    setTimeout(() => {
      document.querySelector("#data").classList.toggle("error");
    }, 300);
    console.log("a number needed");
    return;
  }
  if (signChecker(endValue)) {
    document.querySelector("#data").classList.add("error");
    setTimeout(() => {
      document.querySelector("#data").classList.toggle("error");
    }, 300);
    console.log("only one operator accepted");
    return;
  }
  value += "/";
  screen.innerText = value;
}

function plus() {
  let endValue = value.at(-1);
  if (endValue === undefined) {
    document.querySelector("#data").classList.add("error");
    setTimeout(() => {
      document.querySelector("#data").classList.toggle("error");
    }, 300);
    console.log("a number needed");
    return;
  }
  if (signChecker(endValue)) {
    document.querySelector("#data").classList.add("error");
    setTimeout(() => {
      document.querySelector("#data").classList.toggle("error");
    }, 300);
    console.log("only one operator accepted");
    return;
  }
  value += "+";
  screen.innerText = value;
}

function minus() {
  let endValue = value.at(-1);
  if (endValue === undefined) {
    document.querySelector("#data").classList.add("error");
    setTimeout(() => {
      document.querySelector("#data").classList.toggle("error");
    }, 300);
    console.log("a number needed");
    return;
  }
  if (signChecker(endValue)) {
    document.querySelector("#data").classList.add("error");
    setTimeout(() => {
      document.querySelector("#data").classList.toggle("error");
    }, 300);
    console.log("only one operator accepted");
    return;
  }
  value += "-";
  screen.innerText = value;
}
function equal() {
  let endValue = value.at(-1);
  if (signChecker(endValue)) {
    document.querySelector("#data").classList.add("error");
    setTimeout(() => {
      document.querySelector("#data").classList.toggle("error");
    }, 300);
    console.log("only one operator accepted");
    return;
  }
  screen.innerText = eval(value);
  console.log(screen.innerText);
  value = "";
}
// the signChecker helps to check if the last value on the screen is an operator
function signChecker(value) {
  // for (x in operators) {
  //   if (value === operators[x]) {
  //     return true;
  //   }
  // }
  // return false;
  if (operators.includes(value)) {
    return true;
  }
  return false;
}
