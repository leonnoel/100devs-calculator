function Calculator() {
  this.value = [0, 2, 3]

  this.getValue = function () {
    return this.value.join('')
  }

  this.appendValue = function (inputVal) {
    return this.value.push(inputVal)
  }

  this.handleOperation = function (inputValue) {
    return -1
  }

  this.handleClick = function (inputValue) {
    typeof inputValue === 'number'
      ? this.appendValue(inputValue)
      : this.handleOperation(inputValue)
  }
}

const calculator = new Calculator()

const handleClick = (e) => {
  console.log(e.target.value)
}

document.querySelectorAll('.button').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const value = e.target.textContent // "7" for the 7 button
    console.log(value)
    calculator.handleClick(value)
  })
})

const value = document.getElementById('value')
value.textContent = calculator.getValue()
