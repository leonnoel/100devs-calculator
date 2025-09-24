function Calculator() {
  this.value = []
  this.operation = null

  this.appendValue = function (inputVal) {
    this.value.push(inputVal)
    this.updateValue()
  }

  this.handleOperation = function () {
    console.log('handle operation')

    const result = eval(this.value.join('').replace(/x/g, '*'))

    this.value = String(result).split('')
    this.updateValue()
  }

  this.handleOperatorChange = function (inputVal) {
    this.operation = inputVal
    if (inputVal === '=') {
      this.handleOperation()
    } else if (typeof this.value[this.value.length - 1] === 'number') {
      this.value.push(inputVal)
      this.updateValue()
    } else {
      console.log(this.value)
      this.operation = inputVal
      this.value.splice(this.value.length, 1, this.operation)
      this.updateValue()
    }
  }

  this.handleClick = function (inputVal) {
    Number(inputVal) >= 0
      ? this.appendValue(Number(inputVal))
      : this.handleOperatorChange(inputVal)
  }

  this.getValue = function () {
    return this.value.join('')
  }

  this.updateValue = function () {
    value.textContent = calculator.getValue()
  }
}

const calculator = new Calculator()

const handleClick = (e) => {
  console.log(e.target.value)
}

document.querySelectorAll('.button').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const value = e.target.textContent
    console.log(value)
    calculator.handleClick(value)
  })
})

const value = document.getElementById('value')
value.textContent = calculator.getValue()
