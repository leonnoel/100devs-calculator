// DOM Elements
const displayEl = document.querySelector('.display')

const acEl = document.querySelector('#ac')
const pmEl = document.querySelector('#pm')
const percentEl = document.querySelector('#percent')

const divideEl = document.querySelector('#divideSign')
const multiplyEl = document.querySelector('#multiplySign')
const subtractEl = document.querySelector('#subtractSign')
const addEl = document.querySelector('#plusSign')

const decimalEl = document.querySelector('#decimal')
const number0El = document.querySelector('#int0')
const number1El = document.querySelector('#int1')
const number2El = document.querySelector('#int2')
const number3El = document.querySelector('#int3')
const number4El = document.querySelector('#int4')
const number5El = document.querySelector('#int5')
const number6El = document.querySelector('#int6')
const number7El = document.querySelector('#int7')
const number8El = document.querySelector('#int8')
const number9El = document.querySelector('#int9')
const numberElArray = [
  number0El, number1El, number2El, number3El, number4El, number5El, number6El, number7El, number8El, number9El
]

// Functions
const handleNumberClick = (numStr) =>{
  const currentDisplayStr = displayEl.textContent;
  if (currentDisplayStr === '0') {
    displayEl.textContent = numStr;
  } else {
    displayEl.textContent = currentDisplayStr + numStr;
  }
}

// Add Event Listeners to numbers and buttons
for(let i=0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener('click', () => {
    handleNumberClick(i.toString());
 });
}

// number0El.addEventListener('click', number0)
// number1El.addEventListener('click', number1)
// number2El.addEventListener('click', number2)
// number3El.addEventListener('click', number3)
// number4El.addEventListener('click', number4)
// number5El.addEventListener('click', number5)
// number6El.addEventListener('click', number6)
// number7El.addEventListener('click', number7)
// number8El.addEventListener('click', number8)
// number9El.addEventListener('click', number9)

// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

// document.getElementById("pumpkin").style.cursor = "pointer";
// document.getElementById("dominosPizza").style.cursor = "pointer";
// document.getElementById("zebra").style.cursor = "pointer";
// document.getElementById("cantThinkOfAnything").style.cursor = "pointer";


function number1() {
  console.log('Hello World!')
  document.querySelector('.display').innerText = 1
}

function number2() {
  console.log('Hello World2!')
  document.querySelector('.display').innerText = 2
}

function number3() {
  document.querySelector('.display').innerText = 3
}

function number4() {
  document.querySelector('.display').innerText = 4
}

function number5() {
  document.querySelector('.display').innerText = 5
}

function number6() {
  document.querySelector('.display').innerText = 6
}

function number7() {
  document.querySelector('.display').innerText = 7
}

function number8() {
  document.querySelector('.display').innerText = 8
}

function number9() {
  document.querySelector('.display').innerText = 9
}

function number0() {
  document.querySelector('.display').innerText = 0
}



// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutdisplay').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutdisplay').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutdisplay').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutdisplay').innerHTML = total
// }
