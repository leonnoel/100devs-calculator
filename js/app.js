const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display')

function Calculator(displayValues, button) {
    this.displayValues = displayValues;
    // this.displayValues.textContent = '000'


    button.forEach(el =>
        el.addEventListener('click', function(e) {
            displayValues.textContent = this.value
        }))


}


const calculator = new Calculator(display, buttons)