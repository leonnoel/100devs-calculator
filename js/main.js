let buttonInput = document.querySelectorAll(".button")
let answer = document.querySelector(".answer")

buttonInput.forEach(function (btn) {
    btn.addEventListener('click', function () {
        answer.appendNumber(button.innerText)
        answer.updateDisplay()
    });
});


