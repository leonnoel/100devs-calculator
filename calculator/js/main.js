


function Calculator() {


    let methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "x": (a, b) => a * b,
        "/": (a, b) => a / b
    };
    let currentSum = '';
    let updateCurrentSum = () => {
        document.getElementById('calculator-screen').innerText = currentSum;
    }

    this.getCurrentSum = function(){
        return currentSum;
    }

    this.addValue = function(){
        if(currentSum === 'ERROR'){
            currentSum = ''
        }
        if (this.innerText ==='+' || this.innerText === 'x'|| this.innerText ===  '-'|| this.innerText === '/'){
            currentSum += ' ' + this.innerText + ' '
        }
        else if(this.innerText === '='){
            //
        }
        else if(this.innerText === 'RESET'){
            currentSum = 0
        }
        else{
            currentSum += this.innerText
        }
        updateCurrentSum()
    }


    this.calculate = function(){
        let equationArray = currentSum.split(' ')
        console.log(equationArray)
        let num1 = '1'
        let operation = '+'
        let num2 = '1'




         // Old code for parsing user input and outputing numbers
        // if(equationArray.length === 3){
        //     num1 = +equationArray[0]
        //     console.log(+equationArray[0])
        //     operation = equationArray[1]
        //     num2 = +equationArray[2]
        //     currentSum = methods[operation](num1, num2)
        //     // currentSum = (this.methods[operation](num1, num2)) 
        // }
        if(equationArray.length % 2 === 1 && equationArray.length > 1 && !equationArray.includes('')){
            // for(let i = 1; i < equationArray.length; i += 2){   would be a for loop for checking existence of '' in the array
            //     if()
            // }
            for(let i = 0; i < equationArray.length; i+= 2){
                num1 = +equationArray.shift()
                operation = equationArray.shift()
                num2 = +equationArray.shift()
                currentSum = methods[operation](num1, num2)
                equationArray.unshift(currentSum + '')
                    
        }
        }
        else {
            // currentSum = (this.methods[operation](num1, num2)) 

            currentSum = 'ERROR'

        }
        updateCurrentSum()

    }
}

let buttonList = document.querySelectorAll('section.calculator-keys > h2')
let calc = new Calculator()

buttonList.forEach(key => {
    key.addEventListener('click', calc.addValue);

});

document.getElementById('=').addEventListener('click', calc.calculate)
document.getElementById('=').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calc.calculate
    }
});