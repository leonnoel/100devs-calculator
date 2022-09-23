


function Calculator() {
    let result = document.querySelector(`.result`);
    let buttons = Array.from(document.querySelectorAll(`.key`));

    buttons.map(el => el.addEventListener(`click`, (button) => {
        result.innerText += button.target.innerText;        
    }));
    

}

let calc = new Calculator();
// console.log(calc.sum());