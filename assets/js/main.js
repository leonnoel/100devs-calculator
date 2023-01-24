//[?]Using data-atributes over classes help to see witch part is used for js and with is for styling
//thisi is a very simple calculator. I will do another one, focusing more on the OOP. :)

// selecting buttons in the DOM
const numberBtn = Array.from(document.querySelectorAll('[data-number]'));

// selecting the display
const display = document.querySelector('[data-input]');

// Creating the calculator
numberBtn.map((btn) => {
  btn.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case '=':
        try {
          // !! (use eval carefully!(it will always execute valid js code. For real projects do not use in this way, can easily steal user data.)
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'error';
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
