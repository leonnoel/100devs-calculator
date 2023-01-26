class Calculator {
    constructor() {
        // let numberOutput = document.querySelectorAll('.viewing-area span')[document.querySelectorAll('.viewing-area span').length - 1);]
        // if ever I wanted to have multiple fields like in DESMOS.

        let numberOutput = document.querySelector('#numberOutput'); // select the number output

        let numberButtons = document.querySelectorAll('.number'); // select all the buttons!!

        let operators = document.querySelectorAll('.operator'); // select all operator buttons

        let dotButton = document.querySelector('#decimal');
        // select the special dot button for numbers

        function operatorChecker(string) { // is there an operator in the string already?
            for (let i = 0; i < operators.length; i++) {
                if (string.slice(-1).includes(operators[i].textContent)) { // keeps running and eventually exist out with true if it includes any of the operators;
                    return true;
                }
            }
            return false;
        }

        const dotChecker = () => {
            let currentEquationNoConvert = numberOutput.textContent.split(' ');
            if (currentEquationNoConvert[0] === "") return false;
            if (currentEquationNoConvert[currentEquationNoConvert.length - 1].includes('0.')) {
                return true;
            };
            return String(currentEquationNoConvert[currentEquationNoConvert.length - 1]).includes(".");
            //   is there an dot operator in the number already?
            //   check the current equation parts
            //   does the last number in the equation have a dot?
        }

        numberButtons.forEach(numberButton => {
            numberButton.addEventListener('click', (event) => { // grab each number button
                if (alreadyCalculated && !operatorChecker(numberOutput.textContent) && (numberOutput.textContent.slice(-1) !== ".")) {
                    numberOutput.textContent = "";
                    alreadyCalculated = false;
                }
                if (operatorChecker(numberOutput.textContent)) {
                    numberOutput.textContent += " ";
                }
                    numberOutput.textContent += `${event.target.textContent}`; // add the number to the screen with a space
            });
        });

        operators.forEach(operator => operator.addEventListener('click', (event) => { // grab each operator button
            if (alreadyCalculated) {
                alreadyCalculated = false;
            }
            if (!(operatorChecker(numberOutput.textContent))) { // check if there's NO operator already
                numberOutput.textContent +=` ${event.target.textContent}`; // add the operator to the screen with a space
                }
            })
        )

        dotButton.addEventListener('click', () => {
                if (!operatorChecker(numberOutput.textContent) && (numberOutput.textContent.slice(-1) !== ".") && !dotChecker()) {
                    // check if no operator, no dots at the end, and no dots in the whole number.
                    numberOutput.textContent += ".";
                } else if (operatorChecker(numberOutput.textContent)) {
                    numberOutput.textContent += " 0.";
                }
            }
        )

        let equals = document.querySelector('#equals');
        let alreadyCalculated = false;
        this.currentValue = 0;
        
        equals.addEventListener('click', () => {
            numberOutput.textContent = String(this.calculate());
            alreadyCalculated = true;
        })

        this.currentEquation = function () {  //returns a new array of numbers and operators
            return numberOutput.textContent.split(' ').map(number => {
                if (Number.isNaN(+number)) {
                    return number; //if it's not a number, return it as a string
                }
                return +number; // return the number
            })
        }
        

        this.operators = {
            "+" : (a, b) => a + b,
            "-" : (a, b) => a - b,
            "/" : (a, b) => {
                // if (b == 0) {
                //     throw new Error("CANNOT DIVIDE BY ZEROO!!!")
                // }
                return a / b
            },
            "x" : (a, b) => a * b
        }
    }
    calculate() {
        let numberArray = this.currentEquation();
        this.currentValue = numberArray[0]
        for (let i = 1; i < numberArray.length; i += 2) {
            let op = numberArray[i];
            if (!this.operators[op]) return null;
            let nextValue = numberArray[i+1];
            if (Number.isNaN(nextValue) || nextValue === undefined) return this.currentValue;
            if (nextValue === 0 && op === "/") {
                setTimeout(function(){
                    document.querySelector(".calculator-body").style.display = "none";
                    document.querySelector('h1').textContent = "I lied! I'm evil! You shouldn't have done that!!"
                  }, 4000);                  
                return "ERROR! ERROR! ERROR! DIVISION BY ZERO. SELF-DESTRUCTING IN.... 3.... 2.... 1... Just kidding! I'm a friendly calculator.";
            }
            this.currentValue = this.operators[op](this.currentValue, nextValue);
        }
        return this.currentValue;
    }
}

let calc = new Calculator();

// notes

// currentEquation() is based on what's on the screen, which is what's used for the calculator
// when something is already calculated, we set a internal variable to keep track of it
// if we already calculated something, then: either refresh the screen if we enter a number OR add an operator on top of it, by not refreshing the screen.
// as a result, the memory (currentValue) is automatically refreshed every-time something is calculated :D

// fix

// fixed the type conversion when checking for dots in a zero. 0.000 will return just 0.