/**Organizing logic:
 * If numerical operations are taking place, mostly written inside Constructor body - minor exception interplay with visibleNum and visibleNum2.
 * If for display and concerned with HTML/CSS events, kept outside of Constructor.
* Logic gets too convoluted for .checkIfRun 
*/

//Constructor
function Calculator(){
    // this variables: if referenced outside of constructor, called with "calc." (obj name)
   
    this.num1;
    this.num2;
    this.operator;
    this.decCount = 0;
    this.equalCount = 0;

    this.incrementEqCount = function(){
        this.equalCount += 1;
        console.log(`equalCount is ${this.equalCount}`)
            // refs are getting messed up with calc.equalCount and this.equalCount. backing up

    }

    this.passAlong = function(){
    /*after equals is pressed, 
    if an operator is pressed subsequently, 
    num1 needs to stay same,
    num2 needs to be undefined,
    decCount needs to be zeroed so that num2 can be decimal
    operator needs to be filled.
    So the operator equivalent of startFresh (but not) is - no reassignment of visibleNum, but rest is true.
    */ 
        if (this.equalCount >0){
            this.operator = undefined;  /*redundant after this was added to wrapup()?*/
            this.num2 = undefined;
            this.equalCount = 0;
        }
        this.decCount = 0; /**so that num2 can have decimals */
    }

    this.startFresh = function(){
    /* if a number is entered directly after equal, it should be entered afresh.
    Recognize that an equal sign was pressed.
    If a digit or decimal is pressed directly after equal sign, num1, operator, and num2 should be cleared. 
    New number is entered into num1 per usual convention.
    If equal sign is pressed more than once in a row however, it should have no effect on any other variables.
    */
    
        if (this.equalCount > 0){
            visibleNum = 0; /*this did not reset when it was "num1 = 0" because num1 is taken from visibleNum value, except for when wrapUp is called. */
            this.operator = undefined; 
            this.num2 = undefined;
            this.decCount = 0;
            this.equalCount = 0;
        }
        console.log(`operator is now ${this.operator}, num1 is set as ${this.num1}`)
    }

    this.checkFill = function(){
        if (this.operator == undefined && this.num2 == undefined){
            this.num1 = visibleNum;
            console.log(`num1 became ${this.num1}`)
        }else if (this.num1 !== undefined && this.operator !== undefined){
            this.num2 = visibleNum;
            console.log(`num2 became ${this.num2}`)
        }
    }

    this.whenFillNum2 = function(){
        // this may be redundant or if above conditions order flipped, could be condensed?
        if (this.num1 !== undefined && this.operator !== undefined && this.num2 == undefined){
            visibleNum = "0";
            console.log(`visibleNum is now ${visibleNum}ed`)
        }
    }

/**each digit goes through
 * startfresh
 * whenfillnum2
 * fillvisible
 * seenumber
 * calc.checkfill
 * 
 * first see if calling checkFill before fillvisible changes behavior
 * if not, merge whenfill and checkfill
 */


    this.checkIfRun = function(){
        // if certain property has operator value, 2 numbers given, method is matched and called
        // should also run for chained ops (without pressing equals explicitly)

        if (this.num1 !== undefined && this.num2 !== undefined && this.operator !== undefined){
            // hinges on resetting num2 to undefined as gatekeeper
            this.matchOpRun(this.operator) /*this is the call that actually passes operator the variable as an argument */
            // why is checkOp not a function if I try to make it a method?
        }
    }

    this.matchOpRun = function(value){
    // matches operator to the right method to execute
    // "operator" the actual variable is passed inside calc.checkIfRun()
        switch (value){
            case "+":
                this.add();
                break;
            case "-":
                this.subtract();
                break;
            case "*":
                this.multiply();
                break;
            case "/":
                this.divide();
                break;
            default:
                console.log('matchOpRun failed to match')
                break;
        }
        seeNumber();
    }
    
    this.add = function(){
            // do NOT put num1 and num2 as parameters
            // they will become undefined shadows of the actual variables num1 num2
            // resulting in a non-calculation

        this.num1 = +this.num1 + +this.num2
        this.wrapUp();
        console.log(`now that the op has run, num1 is ${this.num1} and num2 is ${this.num2}`)
    }

    this.subtract = function(){
        this.num1 = +this.num1 - +this.num2
        this.wrapUp();
        console.log(`now that the op has run, num1 is ${this.num1} and num2 is ${this.num2}`)
    }

    this.multiply = function(){
        this.num1 = +this.num1 * (+this.num2)
        this.wrapUp();
        console.log(`now that the op has run, num1 is ${this.num1} and num2 is ${this.num2}`)
    }

    this.divide = function(){
        if (this.num2 == "0"){
            visibleNum = "Undefined"
            // currently if you enter an operator next and a number, it'll pick up from num1's stored value.
        }else {
            this.num1 = (+this.num1 / +this.num2)
            this.wrapUp();
            console.log(`now that the op has run, num1 is ${this.num1} and num2 is ${this.num2}`)
        }
    }

    this.wrapUp = function(){
        visibleNum = this.num1;
        this.num2 = undefined;
        this.operator = undefined;
    }
    
}

//Constructor function call placed at top to create new Calculator object; otherwise some chronological/existence issues
let calc = new Calculator()

// variables for legibility
let decimalB = document.querySelector('#decimal')
let equals = document.querySelector('#equals')

// ...and display 
let placeForAns = document.querySelector('#showAns')
let visibleNum = "0";

// Display: Ensure long numbers are visible
let visibleNum2;


/**EVENT LISTENERS - KEEP AHEAD OF GLOBAL FUNCTIONS */

