// calculator object

function Calculator(nums) {

    displayText = '0',
    prevTotal = null,
    

    this.add = function () {
        console.log('adds');
    }
    this.subtract = function() {
        console.log('subtracts');
    }
    this.multiply = function() {
        console.log('multiply');
    }
    this.divide = function() {
        console.log('divides');
    }
    this.equal = function() {
        console.log('equals');
    }
}

// setting up button presses and return to the screen

const keys = document.querySelector('#btnPad');
keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    let arr = []
    let operators = ['.', 'x', '+', '-', '/', '=']
    if (!target.matches('button')) {
        return;
    } else {
        console.log(value);
        document.querySelector('#screen').innerText = value
    }
})