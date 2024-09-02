const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector(".clear")
const led = document.querySelector("#inputValues")
const equals = document.querySelector(".equals")

for (let number of numbers){
  number.addEventListener("click", function(e){
    myCalc.currentValue += e.target.id
    myCalc.display += e.target.id
    led.value = myCalc.display
    console.log(myCalc)
  })
}

for (let operator of operators){
  operator.addEventListener("click", function(e){
    myCalc.operator = e.target.id
    myCalc.display += myCalc.operator
    myCalc.previousValue = myCalc.currentValue
    myCalc.currentValue = ""
    console.log(myCalc)
  })
}

equals.addEventListener("click", function(){
  myCalc.display = myCalc.calculate()
  led.value = myCalc.display
  console.log(myCalc)
})

clear.addEventListener("click", function(){
  myCalc = new Calculator()
  led.value = ""
  console.log(myCalc)

})

class Calculator {
  display = ""
  currentValue = ""
  operator = ""
  previousValue = ""

  calculate() {
    if (this.operator === "+"){
      return Number(this.currentValue)+ Number(this.previousValue)
    } else if(this.operator === "-") {
      return Number(this.previousValue)- Number(this.currentValue)
    } else if(this.operator === "*"){
      return Number(this.currentValue)* Number(this.previousValue)
    } else if (this.operator === "/") {
      return (Number(this.previousValue)/ Number(this.currentValue)).toFixed(3)
    }
  }
}

let myCalc = new Calculator()

console.log(myCalc)