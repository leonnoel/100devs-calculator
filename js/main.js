// container
let total = ''
let valueOne = 0
let valueTwo = 0
let tot = 0
let operator = ''

// buttons shortcut
document.querySelector('#one').addEventListener('click', one)
function one(){
    document.querySelector('#answer').innerText += '1'
    total += '1'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#two').addEventListener('click', two)
function two(){
    document.querySelector('#answer').innerText += '2'
    total += '2'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#three').addEventListener('click', three)
function three(){
    document.querySelector('#answer').innerText += '3'
    total += '3'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#four').addEventListener('click', four)
function four(){
    document.querySelector('#answer').innerText += '4'
    total += '4'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#five').addEventListener('click', five)
function five(){
    document.querySelector('#answer').innerText += '5'
    total += '5'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#six').addEventListener('click', six)
function six(){
    document.querySelector('#answer').innerText += '6'
    total += '6'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#seven').addEventListener('click', seven)
function seven(){
    document.querySelector('#answer').innerText += '7'
    total += '7'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#eight').addEventListener('click', eight)
function eight(){
    document.querySelector('#answer').innerText += '8'
    total += '8'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#nine').addEventListener('click', nine)
function nine(){
    document.querySelector('#answer').innerText += '9'
    total += '9'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#zero').addEventListener('click', zero)
function zero(){
    document.querySelector('#answer').innerText += '0'
    total += '0'

    if ( operator ){
        valueTwo = Number(total)
    } else {
        valueOne = Number(total)
    }

    if ( operator === '+' ){
        tot = valueOne + valueTwo
    } else if ( operator === '-' ){
        tot = valueOne - valueTwo
    } else if ( operator === '*' ){
        tot = valueOne * valueTwo
    } else if ( operator === '/' ){
        tot = valueOne / valueTwo
    }

}

document.querySelector('#point').addEventListener('click', decimal)
function decimal(){
    document.querySelector('#answer').innerText += '.'
    total += '.'
}

document.querySelector('#add').addEventListener('click', addition)
function addition() {
    
    if ( operator ){
        valueTwo = Number(total)
        total =''
    } else {
        valueOne = Number(total)
        total = ''
    }

    if ( tot !== 0){
        valueOne = tot
    }

    operator = '+'
    document.querySelector('#answer').innerText += '+'
}

document.querySelector('#sub').addEventListener('click', subtraction)
function subtraction() {

    if ( operator ){
        valueTwo = Number(total)
        total =''
    } else {
        valueOne = Number(total)
        total = ''
    }

    if ( tot !== 0){
        valueOne = tot
    }

    operator = '-'
    document.querySelector('#answer').innerText += '-'
}

document.querySelector('#multi').addEventListener('click', multiplication)
function multiplication() {

    if ( operator ){
        valueTwo = Number(total)
        total =''
    } else {
        valueOne = Number(total)
        total = ''
    }

    if ( tot !== 0){
        valueOne = tot
    }

    operator = '*'
    document.querySelector('#answer').innerText += 'x'
}

document.querySelector('#divide').addEventListener('click', division)
function division() {

    if ( operator ){
        valueTwo = Number(total)
        total =''
    } else {
        valueOne = Number(total)
        total = ''
    }

    if ( tot !== 0){
        valueOne = tot
    }

    operator = '/'
    document.querySelector('#answer').innerText += '/'
}

document.querySelector('#equals').addEventListener('click', equals)
function equals() {

    document.querySelector('#answer').innerText = Number(tot.toFixed(4))

    // if ( tot % 1 !== 0){
    //     document.querySelector('#answer').innerText = Number(String(tot.toFixed(4)))
    // } else {
    // document.querySelector('#answer').innerText = tot
    // }

    total =''
    operator = ''
    valueOne = 0
    valueTwo = 0
    total = String(tot)
    tot = 0
}


