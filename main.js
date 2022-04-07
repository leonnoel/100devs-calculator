//Main Calculator Object
function Calculator() {
    let display = '';
    let displayDOM = document.querySelector('#calcDispl')
    let memory = []
    let methods = {
        'add': (a,b) => a + b,
        'minus': (a,b) => a - b,
        'divide': (a,b) => a / b,
        'multiply': (a,b) => a * b,
    }
    let methodOperations = ['+','-','x','/']

    this.buttonPressed = function(button) {
        if (button == '=') {
            // memory.push(display)
            this.calculate()
        }
        else if (methodOperations.includes(button)) {
            memory.push(display)
            memory.push(button)
            display = button
        }
        else {
            if (memory[-1]) {
            display = ''
            }
            display += button
        }
        // console.log(memory)
        this.refreshScreen()
    }

    this.calculate = function() {
        console.log(memory)
        let maths = parseInt(memory[0]);
        for(let i=0;i<memory.length;i++) {
            if(memory[i] == '+') {
                maths += parseInt(memory[i+1])
            }
        }
        display = maths
    }

    this.refreshScreen = function() {displayDOM.innerHTML = display}


    
}

const calc = new Calculator()
calc.refreshScreen()

document.querySelectorAll('.calcButton').forEach(element => {
    element.addEventListener('click',buttonClicked)
});

function buttonClicked(e) {
    calc.buttonPressed(e.target.innerHTML)
}   
