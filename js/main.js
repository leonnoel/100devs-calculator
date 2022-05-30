const buttons = document.querySelectorAll('button')
const previousDisplayVal = document.querySelector('.prevDisplay')
const currentDisplayVal = document.querySelector('.currentDisplay')

class Calculator {
    constructor(previousDisplayVal, currentDisplayVal) {
        this.previousDisplayVal = previousDisplayVal
        this.currentDisplayVal = currentDisplayVal
        this.clear()
    }
    clear() {
        this.previousCalcVal = ''
        this.currentCalcVal = ''
        this.operator = undefined
    }
    deleteLastDigit() {
    }
    appendDigits(number) {
        if (number === '.' && this.currentCalcVal.includes('.')) return
        this.currentCalcVal += '' + number
    }
    selectOperator(operator) {
        if(operator !== undefined) this.evaluate()
        this.operator = operator
        this.previousCalcVal = this.currentCalcVal
        this.currentCalcVal = ''
    }
    evaluate() {
        let result
        switch (this.operator) {
            case '+': result = +this.previousCalcVal + +this.currentCalcVal
                break;
            case '-': result = +this.previousCalcVal - +this.currentCalcVal
                break;
            case '*': result = +this.previousCalcVal * +this.currentCalcVal
                break;
            case '/': result = +this.previousCalcVal / +this.currentCalcVal
                break;
            default: return
        }
        this.previousCalcVal = ''
        this.currentCalcVal = result
        this.operator = undefined
    }
    updateCalculatorDisplay() {
        this.currentDisplayVal.innerText = this.currentCalcVal
        this.previousDisplayVal.innerText = this.previousCalcVal
    }
}
const calc = new Calculator(previousDisplayVal, currentDisplayVal)

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('num')) {

            calc.appendDigits(btn.innerText)
            calc.updateCalculatorDisplay()

        } else if (btn.classList.contains('operator')) {

            calc.selectOperator(btn.innerText)
            calc.updateCalculatorDisplay()

        } else if (btn.classList.contains('equals')) {

            calc.evaluate()
            calc.updateCalculatorDisplay()

        }
    })
})