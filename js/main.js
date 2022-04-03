function Calculator() {

    // differentiate between an operator and an input
    let operators = document.querySelectorAll('.op');
    let numbers = document.querySelectorAll('.num');

    // designate place for values and totals to show
    let readOut = document.querySelector('#screen');

    // clicking number buttons adds digit or decimal to screen and concats to value until an operator is clicked
    let value = '';
    this.input = () => {
        value += event.target.innerText;
        readOut.innerText = value;
    };

    Array.from(numbers).forEach(element => element.addEventListener('click', this.input));

    // clicking an operator tells calculator which math function to perform
    // if it isn't the first operator, it shows the result before printing the next value to screen
    let total = 0;
    let process = '';

    this.evaluate = () => {
        value = +value;
        if (total !== 0){
            switch (process) {
                case '+':
                    total += value;
                    break;
                case '-':
                    total -= value;
                    break;
                case 'x':
                    total *= value;
                    break;
                case '/':
                    total /= value;
                    break;
            }
        }else {
            process = event.target.innerText;
            total = +value;
        }
        value = '';
        process = event.target.innerText;
        readOut.innerText = total;
    }

    Array.from(operators).forEach(element => element.addEventListener('click', this.evaluate));

    // clicking equal shows results and resets all values
    this.reset = () => {
        process = '';
        value = '';
        total = 0;
    }

    document.querySelector('#result').addEventListener('click', this.reset);
    
    
}

new Calculator();