const display = document.getElementById("display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equals = document.querySelector(".equals")



numbers.forEach((button) => {
button.addEventListener("click", function() {
calculator.displayNumber(button.textContent)
})
})


operators.forEach((operator) => {
operator.addEventListener("click", function(){
calculator.setFirstNumber(Number(display.textContent))
calculator.setOperator(operator.textContent)
display.textContent = ""
})
})

equals.addEventListener("click",function() {
  calculator.setSecondNumber(Number(display.textContent))
  let result = calculator.calculate()
  display.textContent = result
  calculator.justCalculated = true
  calculator.reset()
})

let calculator = {
  firstNumber: null,
  secondNumber: null,
  selectedOperator: null,
  display,
  justCalculated: false,
  reset: function(){
    this.firstNumber = null
    this.secondNumber = null
    this.selectedOperator = null
  },
  setOperator: function(operator) {
  this.selectedOperator = operator
  },
  setFirstNumber: function(number) {
    this.firstNumber = number
  },
  setSecondNumber: function(number) {
    this.secondNumber = number
  },
  calculate: function() {
    let result 
    if (this.selectedOperator === "+") {
      result = this.firstNumber + this.secondNumber
      return result
    } else if (this.selectedOperator === "-") {
      result = this.firstNumber - this.secondNumber
      return result
    } else if (this.selectedOperator === "x") {
      result = this.firstNumber * this.secondNumber
      return result
    } else if (this.selectedOperator === "/") {
      result = this.firstNumber / this.secondNumber
      return result
    }
  },
  displayNumber: function(number) {
    if (this.justCalculated === true) {
      this.display.textContent = number
      this.justCalculated = false
    } else {
  this.display.textContent += number
    }
}
}