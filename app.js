// DOM Elements

// clock
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");

// calculator
const valueEl = document.querySelector(".value");

const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const percentEl = document.querySelector(".percent");

const additionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".division");
const equalEl = document.querySelector(".equal");

const decimalEl = document.querySelector(".decimal");
const number0El = document.querySelector(".number-0");
const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");
const number3El = document.querySelector(".number-3");
const number4El = document.querySelector(".number-4");
const number5El = document.querySelector(".number-5");
const number6El = document.querySelector(".number-6");
const number7El = document.querySelector(".number-7");
const number8El = document.querySelector(".number-8");
const number9El = document.querySelector(".number-9");

const numberElArray = [
  number0El,
  number1El,
  number2El,
  number3El,
  number4El,
  number5El,
  number6El,
  number7El,
  number8El,
  number9El,
];

// variables

let valueStrInMemory = null;
let operatorInMempory = null;

// Functions
const getValueAsStr = () => {
  const currentDisplayStr = valueEl.textContent;
  return currentDisplayStr.split(",").join("");
};

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === ".") {
    valueEl.textContent += ".";
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split(".");
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumClick = (numStr) => {
  const currentValueStr = getValueAsStr();

  if (currentValueStr === "0") {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueAsNum();

  const valueNumInMemory = parseFloat(valueStrInMemory);

  let newValueNum;
  if (operatorInMempory === "addition") {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMempory === "subtraction") {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMempory === "multiplication") {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMempory === "division") {
    newValueNum = valueNumInMemory - currentValueNum;
  }

  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMempory = operation;
    setStrAsValue("0");
    return;
  }

  valueStrInMemory = getResultOfOperationAsStr();
  operatorInMempory = operation;
  setStrAsValue("0");
};

// Add event listeners to functions

acEl.addEventListener("click", () => {
  setStrAsValue("0");
  valueStrInMemory = null;
  operatorInMempory = null;
});

pmEl.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();

  if (currentValueStr === "-0") {
    setStrAsValue("0");
    return;
  }

  if (currentValueNum >= 0) {
    setStrAsValue("-" + currentValueNum);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});

percentEl.addEventListener("click", () => {
  const currentDisplayStr = getValueAsNum();
  const newValueNum = currentDisplayStr / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMempory = null;
});

// add event listeners to operators

additionEl.addEventListener("click", () => {
  handleOperatorClick("addition");
});

subtractionEl.addEventListener("click", () => {
  handleOperatorClick("subtraction");
});

multiplicationEl.addEventListener("click", () => {
  handleOperatorClick("multiplication");
});

divisionEl.addEventListener("click", () => {
  handleOperatorClick("division");
});

equalEl.addEventListener("click", () => {
  if (valueStrInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMempory = null;
  }
});

// Add event listeners to numbers and decimals

for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];

  numberEl.addEventListener("click", () => {
    handleNumClick(i.toString());
  });
}

decimalEl.addEventListener("click", () => {
  const currentValueStr = getValueAsStr();

  if (!currentValueStr.includes(".")) {
    setStrAsValue(currentValueStr + ".");
  }
});

// Set up the time

const updateTime = () => {
  const currentTime = new Date();

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  hourEl.textContent = currentHour.toString();
  minuteEl.textContent = currentMinute.toString().padStart(2, "0");
};
setInterval(updateTime, 1000);
updateTime();
