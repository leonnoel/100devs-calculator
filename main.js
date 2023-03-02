// Get all the necessary DOM elements
const answerBox = document.querySelector('.answerBox');
const buttons = document.querySelectorAll('.buttons');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the current value in the answer box
    let currentVal = answerBox.innerText;
    // Get the value of the clicked button
    let buttonVal = button.innerText;

   
    // Check for equals button
    if (buttonVal === '=') {
      // Use eval() function to evaluate the expression and display result
      answerBox.innerText = eval(currentVal);
    }
    // For all other buttons, concatenate their values to the current value in the answer box
    else {
      answerBox.innerText = currentVal + buttonVal;
    }
  });
});
