class Calculator {
    constructor() {
        //variables to hold operands and screen value
        this.num1 = ''
        this.num2 = ''
        //variable to hold operator
        this.operator = ''
    }
    updateScreen(button) {
        //grab button value from DOM button
        let buttonValue = button.target.innerHTML
        //check for which button is pressed to determine behavior
        if(Number.isInteger(+(buttonValue))) {
            calculator.num1 += buttonValue
        } else if(buttonValue == '.') {
            //if button is '.' then only allow one 
            !calculator.num1.includes('.') ? calculator.num1 += '.' : null
        } else if(buttonValue == '='){
            //call equals method to perform calculation
            calculator.equals()
        } else {
            //switch current number from num1 to num2 to be first operand
            calculator.num2 = calculator.num1;
            //reset current number to blank ready for second operand
            calculator.num1 = ''
            //set operator value from DOM button
            calculator.operator = buttonValue
        }
        //update screen text to show current number
        document.querySelector('#screen').innerHTML = calculator.num1
    }
    equals() {
        // determine which operation to perform based on stored operator value
        switch(calculator.operator) {
            case '/':
                calculator.num1 = (+calculator.num2 / +calculator.num1)
                break
            case 'x':
                calculator.num1 = (+calculator.num2 * +calculator.num1)
                break
            case '+':
                calculator.num1 = (+calculator.num2 + +calculator.num1)
                break
            case '-':
                calculator.num1 = (+calculator.num2 - +calculator.num1)
                break
        }
    }
}
//creat calculator from class
let calculator = new Calculator

//loop through and add event listenr to each button that triggers calculator operation
document.querySelectorAll('#buttons .button').forEach(button=>{
    button.addEventListener('click', calculator.updateScreen)
})