let result = 0;
let selectedNumber = 0;
let decimal = null;
let lastOperation = null;
const calculationZone = document.querySelector(".displayCalc");
const resultZone = document.querySelector(".displayResult");
initialize();

function calculate() {
  if (decimal !== null) {
    console.log(`selectedNumber : ${selectedNumber} and decimal : ${decimal}`);
    selectedNumber = Number(decimal) / 10 ** decimal.length + selectedNumber;
    console.log(`selectedNumber : ${selectedNumber}`);
  }

  switch (lastOperation) {
    case "+":
      result += selectedNumber;
      break;
    case "-":
      result -= selectedNumber;
      break;
    case "*":
      result *= selectedNumber;
      break;
    case "/":
      result =
        Math.round((result / selectedNumber + Number.EPSILON) * 100) / 100;
      break;
    case "%":
      result =
        Math.round(((result % selectedNumber) + Number.EPSILON) * 100) / 100;
      break;
    default:
      result = selectedNumber;
      break;
  }
  console.log(`result : ${result}`);

  decimal = null;
  selectedNumber = 0;
  console.log(`selectedNumber : ${selectedNumber} and decimal : ${decimal}`);
}

const digits = document.querySelectorAll(".digit");
digits.forEach((element) => {
  element.addEventListener("click", checkAndProcess);
});

const operations = document.querySelectorAll(".operation");
operations.forEach((element) => {
  element.addEventListener("click", checkAndProcess);
});

function checkAndProcess(element) {
  const elem = element.target;
  console.log(elem.innerText);

  if (elem.classList.contains("digit")) {
    if (lastOperation !== null && selectedNumber === 0 && decimal === null) {
      calculationZone.innerText = `${calculationZone.innerText} ${elem.innerText}`;
    } else {
      calculationZone.innerText = `${calculationZone.innerText}${elem.innerText}`;
    }

    if (decimal === null && elem.classList.contains("period")) {
      decimal = "";
      console.log(`decimal : ${decimal}`);
    }

    if (decimal !== null && !elem.classList.contains("period")) {
      decimal += elem.innerText;
      console.log(`decimal : ${decimal}`);
    } else if (!elem.classList.contains("period")) {
      selectedNumber = selectedNumber * 10 + Number(elem.innerText);
      console.log(`selectedNumber : ${selectedNumber}`);
    }
  } else if (elem.classList.contains("operation")) {
    calculationZone.innerText =
      result !== 0 && (selectedNumber !== 0 || decimal !== null)
        ? `(${calculationZone.innerText}) ${elem.innerText}`
        : `${calculationZone.innerText} ${elem.innerText}`;

    calculate();

    lastOperation = elem.innerText;
  }
}

const resultRequest = document.querySelector(".equals");
resultRequest.addEventListener("click", displayResult);

function displayResult() {
  if (selectedNumber !== 0 || decimal !== null) {
    calculate();
  }

  resultZone.innerText = result;
}

const acRequest = document.querySelector(".AC");
acRequest.addEventListener("click", initialize);

function initialize() {
  result = 0;
  selectedNumber = 0;
  decimal = null;
  lastOperation = null;
  calculationZone.innerText = "";
  resultZone.innerText = "";
  console.log(
    `selectedNumber : ${selectedNumber} and decimal : ${decimal} and result : ${result}`
  );
}
