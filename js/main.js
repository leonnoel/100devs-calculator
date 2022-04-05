








function Calculator(){

    // Add query selector to all necessary elements: currentVal, previousVal, numbers, operators, equal...
    const displayCurrentVal = document.querySelector(".current")
    const displayPreviousVal = document.querySelector(".previous")
    const displayOperand = document.querySelector(".operand")
    const numbersButtons = document.querySelectorAll(".number")
    const operationsButtons = document.querySelectorAll(".operation")
    const resetButton = document.querySelectorAll(".reset")
    const deleteButton = document.querySelector(".delete")
    const equalButton = document.querySelector(".equal")

    // declare variable to keep track of count and operands
    let currentValue = "";
    let previousValue = "";
    let operand = "";
    let haveDot = false;

   

    // methods to calculate
    let methods = {
        "*": (a, b) => +a * +b,
        "/": (a, b) => +a / +b,
        "+": (a, b) => +a + +b,
        "-": (a, b) => +a - +b,
        "%": (a, b) => +a % +b,
    }


    // depending on they presssed key, do something
    let getKeys = function (e) {

        // get innerText of key
        let key = e.target.innerText;

        // reset all values if C is pressed
        if (key === "C"){
            previousValue = "";
            operand = "";
            haveDot = false;
            displayCurrentVal.innerHTML = 0;
            displayPreviousVal.innerHTML = "";
            displayOperand.innerHTML = "";
            currentValue = "";
        }

        // check if key is a dot first or if dot was already entered
        else if (key === "." && !haveDot){
            haveDot = true;
            currentValue += key;
            displayCurrentVal.innerHTML = currentValue;

        // if theres a previous value, but no operand, and pressed key it not operand, reset calcul and add pressed key
        }else if((previousValue && !operand && ((key != "+" || key != "-" || key != "*" || key != "/" || key != "%")))){
            displayPreviousVal.innerHTML = ""
            currentValue += key;
            displayCurrentVal.innerHTML = currentValue;
            previousValue = "";
            operand = "";
            haveDot = false;

            // if key pressed is dot, but dot is already there, return
        } else if(key ==="." && haveDot){
            return;



        }

        // if value is only equal to dot and key is operand, return
        else if((key === "+" || key === "-" || key === "*" || key === "/" || key === "%") && currentValue === "."){
            return
        }        
        

        // if key pressed is operand but there's not current or previous value, return
        else if((key === "+" || key === "-" || key === "*" || key === "/" || key === "%") && (!previousValue && !currentValue)){
            haveDot = false;
            return;

        } 

        // if key pressed is delete, remove operator or last num of current value
        else if (key === "⌫"){
            
            if(!currentValue && !previousValue){
                haveDot = false;
                return
            } else if(!currentValue && !operand){
                haveDot = false;
                return
            }

            else if(!currentValue && operand){
                displayOperand.innerHTML = "";
                haveDot = false;
                operand = "";
            } else if(currentValue){
                currentValue = currentValue.slice(0, -1);
                haveDot = false;
                displayCurrentVal.innerHTML = currentValue;
            }
        }


        // if theres a previousvalue, current value, and an operand, but you press an operand, do the math first
        else if ((previousValue && currentValue && operand) && (key === "+" || key === "-" || key === "*" || key === "/" || key === "%"))  {
            displayPreviousVal.innerHTML = methods[operand](previousValue, currentValue)
            displayOperand.innerHTML = key;
            displayCurrentVal.innerHTML = "";
            haveDot = false;
            previousValue = methods[operand](previousValue, currentValue);
            operand = key;
            currentValue = '';
        }

        else if ((previousValue) && (key === "+" || key === "-" || key === "*" || key === "/" || key === "%")){
            operand = key;
            haveDot = false;
            displayOperand.innerHTML = key;
            displayCurrentVal.innerHTML = "";
            currentValue = '';
        }


        else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
            operand = key;
            haveDot = false;
            displayOperand.innerHTML = key;
            displayCurrentVal.innerHTML = "";
            previousValue = currentValue;
            
            displayPreviousVal.innerHTML = currentValue;
            currentValue = '';
            

        }
            else if ((key === "=") && (!currentValue)) {
                haveDot = false;
                return
            
        } else if (key === "=") {       
            
            displayPreviousVal.innerHTML = methods[operand](previousValue, currentValue);
            displayCurrentVal.innerHTML = "";
            displayOperand.innerHTML = "";
            haveDot = false;
            previousValue = methods[operand](previousValue, currentValue);
            operand = "";
            currentValue = '';

        } 
        
        
        else {
            
            currentValue += key;
            displayCurrentVal.innerHTML = currentValue;
        }
    }


    // Add event listener to buttons
    numbersButtons.forEach(number => {
    number.addEventListener("click", getKeys)
    })
    operationsButtons.forEach(operation => {
        operation.addEventListener("click" , getKeys)
    })
    resetButton.forEach(reset => {
        reset.addEventListener("click" , getKeys)
    })
    deleteButton.addEventListener("click" , getKeys);

    equalButton.addEventListener("click" , getKeys);

    }



let calc = new Calculator();

