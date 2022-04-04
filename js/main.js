/**Half the calculator's guts are outside of the constructor.
 * 
 * BUGS that result when trying to port any variables into the constructor: mainly due to variable vs. property references, "this" issues
    
    after click equals, when decimal pressed, instead of starting fresh and setting num1 to 0. Something is zeroing out the equals count within the equal event listener itself.
but maybe point is that operator lingers after equal is done.

    another scenario: porting equalCounts into constructor as a property results in an error with += that returns "NaN"
    even though separate console.log shows the right numerical equalCounts. appears that this["key"] and calc["key"] references seem to get jumbled, but unclear if it is root issue.

    Other:
* Logic gets too convoluted - .checkIfRun in particular have too many chained conditionals. Code is hard to read.
* .checkFill against all the numbers and decimal is to maintain num1 vs num2 value assignment
* for "fillVisible" functions: need a way to extract the "value" (id based?) of given element to make code generic and use switch.

To-dos
 * migrate variables into constructor as properties (mind calc. vs this)
 * migrate functions into constructor as methods: startFresh, passAlong, then the fillVisible/switches 
 * for all ".digit"s, get id value, and condense as was done for showPress
 * change the visible display for edge cases */ 

//Constructor function call placed at top to create new Calculator object; otherwise some chronological/existence issues
let calc = new Calculator()

// variables for legibility
let zeroB = document.querySelector('#zero')
let oneB = document.querySelector('#one')
let twoB = document.querySelector('#two')
let threeB = document.querySelector('#three')
let fourB = document.querySelector('#four')
let fiveB = document.querySelector('#five')
let sixB = document.querySelector('#six')
let sevenB = document.querySelector('#seven')
let eightB = document.querySelector('#eight')
let nineB = document.querySelector('#nine')
let decimalB = document.querySelector('#decimal')


// conditional for operator recog
let add = document.querySelector('#add')
let subtract = document.querySelector('#minus')
let mult = document.querySelector('#mult')
let divide = document.querySelector('#divide')

let equals = document.querySelector('#equals')

// actual calculations. Maybe put inside Calc via this.num... etc.
let num1;
let num2;
let operator;

let decCount = 0;
let equalCount = 0;


// display 
let placeForAns = document.querySelector('#showAns')
let visibleNum = "0";


/* Display: Ensure long numbers are visible. see: seeNumber() However, once a long number first appears, subsequent operations are stuck in that display format
until record is cleared entirely.
*/
let visibleNum2;

// Display: show button was pressed. Note: function expression; chronology matters
document.querySelectorAll('.button').forEach(element => document.querySelector(`#${element.getAttribute('id')}`)
    .addEventListener('click', function(){
        document.querySelector(`#${element.getAttribute('id')}`).classList.toggle('invert');
        setTimeout(function(){
            document.querySelector(`#${element.getAttribute('id')}`).classList.toggle('invert')
        }, 200);
    })
    )

/*CURRENTLY GLOBAL FUNCTIONS */

function seeNumber(){
    if (visibleNum.toString().length <=12){
        visibleNum2 = visibleNum
    }else {
        visibleNum2 = Number(visibleNum).toExponential(3) /*for fixing displayed number. Keep separate from operations.*/
    }
}

function matchOpRun(value){
    // "operator" the actual variable is passed inside calc.checkIfRun()
    switch (value){
        case "+":
            calc.add();
            break;
        case "-":
            calc.subtract();
            break;
        case "*":
            calc.multiply();
            break;
        case "/":
            calc.divide();
            break;
        default:
            console.log('matchOpRun failed to match')
            break;
    }
    seeNumber();
    placeForAns.innerText = visibleNum2;

}

// solely for debugging
function checkBkg(){
    console.log(`You pressed equalsB. Operator is ${operator}, num1 is ${num1}, num2 is ${num2}. equalCount is ${equalCount}`)
}


/********************************************* */

zeroB.addEventListener('click', calc.startFresh)
zeroB.addEventListener('click', fillVisible0)
zeroB.addEventListener('click', calc.checkFill)

function fillVisible0(){

    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    
    if (!(visibleNum == "0")){
        visibleNum += "0";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "0"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }  
}

/*******************/

oneB.addEventListener('click', calc.startFresh)
oneB.addEventListener('click', fillVisible1)
oneB.addEventListener('click', calc.checkFill)

function fillVisible1(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        // condition to start filling num2
        visibleNum = "0";
        // decCount = 0; /*might be redundant with the additional line in passAlong()*/
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    
    if (!(visibleNum == "0")){
        visibleNum += "1";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "1"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }       
  
}

/*******************/

twoB.addEventListener('click', calc.startFresh)
twoB.addEventListener('click', fillVisible2)
twoB.addEventListener('click', calc.checkFill)

function fillVisible2(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    
    if (!(visibleNum == "0")){
        visibleNum += "2";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "2"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }       
}

/*******************/

