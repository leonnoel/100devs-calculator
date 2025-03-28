//
//1. user clicks numbers and operators
//2. save number and operator in variables
//3. ensure that operators can't be entered twice in a row (they will overwrite the previous one)
//3a. Except minus sign allows negating value
//4. ensure that decimal only occurs once in a number (ie only once before operators is input)
//5. once equal button is clicked, evaluate expression and return answer
//6. evaluation must follow pemdas
//7. display answer in screen

//8. refactor make font size dynamic on screen 
//9. refactor - can this be done with an ojbect of operator methods?
//----------------------------------------Saving values on clicks and text input-----------------------------------------------------------------------------//
let value=""; //will store value of each operand when selected
let valuesArray=[]; //will store each part of expression in an array
let operator; //will store each operator when selected
let result; //will store final answer
let numberSelector=document.querySelectorAll(".number");//refer to all number buttons and "."
let operatorSelector=document.querySelectorAll(".operator");//refer to all operator buttons
let screen=document.querySelector(".screen");
numberSelector.forEach(item=>item.addEventListener("click", saveNum));//save number to value on click
operatorSelector.forEach(item=>item.addEventListener("click", saveOperator));//save operator on click


//saveNum will collect entries from calclator and store in variable value as string
function saveNum() {
    //make sure there is no more than 1 decimal in a number
    if (this.value=="." && value.includes(".")) {
        return value;
    }
    //concatenate additional entries onto value (value will not be overwritten, so has to be cleared later after operator selected)
    else {
        value+=this.value;
    }
    //display value on screen (will display on each click of numbers as saveNum is run)
    screen.innerText=value;
    adjustFontSize(screen);
}

//saveOperator will add previously stored value to array, store chosen operator, and evaluate when = is chosen
function saveOperator(){
    //save button's value to operator (will overwrite any previous operator)
    operator=this.value;
    //if "=" used, end expression and evaluate:
    if (this.value=="=") {
        //when = selected, add last stored value to valuesArray, if not a number, then store 0
        if(value=="" || isNaN(+value)) {
            console.log("no number entered, using 0");
            value=0;
        }
        valuesArray.push(value);
        //display entire array (ie the expression) on screen as a string
        screen.innerText=valuesArray.join(' ');
        //evaluate the expression
        evaluate(valuesArray);
        //clear the values array once expression is evaluated (will not allow additional calcuations on expression)
        valuesArray=[];
    }
    //Allow making negative number if using "-" before entering a number. 
        //Therefore only allow if there is no number stored in value already (doesn't matter if there is an operator stored or not)
    else if (this.value=="-" && value=="") {
        value=operator;
        //console.log(value);//for visualization if entry of "-" logs as value vs operator
        //return value to escape this function so that value is not set to ""
        return value;
    }

    //If math operator chosen (which is not "-" at beginning of number), store to expression:
    else {
        //once operator is chosen, push existing value to valuesArray
        if (value!="" && value!="-") {
            valuesArray.push(value);
            valuesArray.push(operator);
            screen.innerText=operator;
        }
        //if there is no value entered yet in expression, prompt user to enter number
        else if(valuesArray.length==0) {
            screen.innerText="Enter a number";
        }
        //if value is either 1)empty because already used an operatore and it clear,
        //or 2)or it is simply "-" without number, clicking operatore will mean that user wants to change operator
        //therefore remove last element of valuesArray and push new operator
        else if ((value=="" || value=="-") && valuesArray.length!=0){
            console.log("changing operator");
            valuesArray.splice(-1, 1, operator);
            screen.innerText=operator;
        }
        
        //display operator on screen (similar to displaying values on screen while clicking buttons)
    }
    //once operator is chosen, value has to be cleared so it's ready to store next number
    //operator does not have to be cleared since it is just overwritten
    value=""
}

//--------------------------------------------------------Evaluate Expression-------------------------------------------------------------------------//
function evaluate(array) {
    //map valuesArray to new array that changes values into number types
    let expression = array.map(x=>isNaN(+x) ? x : +x);
    //loop through array to find mult or div to complete first left to right (PEMDAS)
    for(let i=0;i<expression.length; i++) {
        //store two array elements on either side of current element
        let a=expression[i-1];
        let b=expression[i+1]
        //if find multiplication, get product of a and b
        if (expression[i]=="*"){
            let x=a*b;
            //in the array, replace elements corresponding to a, *, b with x
            expression.splice(i-1, 3, x);
            //i and i+1 are removed elements, and i-1 is now replaced by x
            //therefore, we need to reduce i by 1 to accurately reflect where we are in array
            i--;
        }
        //same program as above, for division:
        else if (expression[i]=="/") {
            let x=a/b;
            expression.splice(i-1,3,x);
            i--;       
        }
    }
    //once mult and div are done, do addition and subtraction left to right by looping to resulting array
    for(let i=0; i<expression.length; i++) {
        let a=expression[i-1];
        let b=expression[i+1];
        if (expression[i]=="+") {
            let x=a+b;
            expression.splice(i-1,3,x);
            i--;
        }
        else if (expression[i]=="-") {
            let x=a-b;
            expression.splice(i-1,3,x);
            i--;
        }
        
    }
    result=expression[0];
    showAnswer(result);
}

//-----------------------------------------------------Clear Function--------------------------------------------------------//
let clearButton=document.querySelector(".clear")
clearButton.addEventListener("click", clearAll);

function clearAll() {
    screen.innerText="";
    value="";
    valuesArray=[];
    result=null;
    screen.style.fontSize="3rem";
}

//-----------------------------------------------------Display---------------------------------------------------------------//
function showAnswer(answer) {
    document.querySelector(".screen").innerText+=` = ${answer}`;
    adjustFontSize(screen);
}

//determine if screen is large enough to fit characters on screen by comparing scrollWH to clientWH:
function isOverFlow(screen){
    //returns true if screen needs to be larger to fit text
    return screen.scrollHeight>screen.clientHeight || screen.scrollWidth>screen.clientWidth;
}

function adjustFontSize(screen){
    let fontSize=parseInt(screen.style.fontSize);
    for(let i=fontSize; i>0.6; i--){
        let overflow=isOverFlow(screen);
        if (overflow) {
            fontSize-=0.4;
            screen.style.fontSize=fontSize+"rem"
        }
    }
}