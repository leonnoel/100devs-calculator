function Calculator() {
    this.curr = 0
    this.add = function(prev) {
        this.curr += prev 
        return this.curr
    }
    this.subtract = function() {
        
    }
    this.divide = function() {
        
    }
    this.multiply = function() {
        
    }
}

let total = 0
let s = ''
let operation = 'plus'

// Write out number
document.querySelector("#one").addEventListener('click', appendOne)
document.querySelector("#two").addEventListener('click', appendTwo)
document.querySelector("#three").addEventListener('click', appendThree)
document.querySelector("#four").addEventListener('click', appendFour)
document.querySelector("#five").addEventListener('click', appendFive)
document.querySelector("#six").addEventListener('click', appendSix)
document.querySelector("#seven").addEventListener('click', appendSeven)
document.querySelector("#eight").addEventListener('click', appendEight)
document.querySelector("#nine").addEventListener('click', appendNine)
document.querySelector("#zero").addEventListener('click', appendZero)

document.querySelector("#clear").addEventListener('click', clearNum)

document.querySelector("#plus").addEventListener('click', addNum)
document.querySelector("#minus").addEventListener('click', minusNum)
document.querySelector("#multiply").addEventListener('click', multiplyNum)
document.querySelector("#divide").addEventListener('click', divideNum)
document.querySelector("#equal").addEventListener('click', calcAnswer)

function appendOne() {
    s += 1
    document.querySelector("#placeResultHere").innerText = s
}

function appendTwo() {
    s += 2
    document.querySelector("#placeResultHere").innerText = s
}

function appendThree() {
    s += 3
    document.querySelector("#placeResultHere").innerText = s
}

function appendFour() {
    s += 4
    document.querySelector("#placeResultHere").innerText = s
}

function appendFive() {
    s += 5
    document.querySelector("#placeResultHere").innerText = s
}

function appendSix() {
    s += 6
    document.querySelector("#placeResultHere").innerText = s
}

function appendSeven() {
    s += 7
    document.querySelector("#placeResultHere").innerText = s
}

function appendEight() {
    s += 8
    document.querySelector("#placeResultHere").innerText = s
}

function appendNine() {
    s += 9
    document.querySelector("#placeResultHere").innerText = s
}

function appendZero() {
    s += 0
    document.querySelector("#placeResultHere").innerText = s
}

function clearNum() {
    if (s==='') {
        total = 0
    } 
    else {
        s = ''
        document.querySelector("#placeResultHere").innerText = s
    } 
}

function updateTotal() {
    total = Number(s)
    clearNum()
}

function addNum() {
    updateTotal()
    operation = 'plus'
}

function minusNum() {
    updateTotal()
    operation = 'minus'
}

function multiplyNum() {
    updateTotal()
    operation = 'multiply'
}

function divideNum() {
    updateTotal()
    operation = 'divide'
}

function calcAnswer() {
    if (operation === 'plus') {
        total = total + Number(s)
        document.querySelector("#placeResultHere").innerText = total
    }
    else if (operation === 'minus') {
        total = total - Number(s)
        document.querySelector('#placeResultHere').innerText = total
    }
    else if (operation === 'multiply') {
        total = total * Number(s)
        document.querySelector('#placeResultHere').innerText = total
    }
    else {
        total = total / Number(s)
        document.querySelector('#placeResultHere').innerText = total
    }
}