// Display: show button was pressed. Note: function expression; chronology matters. 
document.querySelectorAll('.button').forEach(element => element.addEventListener('click', function(){
        // note this was not possible to abstract as a callback yet given the forEach linkage needed
        element.classList.toggle('invert');
        setTimeout(function(){
            element.classList.toggle('invert')
        }, 200);
    })
)

// Display: update visible number (visibleNum) based on which digit was pressed. 
// Preserve chronology 1) startfresh 2) fillvisible 3) checkfill
// decimal is excluded due to exceptional condition for fillvisible.
document.querySelectorAll('.digit').forEach(element => element.addEventListener('click', function(){

    calc.startFresh(); 

    // below: fillVisible generic for all numerical inputs
    calc.whenFillNum2();
    let value = element.getAttribute('id');
    
    if (!(visibleNum == "0")){
        switch (value){
            case "zero":
                visibleNum +="0";
                break;
            case "one":
                visibleNum +="1";
                break;
            case "two":
                visibleNum +="2";
                break;
            case "three":
                visibleNum +="3";
                break;
            case "four":
                visibleNum +="4";
                break;
            case "five":
                visibleNum +="5";
                break;
            case "six":
                visibleNum +="6";
                break;
            case "seven":
                visibleNum +="7";
                break;
            case "eight":
                visibleNum +="8";
                break;
            case "nine":
                visibleNum +="9";
                break;
            default:
                console.log('Nothing matched');
                break;
                
        }
    }else {
        switch (value){
            case "zero":
                visibleNum ="0";
                break;
            case "one":
                visibleNum ="1";
                break;
            case "two":
                visibleNum ="2";
                break;
            case "three":
                visibleNum ="3";
                break;
            case "four":
                visibleNum ="4";
                break;
            case "five":
                visibleNum ="5";
                break;
            case "six":
                visibleNum ="6";
                break;
            case "seven":
                visibleNum ="7";
                break;
            case "eight":
                visibleNum ="8";
                break;
            case "nine":
                visibleNum ="9";
                break;
            default:
                console.log('Nothing matched');
                break;
        }
    }
    seeNumber();
    calc.checkFill(); 
})
)

// Operations: passAlong value if needed, check if run, and (generic) fill Ops conditionally
document.querySelectorAll('.operation').forEach(element => element.addEventListener('click', function(){
    calc.passAlong();
    calc.checkIfRun();

    // below: fill Ops generic for all operators
    let value = element.getAttribute('id');
    switch (value){
        case "add":
            calc.operator ="+";
            break;
        case "minus":
            calc.operator ="-";
            break;
        case "mult":
            calc.operator ="*";
            break;
        case "divide":
            calc.operator ="/";
            break;
    }
            
    if (calc.num1 === undefined){
        calc.num1 = 0;
    }
    console.log(`operator is now ${calc.operator} and num1 is set as ${calc.num1}`)
    
}))

decimalB.addEventListener('click', startFreshFillCheckDecimal)
equals.addEventListener('click', incrementCheckRunEquals)


/*CURRENTLY GLOBAL FUNCTIONS - KEEP UNDER EVENT LISTENERS ABOVE */
function seeNumber(){
    // display: makes numbers legible
    if (visibleNum.toString().length <=12){
        visibleNum2 = visibleNum
    }else {
        visibleNum2 = Number(visibleNum).toExponential(3) /*for fixing displayed number. Keep separate from operations.*/
    }
    // since seeNumber is never called without immediate follow of innerText update, and same goal, adding this into the function
    placeForAns.innerText = visibleNum2; 
}

function startFreshFillCheckDecimal(){
    // solely to reduce number of event listeners on decimalB
    calc.startFresh();
    fillVisibleDecimal();
    calc.checkFill();
}

function fillVisibleDecimal(){
    calc.whenFillNum2();

    // the following distinguishes decimal behavior from digit behavior
    if (!(calc.decCount > 0)){
        console.log(`decimal count was ${calc.decCount}`) /**was already undefined at this point, why? */
        visibleNum += ".";
        calc.decCount += 1;    
        console.log(`decimal count is now ${calc.decCount}`)
    } else {
        console.log('there\'s already a decimal present')
    }
    seeNumber();
}

function incrementCheckRunEquals(){
    // solely to reduce number of event listeners on equalsB
    calc.incrementEqCount();
    calc.checkIfRun();
    checkBkg(); /**for debugging, can remove */
}

// solely for debugging
function checkBkg(){
    console.log(`You pressed equalsB. Operator is ${calc.operator}, num1 is ${calc.num1}, num2 is ${calc.num2}. equalCount is ${calc.equalCount}`)
}


/********************************************* */



// WORKING NOTES
// number intake and print to screen plus store correct number as num1, num2
/* 
Know when first number ends (at first operator). 
Know when second number begins (after operator).
Know when second number ends (equals).
Intake as string (allow for multiple digits/places). only 1 decimal per number. (know when there is a decimal)

Provide some "clearing" option to start fresh. Currently:
after an op has run, num2 becomes undefined. op becomes undefined.
things run only if num1 and num2 are undefined
after an op runs, the operator must become undefined until clicked again
*/

/**for DISPLAY 
SHOW BUTTON WAS PRESSED
 * fetch all "button"s (queryselector)
 * for each, get id value. 
 * add event listener using the id value obtained specific to each button.
 * using same id (and queryselector), give visual cue of press and return to prior state after short time interval.

NUMERICAL OVERFLOW (long numbers)
1. For visibility only 
2. Still accrues in the number buckets in the Calculator, and operation would proceed (calculation unaffected)
3. Add as a second variable to protect calculation/operations, since visibleNum variable is involved in assignment to number buckets
there are 12 usable figure spaces
h1 element is 2rem*13 + 2rem padding on either side, or 28rem wide.

chosen method:
.toExponential

also considered: 
.toPrecision, .toFixed, which are currently conversion to string methods
*/
