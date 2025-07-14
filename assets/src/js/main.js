//DOM Variables
const result = document.querySelector('#result');
const clearBtn = document.querySelector('#clearBtn');
const delBtn = document.querySelector('#delBtn');
const toggleBar = document.querySelector('#toggleBar');
const calculator = document.querySelector('#calculator');
const toggle = document.querySelector('#toggle');
const btns = document.querySelectorAll('button');
const primaryBtns = document.querySelectorAll('.btn__primary');
const equalOperator = document.querySelector('#equalOperator');
const body = document.querySelector('body');

let calc = "";


//Event Listeners
primaryBtns.forEach(button => {
     button.addEventListener('click', () => {
     displayBtnContent(button.textContent);
  })
});

equalOperator.addEventListener('click', function(){
  calc = eval(calc);
  result.textContent = calc; 
});

clearBtn.addEventListener('click', function(){
  calc = "";
  result.textContent = calc;
});

delBtn.addEventListener('click', function(){
  calc = calc.toString().slice(0,-1);
  result.textContent = calc;
})

toggleBar.addEventListener('click', () => {
  toggle.classList.toggle('nightMode');
  if(toggle.classList.contains('nightMode')){
    toggle.textContent = "🌙"
    body.style.background = "var(--card-bg-color)";
    calculator.style.background = "var(--body-bg-color)";
    toggleBar.style.background = "var(--card-bg-color)";
    btns.forEach(x => {
      x.style.background = "var(--card-bg-color)";
      x.style.color = "var(--text-color)";
    })
    
  } else{
    toggle.textContent = '☀️'
    body.style.background = "var(--body-bg-color)";
     calculator.style.background = "var(--card-bg-color)";
     toggleBar.style.background = "var(--body-bg-color)";

     btns.forEach(button => {
      button.style.background = "var(--body-bg-color)";
      button.style.color = "var(--text-color-primary)";
    });

  }
})


//Functions
function displayBtnContent(x){
     calc = calc + `${x}`;
     result.textContent = calc;
}


