let total = 0

document.querySelector('#zero').addEventListener('click', makeZero)
document.querySelector('#three').addEventListener('click', add3)
document.querySelector('#nine').addEventListener('click', add9)
document.querySelector('#two').addEventListener('click', sub2)
document.querySelector('#five').addEventListener('click', sub5)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function add3() {
  total += 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total += 9
  document.querySelector('#placeToPutResult').innerText = total
}

function sub2() {
  total -= 2
  document.querySelector('#placeToPutResult').innerText = total
}

function sub5() {
  total -= 5
  document.querySelector('#placeToPutResult').innerHTML = total
}