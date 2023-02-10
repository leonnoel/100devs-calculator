
//initial calculator values
let currentString = 0
document.querySelector('.answer').innerText = currentString

let globalString = 0
operate = false


//constructor to make numbers of calc
class ButtonMaker  {
    constructor(value, buttonId) {
        this.value = value
        this.buttonId = document.getElementById(buttonId)
        this.buttonId.addEventListener('click', this.addToCalc);
    }
    addToCalc(){
        if (currentString === 0){
            document.querySelector('.answer').innerText = this.innerText
            currentString = Number(currentString)+Number(this.innerText)
            globalString = `${globalString}${this.innerText}`
        }
        else {
            if (operate === false){
                document.querySelector('.answer').innerText = `${currentString}${this.innerText}`
                currentString = `${currentString}${this.innerText}`
                globalString = currentString
            }
            else {
                document.querySelector('.answer').innerText = `${currentString}${this.innerText}`
                currentString = `${currentString}${this.innerText}`
                globalString = `${globalString}${this.innerText}`
            }
            
        }  
    }
}

//constructor to make operators
class OperatorMaker {
    constructor(value, buttonId){
        this.value = value
        this.buttonId = document.getElementById(buttonId)
        this.buttonId.addEventListener('click', this.operate);
    }
    operate(){
        //create operations based on intaken '-' or '*', etc.
        operate = true
        currentString = 0
        globalString = `${globalString}${this.innerText}`
        document.querySelector('.answer').innerText = currentString
        }      
}

document.querySelector('#equals').addEventListener('click', compute)

function compute(){
    document.querySelector('.answer').innerText = eval(globalString)
}



//create each button
let nine = new ButtonMaker(9,'nine')
let eight = new ButtonMaker(8,'eight')
let seven = new ButtonMaker(7,'seven')
let six = new ButtonMaker(6,'six')
let five = new ButtonMaker(5,'five')
let four = new ButtonMaker(4,'four')
let three = new ButtonMaker(3,'three')
let two = new ButtonMaker(2,'two')
let one = new ButtonMaker(1,'one')
let zero = new ButtonMaker(0,'zero')
let dot = new ButtonMaker ('.','dot')

let multiply = new OperatorMaker('*', 'multiply')
let divide = new OperatorMaker ('/', 'divide')
let plus = new OperatorMaker ('+', 'plus')
let minus = new OperatorMaker ('-', 'minus')


