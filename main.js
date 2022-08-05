// Inital variables
let firstVal;
let secondVal;

// Operator Functions
const add = (a,b) => +a + +b;
const subtract = (a,b) => +a - +b;
const multiply = (a,b) => +a * +b;
const divide = (a,b) => {
  if (b === '0'){
    return 'dream on';
  }
  return +a / +b;
};
const operate = (op, n1, n2) => {
  if (op === 'add') {
      disVal = add(n1, n2).toString();      
    } else if (op === 'subtract') {
      disVal = subtract(n1, n2).toString();
    } else if (op === 'multiply') {
      disVal = multiply(n1, n2).toString();
    } else if (op === 'divide') {
      if (n2 === '0'){
        disVal = 'dreamland'
      }
      disVal = divide(n1, n2).toString();
    }
};


const display = document.querySelector('.display');
let disVal = '0';
const num = document.querySelectorAll('.num');
const dot = document.querySelector('#dot');
const addDot = () => {
  if (!disVal.includes('.')){
    disVal += '.'; 
  }
}

// Display numbers when clicked 
const clickNum = () => {
  num.forEach(number => {
    number.addEventListener('click', () => {
      if (display.textContent === '0' || 0){
        disVal = '';
      };
      if (number.classList[1] === 'num') {
        if (number.classList[2] === 'dot'){
          addDot();
        } else {
          disVal += number.textContent;
        }
        display.textContent = disVal;
      };      
      if (disVal.length >= 9){
        display.textContent = disVal.substring(0,9);
      };
    })
  })
}

clickNum();


// Clear the display using the 'C' button
const clearVal = document.querySelector('.clear');
const clearDisplay = () => {
  clearVal.addEventListener('click', () =>{
    display.textContent = '0';
    disVal = null;
    opUsed = null;
    firstVal = null;
    secondVal = null;
  });
}

clearDisplay();

// Save value n1, save operator value, & reset display
const op = document.querySelectorAll('.op');
let opUsed = '';
const opNext = () => {
  op.forEach(operator => {
    operator.addEventListener('click', () => {
      if (opUsed === ''){
        firstVal = disVal.substring(0,9);
        disVal = '';
        opUsed = operator.classList[2];
      } else {
        secondVal = disVal.substring(0,9);
        operate(opUsed, firstVal, secondVal);
        display.textContent = disVal.substring(0,9);
        firstVal = display.textContent;
        disVal = '';
        secondVal = '0';
        opUsed = operator.classList[2];
      }
   })
  })
}

opNext();


// Save n2 and call operator function
const equals = document.querySelector('.equals')
const onEquals = () => {
  equals.addEventListener('click', () => {
    secondVal = disVal.substring(0,9);
    operate(opUsed, firstVal, secondVal);
    display.textContent = disVal.substring(0,9);
    firstVal = display.textContent;
    secondVal = '0';
    opUsed = '';
  })
}

onEquals();