//Setup the calculator
const calc = (function (){
    let calculation = {
        _firstNumber : "0",
        _secondNumber : "",
        _operation : "",
        _result : "",
        _state : "Num or Operator"
    }//the Object stores everything about the calculation
    let _screen= document.querySelector(".screen");
    let _screen2= document.querySelector(".screen2");
    //_screen is the main math screen, _screen2 is the summary of the calculation

    function _updateScreen (txt){
        _screen.innerText = txt;
        if (txt.length<=15){ //for small numbers, fontsize is big
            _screen.style.fontSize = "35px";
            _updateScreen2();
        } else if (txt.length<=27){//for big numbers, fontsize is small
            _screen.style.fontSize = "20px";
            _updateScreen2()
        } else { //for googol sized number, just errorize it
            _screen.innerText = "Error"
            _screen.style.fontSize = "35px";
        }
    }

    function _updateScreen2(){
        //consecutively add the math expression being computed
        if (calculation._firstNumber !== ""){
            _screen2.innerText = calculation._firstNumber;
            if (calculation._operation !== ""){
                _screen2.innerText += " " + calculation._operation;
                if(calculation._secondNumber !== ""){
                    _screen2.innerText += " " + calculation._secondNumber
                }
            }
        }
    }

    return {
        putNum: function (num){ // to put a number on the screen
            console.log(num)
            if(calculation._state === "Num or Operator"){
                if (calculation._firstNumber === "0"){
                    calculation._firstNumber = num;
                }else calculation._firstNumber += num;
                _updateScreen(calculation._firstNumber);
            }else if(calculation._state === "Num or Equal"){
                calculation._secondNumber += num;
                _updateScreen(calculation._secondNumber);
            }else if(calculation._state === "Result"){
                calculation._firstNumber = num;
                _updateScreen(calculation._firstNumber);
                calculation._state = "Num or Operator"; //reset state
            }
            
        },

        setOp: function(operator){ //to select the operator to run
            console.log(operator);
            if(calculation._state !== "Num or Equal"){//can't put two operators
                calculation._operation = operator;
                calculation._state = "Num or Equal";
                calculation._secondNumber = "";
                _updateScreen(calculation._operation);   
            } 
        },

        equal: function(){ //to calculate the computation
            console.log("Equal");
            if (calculation._firstNumber !== "" & calculation._secondNumber !== "" && calculation._operation !== ""){
                switch (calculation._operation){
                    case "+":
                        calculation._result = String(Number(calculation._firstNumber) + Number(calculation._secondNumber))
                        break;
                    case "-":
                        calculation._result = String(Number(calculation._firstNumber) - Number(calculation._secondNumber)) 
                        break;
                    case "x":
                        calculation._result = String(Number(calculation._firstNumber) * Number(calculation._secondNumber)) 
                        break;
                    case "/":
                        calculation._result = String(Number(calculation._firstNumber) / Number(calculation._secondNumber)) 
                        break;              
                }
                _updateScreen(calculation._result);
                calculation._firstNumber = calculation._result;
                calculation._state = "Result";
                //document.querySelector(".control-box").style['flex-flow'] = 'column wrap'
            }  else _updateScreen("Error..Start Again") //something's missing
        }
    }
})()

//Set each button's function:
document.querySelectorAll(".number").forEach(numBtn=>{
    //console.log(numBtn.innerHTML)
    numBtn.addEventListener("click", function(){calc.putNum(numBtn.innerHTML)})
})
document.querySelectorAll(".function").forEach(funBtn=>{
    //console.log(funBtn.innerHTML)
    funBtn.addEventListener("click", function(){calc.setOp(funBtn.innerHTML)})
})
document.querySelector(".equal").addEventListener("click", calc.equal)
