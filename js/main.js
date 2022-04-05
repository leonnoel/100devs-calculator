//****FIRST ATTEMPT */

// function NumberButton(element){
//     this.value = element.innerText,
//     this.addToScreen = function(){
//         document.querySelector('h2').innerText += this.value;
//     };
//     // this.showOnScreen = element.addEventListener('click',this.addToScreen())
// }


// //***BUILDING THE FIRST BUTTON OBJECT 7 */
// // let elementOne = document.querySelector("li a");


// // let buttonSeven = new NumberButton(elementOne);
// // console.log(buttonSeven);
//************************************************************ */

//Constructor FUNCTION
function Calculate(first,second){
    this.firstValue = first.innerText,

    this.secondValue = second.innerText,

    this.operation = undefined,
    
    //need a way to know when to append first/second
    this.appendText = function(element){
        if(element.innerText === "." && this.firstValue.includes(".")) return;
        this.firstValue = this.firstValue + element.innerText;
        },

    this.updateText = function(){
        first.innerText = this.firstValue;
        second.innerText = this.secondValue;
        },

    this.operator = function(operator){
        this.operation = operator.innerText;
        this.secondValue = this.firstValue;
        this.firstValue = '';
        },

    this.evaluate = function(){
        let result;
        let previous = parseFloat(this.secondValue);
        let current = parseFloat(this.firstValue);

        if(this.operation=="+"){
            result = previous + current;
        } else if (this.operation=="-"){
            result = previous - current;
        } else if (this.operation=="/"){
            result = previous/current;
        } else if(this.operation=="x"){
            result = previous*current;
        }
        this.firstValue = result;
        this.secondValue = '';
    },

    this.clear = function(){
        this.firstValue = '';
        this.secondValue = '';
        this.operation = '';
    }

    };
    
    



//CONSTANTS
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.opButton');
const equalButton = document.querySelector('.eqButton');
const firstValue = document.querySelector('.firstValue');
const secondValue = document.querySelector('.secondValue');
const clearButton = document.querySelector('.clear');

//INITIALIZE
const calculator = new Calculate(firstValue,secondValue);
let elementOne = document.querySelector('button');

//Adds event listeners to number buttons
numberButtons.forEach(element => {
    element.addEventListener('click',() =>{
        calculator.appendText(element);
        calculator.updateText();
    })});

operatorButtons.forEach(operator => {
    operator.addEventListener('click',() =>{
        calculator.operator(operator);
        calculator.updateText();
    })});

equalButton.addEventListener('click',()=>{
    calculator.evaluate();
    calculator.updateText();
})

clearButton.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateText();
})