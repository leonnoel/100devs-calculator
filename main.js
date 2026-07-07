
// JS OOP BEST PRACTICES

function Calculator () {
    this.buttons = { /* stores the actual button elements rather than the return value of event listeners */
        1: document.getElementById('one'),
        2: document.getElementById('two'),
        3: document.getElementById('three'),
        4: document.getElementById('four'),
        5: document.getElementById('five'),
        6: document.getElementById('six'),
        7: document.getElementById('seven'),
        8: document.getElementById('eight'),
        9: document.getElementById('nine'),
        0: document.getElementById('zero'),
        ".": document.getElementById('decimal'),
        "+": document.getElementById('add'),
        "-": document.getElementById('subtract'),
        "x": document.getElementById('multiply'),
        "/": document.getElementById('divide'),
        "=": document.getElementById('equals')
    }
    this.display = document.getElementById('display_text');

    for (const key in this.buttons) {
        this.buttons[key].addEventListener('click', () => {
            this.read(key);
            if (key == "=") {
                this.equals();
            }
        });
    }

    this.read = function (value) {
        // console.log(value)
        /* take the button key (value), and append to the display */
        this.display.innerText += value;
    }

    this.equals = function () {
        let expression = this.display.innerText.slice(0, -1); // remove the "=" 
        this.display.innerText = eval(expression);
    }
}


let calculator = new Calculator(); // new object created


