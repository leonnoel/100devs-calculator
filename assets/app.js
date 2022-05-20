class Calculator {
    constructor() {
        this.x = ''; //first number
        this.y = ''; //second number
        this.operation = ''; //math operation
        this.result = ''; //result
    }
    parseChar(char) {
        // check if the clicked character is a number
        if ('0123456789'.includes(char)) {
            this.operation ? this.y += char : this.x += char;
            console.log(`x: ${this.x}; y: ${this.y}; operation: ${this.operation}`);
        } else {
            switch (char) {
                case '.':
                    // check if dot is already present and the operation
                    if (!this.operation && !this.x.includes(char)) this.x += char;
                    if (this.operation && !this.y.includes(char)) this.y += char;
                    break;
                // set the operation
                case 'x':
                case '+':
                case '/':
                case '-':
                    if (Number(this.x) !== NaN && !this.operation) this.operation = char;
                    break;
                case '=':
                    if (!this.x || !this.y || !this.operation) return '';
                    const operObj = {
                        'x': this.x * this.y,
                        '+': this.x + this.y,
                        '-': this.x - this.y,
                        '/': this.x / this.y,
                    }
                    return this.result = "= " + operObj[this.operation];
            }
        }
    }
    display() {
        // x, operation, y, and result are filled one by one
        // they are empty strings if not filled yet
        return `${this.x} ${this.operation} ${this.y} ${this.result}`;
    }
}

// add the listener to the button pane, not each button separately
document.querySelector('.buttons').addEventListener('click', calculate);

const calculator = new Calculator;

function calculate(event) {
    let output = document.querySelector('.screen');
    // event.target is the element that was clicked
    const char = event.target.innerText;
    calculator.parseChar(char);
    output.innerText = calculator.display();
}
