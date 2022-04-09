//Calculator guts - quick maffs

//User input: mouse clicks and numeric key entry and symbols and enter key
//  mouse clicks (smurfs on all buttons) - done
//  numeric keys
//  decimal
//  operator keys
//  backspace & delete
//display all input as it is being entered - done

// store inputs - done
//perform calculations - done
//return result... display on calculatorScreen - done
//  previous total becomes start of new operation - done
//prevent invalid input
//      operators next to each other - done
//      two decimals - done!

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
        //checking to see if the value passed in is NaN, making sure it's not next to another NaN
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

    


