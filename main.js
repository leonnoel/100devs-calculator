//Main Calculator Object
function Calculator() {
    let numOne = ''
    let operator = ''
    let numTwo = ''
    let display = ''
    let displayDOM = document.querySelector('#calcDispl')
    let methods = {
        '+': (a,b) => Number(a) + Number(b),
        '-': (a,b) => a - b,
        '/': (a,b) => a / b,
        'x': (a,b) => a * b,
    }
    let methodOperations = ['+','-','x','/']

    this.buttonPressed = (button) => {
        if (methodOperations.includes(display)) {
            display = ""
            this.refreshScreen()
        }
        if (button == 'reset' || display == 'Error') {
            this.clearAll()
            this.refreshScreen()
        }
        else if (button == '=') {
            if (operator == '') {
                display = "Error"
                this.refreshScreen()
            }
            else {
                display = this.calculate()
                this.refreshScreen()
                this.clearAll()  
            }
        }
        else if (methodOperations.includes(button)) {
            if (operator !== '') {
                display = "Error"
            }
            else {
                operator = button
                display = button   
            }
            this.refreshScreen()
        }
        else if (operator !== "") {
            numTwo += button
            display += button
            this.refreshScreen()
        }
        else {
            numOne += button
            display += button
            this.refreshScreen()
        }
        
    }

    this.calculate = () => {
        console.log(methods[operator](numOne,numTwo))
        console.log(numOne + operator + numTwo)
        // let maths = parseInt(memory[0]);
        // for(let i=0;i<memory.length;i++) {
        //     if(memory[i] == '+') {
        //         maths += parseInt(memory[i+1])
        //     }
        // }
        // numOne = maths
        return methods[operator](numOne,numTwo)
    }

    this.refreshScreen = () => {displayDOM.innerHTML = display}

    this.clearAll = () => {
        numOne = ''
        operator = ''
        numTwo = ''
        display = ''
    }


    
}

const calc = new Calculator()
calc.refreshScreen()

document.querySelectorAll('.calcButton').forEach(element => {
    element.addEventListener('click',buttonClicked)
});

function buttonClicked(e) {
    calc.buttonPressed(e.target.innerHTML)
}   
calc.refreshScreen()