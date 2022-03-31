const allButtons = Array.from(document.getElementsByClassName('button'));

allButtons.forEach(option => {option.addEventListener('click', function() {
    processEvent(this.textContent.trim());
  })
})

function processEvent(innerText) {
  console.log("You did something!");
  const screen = document.querySelector('.screen');

  screen.innerText = innerText;
}