threeB.addEventListener('click', calc.startFresh)
threeB.addEventListener('click', fillVisible3)
threeB.addEventListener('click', calc.checkFill)

function fillVisible3(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    
    if (!(visibleNum == "0")){
        visibleNum += "3";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "3"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }       
}

/*******************/

fourB.addEventListener('click', calc.startFresh)
fourB.addEventListener('click', fillVisible4)
fourB.addEventListener('click', calc.checkFill)

function fillVisible4(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    
    if (!(visibleNum == "0")){
        visibleNum += "4";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "4"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }       
}

/*******************/

fiveB.addEventListener('click', calc.startFresh)
fiveB.addEventListener('click', fillVisible5)
fiveB.addEventListener('click', calc.checkFill)


function fillVisible5(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    
    if (!(visibleNum == "0")){
        visibleNum += "5";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "5"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }       
}

/*******************/

sixB.addEventListener('click', calc.startFresh)
sixB.addEventListener('click', fillVisible6)
sixB.addEventListener('click', calc.checkFill)


function fillVisible6(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    
    if (!(visibleNum == "0")){
        visibleNum += "6";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "6"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }       
}

/*******************/

sevenB.addEventListener('click', calc.startFresh)
sevenB.addEventListener('click', fillVisible7)
sevenB.addEventListener('click', calc.checkFill)


function fillVisible7(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    
    if (!(visibleNum == "0")){
        visibleNum += "7";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "7"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }       
}

/*******************/

eightB.addEventListener('click', calc.startFresh)
eightB.addEventListener('click', fillVisible8)
eightB.addEventListener('click', calc.checkFill)


function fillVisible8(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    
    if (!(visibleNum == "0")){
        visibleNum += "8";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "8"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }       
}

/*******************/

nineB.addEventListener('click', calc.startFresh)
nineB.addEventListener('click', fillVisible9)
nineB.addEventListener('click', calc.checkFill)


function fillVisible9(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }
    if (!(visibleNum == "0")){
        visibleNum += "9";
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        visibleNum = "9"
        seeNumber();
        placeForAns.innerText = visibleNum2;
    }       
}

/*******************/

decimalB.addEventListener('click', calc.startFresh)
decimalB.addEventListener('click', fillVisibleDecimal)
decimalB.addEventListener('click', calc.checkFill)

function fillVisibleDecimal(){
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;   /*this lets you enter a decimal for num2*/
        console.log(`visibleNum is now ${visibleNum}ed`)
    }

    if (!(calc.decCount > 0)){
        visibleNum += ".";
        calc.decCount += 1;    
        console.log(`decimal count is now ${calc.decCount}`)
        seeNumber();
        placeForAns.innerText = visibleNum2;
    } else {
        console.log('there\'s already a decimal present')
    }
       
}

// order of the event listeners matters.
/* first indicate button is pressed to the user
then check if any prior operations await execution
if yes, execute and display result onscreen
then replace previous operator, creating condition to update a now undefined num2 
following convention, operator doesn't print to screen though it's also an unhelpful convention.
*/

add.addEventListener('click', calc.passAlong)
add.addEventListener('click', calc.checkIfRun)
add.addEventListener('click', fillOpsAdd)


function fillOpsAdd(){
    operator = "+"
    if (num1 === undefined){
        num1 = 0;
        // this handles conditions when operator is clicked without first adding a number. Mainly for "negative integer" starting.
    }
    console.log(`operator is now ${operator} and num1 is set as ${num1}`)

}

/*******************/
subtract.addEventListener('click', calc.passAlong)
subtract.addEventListener('click', calc.checkIfRun)
subtract.addEventListener('click', fillOpsSub)


function fillOpsSub(){
    operator = "-"
    if (num1 === undefined){
        num1 = 0;
    }
    console.log(`operator is now ${operator} and num1 is set as ${num1}`)
}

/*******************/

mult.addEventListener('click', calc.passAlong)
mult.addEventListener('click', calc.checkIfRun)
mult.addEventListener('click', fillOpsMult)

function fillOpsMult(){
    operator = "*"
    if (num1 === undefined){
        num1 = 0;
    }
    console.log(`operator is now ${operator} and num1 is set as ${num1}`)
}

/*******************/

divide.addEventListener('click', calc.passAlong)
divide.addEventListener('click', calc.checkIfRun)
divide.addEventListener('click', fillOpsDiv)

function fillOpsDiv(){
    operator = "/"
    if (num1 === undefined){
        num1 = 0;
    }
    console.log(`operator is now ${operator} and num1 is set as ${num1}`)
}
/*******************/

// execute operation - not chained

equals.addEventListener('click', calc.incrementEqCount)
equals.addEventListener('click', calc.checkIfRun) /*this is actually chained to running - matchOpRun - if condition is met */
equals.addEventListener('click', checkBkg)



// build as Constructor
// properties need to be made writable; are not writable by default? 
// the above didn't seem to happen before to my new objects...I could increment etc.
// temp workaround: make local variables but not properties...


