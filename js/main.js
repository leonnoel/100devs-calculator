let answer = 0
document.querySelectorAll(".buttons").forEach(function(i){
    i.addEventListener("click",function(element){
        let display =  document.querySelector('.mainScreen')
        let secondary = document.querySelector(".secondaryScreen")
        if (element.target.value === "="){
            secondary.value = display.value
            try{
                answer = Function(`"use strict";return (${answer})`)()
                display.value = answer
            }catch (err) {
                if (err instanceof SyntaxError){
                    display.value = "Invalid"
                }
            }
        }else if (element.target.value === undefined){
            display.value = display.value
            answer = answer
        }else if (display.value === '0'){
            display.value = element.target.innerText
            answer = element.target.value
        }else {
            display.value += element.target.innerText
            answer += element.target.value
        }
    })
})