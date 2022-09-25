const keys = document.querySelector("#allkeys")

keys.addEventListener("click", (e) => {
    let value = e.target.value
    const isButton = e.target.nodeName === 'BUTTON';

    if (!isButton) {
        return;
    } else {
        calculator.parseInput(value)
    }
});

let cursor = true
let speed = 500

setInterval(() => {
    if (cursor) {
        document.querySelector('#cursor').style.opacity = 0
        cursor = false
    } else {
        document.querySelector('#cursor').style.opacity = 1
        cursor = true
    }
}, speed)

const calculator = {
    displayText: "0",

    parseInput(value) {
        switch (value) {
            case "=":
                this.calcAnswer(this.displayText)
                break
            case "C":
                this.clear()
                break
            case ".":
                if (this.displayText == 0) {
                    this.addText("0.")
                } else {
                    this.addText(value)
                }
                break
            case "sqrt":
                if (this.displayText === "0") {
                    return
                } else {
                    if (!isNaN(this.displayText.slice(-1))){
                        this.calcAnswer(this.displayText)
                        this.outputText(Math.sqrt(this.displayText))
                    }
                }
                break
            default:
                this.addText(value)
                break;
        }
    },

    addText(value) {
        if (this.displayText === "0") {
            if (value === "/" || value === "*") {
                return
            } else if (value === "+" || value === "-") {
                this.displayText = "0" + value
                this.outputText(this.displayText)
            } else {
                this.displayText = ""
                this.displayText += value;
                this.outputText(this.displayText)
            }
        } else {
            if (isNaN(+value) && isNaN(+this.displayText)) {
                if (isNaN(this.displayText.slice(-1))) {
                    return
                } else {
                    this.displayText += value;
                    this.outputText(this.displayText)
                }
            } else {
                this.displayText += value;
                this.outputText(this.displayText)
            }
        }
    },

    outputText(text) {
        this.displayText = text
        document.querySelector(".calculator-screen").innerHTML = text + '<span id="cursor">|</span>'
    },

    calcAnswer(equation) {
        if (isNaN(equation.slice(-1))) {
            return
        } else {
            let result = Function("return " + equation)()
            this.outputText(result)
        }
    },

    clear() {
        this.displayText = "0",
            this.outputText(this.displayText)
    },
};