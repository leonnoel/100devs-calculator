let button = document.querySelector('.button');

function onScreen() {
    document.querySelector('#screen').innerText = button.innerText
}
    button.addEventListener('click' , onScreen)