function Calculator() {
    let numOneStr = "";
    let numTwoStr;
    let operatorStr;

    this.addNumStr = num => {
        if(operatorStr == undefined){
            if(!(numOneStr.includes(".") && num == ".")){
                numOneStr += String(num);
            }
        }
        else{
            if(numTwoStr == undefined){
                numTwoStr = String(num)
            }
            else if(!(numTwoStr.includes(".") && num == ".")){
                numTwoStr += String(num);
            }
        }
    };

    this.addOperatorStr = operator => {
        if(numOneStr != "" && numOneStr != "." && operatorStr == undefined){
            operatorStr = String(operator)
        }
    };

    this.getString = function() {
        if(numTwoStr == undefined && operatorStr == undefined){
            return(`${numOneStr}`);
        }
        else if(numTwoStr == undefined){
            return(`${numOneStr} ${operatorStr}`);
        }
        else{
            return(`${numOneStr} ${operatorStr} ${numTwoStr}`);
        }
    };

    this.calculate = function() {
        if(numTwoStr && numTwoStr != "."){
            let total;
            if(operatorStr == "+"){
                total = (+numOneStr + +numTwoStr)
            }
            else if(operatorStr == "-"){
                total = (+numOneStr - +numTwoStr)
            }
            else if(operatorStr == "*"){
                total = (+numOneStr * +numTwoStr)
            }
            else{
                total = (+numOneStr / +numTwoStr)
            }
            this.reset()
            numOneStr = total
            return total;
        }
       else if(numOneStr.length == 0){
         return "Enter nums"
       }
      else{
       return this.getString()
      }
    }

    this.reset = function() {
        numOneStr = "";
        numTwoStr = undefined;
        operatorStr = undefined;
        return "Enter nums"
    };
}


const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operation');
const windowText = document.querySelector("#window-text");
const reset = document.querySelector("#reset");
const submit = document.querySelector("#equal");


const calculatorTwo = new Calculator();

/* This creates an event listener for each number button */
numbers.forEach(number => {
    number.addEventListener('click', () => {
      calculatorTwo.addNumStr(`${number.innerText}`);
      windowText.innerText = calculatorTwo.getString()
    })
});

/*This creates an event listener for each operator button */
operators.forEach(operator => {
    operator.addEventListener('click', () => {
      calculatorTwo.addOperatorStr(`${operator.innerText}`);
      windowText.innerText = calculatorTwo.getString()
    })
});

submit.addEventListener("click", function() {
    windowText.innerText = calculatorTwo.calculate()
});

reset.addEventListener("click", function() {
    calculatorTwo.reset();
    windowText.innerText = "enter nums"
});