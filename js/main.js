function Calculator() {    
    this.result = 0;
    this.selectedNums = [];
    this.numList = [];
    this.operations = [];

    this.display = [];

    this.divide = function(num1, num2) {
        return parseFloat(num1) / parseFloat(num2);
    };

    this.multiply = function(num1, num2) {
        return parseFloat(num1) * parseFloat(num2);
    };

    this.add = function(num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    };

    this.subtract = function(num1, num2) {
        return parseFloat(num1) - parseFloat(num2);
    };

    this.calculate = function() {
        this.result = this.numList[0];
        for(let i=0; i< this.operations.length; i++) {
            console.log(`Operations inside calculate: ${this.operations[i]}`);
            if(this.operations[i] === '+') {
                console.log(`numlist[0]: ${this.result}`);
                console.log(`numlist[i+1]: ${this.numList[i+1]}`);
                this.result = this.add(this.result, this.numList[i+1]);
            } else if(this.operations[i] === '-') {
                console.log(`numlist[0]: ${this.result}`);
                console.log(`numlist[i+1]: ${this.numList[i+1]}`);
                this.result = this.subtract(this.result, this.numList[i+1]);
            } else if(this.operations[i] === '*') {
                this.result = this.multiply(this.result, this.numList[i+1]);
            } else if(this.operations[i] === '/') {
                this.result = this.divide(this.result, this.numList[i+1]);
            } else {
                console.log("Operation Error");
            }
            
        }
    };

    this.clearCalc = function() {
        this.display = [];
        this.numList = [];
        this.selectedNums = [];
        this.operations = [];
        this.result = 0;
    }
}

const calc = new Calculator();

const numbersDOM = document.querySelectorAll('.number');

numbersDOM.forEach(element => {
    element.addEventListener('click', displayNumbers)
});

function displayNumbers(element) {
    const elem = element.target;
    console.log(elem);
    if(calc.selectedNums.length === 0){        
        calc.selectedNums.push(elem.innerText);
        console.log(`SelectedNums: ${calc.selectedNums}`);
    } else {
        let temp='';
        for(i=0; i<calc.selectedNums.length; i++) {         
            temp += calc.selectedNums[i] + elem.innerText;
        }
        console.log(`Temp: ${temp}`);
        calc.selectedNums = [];
        calc.selectedNums.push(temp);
        calc.selectedNums.forEach(num => console.log(`selectedNums: ${parseFloat(num)}`));         
    }

    console.log(elem.innerText);
    calc.display.push(elem.innerText);
    console.log(calc.display);
    console.log(document.getElementById('calcDisplay'));
    document.getElementById('calcDisplay').innerHTML = calc.display.join(''); 
    
}

 
const operationDOM = document.querySelectorAll('.operation');
operationDOM.forEach(element => {
    element.addEventListener('click', displayOperation)
});

function displayOperation(element) {
    const elem = element.target;   

    console.log(elem.innerHTML);
    console.log(`SelectedNums: ${calc.selectedNums}`);
    calc.numList.push(...calc.selectedNums);
    calc.selectedNums=[];
    console.log(`NumList ${calc.numList}`);
    calc.operations.push(elem.innerText);
    console.log(`OperationsList: ${calc.operations}`);
    calc.display.push(elem.innerText);
    document.getElementById('calcDisplay').innerHTML = calc.display.join('');
}

document.querySelector('.equals').addEventListener('click', calculate);
function calculate(element) {    
    console.log(`Inside equals selectedNums: ${calc.selectedNums}`);
    calc.numList.push(...calc.selectedNums);
    calc.selectedNums=[];
    console.log(`NumList ${calc.numList}`);
    console.log(`OperationsList ${calc.operations}`);

    calc.calculate();
    console.log(calc.result); 
    document.getElementById('calcDisplay').innerHTML = calc.result;
    calc.clearCalc();
} 

document.querySelector('.AC').addEventListener('click', clearDisplay);
function clearDisplay(element) {
    const elem = element.target;
    document.getElementById('calcDisplay').innerHTML = '0';
    calc.clearCalc();
}
