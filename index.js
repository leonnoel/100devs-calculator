// calculator object

let answerHere = document.getElementById('answer-here')

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case '=':
                answerHere.innerText = eval(answerHere.innerText);
                break;
            default:
                answerHere.innerText += e.target.innerText;
        }
    })
})