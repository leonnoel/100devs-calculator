//hssoftwareengineering@gmail.com


class Calculator {
    constructor(tempResultDisplay, currentDisplay) {
      this.tempResultDisplay = tempResultDisplay
      this.currentDisplay = currentDisplay
      this.clear()
    }

    clear() {
        this.display1=""
        this.display2=""
        this.operation=undefined 
      }

      clear1(){
        this.display1=""
      }
   
      //I used regex to not allow leading zeroes and added condition to only allow one decimal.
      // limited numbers to 15 characters

    selectNumber(num){
        if (num === "." && this.display1.includes(".")) return
        if(this.display1.length<15) {
          this.display1 = this.display1.toString() + num.toString()
        }
        this.display1 = this.display1.replace(/^0+/g, "")
    }

     //choose operatation

    selectOperation(operation){
        if (this.display1 === "") return
        if(this.display2!==""){
            this.calculate()
        }

        //keep the same operation
        // store dis1 into dis2
        // clear dis1 for new inputs

        this.operation = operation
        this.display2 = this.display1
        this.display1=""
        this.display2 = this.display2 + operation

    }

//calculator operation method

    calculate(){

        let answer
        const first = parseFloat(this.display2)
        const second = parseFloat(this.display1)

        if (!first || !second) return

        switch (this.operation) {
          case "+":
            answer = first + second
            break
          case "-":
            answer = first - second
            break
          case "x":
            answer = first * second
            break
          case "*":
            answer = first * second
            break
          case "÷":
            answer = first / second
            break
          case "/":
            answer = first / second
            break
          default:
            return
        }      
        this.display1 = answer
        this.display2 = ""
        this.operation = undefined
    }
//choose opposite engative method
    signChange(){
        this.display1=this.display1.toString()
        if (this.display1[0]!=="-") { 
            this.display1 = "-"+this.display1
        }else  this.display1 = this.display1.substring(1)
    }

    //percent method
    percent(){
        this.display1 = this.display1/100
    }

    updateDisplay(){
        this.currentDisplay.innerText = this.display1
        this.tempResultDisplay.innerText = this.display2
    }


    //keyboard methods
    numberPad(key){
     
      numberBtns.forEach(button=>{
        if(button.innerText===key){
          button.click()
        }
      })
    }

    numberPadOperations(key){
      operationBtns.forEach(button=>{
        if(button.innerText===key){
          button.click()
        }
      })
    }

    numberPadEnter(key){
          equalBtn.click()
    }

    numberPadPercent(key){
      percent.click()
    }

    padClear1(){
      clear.click()
    }

    padClearAll(){
      clearAll.click()
    }
}


//selct elements from the DOM

let currentDisplay = document.querySelector(".current") //
let tempResultDisplay = document.querySelector(".tempResult") //
let numberBtns = document.querySelectorAll(".number") //
let operationBtns = document.querySelectorAll(".op") //
let equalBtn = document.querySelector(".equal") //
let clear = document.querySelector(".clear") // 
let clearAll = document.querySelector(".allClear") //
let posOrNeg = document.querySelector(".signChng")
let percent = document.querySelector(".prcnt")

//create calculator object
const calculator = new Calculator(tempResultDisplay, currentDisplay)


//add clicks and linking to methods

numberBtns.forEach(num =>{
    num.addEventListener("click", ()=>{

        calculator.selectNumber(num.innerText)
        calculator.updateDisplay()
    })
})

operationBtns.forEach(x=>{
    x.addEventListener("click", ()=>{
        calculator.selectOperation(x.innerText)
        calculator.updateDisplay()
         
        })
    })

clearAll.addEventListener("click", ()=>{
        calculator.clear()
        calculator.updateDisplay()
    })

clear.addEventListener("click", ()=>{
        calculator.clear1()
        calculator.updateDisplay()
    })

equalBtn.addEventListener("click", button => {
    calculator.calculate()
    calculator.updateDisplay()
  })

posOrNeg.addEventListener("click", ()=>{
        calculator.signChange()
        calculator.updateDisplay()
        
    })

percent.addEventListener("click",()=>{
        calculator.percent()
        calculator.updateDisplay()
    })


// keyboard support

window.addEventListener("keydown", x=>{
  if(x.key === "0"|| x.key === "1"||x.key === "2"||x.key === "3"||x.key === "4"||x.key === "5"||x.key === "6"||x.key === "7"||x.key === "8"||x.key === "9"|| x.key === "."){
    calculator.numberPad(x.key)
    calculator.updateDisplay()

  }else if((x.key === "*" ||x.key==="x")|| x.key === "+"||x.key === "-"||x.key === "/"){
    calculator.numberPadOperations(x.key)
    calculator.updateDisplay()
  }else if(x.key === "Enter" || x.key=="="){
    calculator.numberPadEnter(x.key)
    calculator.updateDisplay()
  }else if(x.key =="%"){
    calculator.numberPadPercent(x.key)
    calculator.updateDisplay()
  } else if(x.key=="Backspace"|| x.key=="c"){
    calculator.padClear1(x.key)
    calculator.updateDisplay()
  } else if(x.key=="Delete" || x.key=="a"){
    calculator.padClearAll(x.key)
    calculator.updateDisplay()
  }
})