function Calculator() {
    let result = document.querySelector(`.result`);
    let buttons = Array.from(document.querySelectorAll(`.key`));

    buttons.map(el => el.addEventListener(`click`, (button) => {
        if (button.target.innerText  === '=') {
            result.innerText = eval(result.innerText);
        } else result.innerText += button.target.innerText;
    }));
    

}

let calc = new Calculator();