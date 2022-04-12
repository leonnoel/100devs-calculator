function Dictionary() {
  this['+'] = (a, b) => +a + +b
  this['-'] = (a, b) => +a - +b
  this['x'] = (a, b) => +a * +b
  this['/'] = (a, b) => {
    if (+b === 0) throw Error('Cannot divide by zero')
    return +a / +b
  }
}
