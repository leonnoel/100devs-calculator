class Calculator {
    constructor() {
        this.displayValues = document.getElementById('display')
        this.button = document.querySelectorAll('.btn');

        let parentThis = this

        this.button.forEach(el =>
            el.addEventListener('click', function(e) {
                parentThis.displayValues.innerText += e.currentTarget.value
            })
        )

    }

}

let calculator = new Calculator


Calculator.prototype.calcResult = function() {
    return this.displayValues.innerText = eval(this.displayValues.innerText)
}

document.querySelector("#evaluate").addEventListener('click', function() { calculator.calcResult() })