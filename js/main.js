let calculator = {
    num1 : '',
    num2 : '',
    operator : '',
    dotcount: '',
    add : function(num1, num2){
        return num1 + num2
    },
    
    subtract :function(num1, num2){
        return num1 - num2
    },
    
    multiply :function(num1, num2){
        return num1 * num2
    },
    
    divide : function(num1, num2){
        return num1 / num2
    },

    select: function(){
        calculator.num1 = Number(calculator.num1)
        calculator.num2 = Number(calculator.num2)
        let answer;
        if (calculator.operator == '+'){
            answer = calculator.add(calculator.num1, calculator.num2)
        } else if (calculator.operator == '-'){
            answer = calculator.subtract(calculator.num1, calculator.num2)
        } else if (calculator.operator == 'X') {
            answer = calculator.multiply(calculator.num1, calculator.num2)
        } else if (calculator.operator == '/') {
            answer = calculator.divide(calculator.num1, calculator.num2)
        } else {
            answer = ''
        }
        calculator.reset()
        answer%1 != 0 ? calculator.dotcount = 1 : calculator.dotcount = ''
        calculator.num1 = answer
        document.querySelector('h1').innerHTML = answer
    },

    numberToScreen: function(value){
        calculator.isError()
        document.querySelector('h1').innerHTML += value
        if (calculator.operator) {
            calculator.num1 += value
        } else{
            calculator.num2 += value
        }
        if (value == '.'){
             calculator.dotcount ? document.querySelector('h1').innerHTML = 'ERROR' : calculator.dotcount = 1
        } 
    },

    operatorToScreen: function(value){
        calculator.isError()
        document.querySelector('h1').innerHTML += ` ${value} `
        if (calculator.operator){
            document.querySelector('h1').innerHTML = 'ERROR'
            calculator.dotcount = ''
        } else{
            calculator.operator = value;
            calculator.dotcount = ''
        }
    },

    reset: function(){
        calculator.num1 = ''
        calculator.num2 = ''
        calculator.operator = ''
        calculator.dotcount = ''
    },

    isError: function(){
        let screen = document.querySelector('h1')
        if (screen.innerHTML === 'ERROR'){
            screen.innerHTML = ''
            calculator.reset()
        }
    }
}

const numbers = document.querySelectorAll('.number')

numbers.forEach(element => {
    element.addEventListener('click', function(event){
        calculator.numberToScreen(event.target.value)
    }) 
})

const operators = document.querySelectorAll('.operator')

operators.forEach(element => {
    element.addEventListener('click', function(event){
        calculator.operatorToScreen(event.target.value)
    })
})

document.querySelector('#equals').addEventListener('click', calculator.select)
