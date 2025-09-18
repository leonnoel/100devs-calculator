"use strict";

/*
PLAN
    I. CONSTRAINTS  
        A. First non-number digit can be "-" or "."
            1. Prevent non-digit other than "-" or "." from being first character in calcDisplay
            2. If "-", need to concatenate to next digit value
                i. If "-", needs to also be able to be overwritten by operator
            3. If ".", needs to also be able to be overwritten by operator

    II. OPERATIONS
        A. "-" overwritten by operator or "."
            1. Inputting "-" checks if calcDisplay is empty

    III. GOAL(S)
        

    IV. DIVIDE
        A. PHASES
            1. Variables


            2. Methods/Properties
        


            3. Conditionals/Loops
        

        B. STEPS
            1. function to split string into array elements at operators
            2. store calculator buttons in elements
        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:

    Thoughts: 
        - refactor into OOP
        
*/
let btnElem = Array.from(document.querySelectorAll(".btn"));
let btnTxt = btnElem.map((elem) => elem.innerText);
let calcDisplay = document.querySelector(".div-output");

//this is an object
let calculator = new function(){ 
    let storedValue = ""; 
    let storedArr = [];
    let prevCalc = false;
    let pattern = /[\+\-\*\/]/;

    //splits value at the operator, outputs to new array, deletes empty ""
    let toArr = function(){   
        storedArr = storedValue.split(/([0-9\.]+)/).filter((elem) => elem !== "");
        storedValue = "";
        toOperate(storedArr); //begins evaluation of array elements for result
    };

    //inserts results from evalArr() into array and then recurses toOperate();
    let insertResults = function(pos, result){
        storedArr.splice(pos,3,result);
        toOperate(storedArr);
    };

    //loop to evaluate * & / switch statements on 1st pass, + & - on 2nd pass
    let toOperate = function(arr){
        for(let h = 0; h <= 1; h++){    
            evalArr(h, arr);
        }

        //evaluation function for symbols in array, recursively returns until array.length value = 1
        function evalArr(h, arr){   
            if(arr.length <= 1){
                console.log(arr, "This array is done");
                return arr;
            } else {
                if(arr[0] === "-") {
                    arr.splice(0,2,(-arr[1]));
                }
                for (let i = 0; i < arr.length; i++){
                    let prevInd = arr[i-1]; //returns element value, NOT index position
                    let nextInd = arr[i+1];

                    if (h < 1){  //index refers to toOperate h loop
                        switch(arr[i]){
                            case "*":
                                (() => {
                                    let result = Number(prevInd) * Number(nextInd);
                                    insertResults((i-1), result); //FIXED!
                                })();
                                break;
                            case "/":
                                (() => {
                                    let result = Number(prevInd) / Number(nextInd);
                                    insertResults((i-1), result); //ALSO FIXED!
                                })();
                                break;
                        }
                    } else {
                        switch(arr[i]){
                            case "+":
                                (() => {
                                    let result = +prevInd + +nextInd;
                                    insertResults((i-1), result);
                                })();
                                break;
                            case "-":
                                (() => {
                                    let result = Number(prevInd) - Number(nextInd);
                                    insertResults((i-1), result);
                                })();
                                break;                                                                                  
                            }
                        };                           
                    }           
            }
            return calcDisplay.innerText = arr.join("");
        };
    }

    //bound to each button except "="
    //outputs button presses to calcDisplay
    let outputDisplay = function(){
    if (prevCalc === true){ //resets calcDisplay for new calculation 
        calcDisplay.innerText = "";
        prevCalc = false;
    }
    if(!isNaN(+this.innerText) || ((this.innerText === ".") || this.innerText === "-")){ 
        //used to overwrite 0 or non-"-" as first character 
        if((calcDisplay.innerText.length === 1) && (calcDisplay.innerText === "0" || calcDisplay.innerText === "+" || calcDisplay.innerText === "*" || calcDisplay.innerText === "/")){
            calcDisplay.innerText = this.innerText;
            storedValue = ""; 
        } else {
        //if input is a number or decimal, adds to calcDisplay
        calcDisplay.innerText += this.innerText;
        };
      } else {
        //if input is not a number
        if((!pattern.test(calcDisplay.innerText.slice(-1)) && (!calcDisplay.innerText.endsWith("."))) || ((calcDisplay.innerText.length === 0 && this.innerText === "-"))){  //checks if last character stored on calcDisplay is *not* an operator and not a decimal
            calcDisplay.innerText += this.innerText;                    //then add input (non-number character)
        } 
        else {                                                                        //otherwise
            calcDisplay.innerText = calcDisplay.innerText.slice(0,-1) + this.innerText; //replace last character on calcDisplay with input ()
            storedValue = calcDisplay.innerText.slice(0,-1); 
        };
    };  
    }

    let calculate = function(){ 
        if(pattern.test(calcDisplay.innerText.slice(-1))){
            calcDisplay.innerText = calcDisplay.innerText.slice(0,-1);
            storedValue = calcDisplay.innerText;
        }             
        toArr() //passes calculator.value to calculator.toArr for conversion of string to array with each group of numbers and each operator in a separate element
        prevCalc = true;
    }
    
    //bound to each button except "="
    let storeNumValue = function(){
        storedValue += this.innerText; //adds pressed input value to calculator.value
    }

    this.addCalculate = (function() {
        for(let elem of btnElem){
            if(elem.innerText === "="){
                elem.addEventListener("click", calculate); 
            };
        };
    })();

    this.addStoreNumValue = (function() {
        for(let elem of btnElem){
            if(elem.innerText !== "="){
                elem.addEventListener("click", storeNumValue);
            };
        };
    })();

    this.addOutputDisplay = (function() {
        for(let elem of btnElem){
            if(elem.innerText !== "="){
                elem.addEventListener("click", outputDisplay);
            };
        };
    })();
};




