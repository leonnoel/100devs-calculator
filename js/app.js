class Calculator {
    constructor() {
        this.displayValues = document.getElementById('display')
        this.button = document.querySelectorAll('.btn');
        this.btnVal(this)
        this.arr = []

    }

    btnVal(val) {
        this.button.forEach(el =>
            el.addEventListener('click', function(e) {
                let values = e.currentTarget.value
                switch (values) {
                    case '+':
                        val.arr.push(Number(val.displayValues.innerText))
                        val.arr.push(values)
                        val.displayValues.innerText = ''
                        break
                    case '-':
                        val.arr.push(Number(val.displayValues.innerText))
                        val.arr.push(values)
                        val.displayValues.innerText = ''
                        break
                    case '*':
                        val.arr.push(Number(val.displayValues.innerText))
                        val.arr.push(values)
                        val.displayValues.innerText = ''
                        break
                    case '/':
                        val.arr.push(Number(val.displayValues.innerText))
                        val.arr.push(values)
                        val.displayValues.innerText = ''
                        break
                    case '=':
                        val.arr.push(Number(val.displayValues.innerText))
                        val.displayValues.innerText = ''
                        break
                    default:
                        val.displayValues.innerText += e.currentTarget.value

                }
            })
        )
    }

    calcResult() {
        let cal = ''
        this.arr.filter((x, i) => x !== 0 ? cal += x : false)
        this.arr = []
        this.displayValues.innerText = eval(cal)

    }
    resetBtn() { this.displayValues.innerText = '' }

}

let calculator = new Calculator


document.querySelector("#evaluate").addEventListener('click', function() { calculator.calcResult() })
document.querySelector("#reset").addEventListener('click', function() { calculator.resetBtn() })