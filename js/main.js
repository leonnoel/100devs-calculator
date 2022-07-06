const calc = (function (){//Setup the calculator
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
            if(calculation._state == "Num or Equal"){//can't put two operators, assume that the equal is called again
                calc.equal();
            }
            calculation._operation = operator;
            calculation._state = "Num or Equal";
            calculation._secondNumber = "";
            _updateScreen(calculation._operation);                  
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
                document.querySelector(".calc-frame").style.background = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`

                let btns = document.querySelectorAll(".button")
                btns.forEach(btn=> btn.style.background = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
                
                //document.querySelector(".control-box").style['flex-flow'] = 'column wrap'
            }  else _updateScreen("Error..Start Again") //something's missing
        }
    }
})()

document.addEventListener('keydown',function(e){
    if (!e) e = window.event;
    var keyCode = e.key;
    console.log(keyCode[keyCode.length-1], keyCode, e.key)
    if (keyCode == 'Enter' || keyCode == "="){
      // Enter pressed
	  calc.equal()
    } else if (keyCode == '/' || keyCode == "Slash"){
        // Divide pressed
        calc.setOp("/")
      } else if (keyCode == '*' || keyCode == "x"){
        // Multiply pressed
        calc.setOp("x")
      } else if (keyCode == '-' || keyCode == "Minus"){
        // Subtract pressed
        calc.setOp("-")
      } else if (keyCode == '+'){
        // Add pressed
        calc.setOp("+")
      } else if (["0","1","2","3","4","5","6","7","8","9","."].indexOf(e.key)>-1)calc.putNum(e.key)
})

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