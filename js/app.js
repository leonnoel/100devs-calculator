// let button = document.querySelector('.button');

// function onScreen() {
//     document.querySelector('#screen').innerText = button.innerText
// }
//     button.addEventListener('click' , onScreen)

const keys = document.querySelector('#btnPad');
keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    let arr = []
    let operators = ['.', 'x', '+', '-', '/', '=']
    if (!target.matches('button')) {
        return;
    } else {
        console.log(value);
        document.querySelector('#screen').innerText = value
    }
})