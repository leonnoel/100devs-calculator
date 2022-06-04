class Calculator{
    constructor() {
        this.screen = document.querySelector("#screen")
        //initialise array to hold characters to show on screen
        this.entered = []
    }

    enterValues(buttonPress){
        //check that button pressed is in a button tag; exclude equals button; only allow up to 12 characters
        if(buttonPress.tagName === "BUTTON" && buttonPress.id !== "equal" && this.entered.length < 12){
            //add characters to entered array;
            this.entered.push(buttonPress.innerText)
            this.showDisplay(buttonPress)
        }else if(buttonPress.id === "equal"){
            //calculate on press equal
            this.calculate()
        }
    }

    showDisplay(buttonPress){
        //show characters on calculator screen
        this.screen.innerText += buttonPress.innerText
    }

    reset(){
        this.entered = []
        this.screen.innerText = ""
    }

    calculate(){
        //calculate values
        let parsed = this.entered.map(x => (x === "x") ? "*" : x)
        let result = eval(parsed.join(""))
        this.screen.innerText = result
    }
}
//create new calculator
const calc = new Calculator()

//add event listener for button clicks
const buttons = document.querySelectorAll(".buttons")
for(let button of buttons){
    button.addEventListener("click", (b) => calc.enterValues(b.target))
}

//add event listener for screen click
const screen = document.querySelector("#screen")
screen.addEventListener("click", () => calc.reset())