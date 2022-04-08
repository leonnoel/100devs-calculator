const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display')

class Calculator {
    constructor(displayValues, button) {
        this.displayValues = displayValues;
        this.button = button
        let parentThis = this

        this.button.forEach(el =>
            el.addEventListener('click', function(e) {
                parentThis.displayValues.innerText += e.currentTarget.value
            })
        )

    }
}


const calculator = new Calculator(display, buttons)