const display = document.querySelector('#displayText');
const buttons = document.querySelectorAll('.button')

display.addEventListener('click', clear)

function clear() {
    display.innerText = "";
}

const ButtonMaker = function(id) {
    let self = this
    this.element = document.getElementById(id)
    this.value = this.element.innerText
    this.press = function(){
        display.innerText += this.value
    }
    this.element.addEventListener('click', () => {
        self.press()
    })
}

const EqualMaker = function(id) {
    let self = this
    this.element = document.getElementById(id)
    this.arithmetic = function(){
        let problem = display.innerText.replace('X', '*');
        display.innerText = eval(problem)
    }
    this.element.addEventListener('click', () => {
        self.arithmetic()
    })
}

Array.from(buttons).forEach(button => button.id !== 'equals' ? new ButtonMaker(button.id) : new EqualMaker(button.id))
