function Calculator(){
    let result = 0
    let firstval = 0
    let secondVal = 0
    let symbol

    this.divide = function() {
        firstval = document.querySelector('#display').textContent
        document.querySelector('#display').innerText = ''
        symbol = "/"
    }
    this.multipy = function() {
        firstval = document.querySelector('#display').textContent
        document.querySelector('#display').innerText = ''
        symbol = "*"
    }
    this.add = function() {
        firstval = document.querySelector('#display').textContent
        document.querySelector('#display').innerText = ''
        symbol = "+"
    }
    this.subtract = function() {
        firstval = document.querySelector('#display').textContent
        document.querySelector('#display').innerText = ''
        symbol = "-"
    }

    this.end = function() {
        secondVal = document.querySelector('#display').textContent
        document.querySelector('#display').innerText = ''

        console.log(firstval, secondVal)

        switch(symbol){
            case "/":
                result = +firstval / +secondVal
                break
            case "*":
                result = +firstval * +secondVal
                break
            case "+":
                result = +firstval + +secondVal
                break
            case "-":
                result = +firstval - +secondVal
                break                    
        }

        document.querySelector('#display').innerText = result.toFixed(5)
    }

    this.reset = function() {
        firstval = 0
        secondVal = 0
        result = 0
        document.querySelector('#display').innerText = ''
    }
}

const cal = new Calculator()

console.log(document.querySelector('#display').value)

// numbers

document.querySelector('.zero').addEventListener('click', function(){
    document.querySelector('#display').innerText += 0
})
document.querySelector('.one').addEventListener('click', function(){
    document.querySelector('#display').innerText += 1
})
document.querySelector('.two').addEventListener('click', function(){
    document.querySelector('#display').innerText += 2
})
document.querySelector('.three').addEventListener('click', function(){
    document.querySelector('#display').innerText += 3
})
document.querySelector('.four').addEventListener('click', function(){
    document.querySelector('#display').innerText += 4
})
document.querySelector('.five').addEventListener('click', function(){
    document.querySelector('#display').innerText += 5
})
document.querySelector('.six').addEventListener('click', function(){
    document.querySelector('#display').innerText += 6
})
document.querySelector('.seven').addEventListener('click', function(){
    document.querySelector('#display').innerText += 7
})
document.querySelector('.eight').addEventListener('click', function(){
    document.querySelector('#display').innerText += 8
})
document.querySelector('.nine').addEventListener('click', function(){
    document.querySelector('#display').innerText += 9
})
document.querySelector('.dot').addEventListener('click', function(){
    document.querySelector('#display').innerText += '.'
})


// opertations

document.querySelector('.divide').addEventListener('click', function(){
    cal.divide()
})
document.querySelector('.add').addEventListener('click', function() {
    cal.add()
})
document.querySelector('.subtract').addEventListener('click', function(){
    cal.subtract()
})
document.querySelector('.multiply').addEventListener('click', function() {
    cal.multipy()
})
document.querySelector('.end').addEventListener('click', function(){
    cal.end()
})
document.querySelector('.reset').addEventListener('click', function(){
    cal.reset()
})