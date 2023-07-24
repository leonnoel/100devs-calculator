// Classes
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num !== 0) {
      this.result /= num;
    } else {
      throw new Error("Cannot divide by zero.");
    }
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
  }

  deleteValue() {
    let newResultString = this.result.toString().slice(0, -1)
    let newResult = parseInt(newResultString)
    this.result =  newResult
  }

}


// Example usage:
// **************

// console.log('Calculator Model tests:');
// const calculator = new Calculator();

// console.log(calculator.getResult());

// calculator.add(5);
// console.log(calculator.getResult());

// calculator.multiply(200);
// console.log(calculator.getResult());

// calculator.subtract(2);
// console.log(calculator.getResult());

// calculator.divide(2);
// console.log(calculator.getResult());

// calculator.deleteValue()
// console.log(calculator.getResult());

// calculator.clear()
// console.log(calculator.getResult());

// console.log('End Model tests:');
