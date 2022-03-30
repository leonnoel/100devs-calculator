let windowText = document.querySelector('.window span');
// windowText.innerText = 'test';

document.addEventListener('keypress', keyPress);

function keyPress(key) {
    switch(key.key) {
        case '0':
            windowText.innerText += '0';
            break;
    }
  }