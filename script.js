const allButtons = Array.from(document.getElementsByClassName('button'));

function Calculator() {
  let operationStack;
  operationStack = [];

  this.processEvent = function(context) {
    console.log("You did something!");
    const screen = document.querySelector('#stack');

    if(isNaN(Number(context))) {
      this.calculate(context);
    }

    operationStack.push(context);

    screen.innerText = operationStack.join(' ');
  }

  this.calculate = function(oper) {
    console.log("Calculate");
  //  operationStack.clear();
  }
}

const calculator = new Calculator();

allButtons.forEach(option => {option.addEventListener('click', function() {
    calculator.processEvent(this.textContent.trim());
  })
})