function Calculator(){

    // this variables: if referenced outside of constructor, called with "calc."
    /*
    let num1;
    let num2;
    let operator;
    */

    this.incrementEqCount = function(){
        equalCount += 1;
        console.log(`equalCount is ${equalCount}`)
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
        if (equalCount >0){
            operator = undefined;  /*redundant after this was added to wrapup()?*/
            num2 = undefined;
            equalCount = 0;
        }
        decCount = 0; /**so that num2 can have decimals */
    }

    this.startFresh = function(){
    /* if a number is entered directly after equal, it should be entered afresh.
    Recognize that an equal sign was pressed.
    If a digit or decimal is pressed directly after equal sign, num1, operator, and num2 should be cleared. 
    New number is entered into num1 per usual convention.
    If equal sign is pressed more than once in a row however, it should have no effect on any other variables.
    */
    
        if (equalCount > 0){
            visibleNum = 0; /*this did not reset when it was "num1 = 0" because num1 is taken from visibleNum value, except for when wrapUp is called. */
            operator = undefined; 
            num2 = undefined;
            decCount = 0;
            equalCount = 0;
            
        }
    
        console.log(`operator is now ${operator}, num1 is set as ${num1}`)
    }


    this.checkFill = function(){
        if (operator == undefined && num2 == undefined){
            num1 = visibleNum;
            console.log(`num1 became ${num1}`)
        }else if (num1 !== undefined && operator !== undefined){
            num2 = visibleNum;
            console.log(`num2 became ${num2}`)
        }
    }

    this.checkIfRun = function(){
        // if certain property has operator value, 2 numbers given, method is matched and called
        // should also run for chained ops (without pressing equals explicitly)

        if (num1 !== undefined && num2 !== undefined && operator !== undefined){
            // hinges on resetting num2 to undefined as gatekeeper
            matchOpRun(operator) /*this is the call that actually passes operator the variable as an argument */
            // why is checkOp not a function if I try to make it a method?
        }
    }
    
    this.add = function(){
            // do NOT put num1 and num2 as parameters
            // they will become undefined shadows of the actual variables num1 num2
            // resulting in a non-calculation

        num1 = +num1 + +num2
        this.wrapUp();
        console.log(`now that the op has run, num1 is ${num1} and num2 is ${num2}`)
    }

    this.subtract = function(){
        num1 = +num1 - +num2
        this.wrapUp();
        console.log(`now that the op has run, num1 is ${num1} and num2 is ${num2}`)
    }

    this.multiply = function(){
        num1 = +num1 * (+num2)
        this.wrapUp();
        console.log(`now that the op has run, num1 is ${num1} and num2 is ${num2}`)
    }

    this.divide = function(){
        if (num2 == "0"){
            visibleNum = "Undefined"
            // currently if you enter an operator next and a number, it'll pick up from num1's stored value.
        }else {
            num1 = (+num1 / +num2)
            this.wrapUp();
            console.log(`now that the op has run, num1 is ${num1} and num2 is ${num2}`)
        }
    }

    this.wrapUp = function(){
        visibleNum = num1;
        num2 = undefined;
        operator = undefined;
        // does decCount need removal as well, or does fillVisible handle completely esp for num2?
        // what if I want to zero out num1 but decCount remains >0?
        // need to include in that zeroing out process
    }
    

}


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


// graveyard
/*

this.fillVisibleMatch = function(){
    
    //standing conditions to set up for num2
    if (num1 !== undefined && operator !== undefined && num2 == undefined){
        visibleNum = "0";
        // decCount = 0;
        console.log(`visibleNum is now ${visibleNum}ed`)
    }

    // conditions that reference state of visibleNum

    if (!(visibleNum == "0")){

        switch (value){
            case 0:
                visibleNum += "0";
                break;
            case 1:
                visibleNum += "1";
                break;
            case 2:
                visibleNum += "2";
                break;
            case 3:
                visibleNum += "3";
                break;
            case 4:
                visibleNum += "4";
                break;
            case 5:
                visibleNum += "5";
                break;
            case 6:
                visibleNum += "6";
                break;
            case 7:
                visibleNum += "7";
                break;
            case 8:
                visibleNum += "8";
                break;
            case 9:
                visibleNum += "9";
                break;
            
            // decimal has other conditions
        }
        placeForAns.innerText = visibleNum;

    }else {
        switch (value){
            case 0:
                visibleNum = "0";
                break;
            case 1:
                visibleNum = "1";
                break;
            case 2:
                visibleNum = "2";
                break;
            case 3:
                visibleNum = "3";
                break;
            case 4:
                visibleNum = "4";
                break;
            case 5:
                visibleNum = "5";
                break;
            case 6:
                visibleNum = "6";
                break;
            case 7:
                visibleNum = "7";
                break;
            case 8:
                visibleNum = "8";
                break;
            case 9:
                visibleNum = "9";
                break;
        }
        placeForAns.innerText = visibleNum;

    }  
}

*/