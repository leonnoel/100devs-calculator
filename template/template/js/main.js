const calc ={}
calc.display = '0'
calc.firstNumber = null
calc.waitingOnSecondNumber = false
calc.operator = null

function changeDisplay(){
    let display = document.querySelector('.display')
    display.value = calc.display
}

changeDisplay()


const keys =document.querySelector('.keys')
keys.addEventListener('click', (event)=> {
    const {target} = event
    if(!target.matches('button')){
        return;
    }

    if(target.classList.contains('operator')){
        operator(target.value)
        changeDisplay()
        return
    }

    if(target.classList.contains('decimal')){
        decimalAdd(target.value)
        changeDisplay()
        return
    }

    if(target.classList.contains('clear')){
        console.log('clear', target.value)
        return
    }

    numberClick(target.value)
    changeDisplay()
})


function numberClick(digit){
    const {display, waitingOnSecondNumber}= calc
    if(waitingOnSecondNumber === true){
        calc.display = digit
        calc.waitingOnSecondNumber= false;
    } else{
    calc.display = display === '0' ? digit: display + digit
    }
}

function decimalAdd(dot){
    if(!calc.display.includes(dot)){
        calc.display += dot
    }
}

function operator(operatorNext){
    const {firstNumber, display, operator} = calc
    const value = parseFloat(display)
    if(firstNumber === null && !isNaN(value)){
        calc.firstNumber = value
    }
    calc.waitingOnSecondNumber = true
    calc.operator = operatorNext
}