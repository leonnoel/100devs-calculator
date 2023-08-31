let btns = document.querySelectorAll(".btn"),
    display = document.querySelector("#display");

for (let btn of btns) {
    btn.addEventListener("click", btnListener)
}
function btnListener(event) {
    if (event.target.value == "=") {
        display.innerText = calc.solve
        return;
    }
    calc.addToInput = event.target.value;
    display.innerText = calc.input;
}

class Calculator {
    constructor(input = "") {
        this.input = input;
        this.reset = false;
    }
    set addToInput(value) {
        if (this.reset) { this.input = value;
        this.reset=false }
        else { this.input += value}
        
    }
    get solve() {
        this.reset = true
        return eval(this.input)
    }
}


let calc = new Calculator();