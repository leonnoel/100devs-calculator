let calculator = {
  read() {

  },

  sum() {
    let num1 = document.querySelector('input').value
  },

  mul() {

  },

  sub() {

  },

  division() {

  }
}


document.querySelectorAll('li').forEach(function(li) {
  li.addEventListener('click', addToInput);
});

document.querySelector('.zeroMake').addEventListener('click', makeZero)

function makeZero() {
  document.querySelector('input').value = 0
}

function addToInput(event) {
  let clickedLi = event.target;
  
  let liText = clickedLi.innerText
  
  let input = document.querySelector('input');
  
  (input.value === '0') ? input.value = liText : input.value += liText
  
  
  input.classList.add('placeholder-style');

  input.addEventListener('input', function() {
    if (input.value !== liText) {
      input.classList.remove('placeholder-style');
    }
  });
}
