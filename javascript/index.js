// Created calculate object with properties to hold values from inputs and methods to manipulate the DOM and modify the property values:

const calculate = {
    currentValue: '', // holds the current value as displayed in the DOM
    operator: '', // holds the value of the operator clicked
    valueOne: '', // holds the value of the first number entered before the operator
    valueTwo: '', // holds the value of the number entered after the operator
    equalOverride: false, // determines if = was the last operator, allows for subsequent = clicks to continue last operation

    getnum: function(e) {
        let clicked = e.currentTarget.innerText // passes in click event, grabs the inner text of the <li> and assigns it to clicked as a string
        if(document.querySelector('.readout').innerText == "0"){
            document.querySelector('.readout').innerText = clicked
        } // checks if the display reads 0 and if so overrides the 0 with the clicked value
        else if (document.querySelector('.readout').innerText == "+" ||document.querySelector('.readout').innerText == "-" ||document.querySelector('.readout').innerText == "/" ||document.querySelector('.readout').innerText == "X"){
            calculate.currentValue = ''
            document.querySelector('.readout').innerText = clicked
        } // checks to see if the display currently holds an operator. If so, sets current value to '' and then sets the display to the clicked value
        else{
            document.querySelector('.readout').innerText += clicked
        } // if no barriers, concatenates the display with the clicked number
        calculate.currentValue += clicked // after all display related moves, concatenates currentValue string with the clicked value
    },

    ops: function(e) {
        let clicked = e.currentTarget.innerText // passes in click event, grabs the inner text of the <li> and assigns it to clicked as a string
        document.querySelector('.readout').innerText = clicked // passes value from clicked operator into the h1 display
        calculate.valueOne = calculate.currentValue // assigns the current value to value one for future use
        calculate.operator = clicked // assigns the operator property to the most recent clicked operator
        calculate.equalOverride = false // sets the equal override to false when an operator has been selected
    },

    equals: function() {
        let calculated // allows for assigning of calculated value
        if (calculate.equalOverride){
            calculate.valueOne = calculate.currentValue
        } // see end of function. If equal was most recent "operator," sets valueOne to the most recent current value, which is the last calculated value displayed currently in the DOM. In this case, the valueTwo from the previous calculation remains, allowing the most recent operation to be repeatedly applied by clicking = over and over eg 5 * 2 = 10 ... = 20 ... = 40 ...
        else {
            calculate.valueTwo = calculate.currentValue
        } // if a mathematical operator was clicked, equalOverride is false, so we can assign valueTwo to the current value as displayed in the DOM
        
        if (calculate.operator == 'X') {
            calculated = Number(calculate.valueOne) * Number(calculate.valueTwo)
        } else if (calculate.operator == '+') {
            calculated = Number(calculate.valueOne) + Number(calculate.valueTwo)
        } else if (calculate.operator == '-') {
            calculated = Number(calculate.valueOne) - Number(calculate.valueTwo)
        } else if (calculate.operator == '/') {
            calculated = Number(calculate.valueOne) / Number(calculate.valueTwo)
        } // conditional statements coverting string values on calculate properties into numbers and calculating based on assigned operator
        
        document.querySelector('.readout').innerText = calculated // sets readout in DOM to calculated value
        calculate.currentValue = calculated // sets currentValue to most recent calculated value
        calculate.equalOverride = true // sets equalOverride in place for subsequent = clicks if needed
    },

}

document.querySelectorAll(".number").forEach(element => element.addEventListener('click', calculate.getnum))

document.querySelectorAll(".op").forEach(element => element.addEventListener('click', calculate.ops))

document.querySelectorAll(".equals").forEach(element => element.addEventListener('click', calculate.equals))

// query selectors to find each DOM element with the number, operator, or equals classes and run the appropriate method from calculate object