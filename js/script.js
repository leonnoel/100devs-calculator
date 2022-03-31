let buttons=document.querySelectorAll('#buttons li')

let answer = 0; //after math display this answer
let display = ''; // keeps adding to screen as you press buttons
let numbers=[]; //will hold the numbers to operate on
let mathOperate='';// what type of equation to solve

let putHere='h2';


//add event listener to all buttons to put text to screen section
buttons.forEach((e)=>{
    e.addEventListener('click',getKey);
})





// when button is pressed click

// add to h2 whenever button is clicked

//place number inside variable for first number num1

//when math symbol is pressed varible for operation is set operator

//second variable will recieve numbers pressed num2

//change to another variable to input numbers

//eqauls is pushed then math is done and set into answer

//answer is displayed and set to num 1 maybe?

//repeat again to keep doing math on answer if desired


// what happens when button is pushed?
function getKey(e){
    //if math symbol pressed set variable with it to use later
    if(e.className=='operate'){
        mathOperate=e.id;//set the operation 
        //======================================================
        //===========================================what if chaining?
        //====================================================
    }

    //else if its the = symbol
    else if(e.id=='solve'){
        answer=solve(mathOperate,numbers)//send it to solve
        displayThis(putHere,answer)


    }
    //else just add numbers to string
    else{
        addNumsTo(e.dataset.value,)
        
    }

}


function solve(operationType,arr){
    let answer=0;

    //if no numbers to work with than return
    if(numbers.length<2){
        displayThis('h2','please type in numbers first')
        return
    }
    else 
    switch(operationType){
        case 'add': 
            answer=numbers[0] + numbers[1]
            break;
        case 'sub':
            answer=numbers[0] - numbers[1]
            break;
        case 'mult':
            answer=numbers[0] * numbers[1]
            break;
        case 'divide':
            answer=numbers[0] / numbers[1]
            break;

        default:
    }

    return answer;

}



//displayThis function to print to screen section on calculator 
function displayThis (element,str){
    const place = document.querySelector(element);

    place.innerText=str;

    
}

//adds numbers to array to later be used to solve
function addNumsTo(num,pos){
    //if no value in array im about to insert
    if ( !(numbers[pos]) ){
        // insert empty string
        numbers[pos]='';
    }
    numbers[pos]+=num;
}
