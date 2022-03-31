let display = '', problem = ''

document.getElementById('one').addEventListener('click', one)
document.getElementById('two').addEventListener('click', two)
document.getElementById('three').addEventListener('click', three)
document.getElementById('four').addEventListener('click', four)
document.getElementById('five').addEventListener('click', five)
document.getElementById('six').addEventListener('click', six)
document.getElementById('seven').addEventListener('click', seven)
document.getElementById('eight').addEventListener('click', eight)
document.getElementById('nine').addEventListener('click', nine)
document.getElementById('zero').addEventListener('click', zero)
document.getElementById('decimal').addEventListener('click', decimal)
document.getElementById('add').addEventListener('click', add)
document.getElementById('subtract').addEventListener('click', subtract)
document.getElementById('multiply').addEventListener('click', multiply)
document.getElementById('divide').addEventListener('click', divide)
document.getElementById('equals').addEventListener('click', equals)
document.getElementById('displayText').addEventListener('click', clear)


function clear(){
    display = ''
    problem = ''
    updateDisplay
}

function updateDisplay(){
    if (display.length > 10) {
        error()
    } else document.getElementById('displayText').innerText = display
}

function error(){
    display='Error'
    updateDisplay()
}

function one() {
    display += '1'
    updateDisplay()
}

function two() {
    display += '2'
    updateDisplay()
}

function three() {
    display += '3'
    updateDisplay()
}

function four() {
    display += '4'
    updateDisplay()
}

function five() {
    display += '5'
    updateDisplay()
}

function six() {
    display += '6'
    updateDisplay()
}

function seven() {
    display += '7'
    updateDisplay()
}

function eight() {
    display += '8'
    updateDisplay()
}

function nine() {
    display += '9'
    updateDisplay()
}

function zero() {
    display += '0'
    updateDisplay()
}

function decimal() {
    display += '.'
    updateDisplay()
}

function add() {
    problem += `${display}+`;
    display = ''
    updateDisplay()
}

function subtract() {
    problem += `${display}-`;
    display = ''   
    updateDisplay()
}

function multiply() {
    problem += `${display}*`;
    display = ''
    updateDisplay()
}

function divide() {
    problem += `${display}/`;
    display = ''
    updateDisplay()
}

function equals() {
    try{
        problem += `${display}`;
        display = eval(problem);
        problem = ''
        updateDisplay()       
    }
    catch(err){
        display = 'Error';
        updateDisplay()
    }

}
