
class Calculator{
    constructor(a){
        this.store = [];
        this.value = "0";
        this.op = "";
        document.querySelector(".display").innerHTML = this.value;
    }
    showNum(e){
        if(this.value === "0"){
            this.value = e.target.id
        }else{
            this.value += e.target.id
        }
        this.display(this.value)     
    }
    updateOp(e){
        let operatorList = ["+","-","*","/","="]
        let index = operatorList.indexOf(e.target.id);
        if (index != 4){
            this.op = operatorList[index];
            
            if (this.store.length === 2){
                this.doCalculation(this.store.join("")+this.value);
                this.store.push(this.value, this.op) 
            } else if(this.store.length === 1){
                this.store.push(this.op)
            } else{
                this.store.push(this.value, this.op)
            }
        }else{
            this.doCalculation(this.store.join("")+this.value);
            this.store.push(this.value)
            this.op ="";
        }
        this.value = "0"
    }
    display(value){
        document.querySelector(".display").innerHTML = value;
    }
    doCalculation(exp){
        let result = eval(exp);
        this.store = [];
        this.display(result.toString().slice(0,13))
        this.value = result  
    }
}
const calculator = new Calculator();

document.querySelectorAll(".num").forEach(item=>item.addEventListener("click", displayNum))
document.querySelectorAll(".operate").forEach(item=>item.addEventListener("click", changeLook))

function displayNum(e, obj = calculator){
    document.querySelector(".clicked")?.classList.toggle("clicked")
    obj.showNum(e)
}
function doCal(e, obj = calculator){obj.doCalculation(e)}
function changeLook(e, obj = calculator){
    let clickedOperator = document.querySelector(".clicked")
    clickedOperator?.classList.toggle("clicked")
    e.target.classList.add("clicked")
    obj.updateOp(e)
}