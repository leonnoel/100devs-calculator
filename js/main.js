let currentCalcDisplay=''
let currentCalculatedValue = ''
let finalOperator = ''

document.querySelector('#b0').addEventListener('click',function() {addToCalcDisplay('0')})
document.querySelector('#b1').addEventListener('click',function() {addToCalcDisplay('1')})
document.querySelector('#b2').addEventListener('click',function() {addToCalcDisplay('2')})
document.querySelector('#b3').addEventListener('click',function() {addToCalcDisplay('3')})
document.querySelector('#b4').addEventListener('click',function() {addToCalcDisplay('4')})
document.querySelector('#b5').addEventListener('click',function() {addToCalcDisplay('5')})
document.querySelector('#b6').addEventListener('click',function() {addToCalcDisplay('6')})
document.querySelector('#b7').addEventListener('click',function() {addToCalcDisplay('7')})
document.querySelector('#b8').addEventListener('click',function() {addToCalcDisplay('8')})
document.querySelector('#b9').addEventListener('click',function() {addToCalcDisplay('9')})
document.querySelector('#bDot').addEventListener('click',function() {addToCalcDisplay('.')})
document.querySelector('#bx').addEventListener('click', multiply)
document.querySelector('#bdiv').addEventListener('click', divide)
document.querySelector('#bPlus').addEventListener('click', add)
document.querySelector('#bMinus').addEventListener('click', subtract)
document.querySelector('#bEquals').addEventListener('click', equals)

function addToCalcDisplay(n){
    if (n==='.' && currentCalcDisplay.includes('.')){
        return
    }else{    
        currentCalcDisplay+=n
        document.querySelector('#calcDisplay').innerText = currentCalcDisplay
    }
}

function add(){
    finalOperator = '+'
    if (currentCalculatedValue === ''){
        currentCalculatedValue = Number(currentCalcDisplay)
        currentCalcDisplay = ''
        document.querySelector('#calcDisplay').innerText = currentCalcDisplay
    }else{
        currentCalculatedValue += Number(currentCalcDisplay)
        currentCalcDisplay = ''
        document.querySelector('#calcDisplay').innerText = currentCalcDisplay
    }
}

function subtract(){
    finalOperator = '-'
    if (currentCalculatedValue === ''){
        currentCalculatedValue = Number(currentCalcDisplay)
        currentCalcDisplay = ''
        document.querySelector('#calcDisplay').innerText = currentCalcDisplay
    }else{
        currentCalculatedValue -= Number(currentCalcDisplay)
        currentCalcDisplay = ''
        document.querySelector('#calcDisplay').innerText = currentCalcDisplay  
    }
}

function multiply(){
    finalOperator = '*'
    if (currentCalculatedValue === ''){
        currentCalculatedValue = Number(currentCalcDisplay)
        currentCalcDisplay = ''
        document.querySelector('#calcDisplay').innerText = currentCalcDisplay
    }else{
        currentCalculatedValue *= Number(currentCalcDisplay)
        currentCalcDisplay = ''
        document.querySelector('#calcDisplay').innerText = currentCalcDisplay  
    }
}

function divide(){
    finalOperator = '/'
    if (currentCalculatedValue === ''){
        currentCalculatedValue = Number(currentCalcDisplay)
        currentCalcDisplay = ''
        document.querySelector('#calcDisplay').innerText = currentCalcDisplay
    }else{
        currentCalculatedValue /= Number(currentCalcDisplay)
        currentCalcDisplay = ''
        document.querySelector('#calcDisplay').innerText = currentCalcDisplay  
    }
}

function equals(){
    if (finalOperator === '+'){
        currentCalculatedValue += Number(currentCalcDisplay)
        document.querySelector('#calcDisplay').innerText = currentCalculatedValue
    }else if (finalOperator === '-'){
        currentCalculatedValue -= Number(currentCalcDisplay)
        document.querySelector('#calcDisplay').innerText = currentCalculatedValue
    }else if (finalOperator === '*'){
        currentCalculatedValue *= Number(currentCalcDisplay)
        document.querySelector('#calcDisplay').innerText = currentCalculatedValue
    }else if (finalOperator === '/'){
        currentCalculatedValue /= Number(currentCalcDisplay)
        document.querySelector('#calcDisplay').innerText = currentCalculatedValue
    }   
}
