document.querySelector("#division").addEventListener("click", division)
document.querySelector("#multiplication").addEventListener("click", multiplication)
document.querySelector("#plus").addEventListener("click", plus)
document.querySelector("#minus").addEventListener("click", minus)
document.querySelector("#equal").addEventListener("click", equal)

let numbers = document.getElementsByClassName("number")
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click", numberInput)
}
let view = document.querySelector("#view")
let operation = 0
let counter = ""
let firstNumber = 0
let secondNumber = 0
let result = 0

function numberInput(){
    counter += this.innerText
    view.innerText = counter
}

function saveNumber(){
    if(operation != 0){
        secondNumber = parseFloat(counter)
    }
    else{
        firstNumber = parseFloat(counter)
    }
    counter = ""
    view.innerText = counter
}

function division(){
    saveNumber()
    operation = 1
}

function multiplication(){
    saveNumber()
    operation = 2
}

function plus(){
    saveNumber()
    operation = 3
}

function minus(){
    saveNumber()
    operation = 4
}

function equal(){
    saveNumber()
    switch(operation) {
        case (1):
            result = (firstNumber / secondNumber)
            view.innerText = result
            break;
        case (2):
            result = (firstNumber * secondNumber)
            view.innerText = result
            break;
        case (3):
            result = (firstNumber + secondNumber)
            view.innerText = result
            break;
        case(4):
            result = (firstNumber - secondNumber)
            view.innerText = result
            break;
    }
}