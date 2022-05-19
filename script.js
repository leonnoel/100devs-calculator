const calc = {
    dispValue: '0'
    
  }
  
  document.querySelector('.displayText').innerText = calc.dispValue;
  
  const keys = document.querySelector('.calculatorButtonGrid');
  keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    
    if (!target.matches('span')) {
      return;
    } else {
      document.querySelector('.displayText').innerText += target.innerText;
    }
  })
  
  // function grabButtonValue{
  // }
    