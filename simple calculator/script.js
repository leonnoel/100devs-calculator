function clearScreen() {
    document.getElementById("displayWindow").value = 0;
}

function display(value) {
    document.getElementById("displayWindow").value += value;
}

function calculate() {
    let solution = document.getElementById("displayWindow").value;
    let displayTotal = eval(solution);
    document.getElementById("displayWindow").value = displayTotal;
}

