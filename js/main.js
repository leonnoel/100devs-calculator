class Calculator {
    constructor() {
        this.val = "0"
        this.op = ""
        this.buffer = ""
        this.displayBuffer = false
    }
    display() {
        if (!this.displayBuffer) {document.getElementById("display").innerText = this.val} 
        else {document.getElementById("display").innerText = this.buffer}

        const style = {
            backgroundColor: "#00acee"
        }
        if (this.op) {
            console.log(document.getElementById(`${this.op}`).style = {color: "#00acee"})
            
        }
    }
    numClicked(num) {
        if (this.buffer) {
            // buffer not empty
            this.displayBuffer = true
            if (!/\./.test(this.buffer) && this.buffer==0 && num!=".") {this.setThis('buffer', num)} 
            else if (num!=".") {this.setThis('buffer', num, true)}
            else if (num=="." && !/\./.test(this.buffer)) {this.setThis('buffer', num, true)}
        } else {
            // buffer empty
            this.displayBuffer = false
            if (this.val==0 && num!=".") {this.setThis('val', num)} 
            else if (num != ".") {this.setThis('val', num, true)}
            else if (num == "." && !/\./.test(this.val)) {this.setThis('val', num, true)}
        } 
    }
    opClicked(op) {
        if (!this.buffer) {this.op = op} 
        else if (this.op) {
            this.equal()
            this.op = op
        }
    }
    equal() {
        if (this.op && this.buffer) {
            this.displayBuffer = false
            this.val = (this.calculate(this.val, this.buffer)).toString()
            this.buffer = ""
            this.op = ""
        }
    }
    calculate(val1, val2) {
        if (this.op == "+") {return Number(val1)+Number(val2)}
        else if (this.op == "-") {return Number(val1)-Number(val2)}
        else if (this.op == "*") {return Number(val1)*Number(val2)}
        else if (this.op == "/") {return Number(val1)/Number(val2)}
    }
    setThis(prop, val, concat=false) {
        if (concat) {this[prop] += val}
        else {this[prop] = val}
    }
    
}
function calculatorOnClick(click) {
    if (/[0-9\.]/.test(click.target.id)) {
        calculator.numClicked(click.target.id)
        calculator.display()
    } else if (/[-+*\/]/.test(click.target.id)) {
        calculator.opClicked(click.target.id)
        calculator.display()
    } else if (/=/.test(click.target.id)) {
        calculator.equal()
        calculator.display()
    }
}
const calculator = new Calculator()
const buttons = document.querySelectorAll("button")
Array.from(buttons).forEach(b => {
    b.id = b.innerText == "×"? "*" : b.innerText
    b.onclick = calculatorOnClick
})