
class Calculator{
    constructor(){
        this.value = "0";
        this.value0 = "";
        this.op = "";
        document.querySelector(".display").innerHTML = this.value;
    }
    updateOp(e){
        this.value0 = this.value;
        switch (e.target.id){
            case "divide":
                this.op = "/"
                break;
            case "multiply":
                this.op = "*"
                break;
            case "add":
                this.op = "+"
                break;
            case "minus":
                this.op = "-"
                break;
            case "equal":
                this.doCalculation();
                break;
        }

    }
    doCalculation(){
                
    }
    showNum(e){
        if(this.value != "0") {
            this.value += e.target.id
        }else{
            this.value = e.target.id
        }
        document.querySelector(".display").innerHTML = this.value
    }
    
}
const calculator = new Calculator("yo");

document.querySelectorAll(".num").forEach(item=>item.addEventListener("click", displayNum))
document.querySelectorAll(".operate").forEach(item=>item.addEventListener("click", changeLook))

function displayNum(e, obj = calculator){obj.showNum(e)}
function doCal(e, obj = calculator){obj.doCalculation(e)}
function changeLook(e){
    let clickedOperator = document.querySelector(".clicked")
    if (clickedOperator?.id === e.target.id) {
        clickedOperator?.classList.toggle("clicked")
        
    }else{
        clickedOperator?.classList.toggle("clicked")
        e.target.classList.add("clicked")
        obj.updateUp(e)
    }
}