class Calculator {
    constructor() {
        this.displayValues = document.getElementById('display')
        this.button = document.querySelectorAll('.btn');
        this.btnVal(this)
        this.calcResult

    }

    btnVal(val) {
        this.button.forEach(el =>
            el.addEventListener('click', function(e) {
                val.displayValues.innerText += e.currentTarget.value

            })
        )
    }

    calcResult() {
        return this.displayValues.innerText = eval(this.displayValues.innerText)

    }

}

let calculator = new Calculator


document.querySelector("#evaluate").addEventListener('click', function() {
    calculator.calcResult()

})