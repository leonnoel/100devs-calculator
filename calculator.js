document.querySelectorAll('.buttons').forEach(item => {     // numerical values buttons
    item.addEventListener("click", clickedNumber)
});

document.querySelectorAll('.operators').forEach(item => {     // operator buttons
    item.addEventListener("click", clickedOperator)
});

//document.querySelector('.dot').addEventListener("click", getButtonValues)   //dot, decimal numbers

document.getElementById('finalCalculation').addEventListener("click", calculating)   //  equal button/calculation


let str = ""
let leftNumber = ""
let rightNumber = ""
let operator = ""
function clickedNumber() {
    if(operator === "") {
        leftNumber += this.value
    } else {
        rightNumber += this.value
    }   
    str = leftNumber + operator + rightNumber
    document.querySelector(".result").innerText = str
}

function clickedOperator () {
    if (leftNumber !== "" && rightNumber === "") {
        operator = this.value
    }
    str = leftNumber + operator + rightNumber
    document.querySelector(".result").innerText = str
}

function calculating () {
    
}

