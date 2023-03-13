const keys = document.querySelector('.button-container')
keys.addEventListener('click', event => {
    const {target} = event
    const {value} = target
    if (!target.matches('button')) {
        return
    } else {
        // pass to parse method
        console.log(value)
    }
})






// // document.getElementById('1').addEventListener('click', function() { 
// //     operation(1)
// // })

// // document.getElementById('2').addEventListener('click', () => { operation(2)})

// localStorage.setItem('userInput', 0)

// // event listener for buttons
// document.addEventListener("click", function(event){
//     // display button value in calculator screen
//     let screen = document.querySelector('input').value
//     if (screen === 0) {
//         screen = event.target.value
//     } else {
//         screen += event.target.value
//     }
//     // document.querySelector('input').value += event.target.value
//     // add button input to local storage
//     let userInput = localStorage.getItem('userInput')
//     localStorage.setItem('userInput', userInput += event.target.value)
// });

// document.getElementById('clear').addEventListener('click', clear)

// function clear() {
//     document.querySelector('input').value = 0
//     localStorage.setItem('userInput', 0)
// }

