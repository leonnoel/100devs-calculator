

function Calculator() {
    let display = "";
    let calculate = "";
    let reset = false;

    const input = {
        seven: "7",
        eight: "8",
        nine: "9",
        divide: "/",
        four: "4",
        five: "5",
        six: "6",
        multiply: "*",
        one: "1",
        two: "2",
        three: "3",
        add: "+",
        zero: "0",
        point: ".",
        subtract: "-",
    };

    this.onClick = function() {
        if(reset) {
            document.querySelector(".display").innerText = "";
        }
        display = input[this.id]
        document.querySelector(".display").innerText += display;
        reset = false;
    }

    this.getResult = function() {
        calculate = new Function(`return ${document.querySelector(".display").innerText}`)
        document.querySelector(".display").innerText = calculate();
        reset = true;

    }

}

const calc = new Calculator();

document.querySelectorAll(".input").forEach(element => element.addEventListener("click", calc.onClick));
document.querySelector("#sum").addEventListener("click", calc.getResult)



