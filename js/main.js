// document.querySelector('#seven').addEventListener('click', function);
// document.querySelector('#eight').addEventListener('click', function);
// document.querySelector('#nine').addEventListener('click', function);

// document.querySelector('#four').addEventListener('click', function);
// document.querySelector('#five').addEventListener('click', function);
// document.querySelector('#six').addEventListener('click', function);

// document.querySelector('#zero').addEventListener('click', function);
// document.querySelector('#subtract').addEventListener('click', function)
// document.querySelector('#equals').addEventListener('click', Calculator.equals);


const calculator = {

    numLeft: "",
    numRight: "",
    operator: "",
    result: 0,

    screen: document.querySelector('#screen').value,


    // numLeftRegEx: /^[1-9]\d*(\.\d+)?/,
    // numRightRegEx: /[1-9]\d*(\.\d+)?$/,

    checkIfZero(){
        if (document.querySelector('#screen').value !== "") {
            document.querySelector('#screen').value = ""
        }
    },

    allClear(){
        if (document.querySelector('#screen').value !== "0") {
            document.querySelector('#screen').value = "0"
        }
    },

    one(){
        this.checkIfZero;
        document.querySelector('#screen').value += "1"
    },

    two(){
        this.checkIfZero;
        document.querySelector('#screen').value += "2"
    },

    three(){
        this.checkIfZero;
        document.querySelector('#screen').value += "3"
    },

    four(){
        this.checkIfZero;
        document.querySelector('#screen').value += "4"
    },

    five(){
        this.checkIfZero;
        document.querySelector('#screen').value += "5"
    },

    six(){
        this.checkIfZero;
        document.querySelector('#screen').value += "6"
    },

    seven(){
        this.checkIfZero;
        document.querySelector('#screen').value += "7"
    },

    eight(){
        this.checkIfZero;
        document.querySelector('#screen').value += "8"
    },

    nine(){
        this.checkIfZero;
        document.querySelector('#screen').value += "9"
    },

    zero(){
        this.checkIfZero;
        document.querySelector('#screen').value += "0"
    },

    add(){
        this.checkIfZero;
        this.numLeft = document.querySelector('#screen').value
        document.querySelector('#screen').value += "+"
    },

    subtract(){
        this.checkIfZero;
        this.numLeft = document.querySelector('#screen').value
        document.querySelector('#screen').value += "-"
    },

    multiply(){
        this.checkIfZero;
        this.numLeft = document.querySelector('#screen').value
        document.querySelector('#screen').value += "*"
    },

    divide(){
        this.checkIfZero;
        this.numLeft = document.querySelector('#screen').value
        document.querySelector('#screen').value += "/"
    },

    decimal(){
        this.checkIfZero;
        this.numLeft = document.querySelector('#screen').value
        document.querySelector('#screen').value += "."  
    },

    equals(){

        // USE REGEX TO GET THE LEFT SIDE VALUE
        // USE REGEX TO GET THE RIGHT SIDE VALUE
        // CONVERT THEM BOTH TO INTEGERS OR FLOATS
        // DO THE CALCULATION USING THE OPERATOR IN THE MIDDLE(?)

        this.numLeft = parseInt(document.querySelector('#screen').value.match(/^[0-9]+/g))
        console.log(this.numLeft)

        this.numRight = parseInt(document.querySelector('#screen').value.match(/[0-9]+$/g))
        console.log(this.numRight)

        this.operator = document.querySelector('#screen').value.match(/[*+/-]/g)
        console.log(this.operator)

        if (this.operator[0] === '+') {
            this.result = this.numLeft + this.numRight;
        } else if (this.operator[0] === '-') {
            this.result = this.numLeft - this.numRight;
        } else if (this.operator[0] === '*') {
            this.result = this.numLeft * this.numRight;
        } else if (this.operator[0] === '/') {
            this.result = this.numLeft / this.numRight;
        }
        
        document.querySelector('#screen').value = this.result;
    },

}

document.querySelector('#one').addEventListener('click', calculator.one);
document.querySelector('#two').addEventListener('click', calculator.two);
document.querySelector('#three').addEventListener('click', calculator.three);
document.querySelector('#four').addEventListener('click', calculator.four);
document.querySelector('#five').addEventListener('click', calculator.five);
document.querySelector('#six').addEventListener('click', calculator.six);
document.querySelector('#seven').addEventListener('click', calculator.seven);
document.querySelector('#eight').addEventListener('click', calculator.eight);
document.querySelector('#nine').addEventListener('click', calculator.nine);
document.querySelector('#zero').addEventListener('click', calculator.zero);

document.querySelector('#add').addEventListener('click', calculator.add);
document.querySelector('#subtract').addEventListener('click', calculator.subtract);
document.querySelector('#multiply').addEventListener('click', calculator.multiply);
document.querySelector('#divide').addEventListener('click', calculator.divide);

document.querySelector('#equals').addEventListener('click', calculator.equals)

document.querySelector('#decimal').addEventListener('click', calculator.decimal);

document.querySelector('#allclear').addEventListener('click', calculator.allClear);


// const calculator = {

//     screenValue: "0",
    
//     // checkForZero() {
//     //     if (this.screenValue === '0') {
//     //         this.screenValue = ''
//     //     }
//     // },

//     updateScreenValue() {
//         document.querySelector('#screen2').value = this.screenValue;
//     },

//     one() {
//         console.log('clicked 1')
//         console.log(this.screenValue)
//         // this.checkForZero();  
//         this.screenValue += "1";
//         this.updateScreenValue();
//     },

//     two() {
//         console.log('clicked 2')
//         console.log(this.screenValue)
//         // this.checkForZero();
//         this.screenValue += "2";
//         this.updateScreenValue();
//     },

//     three() {
//         console.log('clicked 3')
//         console.log(this.screenValue)
//         // this.checkForZero();
//         this.screenValue += "3";
//         this.updateScreenValue();
//     },

//     allClear(){
//         this.screenValue = "0";
//         this.updateScreenValue();
//     },

//     add() {
//         console.log('clicked +')
//         console.log(this.screenValue)
//         // this.checkForZero();
//         this.screenValue += "+";
//         this.updateScreenValue();
//     },

//     equals() {
//         // to do
//     },

//     allClear() {
//         // to do
//     }

// }