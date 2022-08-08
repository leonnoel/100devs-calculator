document.querySelectorAll('.button').forEach(x=> x.addEventListener('click', storeValue))
document.querySelector('#clear').addEventListener('click', clear)
document.querySelector('.equals').addEventListener('click', equal)

let button = document.querySelectorAll('.button')


let display = document.querySelector('.viewport');
let total = 0;

function storeValue(){
  display.innerHTML += this.value
  }

function clear(){
  display.innerHTML = null
}

function equal(){
  let amount = display.innerHTML
  let answer = eval(amount)
  display.innerHTML = answer
}
 

