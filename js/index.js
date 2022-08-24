let display = document.getElementById("display")

// update display
document.querySelectorAll('.buttons').forEach(item => {
    item.addEventListener('click', event => {
      var numberClicked = event.target.innerText
      display.innerText += numberClicked
    })
  })

//   clear
document.getElementById("clear").addEventListener("click", function clear(e) {
    display.innerText = ""
})

// equals
document.getElementById("equalsButton").addEventListener("click", function problemEquals(e) {
    const answer = eval(display.innerText.slice(0, length-1));
    console.log(answer);
    display.innerText = answer;
} )

// backspace *** i did length-2 to delete the arrow and the most recent input.
document.getElementById("backspace").addEventListener("click", function backspace(e) {
    display.innerText = display.innerText.slice(0, length-2)
})
