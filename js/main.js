class Calculator {
    constructor() {
        this.operator = "";
        this.secondaryOperand = "";
        this.mainOperand = "";
        this.resetOnNextInput = false;
        this.operators = {
            "+": (a,b) => a+b, 
            "-": (a,b) => a-b, 
            "x": (a,b) => a*b, 
            "/": (a,b) => a/b, 
            "=": true, 
        }
    }

    /**
     * Set mainOperand, secondaryOperand & operator display output
     * to the current values stored in Calculator memory. Update
     * mainOperand * font size is updated based on length of output.
     */
    #updateScreen() {
        const mainOperand = document.querySelector(".mainOperand");
        mainOperand.innerText = this.mainOperand;
        document.querySelector(".secondaryOperand").innerText = this.secondaryOperand;
        document.querySelector(".operator").innerText = this.operator;

        const outputLength = String(this.mainOperand).split("").length;
        if(outputLength > 13) {
            mainOperand.style.fontSize = "30px";
        } else if(outputLength > 10) {
            mainOperand.style.fontSize = "40px";
        } else {
            mainOperand.style.fontSize = "50px";
        }
    }

    /**
     * Add pressed digit button to mainOperand and update the screen.
     * There is a limit of 10 digits for mainOperand.
     * @param {string} digit innerText of Calculator UI button
     */
    #pressDigit(digit) {
        if(!(this.mainOperand.length >= 10)) {
            this.mainOperand += digit;
        }
        this.#updateScreen();
    }

    /**
     * Set the current operator, if two operands are present then
     * Calculate the result of using that operator and update the
     * screen with the result.
     * @param {string} operator see operators defined in constructor
     */
    #pressOperator(operator) {
        if(!this.secondaryOperand) {
            this.secondaryOperand = this.mainOperand;
        } else {
            this.secondaryOperand = this.#calculateResult();
        }
        this.mainOperand = "";
        this.operator = operator;

        if(operator === "=") {
            this.#showFinalResult();
        }

        this.#updateScreen();
    }

    /**
     * Calculate the result of the current operands and current operator
     * @returns Calculated result of operator function with current operands
     */
    #calculateResult() {
        const operatorFunction = this.operators[this.operator];
        const result = operatorFunction(+this.secondaryOperand, +this.mainOperand)
        return result;
    }

    /**
     * Move current calculated result to mainOperand for larger
     * display and set Calculator resetOnNextInput to true.
     */
    #showFinalResult() {
        this.mainOperand = this.secondaryOperand;
        this.resetOnNextInput = true;
    }

    /**
     * Remove current operands & operator from Calculator memory
     * and set next input to be accepted as normal.
     */
    #resetCalculator() {
        this.operator = ""
        this.secondaryOperand = ""
        this.mainOperand = ""
        this.resetOnNextInput = false;
    }

    /**
     * Entry point for calculator UI button presses
     * @param {HTMLSpanElement} button 
     */
    pressButton(button) {
        if(this.resetOnNextInput) {
            this.#resetCalculator();
        }
        const innerText = button.innerText;
        if(this.operators[innerText]) {
            this.#pressOperator(innerText);
        } else {
            this.#pressDigit(innerText);
        }
    }
}


const calculator = new Calculator();

// There is only one method exposed by the calculator.
// Bind this generic pressButton to all calculator UI buttons.
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => calculator.pressButton(button));
})