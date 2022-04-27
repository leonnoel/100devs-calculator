/**
 * Want to make a function where if you click a button, that button's value is pushed to the display.
 * When the equal sign is pressed, it calculates the values loaded in the display, then displays the total.
 */

// let total = document.getElementById('total');
// let button7 = document.getElementById('seven');
// let displayTotal = "";


// function updateTotal(btn) {
//     numTotal = Number(total.innerText) + Number(btn.innerText);
//     total.innerText = numTotal;
//     displayTotal += numTotal;
//     // return total += btn;
// }

// button7.addEventListener('click', updateTotal(button7));



let calc = {
    "total": 0,
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "/": () => {a / b},
    "x": () => {a * b},
    "+": () => {a + b},
    "-": () => {a - b},
}