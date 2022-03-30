let first = 0
let second = 0
let op = ''

document.querySelector('span').innerText = first

document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#division').addEventListener('click', division)
document.querySelector('#mult').addEventListener('click', mult)
document.querySelector('#add').addEventListener('click', add)
document.querySelector('#sub').addEventListener('click', sub)
document.querySelector('#decimal').addEventListener('click', decimal)
document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('.reset').addEventListener('click', reset)
document.querySelector('.neg').addEventListener('click', neg)

function reset() {
  first = 0
  second = 0
  op = ''
  document.querySelector('span').innerText = first
}

function neg() {
  if (op === '') {
    first = -first
    document.querySelector('span').innerText = first
  } else {
    second = -second
    document.querySelector('span').innerText = second
  }
}

function zero(){
  if (op === '') {
    first = first*10
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10
    document.querySelector('span').innerText = second
  }
}

function one(){
  if (op === '') {
    first = first*10+1
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10+1
    document.querySelector('span').innerText = second
  }
}

function two(){
  if (op === '') {
    first = first*10+2
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10+2
    document.querySelector('span').innerText = second
  }
}

function three(){
  if (op === '') {
    first = first*10+3
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10+3
    document.querySelector('span').innerText = second
  }
}

function four(){
  if (op === '') {
    first = first*10+4
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10+4
    document.querySelector('span').innerText = second
  }
}

function five(){
  if (op === '') {
    first = first*10+5
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10+5
    document.querySelector('span').innerText = second
  }
}

function six(){
  if (op === '') {
    first = first*10+6
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10+6
    document.querySelector('span').innerText = second
  }
}

function seven(){
  if (op === '') {
    first = first*10+7
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10+7
    document.querySelector('span').innerText = second
  }
}

function eight(){
  if (op === '') {
    first = first*10+8
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10+8
    document.querySelector('span').innerText = second
  }
}

function nine(){
  if (op === '') {
    first = first*10+9
    document.querySelector('span').innerText = first
  }
  else {
    second = second*10+9
    document.querySelector('span').innerText = second
  }
}

function division() {
  op = '/'
}

function mult() {
  op = '*'
}

function add() {
  op = '+'
}

function sub() {
  op = '-'
}

function decimal () {
  if (op === '') {
    document.querySelector('span').innerText = first * 1.0
  } else {
    document.querySelector('span').innerText = second * 1.0
  }
  
}

function equals() {
  switch(op) {
    case '/': document.querySelector('span').innerText = first / second
    case '*': document.querySelector('span').innerText = first * second
    case '+': document.querySelector('span').innerText = first + second
    case '-': document.querySelector('span').innerText = first - second
  }
}