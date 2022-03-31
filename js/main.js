<<<<<<< HEAD
let Calc = {
    screen: {
        textField: '',
        waiting: '',
        tally: '',
        operand: undefined,
        calculated: 0,
    }, 
    addNum(event) {
        let value = event.target.innerText
        
        // to prevent double decimals
        if ( value === '.' ) {
            Calc.screen.textField.indexOf(value) === -1 ? Calc.updateScreen(value) : false
        }
        // display new results 
        else { Calc.updateScreen(value) }
    },

    updateScreen(value) {
        console.log(Calc.screen.textField)
        
        // anymore than 10 numbers, and the screen deforms
        Calc.screen.textField.length < 10 ? Calc.screen.textField += `${value}` : false
        
        // display new results
        document.querySelector('#screen').innerHTML = Calc.screen.textField
    },

    setOperand(event) {
=======
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

>>>>>>> 47c6d4c0b4a3f0da8ad656faf74825e2bb869dc7

  };

let calculator = new Calculator();
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

<<<<<<< HEAD
        // mathJS cannot porcess 'x' so change to '*'
        operand = (operand === 'x') ? '*' : operand
=======
>>>>>>> 47c6d4c0b4a3f0da8ad656faf74825e2bb869dc7

// ----------------------------------
// Create a calculator
// ----------------------------------

<<<<<<< HEAD
        Calc.screen.operand = operand
    },
    doCalc() {
        // plug string into MathJS
        let calc = math.eval(Calc.screen.textField);
        // anymore than 10 numbers, and the screen deforms
        let setN = 10
        if( calc.length < setN ) {}
        else {
            calc = calc.toFixed(3)
        } 

        // push results to screen and resent to a blank textField
        document.querySelector('#screen').innerHTML = calc
        Calc.screen.textField = ''
    },
    reset() {
        Calc.screen.textField = ''
        document.querySelector('#screen').innerHTML = ''
=======
function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function() {
        this.value += Number(prompt('add new number'))
>>>>>>> 47c6d4c0b4a3f0da8ad656faf74825e2bb869dc7
    }
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
