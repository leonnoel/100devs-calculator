const calculator = {
    displayValue: "",
    // Grab all the buttons  with .button
        allButtons: document.querySelectorAll(".button"),


        setupButtonEvents: function() {
            this.allButtons.forEach(button => {
                button.addEventListener("click", () => this.addNumToDisplay(button.innerText))
            })
        },

        addNumToDisplay: function(num) {
            calculator.displayValue += num
            document.querySelector("#display").innerText = this.displayValue
        },

        setUpResult: function(){
            document.querySelector("#result").addEventListener("click", calculator.calculate)
        },
    
    //Calculates values.
    calculate: function(){
        let nums = calculator.displayValue
        if(nums.includes("+")){
            this.displayValue = calculator.add(nums)
            display.innerText = this.displayValue

            calculator.displayValue = this.displayValue
        } else if (nums.includes("-")){
            display.innerText = calculator.sub(nums)
        } else if (nums.includes("x")){
            display.innerText = calculator.multi(nums)
        } else if (nums.includes("/")){
            display.innerText =  calculator.divide(nums)
        } 
    },

    //Convert string to operator and n1, n2
    add: function(nums){
        let arrOfNums = nums.split("+")
        return Number(arrOfNums[0]) + Number(arrOfNums[1])
    },
    sub: function(nums){
        let arrOfNums = nums.split("-")
        return Number(arrOfNums[0]) - Number(arrOfNums[1])
    },
    multi: function(nums){
        let arrOfNums = nums.split("x")
        return Number(arrOfNums[0]) * Number(arrOfNums[1])
    },
    divide: function(nums){
        let arrOfNums = nums.split("/")
        return Number(arrOfNums[0]) / Number(arrOfNums[1])
    },

}
    
calculator.setupButtonEvents()
calculator.setUpResult()