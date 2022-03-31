function Calculator() {
    let a = 0;
    let currentNumber = '';
    let currentOperation = '';


    this.equals = function (a, b, operator) {
        console.log(`${a} ${operator} ${b}`);
    }
    /*return a + b;
    return a - b;
    return a * b;
    return a / b;
    */
    this.addNumberToCurrent = function () {
        //console.log(this.innerHTML);
        //console.log(calc.currentNumber);
        currentNumber = currentNumber + String(this.innerHTML);
        console.log(currentNumber);
        answer.innerHTML = currentNumber;
    }
    this.addOperand = function () {
        //console.log(`${this.innerHTML}`);
        currentOperation = this.innerHTML;
        a = currentNumber;
        currentNumber = '';
        console.log(`${this.innerHTML}`);
    }
    this.compute = function () {
        a = Number(a);
        currentNumber = Number(currentNumber);
        let result = 0;
        if (currentOperation === "+") {
            result = a + currentNumber;
        } else if (currentOperation === "-") {
            result = a - currentNumber;
        } else if (currentOperation === "*") {
            result = a * currentNumber;
        } else if (currentOperation === "/") {
            result = a / currentNumber;
        } else {
            answer.innerHTML = "Invalid";
        }
        answer.innerHTML = result;
        a = 0;
        currentNumber = '';
        currentOperation = '';
        a = result;
        
    }

    let nums = document.querySelectorAll(".number");
    for (let num of nums) {
        num.addEventListener('click', this.addNumberToCurrent);
    }

    let operands = document.querySelectorAll(".operand");
    for (let operand of operands) {
        operand.addEventListener('click', this.addOperand);
    }
    let compute = document.querySelector(".compute");
    compute.addEventListener('click', this.compute)

    let answer = document.querySelector("#answer");
}

let calc = new Calculator();




