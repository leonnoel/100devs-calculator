const displayScreen = document.querySelector('#input');
const keys = document.querySelector('.keys');

// get key values as array
let keyInputs = [];
let result;

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        readKeys(e);
    }
});

function readKeys (e) {
    const key = e.target;
    const keyValue = key.textContent;
    const keyAction = key.dataset.action; 
    const displayedNum = displayScreen.textContent;
    if(keyValue === 'C'){
        reset();
    }
    else if(keyAction === 'add' ||
            keyAction === 'subtract' ||
            keyAction === 'multiply' || 
            keyAction === 'divide'
    ){
        // console.log(keyAction);
        const lastInput = keyInputs[keyInputs.length - 1];
        const isLastOperator = ['+', '-', '*', '/'].includes(lastInput);
        if(isLastOperator) keyInputs[keyInputs.length - 1] = keyValue;
        else keyInputs.push(keyValue);
        displayScreen.textContent = keyValue;
        // keyInputs.push(keyValue);
    }
    else if(keyValue === '='){
        displayScreen.textContent =  calculate(result);
        keyInputs = [];
    }
    else{
        if(!keyAction){
            keyInputs.push(keyValue);
            result = keyInputs.join('');
            displayScreen.textContent = result;
        }
    }
}


function calculate(keys){
    return eval(keys);
}

function reset(){
    keyInputs = [];
    result = '';
    displayScreen.textContent = "";
}


