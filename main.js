
// Calculator class that'll handle all the logic for the calculator
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1) //from index 0 to 1 at the end/second to last number.
    }

    appendNumber( number ) {
        if( this.operation === undefined && this.currentOperand !== null) {
            this.currentOperand = '';
        }
        if( number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation( operation ) {
        // if currentOperand is blank, don't do any operation from the selected operantion
        if ( this.currentOperand === '') return;

        // if prev operand is not an empty string,
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    getDisplayNumber( number ) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]); // take the string -> array
        const decimalDigits = stringNumber.split('.')[1]; // 


        // const floatNumber = parseFloat( number ); // convert to a number
        // if( isNaN(floatNumber)) return ''; // if it's not a valid number, return empty
        // return number.toLocaleString('en'); // return the number to a LocalString

        let integerDisplay
        if( isNaN(integerDigits) ) { //if integerDigits is NOT a number.
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString ('en',{
            maximumFractionDigits: 0}); //maximumFractionDigits - the max number of fraction digits to display
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else{
            return integerDisplay;
        }
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;  //if prev or current are empty
        switch( this.operation ) {
            case '+':
                computation = prev + current;
                break;
            case '/':
                computation = prev / current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);

        if( this.operation != null ){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;

        } else{
            this.previousOperandTextElement.innerText = '';
        }
    }

}

// ----- get all calculator elements -----
const numberButtons = document.querySelectorAll('[data-numbers]') // data attributes need to be in []s
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// ----- create Calculator object -----
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// ----- event listener for when an item is selected -----
numberButtons.forEach( button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach( button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});


// ATTEMPT - SELF
        // ----- variable holding current calculation -----
        // let formula = ''
        // let currentInput = ''

        // // ----- event listener for when an item is selected -----
        // document.querySelector('#val-1').addEventListener('click',displayOne)

        // document.querySelector('#oper-divide').addEventListener('click',divide)
        // // document.querySelector('#oper-multiply').addEventListener('click',multiply)
        // // document.querySelector('#oper-add').addEventListener('click',add)
        // // document.querySelector('#oper-minus').addEventListener('click',minus)
        // document.querySelector('#oper-equal').addEventListener('click',equal)


        // function displayOne() {
        //     if( isEnteringCalc() ){
        //         formula += '1';
        //         document.querySelector('#calculation').innerHTML = formula;

        //     }

        //     currentInput += 1;
        //     document.querySelector('#input').innerHTML = currentInput; // this is a string
        //     console.log('print 1')
        // }

        // function divide() {
        //     formula = currentInput + ' / ';
        //     console.log('print divide: ' + formula)
        //     document.querySelector('#calculation').innerHTML = formula;
        // }

        // function multiply() {

        // }

        // function equal() {
        //     let computation = formula.split(' ')
        //     document.querySelector('#input').innerHTML = calculate (computation);

        // }

        // function isEnteringCalc() {
        //     if (formula != '') {
        //         currentInput = '';
        //         return true;
        //     }
        //     return false;
        // }

        // function calculate( arr ) {
        //     let total = 0;
        //     for( let i = 0; i < arr.length - 1; i++) {
        //         if( arr[i] == '/' ) {
        //             total = calcDivide( total, arr[i+1]);
        //             i++;
        //         } else {
        //             total += arr[i];
        //         }
            
        //     }
        //     return total;

        // }

        // function calcDivide( num1, num2 ) {
        //     return num1 / num2;
            
        // }