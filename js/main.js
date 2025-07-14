const calculator = {
  currentInput: '',
  operator: null,
  previousInput: '',
  calculatedResult: false,

  inputNumber(num) {
    // logic for appending number and displaying it in the browser
    if (num === '.') {
      // don't allow multiple decimals
      if (this.currentInput.includes('.')) return;

      // if input is empty, start with "0."
      if (this.currentInput === '') {
        this.currentInput = '0.';
        // display it and return early
        document.querySelector('#screen').innerText = this.currentInput;
        return;
      }
    }

    if(this.calculatedResult){
      this.currentInput = ''
      this.calculatedResult = false
    } 
    this.currentInput += num
    document.querySelector('#screen').innerText = this.currentInput
  },

  inputOperator(op) {
    if(this.currentInput === ''){
      return
    }
    this.operator = op
    this.previousInput = this.currentInput
    this.currentInput = ''
    this.calculatedResult = false; // Allow continued input
  },

  calculate() {
    // logic for computing result
    let result = 0
    if(this.operator === '+'){
      result = Number(this.currentInput) + Number(this.previousInput)
    } else if(this.operator === '-'){
      result = Number(this.previousInput) - Number(this.currentInput)
    } else if(this.operator === 'x'){
      result = Number(this.currentInput) * Number(this.previousInput)
    } else if(this.operator === '/'){
      if(this.currentInput === '0'){
        alert('Cannot divide by zero!')
      } else {
        result = Number(this.previousInput) / Number(this.currentInput)
      }
    }
    this.calculatedResult = true
    this.currentInput = `${result}`
    document.querySelector('#screen').innerText = result
  },

  clear() {
    this.currentInput = ''
    this.operator = null
    this.previousInput = ''
    document.querySelector('#screen').innerText = 0
  }
}


document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => calc(btn.innerText)))

function calc(btn){
  if(btn === '+' || btn === '/' || btn === 'x' || btn === '-'){
    calculator.inputOperator(btn)
  } else if(btn === '='){
    calculator.calculate()
  } else {
    calculator.inputNumber(btn)
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){
    calculator.clear()
  }
})