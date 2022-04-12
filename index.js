const calculator = new (function () {
  const display = new Display()
  const opDictionary = new Dictionary()
  let currentValue = '0'
  let queuedValue = null
  let queuedOperator = null
  let decimal = false
  let res = false
  let locked = false

  function processNumber(num) {
    if (locked) return
    if (currentValue.length === 8) return
    if (currentValue === '0') {
      if (num === '0') return
      currentValue = num
      return updateDisplay()
    }

    if (res) {
      currentValue = num
      decimal = false
      res = false
      return updateDisplay()
    }

    currentValue += num
    updateDisplay()
  }

  function processOperator(operator) {
    if (locked) return
    try {
      if (queuedValue) {
        const result = opDictionary[queuedOperator](queuedValue, currentValue)
        queuedValue = result
        currentValue = result.toString()
        queuedOperator = operator
        decimal = false
        res = true
        return updateDisplay()
      }
      queuedValue = currentValue
      queuedOperator = operator
      decimal = false
      res = true
      return updateDisplay()
    } catch (err) {
      console.error(err.message)
      currentValue = 'ERROR'
      updateDisplay()
      locked = true
    }
  }

  function processDecimal() {
    if (decimal || locked) return

    if (res) {
      currentValue = '0.'
      res = false
      decimal = true
      return updateDisplay()
    }

    currentValue += '.'
    decimal = true
    updateDisplay()
  }

  function processEquals() {
    if (locked) return
    if (!queuedValue || !queuedOperator) return

    try {
      if (queuedValue) {
        const result = opDictionary[queuedOperator](queuedValue, currentValue)
        currentValue = result.toString()
        queuedValue = null
        queuedOperator = null
        decimal = false
        res = true
        updateDisplay()
      }
    } catch (err) {
      console.error(err.message)
      currentValue = 'ERROR'
      queuedOperator = null
      updateDisplay()
      locked = true
    }
  }

  function updateDisplay() {
    if (queuedOperator) return display.update(currentValue, queuedOperator)

    display.update(currentValue)
  }

  function init() {
    document.querySelector('.calc').addEventListener('click', (e) => {
      const button = e.target

      if (button.className.includes('num')) return processNumber(e.target.value)

      if (button.className.includes('operator'))
        return processOperator(e.target.value)

      if (button.className.includes('decimal')) return processDecimal()
      if (button.className.includes('equals')) return processEquals()
    })

    display.update(currentValue)
  }

  init()
})()
