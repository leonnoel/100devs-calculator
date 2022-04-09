//Calculator guts - quick maffs

//User input: mouse clicks and numeric key entry and symbols and enter key
//  mouse clicks (smurfs on all buttons) - done
//  numeric keys -done
//  decimal -done
//  operator keys -done
//display all input as it is being entered - done

// store inputs - done
//perform calculations - done
//return result... display on calculatorScreen - done
//  previous total becomes start of new operation - done
//prevent invalid input
//      operators next to each other - done
//      two decimals - done!

//  backspace & delete - done!
//repeat the last operation when equals is pressed
//limit input to number of chars that will fit

const keys = document.querySelector(".calculatorButtons");
    keys.addEventListener("click", event => {
        const {target} = event
        const {value} = target
        if (target.matches("button")) {
            calculator.parseInput(value)
        }
    })

    document.addEventListener('keydown', event => {
        const allowedValues = ["1","2","3","4","5","6","7","8","9","0","/","*","-","+",".","="]
        value = `${event.key}`
        if (value === "Enter"){
            calculator.parseInput("=")
        } else if (value === "Backspace" || value === "Delete"){
            calculator.parseInput("AC")
        } else if (allowedValues.indexOf(value) != -1) {
            calculator.parseInput(value);
        }
    })

const calculator = {
    displayText: "0",
    prevTotal: null,

    parseInput(value) {
        switch (value) {
            case "=" : 
                this.calcAnswer(this.displayText)
                break;
            case "AC" :
                this.clearAll()
                break;
            case "." :
                if (this.displayText === "0") {
                   this.addText("0.") 
                } else if (this.displayText.slice(-1) === ".") {
                    return
                } else {
                   this.addText(value)
                } 
                break;
            default :
                this.addText(value)
                break;
        }
    },
        
    addText(value) {
        if (this.displayText === "0") {
            this.displayText = ""
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if (isNaN(+value) && isNaN(+this.displayText)){
            if (isNaN(this.displayText.slice(-1))){
                return;
            }
        }
        this.displayText += value
        this.outputText(this.displayText)
    },

    outputText(text) {
        document.querySelector(".calculatorScreen").value = text
        this.prevTotal = text
    },

    calcAnswer(equation) {
        let result = Function("return " + equation)()
        this.outputText(result)
    },

    clearAll() {
        this.displayText = "0",
        this.previousTotal = null,
        this.outputText(this.displayText)
    }

}

    


