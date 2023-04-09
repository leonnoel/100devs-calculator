class Calculator {

    constructor() {
      this.result = 0;
      this.numberButtons = document.querySelectorAll('.number')
      this.display = document.querySelector('#display')
    }

    displayFct() {
        this.numberButtons.forEach(number => {
            number.addEventListener('click', () => {
              display.value = Number(number.value);
            });
          })
    }

    add(num) {
        this.result += num
        return this.result
    }

    substract(num) {
        this.result -= num
        return this.result
    } 

    multiply(num) {
        this.result *= num
        return this.result
    } 

    divide(num) {
        if (num === 0) {
            throw new Error('Division by zero')
        }
        else {
            this.result /= num
            return this.result
        }
    }

    getResult() {
        return this.result
    }

}

// Inicializo la calcu

let calc = new Calculator()

calc.displayFct()

