class Calculator {  //creating a class for Calculator w/ constructor function so every new calculator obj that is created will have result property set to 0
    constructor(){
        this.result = 0;
    }
    add(value){     //creation of our six methods (add,sub,mult,div,equal,clear)
        this.result += value;
        return this;    //'this' is returned to allow for method chaining like a physical calculator would do. 'this' is being used to modify the result property where the total /current value is stored
    }
    sub(value){
        this.result -= value;
        return this;
    }
    mult(value){
        this.result *= value;
        return this;
    }
    div(value){
        if(value !== 0){   // using a conditional here in case user tries to divide when the value being passed in is 0. Otherwise method will run normally. 
            this.result /= value;
        }else{
            throw new Error('Dividing by 0 is no bueno!');  
        }
        return this;
    }
    equal(){
        return this.result;  //return current value in the result property
    }
    clear(){
        return this.result = 0;  // re-assigns the result property value to 0 (starting fresh)
    }
}
const calc = new Calculator();  // declaring a const named calc using the new keyword and our Calculator class/constructor function
console.log(calc.add(10).mult(2).sub(10).div(2).equal()); // equals 5 // showing use case and method chaining of the calculator!