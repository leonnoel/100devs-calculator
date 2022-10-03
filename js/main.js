class Calculator {

    constructor(previousEntryTextElement, currentEntryTextElement){
        this.previousEntryTextElement = previousEntryTextElement
        this.currentEntryTextElement = currentEntryTextElement   
        this.initialize()
    }

    initialize() {
        this.previousEntryTextElement.innerText = ''
        this.currentEntryTextElement.innerText = '0'
        this.currentOperator = ''
        this.currentNumber = '0'
        this.previousNumber = ''
        this.computeFlag = false
    }

    appendNumber(number) {
        number = number.toString()

        if (this.computeFlag){
            this.computeFlag = false
            return this.currentNumber = number
        }

        // no multiple decimals
        if (number === '.' && this.currentNumber.includes('.')) return

        // formatting for leading zero
        if (this.currentNumber === '0' && number !== '.') {
            this.currentNumber = ''
        }

        // appends the current number
        this.currentNumber += number

        this.computeFlag = false

    }

    updateDisplay() {
        if (!isFinite(this.currentNumber)){
            this.currentNumber = ''
            this.previousNumber = ''
            this.previousEntryTextElement.innerText = this.previousNumber
            return this.currentEntryTextElement.innerText = 'ERR! CANNOT DIVIDE BY 0'
        }

        this.currentEntryTextElement.innerText = this.currentNumber

        if (this.previousNumber !== ''){
            this.previousEntryTextElement.innerText = `${this.previousNumber} ${this.currentOperator}`
        }
        else {
            this.previousEntryTextElement.innerText = this.previousNumber
        }
    }

    chooseOperation(operator){

        if (this.currentNumber === '') return
        if (this.previousNumber !== ''){
            this.compute()
        }
        this.currentOperator = operator
        this.previousNumber = this.currentNumber
        this.currentNumber = '0'
    }

    compute(){
        let result
        let prevNum = parseFloat(this.previousNumber)
        let currentNum = parseFloat(this.currentNumber)
        if (isNaN(prevNum) || isNaN(currentNum)) return

        switch(this.currentOperator){
            case '+':
                result = (prevNum + currentNum).toString()
                break

            case '-':
                 result = (prevNum - currentNum).toString()
                 break

            case 'X':
                result = (prevNum * currentNum).toString()
                break

            case '/':
                result = (prevNum / currentNum).toString()
                break
        }

        this.previousNumber = ''
        this.currentNumber = result
        this.computeFlag = true

    }

    delete() {

        if (!this.computeFlag){
        this.currentNumber = this.currentNumber.slice(0,-1)
        if (this.currentNumber === '') return this.currentNumber = '0'
    }
}

}

const previousEntryTextElement = document.querySelector('.previous-entry')
const currentEntryTextElement = document.querySelector('.current-entry')
const digitKeys = document.querySelectorAll('.digit')
const operations = document.querySelectorAll('.operation')
const equals = document.querySelector('.equals')
const AC = document.querySelector('.clear')
const deleteKey = document.querySelector('.delete')

const myCalc = new Calculator(previousEntryTextElement,currentEntryTextElement)

digitKeys.forEach(button => {
    button.addEventListener('click', () => {
        myCalc.appendNumber(button.innerText)
        myCalc.updateDisplay()
    })
})

operations.forEach(button => {
    button.addEventListener('click', () => {
        myCalc.chooseOperation(button.innerText)
        myCalc.updateDisplay()
    })
})

equals.addEventListener('click', () => {
    myCalc.compute()
    myCalc.updateDisplay()
})

AC.addEventListener('click', () => {
    myCalc.initialize()
    myCalc.updateDisplay()
})

deleteKey.addEventListener('click', () => {
    myCalc.delete()
    myCalc.updateDisplay()
})