let elements = document.querySelectorAll('.btn');

elements.forEach(btn => {
    btn.addEventListener('click', Calculator)
})
let value = ""
function Calculator() {
    if (this.innerText === "X") {
        value += "*"
    }
    if (this.innerText !== "=") {
        value += this.innerText
        document.querySelector('.result').innerHTML = value
    }
    if (this.innerText === "=") {
        let calc = eval(value)
        document.querySelector('.result').innerHTML = calc.toFixed(9)
        value = ""
    }
}