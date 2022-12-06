let display = document.querySelector('.display')
let display2 = document.querySelector('.displayTwo')
const deleteBtn = document.querySelector('.deleteBtn')
const clearBtn = document.querySelector('.clearBtn')
const numbers = Array.from(document.getElementsByClassName('button'))
const equal = document.getElementById('equal')
let log =  console.log
// create a object that has all the method of the calculations
function Calculator(){
    let num1,num2 = 0
    const operators = ['+', '-', '/', 'x']
    function add(){
        return num1+num2
        }
    function subtract(){
        return num1 - num2
    }
    function times(){
        return num1 * num2
    }
    function divide(){
        return num1 / num2
    }

    this.displayNumber = function(){
            numbers.map(value => {
                value.addEventListener('click', function(e){
                    if((e.target.textContent ==='x' || e.target.textContent ==='=' || e.target.textContent ==='+' || e.target.textContent ==='/') && display.textContent === ''){
                        display.innerHTML = 'ERROR'
                    } else if(display.textContent === 'ERROR') {
                        display.innerHTML = ''
                        if((e.target.textContent ==='x' || e.target.textContent ==='=' || e.target.textContent ==='+' || e.target.textContent ==='/') && display.textContent === ''){
                            display.innerHTML = 'ERROR'
                        } else if (value.textContent === 'Clear') {
                            display.innerHTML = ''
                            display2.innerHTML = ''
                        } else {
                            display.textContent += value.textContent
                        }
                    } else if(value.textContent === 'Clear'){
                        display.innerHTML = ''
                        display2.innerHTML = ''
                    } else if(value.textContent === '+') {
                        display2.textContent = display.textContent
                        display.textContent += value.textContent
                        
                    }  else if(value.textContent === '-') {
                        display2.textContent = display.textContent
                        display.textContent += value.textContent
                        
                    }
                    else if(value.textContent === '/') {
                        display2.textContent = display.textContent
                        display.textContent += value.textContent
                        
                    }
                    else if(value.textContent === 'x') {
                        display2.textContent = display.textContent
                        display.textContent += value.textContent
                        
                    } else if(value.textContent === '=') {
                        
                    } else {
                        display.textContent += value.textContent
                    }
                    
                })
            })
        }

    function getNum(){
        let equation = display.textContent.split('')
        //loop through array
        for(let i = 0; i < equation.length; i++){
            if(operators.includes(equation[i])){
                    num1 = parseInt(equation.slice(0,equation.indexOf(equation[i])).join(''))
                    num2 = parseInt(equation.slice(equation.indexOf(equation[i]) + 1).join(''))
            }
        }
    }

    function checkOperators(){
        let equation = display.textContent.split('')
        if(equation.includes('+')){
            return add()
        } else if(equation.includes('-')){
           return subtract()
        } else if(equation.includes('/')){
           return  divide()
        } else if(equation.includes('x')){
            return times()
        }
    }

    function displayAnswer(){
        display2.innerHTML = ''
        display.innerHTML = checkOperators()
    }
    this.equals = function(){
        getNum()
        displayAnswer()
        // turn display into array
        // look for operators
        // whehn operator found get the numbers before join them together it set it equal to num1 then parseInt them, 
        // get the numbers after the opertor but before the next operator join them together and set it to num2 then parseInt them
        // if theres no other opertors still set it to num2
        // which ever operator you find call that operatos funcction and set the answer to num1 if theres other operators 
        // else set it to a varible
        // display the varible or answer to the user on the display 
    
    }
}
// create a function that displays the numbers to the user

const cal = new Calculator()
cal.displayNumber()
equal.addEventListener('click', cal.equals)
// add functionalotyb to the = button
