
function Calculator() {
    let state = "";
    this.update = (value) => {
        state += value;
        document.querySelector('.inputs').innerText = state;
    };
    this.evaluate = () => {     
       let result = (eval(state));
       document.querySelector('.inputs').innerText = result;
       state = "";
    };
    let buttons = Array.from(document.querySelectorAll('button'))
    for (const input of buttons) {
        input.addEventListener('click', () => {
           input.innerText === '=' ? this.evaluate() : this.update(input.innerText);
        });
    };

}

const calculator = new Calculator()


// let inputs = Array.from(document.querySelectorAll('button'));


