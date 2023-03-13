
let Calculator = {
    
    textToDisplay : '',
    zero(){
        this.textToDisplay + '0'
    },
    one(){
        this.textToDisplay + '1'
    },
    two(){
        this.textToDisplay + '2'
    },
    three(){
        this.textToDisplay + '3'
    },
    four(){
        this.textToDisplay + '4'
    },
    five(){
        this.textToDisplay + '5'
    },
    six(){
        this.textToDisplay + '6'
    },
    seven(){
        this.textToDisplay + '7'
    },
    eight(){
        this.textToDisplay + '8'
    },
    nine(){
        this.textToDisplay + '9'
    },
    decimal(){
        this.textToDisplay + '.'
    },
    divide(){

    },
    multiply(){},
    add(){

    },
    subtract(){

    },
    equals(){
        this.textToDisplay = this.result;
        document.querySelector(h1).innerText = this.textToDisplay;
    },



}