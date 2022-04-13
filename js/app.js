const output = document.querySelector('#output-value');
const history = document.querySelector('#history-value');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', calculate)
});
function calculate() {
    let buttonText = this.innerText;
    if (buttonText === "C") {
        history.innerText = " ";
        output.innerText = "0";
        return;
    }
    if (buttonText === "=") {
        output.innerText = eval(history.innerText);

    }
    else {
        history.textContent += buttonText;
    }
}