document.querySelector('button').addEventListener('click',clear)
document.getElementById('numberPad').addEventListener('click',check)
let chosen = ''
let str = ''

class Calculation {
    constructor() {

        this.methods = {
            "-": (a, b) => a - b,
            "+": (a, b) => a + b,
            "x": (a, b) => a * b,
            "/": (a, b) => a / b
        }

        this.calculate = function (str) {

            let split = str.split(' '), a = Number(split[0]), op = split[1], b = Number(split[2])
            return this.methods[op](a, b)

        }

    }
}


let powerCalc = new Calculation;

function check(event) {
 chosen = event.target.id
     if (chosen == '='){
         console.log('getting answer with' + str)
         document.getElementById('display').innerText += '=' + powerCalc.calculate(str)
         console.log(powerCalc.calculate(str))
     }
     else if (chosen == '/' || chosen == 'x' || chosen == '+' || chosen == '-' ){//if operations are chosen
        str= str + " " + chosen + " "
        document.getElementById('display').innerText += event.target.id
     }
     else {
         str+=chosen
         document.getElementById('display').innerText += event.target.id
     }
  
}


function clear() {
    str = ''
 result = 0
 document.getElementById('display').innerText = ''
}
