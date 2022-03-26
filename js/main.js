let equation = []
let reset = true

function Button(name, value) {
  this.name = name
  this.value = value

  this.draw = function() {
    document.querySelector('#interface').innerHTML += `<a href="#" class="button" id="${this.name}">${this.value}</a>`;
  }

  this.giveEventListener = function() {
    document.querySelector(`#${this.name}`).addEventListener('click', handlePress)
  }
}

function evaluate() {
  //equation must be of odd length and alternate num, op
  let valid = equation.length % 2 !== 0 && equation.reduce((flag, c, i) => i % 2 === 0? flag && !isNaN(Number(c)): flag && /[+x/-]/.test(c), true) 
  if (!valid) { 
    reset = true
    equation = ['Invalid expression']
    return
  }
  
  //maintain proper order of operations
  for (let i = 1; i < equation.length - 1; i++) {
    if (equation[i] === 'x' || equation[i] === '/') {
      equation[i] === 'x'
        ? equation.splice(i-1, 3, Number(equation[i-1]) * Number(equation [i+1]))
        : equation.splice(i-1, 3, Number(equation[i-1]) / Number(equation [i+1]))
      --i;
    }
  }

  for (let i = 1; i < equation.length - 1; i++) {
    if (equation[i] === '+' || equation[i] === '-') {
      equation[i] === '+'
        ? equation.splice(i-1, 3, Number(equation[i-1]) + Number(equation [i+1]))
        : equation.splice(i-1, 3, Number(equation[i-1]) - Number(equation [i+1]))
      --i
    }
  }

  //end of current calculation
  reset = true
}  

function handlePress(event) {
  if (reset) {
    equation = []
    reset = false
  }

  let value = event.target.innerText 
  switch(value) {
    case '+':
    case '-':
    case 'x':
    case '/':
      equation.push(value)
      break;
    case '=': evaluate()
      break;
    default: //digits
      if (/\d|[.]/.test(equation[equation.length-1]) || /-/.test(equation[equation.length-1]) && equation.length -1 % 2 === 0) {
        equation[equation.length-1] += value 
      } else {
        equation.push(value)
      }
      break;
  }

  //display
  document.querySelector('#display').innerText = equation.join(' ')
}

let buttons = [
  new Button('seven', 7),
  new Button('eight', 8),
  new Button('nine', 9),
  new Button('divide', '/'),
  new Button('four', 4),
  new Button('five', 5),
  new Button('six', 6),
  new Button('multiply', 'x'),
  new Button('one', 1),
  new Button('two', 2),
  new Button('three', 3),
  new Button('add', '+'),
  new Button('zero', 0),
  new Button('point', '.'),
  new Button('equals', '='),
  new Button('subtract', '-')
]

buttons.forEach(b => {
  b.draw()  
})

buttons.forEach(b => {
  b.giveEventListener()
})
