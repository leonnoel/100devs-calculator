// Function to update the display with the entered value
function updateDisplay(value) {
  let displayNumber = document.querySelector('.displayNumber');
  if (displayNumber.textContent === '0') {
    displayNumber.textContent = '';
  }
  displayNumber.textContent += value;
}

document.querySelector('.bottom').addEventListener('click', function(event) {
  if (event.target.classList.contains('button')) {
    let value = parseFloat(event.target.textContent);
    updateDisplay(value);
  }
});

// Function to clear the screen
function clearScreen() {
  let displayNumber = document.querySelector('.displayNumber');
  if (displayNumber.textContent !== '0') {
    displayNumber.textContent = '0';
  }
}

document.querySelector('.clearButton').addEventListener('click', function() {
  clearScreen();
});
