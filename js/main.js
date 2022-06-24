const calc = (function (){
    let calculation = {
        firstNumber : "",
        secondNumber : "",
        operation : "",
        result : ""
    }
    return {
        putNum: function (num){
            console.log(num)
            if (calculation.firstNumber === "") {
                calculation.firstNumber = num
            }else {
                calculation.firstNumber += num
            }
            document.querySelector(".screen").innerText = calculation.firstNumber
        }

        // function updateScreen(type){
        //     switch (type){
        //         case "putNum":
        //             document.querySelector(".screen").textContent = ""
        // }
    }
})()

document.querySelectorAll(".number").forEach(numBtn=>{
    console.log(numBtn.innerHTML)
    numBtn.addEventListener("click", function(){calc.putNum(numBtn.innerHTML)})
})
