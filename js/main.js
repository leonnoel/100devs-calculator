//setting up code for entering values on calculator screen
/*let entered = []

document.querySelector(".buttons").addEventListener("click", (b) => {
    let buttonPress = b.target
    console.log(buttonPress.innerText)
    if(buttonPress.tagName === "BUTTON" && buttonPress.id !== "equal" && entered.length < 12){
        entered.push(buttonPress.innerText)
        console.log(entered)
        document.querySelector("#screen").innerText += buttonPress.innerText
    }
})*/

//create with OOP
class Calculator{
    constructor() {
        this.buttons = document.querySelector(".buttons")
        this.screen = document.querySelector("#screen")
        //initialise array to hold characters to show on screen
        this.entered = []
    }

    enterValues(){
        //add event listener for button clicks, variable b for specific button clicked
        this.buttons.addEventListener("click", (b) => {
            let buttonPress = b.target
            //check that button pressed is in a button tag; exclude equals button; only allow up to 12 characters
            if(buttonPress.tagName === "BUTTON" && buttonPress.id !== "equal" && entered.length < 12){
                //add characters to entered array; show characters on calculator screen
                entered.push(buttonPress.innerText)
                this.screen.innerText += buttonPress.innerText
            }else if(buttonPress.id === "equal"){
                //calculate on press equal
                this.calculate()
            }
        })
    }

    calculate(){
        //calculate values
    }
}