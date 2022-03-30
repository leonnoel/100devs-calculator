//Initialize the screen as an object that we can modify 
const screenText = document.querySelector('#screen_content');
//screenText.innerHTML = " ";
const resultText = document.querySelector('#result')

//We create an array of elements (buttons)
//First pass create an HTML element collection from all buttons
let collection = document.getElementsByClassName('button');
//Now we pass the HTML collection to the new array
let buttons = [].slice.call(collection);
//ES6 implementation of the above 
//var arr = Array.from(htmlCollection);

//ES2015 version
//var arr = [...htmlCollection];

//Now we add event listeners to all the buttons 
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", buttonClicked);
}

//testing buttons are passed to the array
console.log(buttons)

//Function gets which button is clicked and returns it's index
function buttonClicked(event, btns){
    let btn = event.currentTarget;
    let btnIndx = buttons.indexOf(btn);
    writeToScreen(btnIndx)
}   

//Initialize strings that aere used to process user input
let str = "", left = "", right = "";

//This function writes to the calculator and calls the calculate function 
//when needed.
function writeToScreen(btnIndex){
    console.log(btnIndex)
    switch(btnIndex){
        case 0:
            str += "7";
            break;
        case 1:
            str += "8";
            break;
        case 2:
            str += "9";
            break;
        case 3:
            str += " / ";
            left = str;
            str = "";
            break;
        case 4:
            str += "4";
            break; 
        case 5:
            str += "5";
            break; 
        case 6:
            str += "6";
            break; 
        case 7:
            str += " x ";
            left = str;
            str = "";
            break; 
        case 8:
            str += "1";
            break; 
        case 9:
            str += "2";
            break;
        case 10:
            str += "3";
            break;
        case 11:
            str += " + ";
            left = str;
            str = "";
            break;
        case 12:
            str += "0";
            break; 
        case 13:
            str += " . ";
            left = str;
            str = "";
            break;
        case 14:
            calculate(left, str);
            break;
        case 15:
            str += " - ";
            left = str;
            str = "";
            break;
    }
    
    //Need to add code that keeps both strings 
    screenText.innerHTML = left + str;

}

//Process the two strings that the above function creates values for
function calculate(leftStr, rightStr){
    //the left string has an operator sign at the end
    //we remove the operatorm and create number variables with the strings
    let operator = ""
    operator = leftStr.slice(-2)
    let leftNum = Number(leftStr.substring(0, leftStr.length-3))
    let rightNum = Number(rightStr)
    
    //Now we can do the math on the numbers
    if(operator == "+ "){
        resultText.innerHTML = leftNum + rightNum;
    }else if(operator == "- "){
        resultText.innerHTML = leftNum - rightNum;
    }else if(operator == "/ "){
        resultText.innerHTML = leftNum / rightNum;
    }else if(operator == "x "){
        resultText.innerHTML = leftNum * rightNum;
    }else{
        resultText.innerHTML = "OPERATOR ERROR";
    }
    
    console.log(operator)
    console.log(leftNum)
    console.log(rightNum)

}

