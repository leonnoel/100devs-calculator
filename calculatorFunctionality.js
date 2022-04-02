class Calculator {
    constructor() {
        this.displayValue = "";
        this.allButtons = document.querySelectorAll(".button")
    }
    //sets up button interaction
    setupButtonEvents() {
        this.allButtons.forEach(button => {
            button.addEventListener("click", () => this.addNumToDisplay(button.innerText))
        })
    }

    setUpResult(){
        document.querySelector("#result").addEventListener("click", this.calculate)
    }

    // shows internal values in the display
    addNumToDisplay(num) {
        this.displayValue += num
        document.querySelector("#display").innerText = this.displayValue
    }


    //calls correct method and syncs internal value and display
    calculate = (displayValue) => {
        let nums = this.displayValue
        if(nums.includes("+")){
            displayValue = this.add(nums)
            display.innerText = displayValue
            this.displayValue = displayValue
            console.log(displayValue)
        } else if (nums.includes("-")){
            displayValue = this.sub(nums)
            display.innerText = displayValue
            this.displayValue = displayValue
        } else if (nums.includes("x")){
            displayValue = this.multi(nums)
            display.innerText = displayValue
            this.displayValue = displayValue
        } else if (nums.includes("/")){
            displayValue = this.divide(nums)
            display.innerText = displayValue
            this.displayValue = displayValue
        } 
    }
    //calculates result
    add(nums){
        let arrOfNums = nums.split("+")
        return Number(arrOfNums[0]) + Number(arrOfNums[1])
    }
    sub(nums){
        let arrOfNums = nums.split("-")
        return Number(arrOfNums[0]) - Number(arrOfNums[1])
    }
    multi(nums){
        let arrOfNums = nums.split("x")
        return Number(arrOfNums[0]) * Number(arrOfNums[1])
    }
    divide(nums){
        let arrOfNums = nums.split("/")
        return (Number(arrOfNums[0]) / Number(arrOfNums[1]))
        
    }

}

let myCalc = new Calculator()
myCalc.setupButtonEvents()
myCalc.setUpResult()
console.log(myCalc)
