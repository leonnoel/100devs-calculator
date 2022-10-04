function Calculator() {

    this.read = function() {
        this.n1 = +prompt('Enter a number', 0);
        this.n2 = +prompt('Enter a number', 0);
     };

     this.sum = function() {
       return this.n1 + this.n2;
    },
   
    this.mul = function() {
       return this.n1 * this.n2;
    };

   }

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum(2, 2));
console.log("Mul=" + calculator.mul());

