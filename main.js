let displayNumber = document.querySelector('.displayNumber')

//Add number to screen
function addNumToScreen(value) {
  displayNumber.innerText = value;
}

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', () => {
    if(displayNumber.innerText !== 0){
      console.log('hi mom')
    } else if(displayNumber.innerText === 0){
      let buttonValue = button.innerText;
      addNumToScreen(buttonValue);
    }
  })
})


// Clear screen to 0
function clearScreen() {
  displayNumber.innerText = '0';
}

document.querySelector('.clearButton').addEventListener('click', () => { 
  clearScreen();
});





