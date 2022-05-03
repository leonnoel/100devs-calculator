function Calculator() {
  let currentDisplayView = "0";
  let previousDisplayView = "";
  let operation = "";

  // Selectors
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".buttons button");

  // Event Listener
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("digit")) {
        currentDisplayView === '0' ? (currentDisplayView = button.innerText) : (currentDisplayView += button.innerText);
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

      updateDisplay();
    });
  });

  // Helper Functions
  function updateDisplay() {
    display.innerText = currentDisplayView;
  }

  function getResult() {
    const a = +previousDisplayView;
    const b = +currentDisplayView;

    switch(operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case 'x':
        return a * b;
      case '/':
        return a / b;
    }
  }
}

// Object Instance
const calculator = new Calculator();