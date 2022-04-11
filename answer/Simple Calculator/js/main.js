
//variable for event listener setup from DOM
const buttonClick = document.querySelectorAll('.button')

//create array from above variable for all button clicks and what to do
Array.from(buttonClick).forEach(element => element.addEventListener('click', addToArray))

//starter array to push individual digits to
let arr = []

//computation array, to push completed digit sequences to
let computeArr = []

//variable to hold current operator
let operator = ""

//variable to hold answer
let answer = 0

//boolean variable to allow switching between continued computations and inital computation
let operatorSwitch = true

//what gets displayed, ****set a char limit/float limit?
function display(x){
  document.querySelector('#display').innerHTML = x
}

//reset function, not currently used
function clearOperations(){
  operator = 0
  operatorSwitch = true
  computeArr = []
  arr = []
}

//calculate function based on operator value
function calculateAnswer(y,x){
  if(operator == "+"){
    answer = +x + +y
  }
  else if(operator == "-"){
    answer = +x - +y
    }
  else if(operator == "x"){
    answer = +x * +y
    }
  else if(operator == "/"){
    answer = +x / +y
    }
  
  console.log(computeArr[0])
  console.log(operator)
  console.log(computeArr[1])
  console.log("= " + answer)


}

//conditional function that occurs on each button click
function addToArray(click){ 
  //computation of last 2 elements in array
  if(click.target.classList.contains('equals')){
    computeArr.push(arr.join(""))
    calculateAnswer(computeArr[computeArr.length -1], computeArr[computeArr.length -2])  
    display(answer)
    operatorSwitch == false
    computeArr.push(answer)
    console.log(computeArr)
  }
  //limit length to less than 9 char, this is an arbitrary limit - based on span/calc size/display
  //pushes clicked number to starter array
  else if(arr.length < 9 && click.target.classList.contains('number')){
    arr.push(click.target.innerText)
    display(arr.join(""))
    console.log(arr)
  }
  //only allow decimal to be hit once per array
  else if(arr.length < 9 && arr.indexOf(".") == -1 && click.target.classList.contains('decimal')){
    arr.push(click.target.innerText)
    display(arr.join(""))
    console.log(arr)
  }
  //first computation setup on click of operator
  else if(operatorSwitch == true && click.target.classList.contains('operator')){
    computeArr.push(arr.join(""))
    arr = []
    operator = click.target.innerText
    display("")
    console.log(operator)
    operatorSwitch = false
  }
  //computations after the first occurs i.e. equals sign is hit multiple times or addtional operation added
  else if(operatorSwitch == false && click.target.classList.contains('operator')){
    arr = []
    operator = click.target.innerText
    display("")
    console.log(operator)
  }
}









//Original pseudo code

//create event listeners for button presses - done
//store button presses, and print to screen the button presses as occuring -done
//push them to an array if number -done
//concatonate(join) array into multidigit number, not string -done
//on an operator press, start creation of new array and store operator -done
//on press of another operator, complete operation between stored arrays, store new value and new operator (extra) -******Not done, currently have to hit = between each operator
//on press of =, complete final operation and print results to screen, and store value - done
//on additonal press of =, complete last operation again (extra) -done
//on any other button press, erase screen, and begin over (extra) -*****not done, have to refresh for clear

//create methods/object properties (OOP) -**** not done

