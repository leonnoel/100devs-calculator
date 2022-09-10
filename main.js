let calculator = {
    total: 0,
    userInput:[],
    one(click){
        calculator.userInput.push(1);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    zero(click){
        calculator.userInput.push(0);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    add(click){
        // calculator.total += Number(calculator.userInput.join(''));
        document.querySelector('.window').innerText= 'hi there';
        // calculator.userInput = [];
    },
}




document.querySelector('#zero').addEventListener('click',calculator.zero);
document.querySelector('#one').addEventListener('click', calculator.one);
document.querySelector('#add').addEventListener('click', calculator.add);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
;

