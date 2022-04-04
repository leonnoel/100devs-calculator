//calculator JS

let keys=document.querySelector('.calculatorKeys')
keys.addEventListener('click', runCalc)
const display=document.querySelector('.myDisplay')

function runCalc(e){
    if (e.target.matches('button')){     //.target basically just reads only
        const key=e.target
        const action=key.dataset.action    //references data-action from html
        const keyContent=key.textContent
        const displayNum=display.textContent
        const calculator=document.querySelector('.calculator')
        const previousKeyType=calculator.dataset.previousKeyType
        if (!action) {
            if (displayNum==='0' || previousKeyType==='operator') {
                display.textContent=keyContent
            }else {
                display.textContent=displayNum + keyContent
            }  
            calculator.dataset.previousKeyType = 'number'    //this is a state machine. it's saying, if the previous is not an aciton, it must be in the number state. also has to be at the end or it will break the code on line 16
        } else if (action==='decimal') {
            //display.textContent=displayNum + '.'
            /* just another way to do it
            if (displayNum===0) {
                display.textContent='.'
            }else {
                display.textContent=displayNum + '.'
            }*/
            if (!displayNum.includes('.')) {
                display.textContent=displayNum + '.'
            } else if (previousKeyType === 'operator') {
                display.textContent='0.'
            }
            calculator.dataset.previousKeyType='decimal' 
        } else if (
            action==='add' ||
            action==='subtract' ||
            action==='divide' ||
            action==='multiply') {
                key.classList.add('is-depressed')
                calculator.dataset.previousKeyType = 'operator'
                calculator.dataset.firstValue = display.textContent
                calculator.dataset.operator = action
        } else if (action === 'clear') {
            display.textContent = 0
            calculator.dataset.previousKeyType = 'clear'
        } else if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayNum
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayNum     //basically makes the second value the first value after you hit calculate
                    secondValue = calculator.dataset.modValue
                }
                display.textContent = calculate(firstValue, operator, secondValue)
            }
            calculator.dataset.modValue=secondValue
            calculator.dataset.previousKeyType = 'calculate'
        }
        
    }  
}


const calculate = (n1, operator, n2) => {
    let result=''
    if (operator==='add'){
        result=parseFloat(n1)+parseFloat(n2)   //converts string to float. can alternatively do parseInt for just integer. but float works for both
    }else if (operator==='subtract'){
        result=parseFloat(n1)-parseFloat(n2)
    }else if (operator==='divide') {
        result=parseFloat(n1)/parseFloat(n2)
    }else if (operator==='multiply') {
        result=parseFloat(n1)*parseFloat(n2)
    }
    console.log(n1)
    console.log(n2)
    console.log(result)
    console.log(operator)
    return result
}