const UInumber = document.querySelectorAll('[data-number]'),
  UIpreviousInput = document.querySelector('[data-previous-operand]'),
  UIcurrentInput = document.querySelector('[data-current-operand]'),
  UIoperation = document.querySelectorAll('[data-operation]'),
  UIequals = document.querySelector('[data-equals]'),
  UIcalculator = document.querySelector('.calculator-buttons');

const calculator = new Calculator(UIcurrentInput, UIpreviousInput);



UIcurrentInput.textContent = '0';

UInumber.forEach((button) => {
  button.addEventListener('mousedown', (e) => {
    calculator.appendNumber(button.textContent);
    UIcurrentInput.textContent += button.textContent;
    calculator.getDisplay();
    calculator.upDateDisplay();

    e.preventDefault();
  });
});


UIoperation.forEach((operation) => {
  operation.onclick = () => {
    calculator.chooseOperation(operation.textContent);
  };
});

UIequals.addEventListener('click', display);
function display(e) {
  calculator.compute();
  calculator.getDisplay();
  calculator.upDateDisplay();
  UIpreviousInput.textContent = calculator.previousDigit;
  e.preventDefault();
}

