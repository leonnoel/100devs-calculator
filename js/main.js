//Reqiured abilites of a calculator:
//accept user inputs
//should accept decimal numbers
//store inputs
//recognize inputs and perfrom calculations
//return a result

//Optional features:
//Should accept longer arithmetic operations.
//display all input as it is being entered
//store pervious total as start of next operation.
//clear button should clear all entries
//should pervent invaild inputs

const keys = document.querySelector('.calculator-buttons')
keys.addEventListener('click', (event) => {
  const { target } = event;
  const { value } = target;
  if (!target.matches('button')) {
    return
  } else {
    //pass to parse method
    console.log(`this is ${event}`)
  }
})

