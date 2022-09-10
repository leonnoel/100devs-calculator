class Calculator{
  constructor(previousOp,currentOp){
    this.previousOp = previousOp;
    this.currentOp = currentOp;
    this.clear();
  }

  clear(){
    this.previousOp = '';
    this.currentOp = '0';
    this.operation = undefined;
  }
  delete(){
    if(typeof this.currentOp === 'number') return;
    if(this.currentOp.length !== 1){
      this.currentOp = this.currentOp.slice(0,-1);
    }else this.currentOp = '0';
  }
  appendNumber(number){
    if(number === '.' && this.currentOp.includes('.')) return;
    if(number === '.'){
      this.currentOp = this.currentOp + number;
    }
    else if(this.currentOp === '0'){
      this.currentOp = number;
    }
    else if(typeof this.currentOp === 'number'){
      this.currentOp = number;
    }
    else{
      this.currentOp = this.currentOp + number;
    }
  }
  chooseOperation(operation){
    if(operation === '') return;

      this.previousOp = this.currentOp;
      this.operation = operation;
      this.currentOp = '0';
  }
  compute(){

    let result;
    const previous = parseFloat(this.previousOp);
    const current = parseFloat(this.currentOp);
    const op = this.operation;
    
    if(isNaN(previous) || isNaN(current)) return;
    
    if(op === 'x'){
      result = previous * current; 
    }else if(op === '÷'){
      result = previous / current; 
    }else if(op === '+'){
      result = previous + current; 
    }else if(op === '-'){
      result = previous - current; 
    }else{ return;}

    this.currentOp = result;
    this.operation = undefined;
    this.previousOp = '';

  }
  updateDisplay(){
    if(this.currentOp === ''){
      currentOp.textContent = '0';
    }else{
      currentOp.textContent = this.currentOp;
    }
    if(this.operation !== undefined){
      previousOp.textContent = `${this.previousOp} ${this.operation}`;
    }
    else{
      previousOp.textContent = '';
    }
  }
}

const calBody = document.querySelector(".calculator-body");
const previousOp = document.querySelector('.previous-operand');
var currentOp = document.querySelector('.current-operand');
currentOp.textContent = '0';

const calculator = new Calculator(previousOp,currentOp)

calBody.addEventListener('click', e =>{
  if(e.target.matches('button')){
    const key = e.target;
    const action = key.dataset.action;
  
  if(!action){
    calculator.appendNumber(key.textContent);
    calculator.updateDisplay();
  }
  if(action === 'clear'){
    calculator.clear();
    calculator.updateDisplay();
  }
  if(action === 'operator'){
    calculator.chooseOperation(key.textContent);
    calculator.updateDisplay();
  }
  if(action === 'delete'){
    calculator.delete();
    calculator.updateDisplay();
  }
  if(action === 'equal'){
    calculator.compute();
    calculator.updateDisplay();
  }
}
});