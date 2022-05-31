document.querySelector('button').addEventListener('click',calculate)

function calculate(){
    const buttonPress = document.querySelector('button').value
    console.log(buttonPress)
    document.querySelector('#screen').innerText = buttonPress
}

// class Calculator{
//     constructor() {
//         this.one
//
//     }
// }