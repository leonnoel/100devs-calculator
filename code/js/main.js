//function CreateCalculator(num1, sym, num2) {
//    this.a = num1
//    this.b = num2
//    this.symbol = sym
//    this.multiply = function() {
//        return num1 * num2
//    }
//    this.add = function() {
//        return num1 + num2
//    }
//    this.subtract = function() {
//        return num1 - num2
//    }
//    this.division = function() {
//        return num1 / num2
//    }
//    this.calculate = function() {
//        if (this.symbol === '+') return this.add()
//        if (this.symbol === '-') return this.subtract()
//        if (this.symbol === '*') return this.multiply()
//        if (this.symbol === '/') return this.division()
//    }
//}

function MakeCalculator() {

    this.display = (click) => {
        document.querySelector('.display').textContent += click.target.textContent
    }
    this.output = (output) => {
        document.querySelector('.display').textContent = output
    }
    this.array = () => {
        return document.querySelector('.display').textContent.split(' ')
    }
    this.reset = function() {
        document.querySelector('.display').textContent = ''
    }
    this.methods = {
        "-": function(a, b) {return a - b},
        "+": function(a, b) {return a + b},
        "x": function(a, b) {return a * b},
        "/": function(a, b) {return a / b},
    }
    this.test = (click) => {
        let arr = this.array()
        if (arr.length === 3) {
            this.calculate()
            this.display(click)
        }
        else {
            this.display(click)
        }
    }
    this.calculate = () => {
        let arr = this.array()
        let a = 0, b = 0, op = '+'
        op = arr[1]
        a = +arr[0]
        b = +arr[2]       
        this.output(this.methods[op](a, b))
    }
}



let calculator = new MakeCalculator()
const equation = document.querySelectorAll('.insert')

Array.from(equation).forEach(element => element.addEventListener('click', calculator.display))

const operators = document.querySelectorAll('.math')
Array.from(operators).forEach(element => element.addEventListener('click', calculator.test))

document.querySelector('.equate').addEventListener('click', calculator.calculate)
document.querySelector('.reset').addEventListener('click', calculator.reset)
