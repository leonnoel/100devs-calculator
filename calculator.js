// EVENT HANDLERS

document.querySelectorAll('.buttons').forEach(item => {     // numerical values buttons
    item.addEventListener("click", clickedNumberEventHandler)
});

document.querySelectorAll('.operators').forEach(item => {     // operator buttons
    item.addEventListener("click", clickedOperatorEventHandler)
});

document.querySelector('.dot').addEventListener("click", doDecimalNumbersEventHandler)   //dot, decimal numbers

document.getElementById('finalCalculation').addEventListener("click", calculatingEventHandler)   //  equal button/calculation

document.querySelector('.clear').addEventListener("click", allCLearEventHandler) // clear everything

// CALCULATOR OBJECT

let basicCalculator = {

    stringDisplay: "",
    leftNumber: "",
    rightNumber: "",
    operator: "",

    clickedNumber(num) {
        if(this.operator === "") {
            this.leftNumber += num
        } else {
            this.rightNumber += num
        }  
        this.leftNumber = this.leftNumber.substring(0,5)
        this.rightNumber = this.rightNumber.substring(0,5)  
        this.stringDisplay = this.leftNumber + this.operator + this.rightNumber
        document.querySelector(".result").innerText = this.stringDisplay
    },

    doDecimalNumbers (dec) {
        if (this.leftNumber !== "" && this.operator === "" && !this.leftNumber.includes(".")) {
            this.leftNumber += "."
        } else if (this.operator !== "" && this.rightNumber !=="" && !this.rightNumber.includes(".")) {
            this.rightNumber += "."
        }
        this.stringDisplay = this.leftNumber + this.operator + this.rightNumber
        document.querySelector(".result").innerText = this.stringDisplay
    },

    clickedOperator (opera) {
        if (this.leftNumber !== "" && this.rightNumber === "") {
            this.operator = opera
        }
        this.stringDisplay = this.leftNumber + this.operator + this.rightNumber
        document.querySelector(".result").innerText = this.stringDisplay
    },

    calculating (calc) {
        let numberResult = ""
        if(this.leftNumber === "" || this.rightNumber=== "" || this.operator=== "") {
            return 
        } else if (this.operator === '+') {
            numberResult = Number(this.leftNumber) + Number(this.rightNumber)
        } else if(this.operator === '-') {
            numberResult = Number(this.leftNumber) - Number(this.rightNumber)
        } else if(this.operator === 'x') {
            numberResult = Number(this.leftNumber) * Number(this.rightNumber)
        } else if(this.operator === '/') {
            numberResult = Number(this.leftNumber) / Number(this.rightNumber)
        }
        document.querySelector(".result").innerText = Number(numberResult)
        this.clearResult()
    },

    clearResult() {
        this.stringDisplay = ""
        this.leftNumber = ""
        this.rightNumber = ""
        this.operator = ""
    },

    allClear () {
        this.clearResult ()
        document.querySelector(".result").innerText = ""
    }
}

// FUNCTIONS CALLING CALCULATOR OBJECT METHODS

function allCLearEventHandler(){
    basicCalculator.allClear(this.value)
}

function calculatingEventHandler(){
    basicCalculator.calculating(this.value)
}

function clickedOperatorEventHandler(){
    basicCalculator.clickedOperator(this.value)
}

function doDecimalNumbersEventHandler(){
    basicCalculator.doDecimalNumbers(this.value)
}

function clickedNumberEventHandler(){
    basicCalculator.clickedNumber(this.value)
}
