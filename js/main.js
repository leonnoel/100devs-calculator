let textToDisplay = '0'
toDisplay()

//push to DOM
function toDisplay(){
    document.querySelector('#display').innerText = `${textToDisplay}`
}


//KEY Press 0-9 . /*-+ =
document.addEventListener('keydown', addDigit)


function addDigit(e) {
    // console.log(e)
    if ((e.key >= 0 && e.key <= 9) || (e.key === '/' || e.key === '*' || e.key === '-' || e.key === '+') || (e.key === '.') ){
        if (textToDisplay === '0') {
            textToDisplay = e.key
            toDisplay(textToDisplay)
        }else {
            textToDisplay += e.key
            toDisplay(textToDisplay)
        }
    }else if (e.key === 'Enter' ) {
        equals()
    }
}
//Click on Screen
function zero(){
    if (textToDisplay === '0') {
        
    }else {
        textToDisplay += '0'
        toDisplay(textToDisplay)
    }
}
function one(){
    if (textToDisplay === '0') {
        textToDisplay = '1'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '1'
        toDisplay(textToDisplay)
    }
}
function two(){
    if (textToDisplay === '0') {
        textToDisplay = '2'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '2'
        toDisplay(textToDisplay)
    }
}
function three(){
    if (textToDisplay === '0') {
        textToDisplay = '3'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '3'
        toDisplay(textToDisplay)
    }
}
function four(){
    if (textToDisplay === '0') {
        textToDisplay = '4'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '4'
        toDisplay(textToDisplay)
    }
}
function five(){
    if (textToDisplay === '0') {
        textToDisplay = '5'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '5'
        toDisplay(textToDisplay)
    }
}
function six(){
    if (textToDisplay === '0') {
        textToDisplay = '6'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '6'
        toDisplay(textToDisplay)
    }
}
function seven(){
    if (textToDisplay === '0') {
        textToDisplay = '7'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '7'
        toDisplay(textToDisplay)
    }
}
function eight(){
    if (textToDisplay === '0') {
        textToDisplay = '8'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '8'
        toDisplay(textToDisplay)
    }
}
function nine(){
    if (textToDisplay === '0') {
        textToDisplay = '9'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '9'
        toDisplay(textToDisplay)
    }
}
function dot(){
    if (textToDisplay === '0') {
        textToDisplay = '0.'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '.'
        toDisplay(textToDisplay)
    }
}
function divide(){
    if (textToDisplay === '0') {
        textToDisplay = '/'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '/'
        toDisplay(textToDisplay)
    }
}
function multiply(){
    if (textToDisplay === '0') {
        textToDisplay = '*'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '*'
        toDisplay(textToDisplay)
    }
}
function add(){
    if (textToDisplay === '0') {
        textToDisplay = '+'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '+'
        toDisplay(textToDisplay)
    }
}
function subtract(){
    if (textToDisplay === '0') {
        textToDisplay = '-'
        toDisplay(textToDisplay)
    }else {
        textToDisplay += '-'
        toDisplay(textToDisplay)
    }
}



//Show the answer 
function equals() {
    let answer = eval(textToDisplay)
    textToDisplay = answer
    toDisplay()
}

