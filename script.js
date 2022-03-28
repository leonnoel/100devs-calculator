const calculator = new Calculator;
const calculatorInterface = new CalculatorInterface;

function CalculatorInterface () {
    const buttonContainerChildren= document.querySelector(".button-container").querySelectorAll("button");
    let display = document.querySelector(".display")
    display.textContent = '';

    buttonContainerChildren.forEach((button => {
        if (button.textContent !== "=") {
            button.addEventListener("click", (e) => this.appendInput(e));
        } else {
            button.addEventListener("click", (e) => this.operate(e));
        }
    }));

    this.appendInput = function (e) {
        if (this.checkInputTooLong()) {
            this.cropInput();
        }
        if (Number(e.target.textContent) == e.target.textContent) {
            display.textContent += Number(e.target.textContent);
        } else if (e.target.textContent === ".") {
            display.textContent += e.target.textContent;
        } else {
            display.textContent += ` ${e.target.textContent} `;
        }
    }

    this.parseInput = function () {
        const inputArray = display.textContent.split(" ");
        if (inputArray.length === 3) {
            inputArray[0] = Number(inputArray[0]);
            inputArray[2] = Number(inputArray[2])
            return inputArray;
        }  else { 
            alert ("Oops! Something went wrong. Try inputting a valid number, then an operation (like x or +), then a second valid number.");
            this.resetDisplay();
            return;
        }
    }

    this.operate = function() {
        this.displayNumber(calculator.calculate(this.parseInput()));
        buttonContainerChildren.forEach((button => { 
            button.addEventListener("click", this.resetHandler)
        }))
    }

    this.displayNumber = function (num) {
        display.textContent = num;
    }

    this.resetDisplay = function () {
        display.textContent = '';
        buttonContainerChildren.forEach((button => { 
            button.removeEventListener("click", this.resetHandler)
        }))
    }

    this.checkInputTooLong = function () {
        if (display.textContent.length >= 20) {
            return true
        } return false;
    }

    this.cropInput = function () {
        display.textContent = display.textContent.substring(1);
    }

    this.resetHandler = this.resetDisplay.bind(this);
}

function Calculator () {
    this.multiply = function (a, b) {
        return a *= b;
    }

    this.divide = function (a, b) {
        return a /= b;
    }

    this.add = function (a, b) {
        return a += b;
    }

    this.subtract = function (a, b) {
        return a -= b;
    }

    this.calculate = function (arr) {
        switch (arr[1]) {
            case "x": 
                return this.multiply(arr[0], arr[2]);
            case "/":
                return this.divide (arr[0], arr[2]);
            case "+":
                return this.add (arr[0], arr[2]);
            case "-":
                return this.subtract (arr[0], arr[2]);
        }
    }
}
