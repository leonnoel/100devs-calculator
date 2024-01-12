function updateDisplay(value) {
  var displayNumber = document.querySelector('.displayNumber');
  displayNumber.textContent += value;
}

// Add a click event listener to the parent container
document.querySelector('.bottom').addEventListener('click', function(event) {
  // Check if the clicked element has the 'button' class
  if (event.target.classList.contains('button')) {
    // Extract the numeric value from the clicked button's text content
    var value = parseFloat(event.target.textContent);
    
    // Call the updateDisplay function with the extracted value
    updateDisplay(value);
  }
});