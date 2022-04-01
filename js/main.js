
class Calculator {
    constructor(num1, operator, num2) {
        num1, operator, num2
    }

    divide() {
        return num1/num2
    }
    multiply() {
        return num1/num2
    }
    add() {
        return num1+num2
    }
    subtract() {
        return num1-num2
    }
    equals() {

    }
}

//add event listeners to all the buttons
let buttonBeingPressed = 0
const listOfButtons = document.querySelectorAll('button')
for (let element of listOfButtons) {
    element.addEventListener('click', () => {
        buttonBeingPressed = element
        buttonPressed
    })
}

function buttonPressed(){
    console.log(buttonBeingPressed)
}
//user presses number... calc.num1 = string number pressed

//user presses another number... calc.num1.concat()
//user presses operator... calc.operator = string?
//user presses operator again... calc.operator = 
//user presses number... calc.num2 

