// ----------------------------------
// Create a calculator
// ----------------------------------

function Calculator() {
    // ... your code ...
    this.first = undefined
    this.second = undefined

    this.read = function() {
        this.first = Number(prompt('give me the first num you wanted added'))
        this.second = Number(prompt('give the second num you want to add'))
    },

    this.sum = function() { return this.first + this.second },
    this.mul = function() { return this.first * this.second }


  };

let calculator = new Calculator();
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


// ----------------------------------
// Create a calculator
// ----------------------------------

function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function() {
        this.value += Number(prompt('add new number'))
    }
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
