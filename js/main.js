const input = document.querySelector('#calc-screen')

// document.querySelector('.seven').addEventListener('click', function() {
//     document.getElementById('calc-screen').value += 7
// })

const numPad = [...document.querySelectorAll('.calc-button')].map(el => {return {value: el.value, text: el.innerText}});

function Calculator(buttons) {
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
                    input.value += element.text;
            })
        })
    }

    this.calculate = function(str) {
        let expressionArray = str.split(' ');
        let result = 0;
        switch (expressionArray[1]) {
            case '+':
                result = +expressionArray[0] + +expressionArray[2];
                break;

            case '-':
                result = +expressionArray[0] - +expressionArray[2];
                break;

            case 'x':
                result = +expressionArray[0] * +expressionArray[2];
            break;

            case '/':
                result = +expressionArray[0] / +expressionArray[2];
            break;
        }
        
        input.value = result;
    }

    this.reset = function() {
        input.value = '';
    }
}


let calc = new Calculator(numPad);

calc.createButtonInteraction();
document.querySelector('.reset').addEventListener('click', function() {return calc.reset()})
document.querySelector('.equal').addEventListener('click', function() {return calc.calculate(input.value)})