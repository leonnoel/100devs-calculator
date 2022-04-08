const input = document.querySelector('#calc-screen')

// document.querySelector('.seven').addEventListener('click', function() {
//     document.getElementById('calc-screen').value += 7
// })

const numPad = [...document.querySelectorAll('.calc-button')].map(el => {return {value: el.value, text: el.innerText}});

function Calculator(buttons) {
    this.createButtonInteraction = function() {
        let operatorsArr = ['/', 'x', '+', '-']
        buttons.forEach(element => {

            // Condition if user click on any button that is not Equal, it adds to the input text
            if (element.value !== 'equal') {

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

                return document.querySelector(`.${element.value}`).addEventListener('click', function() {
                    input.value += element.text;
                })
            }
        })
    }
}


let calc = new Calculator(numPad);

calc.createButtonInteraction();