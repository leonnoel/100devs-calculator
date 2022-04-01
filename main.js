document.querySelectorAll('.calcButton').forEach(element => {
    element.addEventListener('click',buttonClicked)
});

function Calculator() {
    let display = 'Math!';
    let displayDOM = document.querySelector('#calcDispl')
    let memory = []
    let methods = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '/': (a,b) => a / b,
        'x': (a,b) => a * b,
    }
    let operations = ['+','-','x','/']

    this.buttonPressed = function(button) {
        if (display == 'Math!') {
            display = ''
        }
        if (button == '=') {
            memory.push(display)
            this.calculate()
        }
        else if (operations.includes(button)) {
            memory.push(display)
            memory.push(button)
            display += button
        }
        else {display += button}
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

function buttonClicked(e) {
    calc.buttonPressed(e.target.innerHTML)
}   