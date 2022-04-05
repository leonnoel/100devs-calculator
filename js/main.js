let calculator = {}

calculator.currentNum = 0
calculator.prevNum = 0

calculator.buttonIsPressed = function () {
    this.currentNum = btn.value
    console.log(btn.value)
}

calculator.add = function () {
    return this.total + this.num
}

calculator.divide = function () {
    return this.total / this.num
}

calculator.equals = function () {
    return this.total
}

calculator.minus = function () {
    return this.total - this.num
}

calculator.numberLogic = function () {
    // if two numbers are pressed one after the other, the second number must be displayed after the previous one.



    // each number pressed needs to change the number variable [x]
        // pnum = pnum + (cnum * 10) [x]
    this.prevNum = this.currentNum
    this.prevNum += (this.currentNum * 10)
}

calculator.multiply = function () {
    return this.total * this.num
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', calculator.buttonIsPressed())

// display
    // if a number is pressed, it must display on the screen
    // if two numbers are pressed one after the other, the second number must be displayed after the previous one.
    // each number pressed needs to change the number variable [x]
        // pnum = pnum + (cnum * 10) [x]

// keep track of total

// keep track of number pressed

// operator functions 

// make the decimal button work. [x]
    // if dec pressed, & then num pressed [x]
        // pnum = pnum + cnum * .1 [x]

// if getlementbyid = 1 calc.num = 1

/*
let calc = {
    num: 0,
    total: 0,
    add(){
        return this.total + this.num
    },
    display(){
        display.innerText += this.num
    },
    divide() {
        return this.total / this.num
    },
    equals() {
        return this.total
    },
    minus() {
        return this.total - this.num
    },
    multiply() {
        return this.total * this.num
    }
}
*/

/*
function show(num) {
    switch (num) {
        case 0:
            display.innerText += '0';
            break;
        case 1:
            display.innerText += '1';
            break;
        case 2:
            display.innerText += '2';
            break;
        case 3:
            display.innerText += '3';
            break;
        case 4:
            display.innerText += '4';
            break;
        case 5:
            display.innerText += '5';
            break;
        case 6:
            display.innerText += '6';
            break;
        case 7:
            display.innerText += '7';
            break;
        case 8:
            display.innerText += '8';
            break;
        case 9:
            display.innerText += '9';
            break;
        default:
            break;
    }
}*/