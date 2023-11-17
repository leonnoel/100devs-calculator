class Calculator {
    constructor() {
        this.evalStr = '';
        this.result = '';
        this.calculator = math;
    }

    checkForX(expr) {
        return expr.includes('x') ? expr.replace('x', '*') : expr; 
    }

    evaluate(expr) {
        let ex = this.checkForX(expr);
        try {
            this.result = this.calculator.evaluate(ex);
            return this.result;
        } catch (error) {
            return 'Error in expression!'
        }
    }

    clear() {
        this.evalStr = '';
        this.result = '';
    }

    get getEvalStr() {
        return this.evalStr;
    }

    set setEvalStr(expression) {
        this.evalStr = expression
    }
}

let myCalculator = new Calculator()

const display = document.getElementById('display');
const btns = document.querySelectorAll('.expr');
const eqBtn = document.querySelector('.equal');

btns.forEach(btn => {
    btn.addEventListener('click', (btn) => run(btn));
})

eqBtn.addEventListener('click', solve)

function run(btn) {
    display.value += btn.target.innerText;
}

function solve() {
    let answer = myCalculator.evaluate(display.value);
    console.log(answer)
    display.value = answer;
}