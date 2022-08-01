const numsToUse = document.querySelectorAll('.num')
const operatorOptions = document.querySelectorAll('.operator')
let displayNum = document.querySelector('#display')
let numArr = ['one','two','three','four','five','six','seven','eight','nine','decimal']
let number
let operator
let otherNumber
let nums = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "decimal": '.'
}

//to add numbers to the display when clicked

Array.from(numsToUse).forEach(x => x.addEventListener('click', numsToCalculate))

function numsToCalculate(click){
    numTarget = click.target.classList
    for(let i=0;i<numArr.length;i++){
        if (numTarget.contains(numArr[i])) displayNum.innerText += nums[numArr[i]]
    }
    number = +document.querySelector('#display').textContent
}

//calculator constructor function

function Calculator (num1,num2,op){
    this.num1 = +num1,
    this.num2 = +num2,
    this.op = op,
    this.compute = {
        '+': (a,b) => a+b,
        '-': (a,b) => a-b,
        '*': (a,b) => a*b,
        '/': (a,b) => a/b
    }

    this.result = function(){
        document.querySelector('#display').innerText = this.compute[op](this.num1,this.num2)
    }
}


//used to capture which operator is selected to pass through to the Calculator constructor function

Array.from(operatorOptions).forEach(x => x.addEventListener('click',operatorSelection))

function operatorSelection(click){
    const opTarget = click.target.classList
    otherNumber = number
    document.querySelector('#display').innerText = null
    opTarget.contains('add') ? operator = '+' : opTarget.contains('subtract') ? operator = '-' : opTarget.contains('multiply') ? operator = '*' : operator = '/'
}


// equals to kick off method to calulate result
document.querySelector('#result').addEventListener('click', () => new Calculator(otherNumber,+number,operator).result())

//reset the calculator so it can be used again
document.querySelector('#result').addEventListener('dblclick',reset)


function reset (){
    number = null
    otherNumber = null
    document.querySelector('#display').innerText = null
}












