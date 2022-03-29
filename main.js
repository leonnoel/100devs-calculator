function Calculator () {
    let baseElement = document.querySelector('#calcBase');
    let displayElement = document.querySelector('.calc-display');

    let operand, prevNum, curNum; 
    let tmpNum = '';

    let methods = {
        "*": (a, b) => +a * +b,
        "/": (a, b) => +a / +b,
        "+": (a, b) => +a + +b,
        "-": (a, b) => +a - +b,
    }

    let getKeys = function (e) {
        let key = e.target.innerText;
        if (key === "+" || key === "-" || key === "*" || key === "/" ) {
            operand = key;
            displayElement.innerHTML = key;
            prevNum = tmpNum;
            tmpNum = '';
        } else if (key === "=") {           
            displayElement.innerHTML = methods[operand](prevNum, tmpNum);
            prevNum = '';
            tmpNum = '';
        } else {
            tmpNum += key;
            displayElement.innerHTML = tmpNum;
        }
    }


    this.generateButtons = function () {
        let buttons = [
            "/", "9", "8", "7", "*", "6", "5", "4", "+", "3", "2", 
            "1", "-", "=", ".", "0"
        ]
        let btnBaseElement = document.querySelector('.calc-buttons');

        buttons.forEach(button => {
            let btnElement = document.createElement('span');
            btnElement.innerText = button;
            btnElement.addEventListener('click', getKeys)

            btnBaseElement.appendChild(btnElement);
        })
        
    }
}

let calculator = new Calculator();
calculator.generateButtons()