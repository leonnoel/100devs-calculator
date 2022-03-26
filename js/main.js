let equation = ''

function Button(name, value) {
  this.name = name
  this.value = value

  this.render = function() {
    document.querySelector('#interface').innerHTML += `<a href="#" class="button" id="${this.name}">${this.value}</a>`
  }
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

buttons.map(b => b.render())

document.querySelector
