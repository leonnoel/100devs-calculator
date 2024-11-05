let answer = document.querySelector('.answerBox');
let equal = document.querySelector('#equal');
let multiply = document.querySelector('#multiply');
let calcButton = document.querySelector('.numberPlate');
let clear = document.querySelector('#clear');

calcButton.addEventListener('click', function (event) {
  let target = event.target;
  if (target.className != 'calcButton' || target.idName == 'equal') return;
  answer.innerText += target.innerText;
  equal.addEventListener('click', function () {
    answer.innerText = eval(answer.innerText).toFixed(8);
  });
  clear.addEventListener('click', function () {
    answer.innerText = '';
  });
});

multiply.addEventListener('click', function () {
  answer.innerText += '*';
});

//  make the below functionality work

// class Calculator {
//   constructor() {
//     this.answer = document.querySelector('.answerBox');
//     this.equal = document.querySelector('#equal');
//     this.multiply = document.querySelector('#multiply');
//     this.calcButton = document.querySelector('.numberPlate');
//     this.clear = document.querySelector('#clear');
//     this.calculate();
//   }

//   calculate() {
//     this.calcButton.addEventListener('click', (event) => this.doCalc(event));
//   }

//   doCalc() {
//     let target = event.target;
//     if (target.className != 'calcButton' || target.idName == 'equal') return;
//     this.answer.innerText += target.innerText;
//     this.equal.addEventListener('click', function () {
//       this.answer.innerText = eval(this.answer.innerText).toFixed(8);
//     });
//     this.clear.addEventListener('click', function () {
//       this.answer.innerText = '';
//     });

//     this.multiply.addEventListener('click', function () {
//       this.answer.innerText += '*';
//     });
//   }
// }
// document.addEventListener('DOMContentLoaded', () => new Calculator());
