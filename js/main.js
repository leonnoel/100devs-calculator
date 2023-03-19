class Calculation {
    constructor(button) {//constructor function to set variables
        this._button = button//holds the id of the 'button' that was clicked
        this.methods = {//object that holds operators as keys and functions for calculating as values
            "-": (a, b) => a - b,
            "+": (a, b) => a + b,
            "x": (a, b) => a * b,
            "/": (a, b) => a / b
        }
        this._operations = ['-',"+","x","/"]//array that holds operators 
        this._str = ''//holds the string that will be used to run calculation
    }
    get button() {//getter to return value of button
        return this._button
    }
     
    set button(chosen) {//setter to set the value of button once user clicks
    this._button = chosen
    }

    calculate(str) {//method that splits the accumulated string into numbers and operator
            console.log('calculate'+ str)
            let split = str.split(' ')
            let a = Number(split[0])
            let op = split[1]
            let b = Number(split[2])
            console.log(a,op,b)
    return this.methods[op](a, b)//goes to methods objects and passes in the operator and 1st and 2nd numbers, returns answer
        }

    clear(){//method for resetting the string and clearing the display
        this._str = ''
        document.getElementById('display').innerText = ''
    }

    checkClick() {//method for checking which 'button' the user pressed
        //console.log("check click")
        if (this._button == '='){//when button pressed is the equal sign
            //console.log('EQUALS')
            document.getElementById('display').innerText += ` = ${this.calculate(this._str)}` //display equal sign and the returned answer from calculate method
            //console.log(powerCalc.calculate(this._str))
        }
        else if (this._operations.includes(this._button)==true){//when button pressed is an operational symbol
            //console.log('OPERATION CHOSEN')
            this._str = this._str + " " + this._button + " "//add operation to this._str with spaces
            //console.log(`STRING: ${this._str}`)
            document.getElementById('display').innerText = this._str//display this._str
        }
        else if (this._button == 'clear'){//when clear button is pressed
            this.clear()//go to clear method
        }
        else {//when button pressed is a number
           //console.log('NUMBER CHOSEN')
            this._str+=this._button//add number value 
            document.getElementById('display').innerText = this._str//display this._str
        }
    }
    }

let powerCalc = new Calculation();

userClicked = (event) => {
    //console.log('User clicked on calculator')
    powerCalc.button = event.target.id
    //console.log(`event.target.id = ${event.target.id}`)
    //console.log(`button is ${powerCalc.button}`)
    powerCalc.checkClick()
}

document.getElementById('numberPad').addEventListener('click',userClicked)
document.getElementById('clear').addEventListener('click',userClicked)
