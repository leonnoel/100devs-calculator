const buttons = document.querySelectorAll('.calc-button')

function Calculator(){
    let inputArr = [];
    let operations = ['x','/','+','-'];
    let number = '';
    let equation;
    let screen = document.getElementById('screen'); 

    screen.innerHTML = 0;
    const isOp = (x)=> operations.includes(x)
    const formatInput = (inputArr) => {
        let secondNum = '0';
        for(let i = 2; i < inputArr.length; i++){
            secondNum += inputArr[i]
        }
        return [parseInt(inputArr[0]),inputArr[1],parseInt(secondNum)]
    }

    this.add = (x,y)=> {
        return x + y
    }
    this.subtract = (x,y) => {
        return x-y
    }
    this.multiply = (x,y) => {
        return x*y
    }
    this.divide = (x,y) => {
        return x/y
    }
    this.input = (x) => {

        if(inputArr.length == 0){
        
            screen.innerHTML = '';
        }
        if(isOp(x)){
            if(inputArr.indexOf(x)+1 != inputArr.length && inputArr.indexOf(x) != 0 ){
                inputArr = [inputArr.join('')];
                inputArr.push(x);
                screen.innerHTML = '';
            }else if(inputArr.indexOf(x)+1 == inputArr.length){

                inputArr = formatInput(inputArr);
                screen.innerHTML = this.calculate(inputArr);
            }else{
                return
            }
        }else if(x == '='){

            inputArr = formatInput(inputArr);
            screen.innerHTML = this.calculate(inputArr);
        }else{
            inputArr.push(x);
            screen.innerHTML += x;
        }

    }
    this.calculate = (inputArr) =>{
        let [num1,op,num2] = inputArr;
        let [mult, div, add, sub] = operations;
        let ans;

        switch(op){
            case add:
                ans = this.add(num1,num2);
                break;
            case sub:
                ans = this.subtract(num1,num2);
                break;
            case mult:
                ans = this.multiply(num1,num2);
                break;
            case div:
                ans = this.divide(num1,num2);
                break;
        }

        inputArr = []
        return ans
    }
    
}

graphicCalculator = new Calculator

buttons.forEach((e)=>{

    e.addEventListener('click', ()=>{
        graphicCalculator.input(e.dataset.value)
    })
})


