const allButtons = Array.from(document.getElementsByClassName('button'));

function Calculator() {
  let operationStack;
  operationStack = [];

  this.processEvent = function(context) {
    console.log("You did something!");
    const screen = document.querySelector('.screen');

    screen.innerText = context;
  }

  this.calculate = function() {

  }
}

const calculator = new Calculator();

allButtons.forEach(option => {option.addEventListener('click', function() {
    calculator.processEvent(this.textContent.trim());
  })
})
