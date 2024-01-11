document.getElementsByClassName('red button').addEventListener('click', function() {
  updateDisplay('7');
});
 
function updateDisplay(value) {
  // Get the displayNumber element
  var displayNumber = document.querySelector('.displayNumber');

  // Append the clicked value to the existing content
  displayNumber.textContent += value;
}