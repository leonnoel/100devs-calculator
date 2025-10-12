//Calculator

let display = document.getElementById('display');
document.querySelector('#equals').addEventListener('click', showResults)
document.querySelector('#mult').addEventListener('click', addMult)
document.querySelectorAll('.btn-input').forEach(button => {
 button.addEventListener('click', appendToDisplay);
});

function appendToDisplay() {
 display.value += this.innerHTML;
}

function addMult() {
 display.value += '*';
}
function showResults() {
 try {
  // Use value for input elements and safe eval
  display.value = eval(display.value);
 } catch (error) {
  display.value = 'Error';
 }
}