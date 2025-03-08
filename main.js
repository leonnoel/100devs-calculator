class Calculator{
    constructor( numberButtons, operationButtons, equalsButton, displayLoc, clearButton){
        this.displayValue = displayLoc;
        this.operations = operationButtons;
        this.numbers = numberButtons;
        this.equals = equalsButton;
        this.clear = clearButton;

        this.currentOpExpression = '';
        this.addEventListeners();
    }

    addEventListeners(){
        //numbers: iterate through node list and add event listener to each element
        this.numbers.forEach(number => {
            number.addEventListener('click', () => {
                //console.log(number.id);

                //append number to expression
                this.operationExpression(number.id);

                //update display
                this.updateDisplay();
            })
        });

        //operations
        this.operations.forEach(operation => {
            operation.addEventListener('click', () => {
                //console.log(operation.id);

                //append operation to expression
                this.operationExpression(operation.id);

                //update display
                this.updateDisplay();
            })
        });

        this.equals.addEventListener('click', () => {
            //run calculation
            this.calculate();
        });

        this.clear.addEventListener('click', () => {
            this.clearDisplay();
        })
    }

    operationExpression(char){
        this.currentOpExpression += char;
        //console.log(this.currentOpExpression);
    }

    updateDisplay(){
        this.displayValue.innerHTML = this.currentOpExpression;
    }

    calculate(){
        let expressionValues = this.currentOpExpression.split(/[\/+\-X]/);
        expressionValues = expressionValues.map((num) => Number(num));
        let expressionOperators = this.currentOpExpression.match(/[\/+\-X]/g)

        let result = expressionValues.slice(1).reduce((acc, currentValue, currentIndex) => {
            
            switch(expressionOperators[currentIndex]){
                case '/':
                    return acc / currentValue;
                case 'X':
                    return acc * currentValue;
                case '-':
                    return acc - currentValue;
                case '+':
                    return acc + currentValue;
                default: 
                    console.log('default');
            }

        }, expressionValues[0]);       
        console.log(result); 

        this.currentOpExpression = result;

        this.updateDisplay();
    }

    clearDisplay(){
        this.currentOpExpression = 0;
        this.displayValue.innerHTML = 0;
    }
}

//get buttons for html elements
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const displayLoc = document.querySelector('#result');
const clearButton = document.querySelector('#clear');

//make calculator object, passing in HTML buttons and result location
const calculator = new Calculator(numberButtons, operationButtons, equalsButton, displayLoc, clearButton);


