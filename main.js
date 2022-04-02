class Calculator{

    constructor(){
        this.total = 0;
        this.memory = [];
        this.memoryOperations = [];
        this.operations = ["/", '*', "-", "+"];
    }
    add(b) {return this.total + Number(b);}
    substract(a, b) {return Number(a) - Number(b);}
    divide(a, b) {return Number(a) / Number(b);}
    multiply(a, b) {return Number(a) * Number(b);}
    reset(){
        this.total = 0;
        this.memory = [];
        this.memoryOperations = [];
    }
    equal(string) {
        return eval(string);
    }

}

//creating calculator object
const calculator = new Calculator();

//avoiding that CE is added as input when the user clicks on the 'Clear All' key
//avoiding the  = sign to be added as an input
document.addEventListener("click", e => {
    const window = document.getElementById("window");
    if(e.target.innerText !== "Clear All" && e.target.innerText !== "="){
        window.innerText += e.target.innerText;
    }
})

//clearing window once user selects an operation
//sending previous data from window to memory array
//and add the operation to the memoryOperations 
document.addEventListener("click", e => {
    const w = document.getElementById("window");
    if(calculator.operations.includes(e.target.innerHTML)){
        const trimmed = w.innerText.slice(0, this.length-1);
        calculator.memory.push(trimmed);
    
        calculator.memoryOperations.push(e.target.innerText);
        w.innerText = "";
        console.log(calculator.memory);
        console.log(calculator.memoryOperations)
        
    }

    if(e.target.innerText == "Clear All"){
        calculator.reset();
        w.innerText = "";
    }

    if(e.target.innerHTML === "="){
        for(let i = 0; i < calculator.memoryOperations.length; i++){
            for(let j = 0; j < calculator.memory.length-1; j++) {
                const result = Number(calculator.memory[j+1]) + Number(calculator.memory[j]);
                w.innerText = result;
            }
        }
    }
});








