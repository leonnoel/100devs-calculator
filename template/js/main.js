// input
let inputBox = document.querySelector("#inputBox");

// numbers
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')

const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')

const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')

const zero = document.querySelector('#zero')
const dot = document.querySelector('#dot')

// operators
const equal = document.querySelector('#equalSymbol')
const subtractSymbol = document.querySelector('#subtractSymbol')
const additionOperator = document.querySelector('#additionOperator')
const multiplyOperator = document.querySelector('#multiplyOperator')
const divideOperator = document.querySelector('#divideOperator')
const percent = document.querySelector('#percent')

// symbols
const acButton = document.querySelector('#acButton')
const leftBracket = document.querySelector('#leftBracket')
const rightBracket = document.querySelector('#rightBracket')


// Add numbers
one.addEventListener('click', addOne)

function addOne() {
    inputBox.value += 1
}

two.addEventListener('click', addTwo)

function addTwo() {
    inputBox.value += 2
}


three.addEventListener('click', addThree)

function addThree() {
    inputBox.value += 3
}


four.addEventListener('click', addFour)

function addFour() {
    inputBox.value += 4
}


five.addEventListener('click', addFive)

function addFive() {
    inputBox.value += 5
}


six.addEventListener('click', addSix)

function addSix() {
    inputBox.value += 6
}


seven.addEventListener('click', addSeven)

function addSeven() {
    inputBox.value += 7
}

eight.addEventListener('click', addEight)

function addEight() {
    inputBox.value += 8
}

nine.addEventListener('click', addNine)

function addNine() {
    inputBox.value += 9
}

dot.addEventListener('click', addDot)

function addDot() {
    inputBox.value += '.'
}

zero.addEventListener('click', addZero)

function addZero() {
    inputBox.value += 0
}


// Add operators

subtractSymbol.addEventListener('click', addSubtractSymbolFunc)

function addSubtractSymbolFunc() {
    inputBox.value += ' - '
}

additionOperator.addEventListener('click', additionOperatorFunc)

function additionOperatorFunc() {
    inputBox.value += ' + '
}


multiplyOperator.addEventListener('click', multiplyOperatorFunc)

function multiplyOperatorFunc() {
    inputBox.value += ' x '
}


divideOperator.addEventListener('click', divideOperatorFunc)

function divideOperatorFunc() {
    inputBox.value += ' / '
}

percent.addEventListener('click', percentFunc)

function percentFunc() {
    inputBox.value += ' % '
}


// Add Symbols

acButton.addEventListener('click', acButtonFunc)

function acButtonFunc() {
    inputBox.value = ''
}


leftBracket.addEventListener('click', leftBracketFunc)

function leftBracketFunc() {
    inputBox.value += ' ( '
}


rightBracket.addEventListener('click', rightBracketFunc)

function rightBracketFunc() {
    inputBox.value += ' ) '
}

console.log([ "2", "x", "6", "-", "8" ])

// // equal
// equal.addEventListener('click', equalFunc)

// function equalFunc() {
//     let str = inputBox.value
//     if(str.includes('x')) {
//         str = str.replaceAll('x', '*')
//     }
//     console.log(str)

//     let n = str.split(' ')
//     console.log(n)
//     n = n.filter(e => e !== '')
//     console.log(n)

//     if(n.includes('(')) {
//         let bracket = n.splice(n.indexOf('('),n.indexOf(')') - n.indexOf('('))
//         console.log(bracket)
//         console.log(n)
//         bracket = bracket.join('').replace('x', '*')
//         console.log(eval(bracket + n.join('')))
//     } else if (n.includes('%')) {
//         console.log(eval(n.join('')))
//     } else {
//         console.log(eval(n.join('')))
//     }

// }



function Calculator() {
    let replaceMult = function(){
        let str = inputBox.value
        // if (str !== '') {
        //     acButton.innerHTML = '<Span>CE</Span>'
        //     acButton.addEventListener('click', acButtonFunc)

        //     function acButtonFunc() {
        //         inputBox.value = str.slice(0, str.length -1 )
        //     }

        // }
        console.log(str)
        if(str.includes('x')) {
            str = str.replaceAll('x', '*')
        }
        return str
    }

    this.getValue = function(){
        let str = replaceMult()
        let n = str.split(' ')
        console.log(n)
        n = n.filter(e => e !== '')
        console.log(n)
        return n
    }

    this.operation = function() {
        let n = this.getValue()
        console.log(n)
        if(n.includes('(')) {
            // let bracket = n.splice(n.indexOf('('),n.indexOf(')') - n.indexOf('('))
            // console.log(bracket)
            // console.log(n)
            // bracket = bracket.join('').replace('x', '*')
            // console.log(eval(bracket + n.join('')))
            // inputBox.value = eval(bracket + n.join(''))

            // Fixing a bug
            // let bracket = n.splice(n.indexOf('('),n.indexOf(')') - n.indexOf('('))
            // console.log(bracket)
            // console.log(n)
            n = n.join('').replace('x', '*')
            // console.log(eval(n))
            inputBox.value = eval(n)
        } else if (n.includes('%')) {
            n = n.join('').replace('%', '/100')
            console.log(eval(n))
            inputBox.value = eval(n).toFixed(2)
        } else {
            console.log(eval(n.join('')))
            inputBox.value = eval(n.join(''))
        }
    }

    this.copyValue = function() {
        let message = document.getElementById("message");
        inputBox.select()
        document.execCommand ('copy')
        message.style.display = "block";
        setTimeout(function() {
          message.style.display = "none";
        }, 1000); // hide the message after 1 second
      }
    
}





// equal
equal.addEventListener('click', equalFunc)

function equalFunc() {
    const calc = new Calculator()
    calc.operation()
}

let copyIcon = document.querySelector('#copyIcon').addEventListener('click', copyFunc)

function copyFunc() {
    const calc = new Calculator()
    calc.copyValue()
}