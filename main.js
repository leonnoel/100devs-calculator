/**************** BUTTONS *************** */
// display
const display = document.querySelector('h2');

// number keys
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const decimal = document.querySelector('#point');

// function keys
const plus = document.querySelector('#add');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');

const total = document.querySelector('#equal');

/************** FUNCTIONALITY ****************** */

// const calculator = {

//     displayText: 0,
//     currentValue: null,
//     localStorage: 0,
//     operator: null,

//     add: function(){
//         this.currentValue += this.localStorage;
//     }, 

//     subtract: function() {
//         this.currentValue -= this.localStorage;
//     }, 

//     multiply: function() {
//         this.currentValue *= this.localStorage;
//     },

//     divide: function() {
//         this.currentValue /= this.localStorage;
       
//     },

//     equals: function() {
//         this.displayText = this.currentValue;
//         display.innerHTML = this.displayText;
//     }
// };

// /**************** SET VALUES **************** */

// one.addEventListener('click', setCV => {
//     if (calculator.currentValue === null && calculator.operator === null) {
//         calculator.currentValue = 1;
//         display.innerHTML = calculator.currentValue;
//         console.log(`current value is: ${calculator.currentValue}`)
//     } else if (calculator.currentValue !== null && calculator.operator === null ) {
//         if (calculator.currentValue < 10) {
//             calculator.currentValue *= 10;
//             calculator.currentValue += 1;
//             console.log(`current value is: ${calculator.currentValue}`)
//             display.innerHTML = calculator.currentValue;
//         } else if (calculator.currentValue < 100) {
//             calculator.currentValue *= 10;
//             calculator.currentValue += 1;
//             console.log(`current value is: ${calculator.currentValue}`)
//             display.innerHTML = calculator.currentValue;
//         } else if (calculator.currentValue < 1000) {
//             calculator.currentValue *= 10;
//             calculator.currentValue += 1;
//             console.log(`current value is: ${calculator.currentValue}`)
//             display.innerHTML = calculator.currentValue;
//         }
//     } else { 
//         if (calculator.localStorage === 0) {
//             calculator.localStorage = 1;
//             display.innerHTML = calculator.localStorage;
//             console.log(`local storage is ${calculator.localStorage}`);
//         } else if (calculator.localStorage < 10) {
//             calculator.localStorage *= 10;
//             calculator.localStorage += 1;
//             display.innerHTML = calculator.localStorage;
//             console.log(`local storage is ${calculator.localStorage}`);
//         } else if (calculator.localStorage < 100) {
//             calculator.localStorage *= 10;
//             calculator.localStorage += 1;
//             display.innerHTML = calculator.localStorage;
//             console.log(`local storage is ${calculator.localStorage}`);
//         } else if (calculator.localStorage < 1000) {
//             calculator.localStorage *= 10;
//             calculator.localStorage += 1;
//             display.innerHTML = calculator.localStorage;
//             console.log(`local storage is ${calculator.localStorage}`);
//         }
        
//     }
   
// });

// /******************* DEFINE ARITHMETIC OPERATIONS ******************* */
// plus.addEventListener('click', setOperation => {
//     calculator.operator = '+';
//     console.log(`operator is; ${calculator.operator}`);
// });
// minus.addEventListener('click', setOperation => {
//     calculator.operator = '-';
//     console.log(`operator is; ${calculator.operator}`);
// });
// multiply.addEventListener('click', setOperation => {
//     calculator.operator = '*';
//     console.log(`operator is; ${calculator.operator}`);
// });
// divide.addEventListener('click', setOperation => {
//     calculator.operator = '/';
//     console.log(`operator is; ${calculator.operator}`);
// });


// /********************* RUN ARITHMETIC OPERATIONS ******************* */
// total.addEventListener('click', caclulate => {
//     if (calculator.operator === '+') {
//         calculator.add();
//         display.innerHTML = calculator.currentValue;
//     } else if (calculator.operator === '-') {
//         calculator.subtract();
//         display.innerHTML = calculator.currentValue;
//     } else if (calculator.operator === '*') {
//         calculator.multiply();
//         display.innerHTML = calculator.currentValue;
//     } else if (calculator.operator === '/') {
//         calculator.divide();
//         display.innerHTML = calculator.currentValue;
//     }

//     calculator.operator = null;
//     calculator.localStorage = null;
// });