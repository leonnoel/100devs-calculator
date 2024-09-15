function NumberButton(value, classPara){

    const entryText = document.querySelector('p#entry')

    this.button = document.querySelector(`h3`)
    this.reset = function(){
        document.querySelector('p#entry').innerText = ''
        document.querySelector('p#calculation').innerText = '' 
    }
    this.button.addEventListener('click', this.reset)

    this.value = value
    this.classPara = classPara
    this.numButton = document.querySelector(`${this.classPara}`)
    this.addNum = function(){
        entryText.innerText += value     
    }
    this.numButton.addEventListener('click', this.addNum)
}

function OperatorButton(op, classPara){

    const entryText = document.querySelector('p#entry')
    const calcText = document.querySelector('p#calculation')

    this.operator = op
    this.classPara = classPara
    this.opButton = document.querySelector(`${this.classPara}`)
    this.addOp = function(){
        entryText.innerText += op
        calcText.innerText = entryText.innerText
        entryText.innerText = ''
    }
    this.opButton.addEventListener('click', this.addOp)
}

function EqualsButton(classPara) {

    const entryText = document.querySelector('p#entry')
    const calcText = document.querySelector('p#calculation')

    this.classPara = classPara
    this.eqButton = document.querySelector(`${this.classPara}`)
    const methods = {
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b, 
        '/': (a,b)=>a/b,
        '*': (a,b)=>a*b 
    }
    console.log(methods['*'](2,2))
    this.calculate = function(){
        const str = calcText.innerText 
        const a = Number(str.substring(0,str.length - 1))
        const op = str[str.length - 1]
        const b = Number(entryText.innerText)
        console.log(methods[op], op)
        entryText.innerText = (methods[op](a,b)).toString()
        calcText.innerText = ''
    }
    this.eqButton.addEventListener('click', this.calculate)
}


const equals = new EqualsButton('.equals')

const nine = new NumberButton('9','.nine')
const  eight = new NumberButton('8', '.eight')
const  seven = new NumberButton('7', '.seven')
const  six = new NumberButton('6', '.six')
const  five = new NumberButton('5', '.five')
const  four = new NumberButton('4', '.four')
const  three = new NumberButton('3', '.three')
const  two = new NumberButton('2', '.two')
const  one = new NumberButton('1', '.one')
const  zero = new NumberButton('0', '.zero')
const  decimal = new NumberButton('.', '.decimal')

const  multiply = new OperatorButton('*', '.multiply')
const  divide = new OperatorButton('/', '.divide')
const  plus = new OperatorButton('+', '.plus')
const  minus = new OperatorButton('-', '.minus')






