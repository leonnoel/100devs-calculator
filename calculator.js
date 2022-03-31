
let secondNumber = 0

function logIt(){
    let firstNumber = (this).value
    document.querySelector(".result").innerText=firstNumber
}

document.querySelectorAll('.buttons').forEach(item => {
    item.addEventListener("click", logIt)
});

