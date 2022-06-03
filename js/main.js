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
        let parsed = this.entered.map(x => (x === "x") ? "*" : x)
        let result = eval(this.parsed.join(""))
        this.screen.innerText = result
        /*
        //create array of each operator's index
        let indices = this.entered.map((x,i) => (/[^0-9.]/.test(x)) ? i : "").filter(x => typeof x === "number")

        //check outputs
        console.log(indices)
        entered.slice(0,indices[1])

        //initialise array to hold each operation
        let operations = []
        //push each operation to array
        for(let i=0;i<indices.length;i++){
            if(operations.length === 0){
                operations.push(this.entered.slice(i,indices[i+1]))
            }else{
                operations.push(this.entered.slice(indices[i],indices[i+1]))
            }
        }

        console.log(operations)
        */
    }
}