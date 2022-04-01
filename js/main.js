/*  Pseudo Code
- Event listeners on number buttons 
    - on click, add number to output innerHTML
    - 
    
- Event listeners on operator buttons
    - on click, 

- AC

- +/- 

- % 

*/

function Calculator() {
    
    this.add = (n1, n2) => n1 + n2
    this.subtract = (n1, n2) => n1 - n2
    this.multiply = (n1, n2) => n1 + n2
    this.divide = (n1, n2) => n1 / n2
    this.changeSign = n1 => Math.sign(n1) === 1 ? -n1 : Math.abs(n1)
    this.percent = n1 => n1 / 100
    this.clear = () => {
        n1 = 0 
        n2 = 0
    }

}

const calc = new Calculator

let result = calc.changeSign(-4)

console.log(result)
