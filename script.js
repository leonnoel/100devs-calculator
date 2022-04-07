const selectChoice = document.querySelectorAll("span");
const showSelect = document.querySelector(".showSelect");
const showAnswer = document.querySelector(".showAnswer");
let result = false;

// An eventListener for each key, checking which is clicked
// selectChoice.forEach((element) =>
//   element.addEventListener("click", checkClick)
// );

Array.from(selectChoice).map(button => {
    button.addEventListener('click', calculate);
});

function calculate(e){
  switch(e.target.innerText){
    case 'C':
        showSelect.innerText = '';
        showAnswer.innerText = 0;
        break;
    case '=':
        try{
            showAnswer.innerText = eval(showSelect.innerText);
            console.log('anaga', showAnswer)
        } catch {
            showAnswer.innerText = "Error"
        }
        break;
    case '←':
        if (showSelect.innerText){
           showSelect.innerText = showSelect.innerText.slice(0, -1);
        }
        break;
    default:
        showSelect.innerText += e.target.innerText;
}
}

/*
function checkClick(e) {
  console.log("Part 2", e.target.innerText);
  let currentString = e.target.innerText.replace("C", "");
  let lastChar = currentString[currentString.length - 1];
  console.log("we go get", lastChar);
  console.log("currenString", currentString);

  if (e.target.innerText.toLowerCase() === "c") {
    clearAll();
  }
  // if result is still false on display
  if (result === false) {
    showSelect.innerText += currentString;
  } else if (
    (result === true && lastChar === "+") ||
    lastChar === "-" ||
    lastChar === "/" ||
    lastChar === "*"
  ) {
    //when the result is true and it is displayed and user includes a special charater
    result === false;
    //add to what is being displayed
    showSelect.innerText += currentString;
  } else {
    //result is true and it displayed and a numeric key is pressed
    //clear the display and add the new dispalay to start a new operation
    result === false;
    showSelect.innerText = "";
    showSelect.innerText += currentString;
  }
  // if(e.target.innerText == '='){
  //     showAnswer.innerText = theMath(showSelect)
  // }
//========calculations
}

//clear all function, to clear user input
function clearAll() {
  showSelect.innerText = "";
  showAnswer.innerText = 0;
}

function theMath(x) {
  console.log("new", x);
  return x + 5;
}

//calculations
if (e.target.innerText === "=") {
    let inputString = showSelect.innerHTML;
    console.log("all input string", inputString);
    //formed an array of numbers only.
    let numbersArray = inputString.split(/\=|\+|\-|\×|\÷|\(|\)/g);
    console.log("numbers", numbersArray);
    let operatorsArray = inputString.replace(/[0-9]|\.|\(|\)|\=/g, "").split("");
    console.log("all operator passed", operatorsArray);

    let divide = operatorsArray.indexOf("/");
    while (divide != -1) {
      numbersArray.splice(
        divide,
        2,
        numbersArray[divide] / numbersArray[divide + 1]
      );
      operatorsArray.splice(divide, 1);
      divide = operatorsArray.indexOf("/");
    }

    let multiply = operatorsArray.indexOf("/");
    while (multiply != -1) {
      numbersArray.splice(
        multiply,
        2,
        numbersArray[multiply] * numbersArray[multiply + 1]
      );
      operatorsArray.splice(multiply, 1);
      multiply = operatorsArray.indexOf("/");
    }

    let substract = operatorsArray.indexOf("/");
    while (substract != -1) {
      numbersArray.splice(
        substract,
        2,
        numbersArray[substract] - numbersArray[substract + 1]
      );
      operatorsArray.splice(substract, 1);
      substract = operatorsArray.indexOf("/");
    }

    let addition = operatorsArray.indexOf("/");
    while (addition != -1) {
      numbersArray.splice(
        addition,
        2,
        numbersArray[addition] / parseFloat(numbersArray[addition + 1])
      );
      operatorsArray.splice(addition, 1);
      addition = operatorsArray.indexOf("/");
    }

    showAnswer.innerText = numbersArray[0]; // display the output.
    result = true
  } */


