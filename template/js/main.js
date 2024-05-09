//storing input and button value in a variable
let inputDisplay = document.querySelector('#inputBox')
let buttons = document.querySelectorAll('button')
//create empty string variable 
let string = ""
// added event listener to the button and evaluating the input values using forEach method
buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if(b.target.innerText == '='){
            string = String(eval(string))
            inputDisplay.value = string
        }else{
            string += b.target.innerText
            inputDisplay.value = string
        }
    })
})