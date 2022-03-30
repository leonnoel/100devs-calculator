/*
const contestants = document.querySelectorAll(".contestant")

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains("rose")){
		document.querySelector('#nikki').classList.toggle("hidden")
	}else{
		alert("Wrong!");
	}
}

*/

// const buttons = document.querySelectorAll(".btn")
// Array.from(buttons).forEach(button => button.addEventListener('click', update))

// function update(){
//     console.log("Pressed")
// }
let calc = new Calculator()

const output = document.querySelector(".output")

const numbers = document.querySelectorAll(".num")
Array.from(numbers).forEach(num => num.addEventListener("click", calc.updateNum))

const operators = document.querySelectorAll(".op")
Array.from(operators).forEach(op => op.addEventListener('click', calc.changeOperator))

document.querySelector(".calcBtn").addEventListener('click', calc.calculate)

function Calculator(){
    let op = "+"
    let a = "0"
    let b = "0"
    let justCalculated = false

    this.updateNum = function(click) {
        if(a === "0" || justCalculated === true){
            a = click.target.innerText
            justCalculated = false
        } else {
            a = a + click.target.innerText
        }
        output.innerText = a
    }

    this.changeOperator = function(click){
        op = click.target.innerText
        b = output.innerText
        a = "0"
        // output.innerText = a
    }

    this.calculate = function() {
        let calculation = {  
            "+": +a + +b,
            "-": +a - +b,
            "x": +a * +b,
            "/": +a / +b,
        }[op]
        // console.log(`calculation is a ${typeof calculation} with a value of ${calculation}`)
        // console.log(`a is a ${typeof a} with a value of ${a}`)
        // console.log(`b is a ${typeof b} with a value of ${b}`)
        b = calculation
        output.innerText = b
        justCalculated = true
    }
}

