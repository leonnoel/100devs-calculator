document.querySelectorAll('td').forEach(e => {
    e.addEventListener('click', handleClick)
})

function Caclculator() {
    let display = "";
    let valid = false;
    let methods = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '/': (a,b) => a / b,
        'x': (a,b) => a * b,
    };
    this.calculate = function() {
        const [arg1, arg2] = display.split(/\+|\/|-|x/);
        const op = display[arg1.length]
        const num1 = Number(arg1);
        const num2 = Number(arg2);
        const fn = methods[op];
        if (!num1 || !num2 || !fn) {
            display = "Invalid";
            return;
        }
        display = fn(num1, num2).toString();
        valid = true
    };
    this.read = function(input) {
        if (display === "Invalid" || (valid && !'+-x/'.includes(input))) {
            // reset display after any input is entered following an invalid result
            // or a new number is entered after a valid calculation
            display = input;
        } else {
            display += input
        }
        valid = false
    };
    Object.defineProperty(this, 'display', {
        get: function() {
          return display;
        }
    });
}

const calc = new Caclculator();

function handleClick(e) {
    let key = e.target.innerHTML;
    if (key === '=') {
        calc.calculate();
    } else {
        calc.read(key);
    }
    document.querySelector('input').value = calc.display;
}