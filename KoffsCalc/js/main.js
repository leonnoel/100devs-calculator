const numBtns = document.querySelectorAll('.number')
const operationBtns = document.querySelectorAll('.operation')
const equalsBtn = document.querySelector('.equals')
const allClearBtn = document.querySelector('.allClear')
const delBtn = document.querySelector('.del')

const prevOperand = document.querySelector('.previous.operand')
const currOperand = document.querySelector('.current.operand')

let calculator = {
  previousOperand: prevOperand,
  currentOperand: currOperand,
  operation: undefined,

  allClear: function(){
    this.previousOperand.innerText = ''
    this.currentOperand.innerText = ''
    this.operation = undefined
  },
  delete: function(){
    this.currentOperand.innerText = this.currentOperand.innerText.substring(0, this.currentOperand.innerText.length -1)
  },
  addNumber: function(number){
    this.currentOperand.innerText += number
  },
  selectOperation: function(operation){
    if(this.currentOperand.innerText == ''){
      alert('Enter number(s) first')
    }else{
      switch(operation){
        case '+':
          this.operation = '+'
          this.previousOperand.innerText = this.currentOperand.innerText + operation
          this.currentOperand.innerText = ''
          break
        case '-':
          this.operation = '-'
          this.previousOperand.innerText = this.currentOperand.innerText + operation
          this.currentOperand.innerText = ''
          break
        case '*':
          this.operation = '*'
          this.previousOperand.innerText = this.currentOperand.innerText + operation
          this.currentOperand.innerText = ''
          break
        case '/':
          this.operation = '/'
          this.previousOperand.innerText = this.currentOperand.innerText + operation
          this.currentOperand.innerText = ''
          break
      }

    }

  },
  // updatePreviousOperator: () => {
  //   Trying to make it able to handle multiple operators, have not figured out the way to do so. Works for simle operations tho! I'll take it
  // },
  solveOperation: function(){
    let string1 = this.previousOperand.innerText.substring(0, this.previousOperand.innerText.length -1)
    let string2 = this.currentOperand.innerText
    if(string1 == '' || string2 == ''){
      alert('Enter missing value(s)')
    }else{
      switch(this.operation){
        case '+':
          this.currentOperand.innerText = Number(string1) + Number(string2)
          this.previousOperand.innerText = ''
          break
        case '-':
        this.currentOperand.innerText = Number(string1) - Number(string2)
        this.previousOperand.innerText = ''
          break
        case '*':
        this.currentOperand.innerText = Number(string1) * Number(string2)
        this.previousOperand.innerText = ''
          break
        case '/':
        this.currentOperand.innerText = Number(string1) / Number(string2)
        this.previousOperand.innerText = ''
          break
      }
    }
  },
}

numBtns.forEach(input => input.addEventListener('click', () => {
  calculator.addNumber(input.value)
}))
allClearBtn.addEventListener('click', () => {
  calculator.allClear()
})
delBtn.addEventListener('click', () =>{
  calculator.delete()
})
operationBtns.forEach(input => input.addEventListener('click', () =>{
  calculator.selectOperation(input.value)
}))
equalsBtn.addEventListener('click', () => {
  calculator.solveOperation()
})
operationBtns.forEach(input => input.addEventListener('click', () =>{
  calculator.updatePreviousOperator(input.value)
}))
