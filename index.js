'use strict'


function Calculator() {
//button assignment
    const buttonsArray = ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9", "button0", "buttonPeriod", "buttonMinus", "buttonPlus", "buttonMultiply", "buttonDivide", "buttonEquals"]
    buttonsArray.forEach((content) => {
            content = new Button(content)
    })
// variables for use by button constructor
    let num1;

    let num2;

    let operation;
//button constructor
    function Button(btn) {
        //declarations for action use
        const displayContent = document.querySelector('#displayContent');

        const multiply = () => num1 * num2;

        const divide = () =>num1 / num2;

        const add = () => num1 + num2;

        const subtract = () => num1 - num2;

        let action = () => {
            console.log('clicky')

            if ((btn.toString().includes("1")) || (btn.toString().includes("2")) ||(btn.toString().includes("3")) ||(btn.toString().includes("4")) ||(btn.toString().includes("5")) ||(btn.toString().includes("6")) ||(btn.toString().includes("7")) ||(btn.toString().includes("8")) ||(btn.toString().includes("9")) || (btn.toString().includes("0"))){
                displayContent.innerText += Number(btn.toString()[6])
            } else if (btn.toString().includes("Period")){
                if (displayContent.innerText.includes(".") == true){
                    displayContent.innerText += ""
                } else {
                    displayContent.innerText += "."
                }
            } else if (btn.toString().includes("Multiply")){
                num1 = Number(displayContent.innerText)
                displayContent.innerText = ""
                operation = multiply
            } else if (btn.toString().includes("Divide")){
                num1 = Number(displayContent.innerText)
                displayContent.innerText = ""
                operation = divide
            } else if (btn.toString().includes("Minus")){
                num1 = Number(displayContent.innerText)
                displayContent.innerText = ""
                operation = subtract
            } else if (btn.toString().includes("Plus")){
                num1 = Number(displayContent.innerText)
                displayContent.innerText = ""
                operation = add
            } else if (btn.toString().includes("Equals")){
                num2 = Number(displayContent.innerText)
                let result = operation
                displayContent.innerText = `${result().toString().substring(0,12)}`
            }
        }
        //
        let selector = document.querySelector(`#${btn.toString()}`)
        selector.addEventListener('click',action)
    }
}

let kirkulator = new Calculator()
