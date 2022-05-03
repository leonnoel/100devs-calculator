// function Calculator() {
//   let currentDisplayView = "0";
//   let previousDisplayView = "";
//   let operation = "";

//   // Selectors
//   const display = document.querySelector(".display");
//   const buttons = document.querySelectorAll(".buttons button");

//   // Event Listener
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       if (button.classList.contains("digit")) {
//         currentDisplayView === '0' ? (currentDisplayView = button.innerText) : (currentDisplayView += button.innerText);
//       } else if (button.classList.contains("decimal")) {
//         if (!currentDisplayView.includes(".")) {
//           currentDisplayView += '.';
//         }
//       } else if (button.classList.contains("operator")) {
//         operation = button.innerText;
//         previousDisplayView = currentDisplayView;
//         currentDisplayView = "0";
//       } else if (button.classList.contains("equals")) {
//         currentDisplayView = getResult();
//       }

//       updateDisplay();
//     });
//   });

//   // Helper Functions
//   function updateDisplay() {
//     display.innerText = currentDisplayView;
//   }

//   function getResult() {
//     const a = +previousDisplayView;
//     const b = +currentDisplayView;

//     switch(operation) {
//       case '+':
//         return a + b;
//       case '-':
//         return a - b;
//       case 'x':
//         return a * b;
//       case '/':
//         return a / b;
//     }
//   }

//   // // Selectors
//   // const display = document.querySelector('.display');

//   // const decimal = document.querySelector('.decimal');
//   // const equals = document.querySelector('.equals');

//   // const digits = document.querySelectorAll('.digit');
//   // const operators = document.querySelectorAll('.operator');

//   // // Event Listeners
//   // digits.forEach((button) => {
//   //   button.addEventListener('click', () => display.innerText = currentDisplayView += button.innerText);
//   // });

//   // decimal.addEventListener('click', function() {
//   //   if (!currentDisplayView.includes('.')) {
//   //     display.innerText = currentDisplayView += ".";
//   //   }
//   // });

//   // operators.forEach(operator => {
//   //   operator.addEventListener('click', function() {
//   //     operation = operator.innerText;
//   //     previousDisplayView = currentDisplayView;
//   //     currentDisplayView = '';
//   //     display.innerText = currentDisplayView;
//   //   })
//   // });

//   // equals.addEventListener('click', function() {
//   //   if (operation) {
//   //     currentDisplayView = getResult();
//   //     display.innerText = currentDisplayView;
//   // }
//   // })

//   // // Helper functions
//   // function getResult() {
//   //   const a = +previousDisplayView;
//   //   const b = +currentDisplayView;

//   //   switch(operation) {
//   //     case '+':
//   //       return a + b;
//   //     case '-':
//   //       return a - b;
//   //     case 'x':
//   //       return a * b;
//   //     case '/':
//   //       return a / b;
//   //   }
//   // }
// }

// Constructor
function Calculator() {
  // Properties
  let currentDisplayView = "0";
  let previousDisplayView = "";
  let operation = "";

  // Methods
  this.setDigit = function(digit) {
    return currentDisplayView === "0" ? (currentDisplayView = digit) : (currentDisplayView += digit);
  }

  this.updateDisplay = function () {
    return currentDisplayView;
  }

  // Helper Functions

}

// Object Instance
const calculator = new Calculator();

// Selectors
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

// Event Listener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("digit")) {
      calculator.setDigit(button.innerText);
    } else if (button.classList.contains("decimal")) {
      if (!currentDisplayView.includes(".")) {
        currentDisplayView += '.';
      }
    } else if (button.classList.contains("operator")) {
      operation = button.innerText;
      previousDisplayView = currentDisplayView;
      currentDisplayView = "0";
    } else if (button.classList.contains("equals")) {
      currentDisplayView = getResult();
    }

    display.innerText = calculator.updateDisplay();
  });
});
