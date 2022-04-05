function Calculator() {
    this.display = [];
    this.result = 0;
    this.operations = [];

    this.divide = function() {

    };

    this.multiply = function() {

    };

    this.add = function() {

    };

    this.subtract = function() {

    };

    this.calculate = function() {

    };
}

/* let display = [];
let result = 0;
let numList = []; // List of numbers for calculation
let selectedNums = []; // For a number which has more than 1 digit
let operations = [];
let newCalc = true;


const numbersDOM = document.querySelectorAll('.number');
numbersDOM.forEach(element => {
    element.addEventListener('click', displayNumbers)
});
function displayNumbers(element) {
    if(!newCalc) {
        document.querySelector('.displayCalc').innerText = '';
        document.querySelector('.displayResult').innerText = '';
    }
    const elem = element.target;
    console.log(elem);
    if(selectedNums.length === 0){
        selectedNums.push(Number(elem.innerText));
        console.log(`SelectedNums: ${selectedNums}`);
    } else {
        let temp=0;
        for(i=0; i<selectedNums.length; i++) {
            temp = selectedNums[i] * 10 + Number(elem.innerText);
        }
        console.log(`Temp: ${temp}`);
        selectedNums = [];
        selectedNums.push(temp);
        console.log(selectedNums);         
    }
    console.log(elem.innerText);
    display.push(elem.innerText);
    document.querySelector('.displayCalc').innerText = display.join(''); 
    
}
 
const operationDOM = document.querySelectorAll('.operation');
operationDOM.forEach(element => {
    element.addEventListener('click', displayOperation)
});
function displayOperation(element) {
    const elem = element.target;
    console.log(elem.innerText);
    numList.push(...selectedNums);
    selectedNums=[];
    console.log(`NumList ${numList}`);
    operations.push(elem.innerText);
    console.log(`OperationsList: ${operations}`);
    display.push(elem.innerText);
    document.querySelector('.displayCalc').innerText = display.join('');
}

document.querySelector('.equals').addEventListener('click', calculate);
function calculate(element) {
    const elem = element.target;
    console.log(elem.innerText);
    numList.push(...selectedNums);
    selectedNums=[];
    console.log(`NumList ${numList}`);
    console.log(`OperationsList ${operations}`);
    result = numList[0];
    for(let i=0; i<operations.length; i++) {
        if(operations[i] === '+') {
            result = result + numList[i+1];
        } else if(operations[i] === '-') {
            result = result - numList[i+1];
        } else if(operations[i] === '*') {
            result = result * numList[i+1];
        } else if(operations[i] === '/') {
            result = result / numList[i+1];
        }
        
    }
    console.log(result); 
    document.querySelector('.displayResult').innerText = result;
    numList = [];
    selectedNums = [];
    operations = [];
    result = 0;
    newCalc = false;
} 

document.querySelector('.AC').addEventListener('click', clearDisplay);
function clearDisplay(element) {
    const elem = element.target;
    document.querySelector('.displayCalc').innerText = '';
    document.querySelector('.displayResult').innerText = '';
    display = [];
    numList = [];
    selectedNums = [];
    operations = [];
    result = 0;
}
 */