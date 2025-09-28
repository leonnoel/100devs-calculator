//Calculator display and input
class Calculator {
    
    constructor () {
        //set up initial calculator state
        this.value=""; //will store value of each operand when selected
        this.valuesArray=[]; //will store each part of expression in an array
        this.operator; //will store each operator when selected
        this.result; //will store final answer
        
        //set calculator interface and display
        this.screen=document.querySelector(".screen");
        this.numberSelector=document.querySelectorAll(".number");//refer to all number buttons and "."
        this.operatorSelector=document.querySelectorAll(".operator");//refer to all operator buttons
        this.clearButton=document.querySelector(".clear")

        //set event listeners to take user inputs from button clicks
        this.numberSelector.forEach(item=>item.addEventListener("click", this.saveNum));//save number to value on click
        this.operatorSelector.forEach(item=>item.addEventListener("click", this.saveOperator));//save operator on click
        this.clearButton.addEventListener("click", this.clearAll);
    }


    //------------------------------------------------Storing Expressions from Event Listeners-----------------------------------------------//
    //save arrow functions as variables, so when called with this.saveNum in event listener, saveNum can be called to act on event, not on this class object
    //saveNum will collect entries from calclator and store in variable value as string
    saveNum = (event) => {
        //make sure there is no more than 1 decimal in a number
        //reference button's value with event.target.value (since this is in a class, can't use this.value, as this refers to class object, and event object doesn't have a value property (it has target which has value))
        if (event.target.value=="." && this.value.includes(".")) {
            return this.value;
        }
        //concatenate additional entries onto value (value will not be overwritten, so has to be cleared later after operator selected)
        else {
            this.value+=event.target.value;
        }
        //display value on screen (will display on each click of numbers as saveNum is run)
        this.screen.innerText=this.value;
        this.adjustFontSize();
    }

    //saveOperator will add previously stored value to array, store chosen operator, and evaluate when = is chosen
    saveOperator = (event) => {
        //save button's value to operator (will overwrite any previous operator)
        this.operator=event.target.value;

        //if "=" used, end expression and evaluate:
        if (event.target.value=="=") {
            //when = selected, add last stored value to valuesArray, if not a number, then store 0
            if(this.value=="" || isNaN(+this.value)) {
                console.log("no number entered, using 0");
                this.value=0;
            }
            this.valuesArray.push(this.value);
            //display entire array (ie the expression) on screen as a string
            this.screen.innerText=this.valuesArray.join(' ');
            //evaluate the expression: create evaluator with this.valuesArray, then use evaluator method
            let evaluator = new Evaluator(this.valuesArray);
            this.result = evaluator.evaluate();
            this.showAnswer(this.result)
            //clear the values array once expression is evaluated (will not allow additional calcuations on expression)
            this.valuesArray=[];
        }

        //Allow making negative number if using "-" before entering a number. 
            //Therefore only allow if there is no number stored in value already (doesn't matter if there is an operator stored or not)
        else if (event.target.value=="-" && this.value=="") {
            this.value=this.operator;
            //escape this function so that value is not set to "", and "-" is assigned to value
            return;
        }

        //If math operator chosen (except negation sign at beginning of number), store to expression:
        else {
            //once operator is chosen, push existing value to valuesArray
            if (this.value!="" && this.value!="-") {
                this.valuesArray.push(this.value);
                this.valuesArray.push(this.operator);
                this.screen.innerText=this.operator;
            }
            //if there is no value entered yet in expression, prompt user to enter number
            else if(this.valuesArray.length==0) {
                this.screen.innerText="Enter a number";
            }
            //if value is either 1)empty because already used an operatore and it cleared,
            //or 2)or it is simply "-" without number, clicking operatore will mean that user wants to change operator
            //therefore remove last element of valuesArray and push new operator
            else if ((this.value=="" || this.value=="-") && this.valuesArray.length!=0){
                console.log("changing operator");
                this.valuesArray.splice(-1, 1, this.operator);
                this.screen.innerText=this.operator;
            }
        }
        //once operator is chosen, clear value so it's ready to store next number (operator does not have to be cleared since it is just overwritten)
        this.value=""
    }

    clearAll = (event) => {
        this.screen.innerText="";
        this.value="";
        this.valuesArray=[];
        this.result=null;
        this.screen.style.fontSize="3rem";
    }


    //-----------------------------------------------------Display functions-----------------------------------------------------------------//
    showAnswer(answer) {
        if (answer == "Infinity") {
            answer = "Undefined"
        }
        this.screen.innerText+=` = ${answer}`;
        this.adjustFontSize();
    }

    //determine if screen is large enough to fit characters on screen by comparing scrollWH to clientWH:
    isOverFlow(){
        //returns true if screen needs to be larger to fit text
        return this.screen.scrollHeight>this.screen.clientHeight || this.screen.scrollWidth>this.screen.clientWidth;
    }

    adjustFontSize(){
        let fontSize=parseInt(this.screen.style.fontSize);
        for(let i=fontSize; i>0.6; i--){
            let overflow=this.isOverFlow();
            if (overflow) {
                fontSize-=0.4;
                this.screen.style.fontSize=fontSize+"rem"
            }
        }
    }

}


//Evaluate expressions
class Evaluator {
    //map string from expression array to numbers and operator methods to prepare for evaluation
    constructor(expressionArray){
        //turns all numeric strings to numbers, leaves operators as is
        this.expression = expressionArray.map(x => isNaN(+x) ? x: +x);

        //maps operators to math function
        this.methods = {
        "+": (a, b) => a+b,
        "-": (a, b) => a-b,
        "*": (a, b) => a*b,
        "/": (a, b) => a/b
        }
    }

    //Evaluate the expression around any operator from left to right in expression
    processOperators(operators) {
        for(let i=0; i<this.expression.length; i++) {
            let expression_item = this.expression[i]
            if (operators.includes(expression_item)) {
                let a=this.expression[i-1];
                let b=this.expression[i+1];
                let result = this.methods[expression_item](a,b)
                //i and i+1 are removed elements, and i-1 is now replaced by result
                this.expression.splice(i-1, 3, result);
                //therefore, we need to reduce i by 1 to accurately reflect where we are in array
                i--;
            }
        }
    }

    //Evaluate with order of operations
    evaluate() {
        //first process * and / in loop (processOperators runs left to right)
        this.processOperators(["*", "/"]);
        //then process + and - in loop
        this.processOperators(["+", "-"]);
        //return expression which should only have 1 element after going through above loops
        return this.expression[0]
    }
}


//Instantiate Calculator
let calculator = new Calculator();