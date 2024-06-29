let buttons = document.querySelectorAll('button');
let calcArr = []
// Iterate over each button and add an event listener
buttons.forEach(button => {
    button.addEventListener('click', calculator);
});


function calculator () {
    let number = this.value
    calcArr.push(number)
    console.log(calcArr)
    let outputStr = calcArr.join('')
    let output = document.querySelector('#output')
    output.innerText = outputStr
    for (let val of calcArr) {
        console.log(val)
        if (val === '=') {
            console.log('EQUALS')
            output.innerText = Calculator.math()
            calcArr = []

        } else if (val==='clear') {
            calcArr = []
            output.innerText = ''
        }
    }

}

const Calculator = {
    math: function() {
        // Replace with your desired calculation logic
        // Example: eval() to evaluate the expression, but be cautious with eval
        try {
            let expression = calcArr.join('').slice(0, -1); // Remove the '='
            return (eval(expression)); 
        } catch (error) {
            return "Error"; // Handle errors
        }
    }
};