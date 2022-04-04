// const numbers = document.getElementsByClassName('numbers');

// for(let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener("click", theCalculator);
// }

// const operators = document.getElementsByClassName("operator");

// for(let i = 0; i < operators.length; i++) {
//     operators[i].addEventListener("click", theCalculator);
// }

// function theCalculator(){
//     document.querySelector(".calculator-screen").value = calcDisplay.answer;
// }

// const calcDisplay = {
//     answer: 500,
// }

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", event => {
    const {target} = event;
    const {value} = target;
    if (!target.matches("button")){
        return
    } else {
        calculator.parseInput(value)
        // console.log(value)
    }
})

const calculator = {
    displayText: "0",
    prevTotal: null,

    parseInput(value){
        
        // any special buttons clicked (=, ., clear)
        switch (value){
            case "=":
                this.calcAnswer(this.displayText)
                break;
            case "clear":
                this.clearAll()
                break;
            case ".":
                if (this.displayText == 0) {
                    this.addText("0.")
                } else {
                    this.addText(value)
                }
                break;
            default: 
                this.addText(value)
                break;
        }
    },

    addText(value) {
        if (this.displayText === "0") {
            this.displayText = ""
        } else if (this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        // if (isNaN(+(value)) && isNaN(+(this.displayText))){
        //     if(isNaN(this.displayText.slice(-1))) {
        //         return
        //     }

        // }
        this.displayText += value
        this.outputText(this.displayText)
    },

    outputText(text) {
        document.querySelector(".calculator-screen").value = text
    },

    calcAnswer(equation){
        let result = Function("return " + equation)()
        this.outputText(result)
    },

    clearAll(){
        this.displayText = "0",
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}