let butt = Array.from(document.querySelectorAll('button'))

butt.forEach(but => but.addEventListener('click',type))

function type(b){
  if(b.toElement.innerText !== '='){
    let op = document.querySelector('#chain')
    op.innerText += b.toElement.innerText
  }else if(b.toElement.innerText === '='){
    document.querySelector('#result').innerText = powerCalc.calculate(document.querySelector('#chain').innerText)
    document.querySelector('#chain').innerText = document.querySelector('#result').innerText
  }
}

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "/": (a, b) => a / b,
    "x": (a, b) => a * b
  };

  this.calculate = function(str) {

    let split = str.split(''),
      a = +split[0],
      op = split[1],
      b = +split[2];

    return this.methods[op](a, b);
  };
}
let powerCalc = new Calculator
