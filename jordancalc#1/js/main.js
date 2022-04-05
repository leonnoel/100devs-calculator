class Calc {
    constructor(prevOptext, currOptext) {
        this.prevOptext = prevOptext;
        this.currOptext = currOptext;
        this.clear()
    }


    clear() {
        this.prevOp = ''
        this.currOp = ''
        this.operator = undefined
    }



    appendNum(num) {
        if (num === '.' && this.currOp.includes('.')) return
        this.currOp = this.currOp.toString() + num.toString()

    }


    chooseOp(operator) {
        if (this.currOp === '') return
        if (this.prevOp !== '') (
            this.goMathgo()
        )
        this.operator = operator
        this.prevOp = this.currOp
        this.currOp = ''
    }


    goMathgo() {
        let computation
        const prev = parseFloat(this.prevOp)
        const current = parseFloat(this.currOp)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operator) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currOp = computation
        this.operator = undefined
        this.prevOp = ''


    }

    updateDisplay() {
        this.currOptext.innerText = this.currOp
        this.prevOptext.innerText = this.prevOp

    }




}

let numberButtons = document.querySelectorAll('.num')
let operatorButtons = document.querySelectorAll('.operator')
let equalsButtons = document.querySelector('.equals')
let clearAll = document.querySelector('.clear_all')
let prevOptext = document.querySelector('#prevplace')
let currOptext = document.querySelector('#currentplace')


let calc = new Calc(prevOptext, currOptext)

numberButtons.forEach(x => {
    x.addEventListener('click', () => {
        calc.appendNum(x.innerText)
        calc.updateDisplay()
    })
})

operatorButtons.forEach(x => {
    x.addEventListener('click', () => {
        calc.chooseOp(x.innerText)
        calc.updateDisplay()
    })
})

clearAll.addEventListener('click', x => {
    calc.clear();
    calc.updateDisplay();
})

equalsButtons.addEventListener('click', x => {
    calc.goMathgo();
    calc.updateDisplay();
})

