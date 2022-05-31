let entered = []

document.querySelector('.buttons').addEventListener("click", (b) => {
    let buttonPress = b.target
    console.log(buttonPress.innerText)
    if(buttonPress.tagName === "BUTTON" && buttonPress.id !== "equal" && entered.length < 12){
        entered.push(buttonPress.innerText)
        console.log(entered)
        document.querySelector("#screen").innerText += buttonPress.innerText
    }
})

// class Calculator{
//     constructor() {
//         this.one
//
//     }
// }