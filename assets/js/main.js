const buttonsHTML = document.querySelectorAll(".buttons");
const screenHTML = document.querySelector("h1");

buttonsHTML.forEach(item => {
    item.addEventListener('click',() => {
        compute(item.innerHTML);
    });
})

let mem = "0";
let oper = "=";
let compute = function(op){
    if(op ==="-" && screenHTML.innerHTML === ""){
        screenHTML.innerHTML = "-"
    }else if(op ==="+" || op ==="-" || op ==="/" || op ==="x"){
        mem = calculate(parseFloat(mem), oper, parseFloat(screenHTML.innerHTML)).toString();
        screenHTML.innerHTML = "";
        oper = op;
    }else if(op === "="){
        screenHTML.innerHTML = calculate(parseFloat(mem), oper, parseFloat(screenHTML.innerHTML));
        mem = "";
        oper = "="
    }else{
        screenHTML.innerHTML += op
    }
}



let calculate = function(num1, operation, num2){
    if(operation === "+"){
        return num1 + num2;
    }
    if(operation === "-"){
        return num1 - num2;
    }
    if(operation === "x"){
        return num1 * num2;
    }
    if(operation === "/"){
        return num1/num2;
    }
    if(operation === "="){
        return num2
    }
}
