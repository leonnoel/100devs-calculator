const currentOpe = document.querySelector(".current")
const previousOpe = document.querySelector(".previous")
const numbersButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operation")
const equalButton = document.querySelector(".equal")
const tempsResult = document.querySelector(".temp")

let current = "";
let previous = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersButtons.forEach(number => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot){
            haveDot = true;
        } else if(e.target.innerText ==="." && haveDot){
            return;
        }
        current += e.target.innerText;
        currentOpe.innerText = current;
    })
})

operationButtons.forEach(operation => {
    operation.addEventListener("click", (e) =>{
    if (!current) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if( previous && current && lastOperation){
        mathOperation();
    }else {
        result = parseFloat(current);
    } 
    clearVar(operationName);
   lastOperation = operationName;
})
})



function clearVar(name = ""){
    previous += current + " " + name + " " ;
    previousOpe.innerText = previous;
    currentOpe.innerText = "";
    current = "";
    tempsResult.innerText = result;
}

function mathOperation(){
    if (lastOperation === "*"){
        result = parseFloat(result) * parseFloat(current);
    } else if (lastOperation === "/"){
        result = parseFloat(result) / parseFloat(current);
    } else if (lastOperation === "+"){
        result = parseFloat(result) + parseFloat(current);
    } else if (lastOperation === "-"){
        result = parseFloat(result) - parseFloat(current);
    }
}

equalButton.addEventListener("click", (e) =>{
    if(!current || !previous) return;
    haveDot = false;
    mathOperation();
    clearVar();
    currentOpe.innerText = result;
    tempsResult.innerText = "";
    current = result;
    previous = "";
})