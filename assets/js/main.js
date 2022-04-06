
const Calculator = function( ){


    this.total = 0;
    this.operations = '';
    this.currentOperator = '';
    this. currentOperand = '';
    this.previousOperator = '';
    this.showResult;
    this.showOperations;

    this.init = function (){

        this.showResult = document.querySelector('#total');
        this.showOperations = document.querySelector('#operations');

        ["zero","one","two","three","four","five","six","seven","eight","nine"].forEach((el,i) =>
        document.querySelector(`#${el}`).addEventListener('click',this.clickNumber.bind(this,i)))

        document.querySelector("#dot").addEventListener('click',this.clickNumber.bind(this,"."))
       
       const ids = ["add","sub" ,"mul" ,"div"]
       const signs = ["+","-","*","/"]
       ids.forEach((el,i) => document.querySelector(`#${el}`).addEventListener('click',this.clickOperator.bind(this,signs[i])))

       document.querySelector("#equal").addEventListener('click',this.clickEqual.bind(this))
    }

    this.clickNumber = function (number){
            console.log(this)
            this.operations += number.toString();
            if(this.currentOperator!=='' && this.currentOperand !=='' && this.previousOperator!==''){
                currentOperand =number
            } 
             else this.currentOperand = this.currentOperand + number.toString();
             this.operate();
    }

    this.clickOperator = function (operator){
            console.log(this)

            this.operations += operator
            if(this.currentOperator=='') { 
                this.currentOperator = operator
                this.currentOperand ='';
            }
            else {
                this.previousOperator = this.currentOperator;
                this.currentOperator = operator
                this.operate();
            }
    }

    this.clickEqual = function (){
        this.previousOperator = this.currentOperator;
        this.currentOperator = '=';
        this.operate()
        this.showResult.style.fontWeight = "bold";
        this.showOperations.style.fontWeight = '200';
    }

    this.displayResult = function(){
        this.showResult.innerHTML = this.total;
        this.showOperations.style.fontWeight = 'bold';
        this.showOperations.innerHTML = this.operations;
    }

    this.operate = function(){
        
        if(this.total===0 || (this.total!==0 && this.currentOperator==''  && this.previousOperator=='')){
            this.total = Number(this.currentOperand);
        }
          else if(this.currentOperator!=='' && this.previousOperator!=='' && this.currentOperand!==''){
            switch(this.previousOperator) {
                case '+':   this.total += Number(this.currentOperand)
                            break
                case '-':this.total -= this.currentOperand
                            break
                case '*':this.total*=this.currentOperand
                            break
                case '/':this.total/= this.currentOperand
                            break
                case '%' :this.total%= this.currentOperand
                            break
                default: return
            }
    
            this.currentOperator = ''
            this.currentOperand = ''
            this.previousOperator =''
        }  
    
        this.displayResult();
    }
}

const calculator1 = new Calculator();
calculator1.init()