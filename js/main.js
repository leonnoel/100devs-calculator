const input = document.querySelector('#calc-screen')

const numPad = [...document.querySelectorAll('.calc-button')].map(el => {return {value: el.value, text: el.innerText}});
let counter = 0;

function Calculator(buttons) {
    this.displayResult = 0;
    this.storedOperator;
    this.secondStoredNumber;

    this.createButtonInteraction = function() {
        let operatorsArr = ['/', 'x', '+', '-']
        
        buttons.forEach(element => {
            // If it is the reset button do nothing. I tried return document.querySelector('.reset'.addEventListener('click', this.calculate(input.value)))
            // but I believe doesn't work to call the this.calculate from inside the constructor. Not sure tho, instead I just did it outside of the constructor.
            if (element.value === 'reset') {return}

            // Condition if user click on any button that is not Equal, it adds to the input text
            if (element.value === 'equal') {return}

            // Condition if the user click on one of the operators button(+-/x) it adds a space before and
            // after the operator, so later easier to split the string into an array of 3 elements [n, operator, n]
            if (operatorsArr.includes(element.text)) {
                return document.querySelector(`.${element.value}`).addEventListener('click', function() {
                    counter = 0;
                    // If the user tries to add more than one operator then shows error message.
                    if (operatorsArr.includes(input.value.split(' ')[1])) {
                        alert('Only one operator allowed')
                        return
                    }
                    input.value += ` ${element.text} `;
                })
            } 
            
            // If it's the dot button, does a different logic and avoid more than one dot per number
            if (element.value === 'dot') {
                return document.querySelector(`.${element.value}`).addEventListener('click', function() {
                    if (counter > 0) {return}
                    // Throw alert error if user tries to place more than one dot on the first number
                    if (!input.value.split('').includes(' ')) {
                        input.value.includes('.') ? alert('Invalid decimal. Please use only one . per number') : input.value += element.text;
                    } 
                    // Throw alert error if user tries to place more than one dot on the second number
                    else {
                        input.value.split(' ')[2].includes('.') ? alert('Invalid decimal. Please use only one . per number') : input.value += element.text;
                    }
                })
            } 

            return document.querySelector(`.${element.value}`).addEventListener('click', function() {
                if (counter > 0) {return}
                input.value += element.text;
            })
        })
    }

    this.calculate = function(str) {
        let expressionArray = str.split(' ');

        if (expressionArray[1] === undefined) {
            if (expressionArray[0] === '' || this.storedOperator === undefined) {return};
            expressionArray[1] = this.storedOperator;
            expressionArray[2] = this.secondStoredNumber;
        }

        this.storedOperator = expressionArray[1];
        this.secondStoredNumber = expressionArray[2];


        counter = 1;
        switch (expressionArray[1]) {
            case '+':
                this.displayResult = +expressionArray[0] + +expressionArray[2];
                break;

            case '-':
                this.displayResult = +expressionArray[0] - +expressionArray[2];
                break;

            case 'x':
                this.displayResult = +expressionArray[0] * +expressionArray[2];
            break;

            case '/':
                this.displayResult = +expressionArray[0] / +expressionArray[2];
            break;
        }
        
        input.value = this.displayResult;
    }

    this.reset = function() {
        counter = 0;
        input.value = '';
    }
}


let calc = new Calculator(numPad);

calc.createButtonInteraction();
document.querySelector('.reset').addEventListener('click', function() {return calc.reset()})
document.querySelector('.equal').addEventListener('click', function() {return calc.calculate(input.value)})