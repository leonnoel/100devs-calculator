let question = ""

//Setting up event listeners on all the buttons
document.querySelector("#zero").addEventListener('click', inputZero)
document.querySelector("#one").addEventListener('click', inputOne)
document.querySelector("#two").addEventListener('click', inputTwo)
document.querySelector("#three").addEventListener('click', inputThree)
document.querySelector("#four").addEventListener('click', inputFour)
document.querySelector("#five").addEventListener('click', inputFive)
document.querySelector("#six").addEventListener('click', inputSix)
document.querySelector("#seven").addEventListener('click', inputSeven)
document.querySelector("#eight").addEventListener('click', inputEight)
document.querySelector("#nine").addEventListener('click', inputNine)
document.querySelector("#decimal").addEventListener('click', inputDecimal)
document.querySelector("#divide").addEventListener('click', inputDivide)
document.querySelector("#multiply").addEventListener('click', inputMultiply)
document.querySelector("#add").addEventListener('click', inputAdd)
document.querySelector("#minus").addEventListener('click', inputSub)
document.querySelector("#equals").addEventListener('click', equals)

//Functions for inputing values and operations
function inputZero(){
    question += document.querySelector("#zero").innerText
    display(question)
    console.log(question)
}
function inputOne(){
    question += document.querySelector("#one").innerText
    display(question)
    console.log(question)
}
function inputTwo(){
    question += document.querySelector("#two").innerText
    display(question)
    console.log(question)
}
function inputThree(){
    question += document.querySelector("#three").innerText
    display(question)
    console.log(question)
}
function inputFour(){
    question += document.querySelector("#four").innerText
    display(question)
    console.log(question)
}
function inputFive(){
    question += document.querySelector("#five").innerText
    display(question)
    console.log(question)
}
function inputSix(){
    question += document.querySelector("#six").innerText
    display(question)
    console.log(question)
}
function inputSeven(){
    question += document.querySelector("#seven").innerText
    display(question)
    console.log(question)
}
function inputEight(){
    question += document.querySelector("#eight").innerText
    display(question)
    console.log(question)
}
function inputNine(){
    question += document.querySelector("#nine").innerText
    display(question)
    console.log(question)
}
function inputAdd(){
    question += document.querySelector("#add").innerText
    display(question)
    console.log(question)
}
function inputSub(){
    question += document.querySelector("#minus").innerText
    display(question)
    console.log(question)
}
function inputSub(){
    question += document.querySelector("#minus").innerText
    display(question)
    console.log(question)
}
function inputMultiply(){
    question += document.querySelector("#multiply").innerText
    display(question)
    console.log(question)
}
function inputDivide(){
    question += document.querySelector("#divide").innerText
    display(question)
    console.log(question)
}
function inputDecimal(){
    question += document.querySelector("#decimal").innerText
    display(question)
    console.log(question)
}

//Function to show current value / equation
function display(value){
    document.querySelector("#display").innerText = value
}

//Function to get answer
function equals(){
    question = eval(question)
    display(question)
}