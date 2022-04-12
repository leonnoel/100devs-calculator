function Display() {
  const cells = Array.from(
    document.querySelectorAll('div[class^=index]')
  ).reverse()
  const operator = document.querySelector('.operator-box')

  const reset = function () {
    for (let cell of cells) {
      cell.textContent = ''
    }
  }

  this.resetOperator = function () {
    operator.textContent = ''
  }

  this.update = function (...args) {
    reset()
    let [num, op] = args
    if (num.length > 8) {
      num = Number(num).toExponential(2).toString()
    }

    num
      .split('')
      .reverse()
      .forEach((c, i) => (cells[i].textContent = c))
    // if (op) operator.textContent = op
    operator.textContent = op || ''
  }
}
