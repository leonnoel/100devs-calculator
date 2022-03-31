class Button {
  constructor(name, value) {
    this.name = name
    this.value = value
  }

  draw() {
    document.querySelector('#interface').innerHTML += `<a href="#" class="button" id="${this.name}">${this.value}</a>`;
  }

  giveEventListener() {
    document.querySelector(`#${this.name}`).addEventListener('click', handlePress)
  }
}

class Calculator {
  constructor() {
    this.equation = []
    this.reset = true
    this.buttons = [
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

    this.buttons.forEach(b => {
      b.draw()  
    })
    
    this.buttons.forEach(b => {
      b.giveEventListener()
    })
  }

  evaluate() {
    //equation must be of odd length and alternate num, op
    let valid = this.equation.length % 2 !== 0 && this.equation.reduce((flag, c, i) => i % 2 === 0? flag && !isNaN(Number(c)): flag && /[+x/-]/.test(c), true) 
    if (!valid) { 
      this.reset()
      this.equation = ['Invalid expression']
      return
    }
    
    //maintain proper order of operations
    for (let i = 1; i < this.equation.length - 1; i++) {
      if (this.equation[i] === 'x' || this.equation[i] === '/') {
        this.equation[i] === 'x'
          ? this.equation.splice(i-1, 3, Number(this.equation[i-1]) * Number(this.equation [i+1]))
          : this.equation.splice(i-1, 3, Number(this.equation[i-1]) / Number(this.equation [i+1]))
        --i;
      }
    }
  
    for (let i = 1; i < this.equation.length - 1; i++) {
      if (this.equation[i] === '+' || this.equation[i] === '-') {
        this.equation[i] === '+'
          ? this.equation.splice(i-1, 3, Number(this.equation[i-1]) + Number(this.equation [i+1]))
          : this.equation.splice(i-1, 3, Number(this.equation[i-1]) - Number(this.equation [i+1]))
        --i
      }
    }
  
    //end of current calculation
    this.reset = true
  }

  addToEquation(value) {
    if(this.reset) {
      this.reset = false
      this.equation = []
    }

    switch(value) {
      case '+':
      case '-':
      case 'x':
      case '/':
        this.equation.push(value)
        break;
      case '=': calc.evaluate()
        break;
      default: //digits
        if (/\d|[.]/.test(this.equation[this.equation.length-1]) || /-/.test(this.equation[this.equation.length-1]) && this.equation.length % 2 === 1) {
          this.equation[this.equation.length-1] += value 
        } else {
          this.equation.push(value)
        }
        break;
    }
  }

  getEquationString() {
    return this.equation.join(' ')
  }
}

let calc = new Calculator()

function handlePress(event) {
  let value = event.target.innerText 
  calc.addToEquation(value)

  //display
  document.querySelector('#display').innerText = calc.getEquationString()
}


