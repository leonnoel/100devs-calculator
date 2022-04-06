let text = document.querySelector('p')
let operation = ''
let addedOperator = false
let newEq = false

let NumberButton = function(value){
    this.value = value
    this.addNum = function(){
        if(newEq){
            text.innerText = ''
            newEq = false
        }
        text.innerText += value
    }
}

let OperatorButton = function(op){
    this.operator = op
    this.addOp = function(){
        if(!addedOperator){
            addedOperator = true
            text.innerText += op
        }
        
    }

}

let nine = new NumberButton('9')
let eight = new NumberButton('8')
let seven = new NumberButton('7')
let six = new NumberButton('6')
let five = new NumberButton('5')
let four = new NumberButton('4')
let three = new NumberButton('3')
let two = new NumberButton('2')
let one = new NumberButton('1')
let zero = new NumberButton('0')
let decimal = new NumberButton('.')

let multiply = new OperatorButton('*')
let divide = new OperatorButton('/')
let plus = new OperatorButton('+')
let minus = new OperatorButton('-')

let equals = {

    methods: {
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b, 
        '/': (a,b)=>a/b,
        '*': (a,b)=>a*b 
    },
    calculate: function(){
        let s = text.textContent
        let aIndex = s.indexOf('+' || '-' || '/' || '*')
        let bIndex = aIndex + 1
        let a = parseInt(s.substring(0,aIndex))
        let op = s[aIndex]
        let b = parseInt(s.substring(bIndex, s.length))

        if(isNaN(a) || isNaN(b) || !equals.methods[op]){
            alert('Pick a number, click an operator, then press enter')
        }
        text.innerText = equals.methods[op](a,b)
        addedOperator = false
        newEq = true
        alert('restart the page to reset')
    }
}

console.log(equals.methods['+'](22,5))

document.querySelector('.nine').addEventListener('click', nine.addNum)
document.querySelector('.eight').addEventListener('click', eight.addNum)
document.querySelector('.seven').addEventListener('click', seven.addNum)
document.querySelector('.six').addEventListener('click', six.addNum)
document.querySelector('.five').addEventListener('click', five.addNum)
document.querySelector('.four').addEventListener('click', four.addNum)
document.querySelector('.three').addEventListener('click', three.addNum)
document.querySelector('.two').addEventListener('click', two.addNum)
document.querySelector('.one').addEventListener('click', one.addNum)
document.querySelector('.zero').addEventListener('click', zero.addNum)
document.querySelector('.decimal').addEventListener('click', decimal.addNum)

document.querySelector('.multiply').addEventListener('click', multiply.addOp)
document.querySelector('.divide').addEventListener('click', divide.addOp)
document.querySelector('.plus').addEventListener('click', plus.addOp)
document.querySelector('.minus').addEventListener('click', minus.addOp)

document.querySelector('.equals').addEventListener('click', equals.calculate)





