let textToDisplay = 0
toDisplay()

//push to DOM
function toDisplay(){
document.querySelector('#display').innerText = `${textToDisplay}`
}


//KEY Press 0-9 . /*-+ =
document.addEventListener('keydown', addDigit)

function addDigit(e) {
    console.log(e)
    if (e.key >= 0 && e.key <= 9) {
        if (textToDisplay === 0) {
            textToDisplay = e.key
            toDisplay(textToDisplay)
            toString(textToDisplay)
        }else {
            console.log(`number ${e.key}`)
            textToDisplay += e.key
            toDisplay(textToDisplay)
            toString(textToDisplay)
        }
    }else if (e.keycode === 13 ) {
        console.log(`equals ${e.key}`)
        equals()
    }else if (e.keycode > 105 && e.keycode < 112 && e.keycode !== 108){
        console.log(`operator ${e.key}`)
        let operation = e.key
        operate(e.key)
    }

}
let group = ''
//String numbers together for equations
function toString(num) {
   group = group + num
   console.log(group)
}
let operator = ''
//Separate numbers from operators
function operate(symbol){
    operator = operator + symbol
    console.log(symbol)
}

//Show the answer clear the equation
function equals() {
    textToDisplay === document.querySelector('#display').innerText
}





//keycodes
// 0 = 96
// 1=  97
// 2=  98
//     99
//     100
//     101
//     102
//     103
//     104
// 9=105
// enter   13
// /       111
// *       106
// -       109
// +       107
// .       110


// function Number(name, value) {
//     this.name = name
//     this.value = value
//     this.press = function(){
//         return(value)
//     }
// }

// let zero = new Number('0', 0)
// let one = new Number('1', 1)
// let two = new Number('2', 2)
// let three = new Number('3', 3)
// let four = new Number('4', 4)
// let five = new Number('5', 5)
// let six = new Number('6', 6)
// let seven = new Number('7', 7)
// let eight = new Number('8', 8)
// let nine = new Number('9', 9)
// let dot = new Number('.', '.')


// let enter = document.getElementById("input3")
// enter.addEventListener("keydown", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault()
//    document.querySelector("#submit").click()
//   }
// });

// function Operator(name, operation) {
//     this.name = name
//     this.operation = operation
//     this.press = function(){
//         return(operation)
//     }
// }