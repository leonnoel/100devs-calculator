
//display varaibles for the display and buttons

const cur = document.querySelector(".cur")
const result = document.querySelector(".result")
const buttons = document.querySelectorAll("button")

//add event listner to buttons
buttons.forEach(button =>{
    button.addEventListener('click',calculate) //create the function calculate
});

function calculate(){
    // console.log("hello") //working
    //value of button in the display (innertext?)
    let buttonValue = this.innerText;
    // console.log(buttonValue) //working shows value
    if (buttonValue === "AC") {
        cur.innerText = "";
        result.innerText = "";
        return;
    }

    if (buttonValue === "="){
        // cur.innerText = "does this work?"//yes
        cur.innerText = eval(result.innerText)

    }else{
        result.textContent += buttonValue;
        return;
    }
}
