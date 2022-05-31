const btnSection = document.querySelector('.buttons-section');
const btn = document.querySelector('.btn')
const output = document.querySelector('#output');
/*
-->register click events on buttons
--> whatever is clicked to be displayed on the screen
--> if it is an operator or a '.' to only be logged once, so the values need to be filtered.
--> if '=' is pressed we want to output the final calucation of the previously entered values.
--> each time a button is pressed it is the current value, until a later button is pressed, when it becomes the prevValue.
*/

btnSection.addEventListener('click', e =>{
    const value = e.target.textContent;
    if(!e.target.matches('button')){
        return;
    } else {
        calculator.valueCheck(value)
    }
})


const calculator = {
    currValue: '0',
    preCalc: '',

    valueCheck(value){
        let lastDigit = this.currValue[this.currValue.length-1]
        if(this.currValue == '0'){
            this.currValue = '';
        } else if(value === '.' && this.currValue.includes('.')){
            return;
        } else if (isNaN(+(lastDigit)) && isNaN(+(value)) && value !== 'c') return;


        switch (value){
            case 'c':
                this.toClear();
                break;
            case '=':
                this.calculateTotal(this.currValue)
                break;
            default:
                this.currValue += value.toString();
                this.printToScreen(this.currValue);
                break;
        }
    },
    
    printToScreen(printing){
        output.value = printing;
    },

    toClear(){
        this.currValue = '0';
        this.printToScreen(this.currValue);
    },

    calculateTotal(equation){
        let result= Function("return " + equation)()
        this.printToScreen(result);
        this.currValue = String(result);
    }
}
