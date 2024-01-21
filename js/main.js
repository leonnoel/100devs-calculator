let calculator = {
  read() {
    this.a = +prompt('Enter the first number?', '0')
    this.b = +prompt('Enter the second number?', '0')
  },

  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  },

  sub() {
    return this.a - this.b
  },

  division() {
    return this.a / this.b
  }
}


document.querySelectorAll('li').forEach(function(li) {
  li.addEventListener('click', addToInput);
});
document.querySelector('.zeroMake').addEventListener('click', makeZero)
document.querySelectorAll('.operator').forEach(function(operator) {
  operator.addEventListener('click', doTheOperator)
})


function doTheOperator() {
  let clickedSpan = event.target;
  let spanText = clickedSpan.innerText;

  // Read the current numbers
  calculator.read();

  let result;
  if(spanText === '+') {
    result = calculator.sum();
  } else if(spanText === '-') {
    result = calculator.sub();
  } else if(spanText === '/') {
    result = calculator.division();
  } else {
    result = calculator.mul();
  }

  // Update the input value with the result
  let input = document.querySelector('input');
  input.value = result;
  input.classList.add('placeholder-style');

  input.addEventListener('input', function() {
    if (input.value !== String(result)) {
      input.classList.remove('placeholder-style');
    }
  });
}


function makeZero() {
  let input = document.querySelector('input');
  input.value = 0;
  input.classList.add('placeholder-style');

  input.addEventListener('input', function() {
    if (input.value !== '0') {
      input.classList.remove('placeholder-style');
    }
  });
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