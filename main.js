let calculator = {
    total: 0,
    key:'equals',
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
        calculator.total += Number(calculator.userInput.join(''));
        document.querySelector('.window').innerText= calculator.total;
        calculator.userInput = [];
        calculator.key = 'add';
    },
    equals(click){
        if (calculator.key==='add'){
            calculator.add()
        } else if (calculator.key==='times'){
            calculator.times()
        } else if (calculator.key ==='subtract'){
            calculator.subtract()
        }
    },
    two(click){
        calculator.userInput.push(2);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    three(click){
        calculator.userInput.push(3);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    four(click){
        calculator.userInput.push(4);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    five(click){
        calculator.userInput.push(5);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    six(click){
        calculator.userInput.push(6);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    seven(click){
        calculator.userInput.push(7);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    eight(click){
        calculator.userInput.push(8);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    nine(click){
        calculator.userInput.push(9);
        document.querySelector('.window').innerText= String(calculator.userInput.join(''));
    },
    times(click){
        if (calculator.total == 0){
            calculator.total = 1;
        }
        if (calculator.userInput == 0){
            calculator.total += Number(calculator.userInput.join(''));
            document.querySelector('.window').innerText= calculator.total;
            calculator.userInput = [];
        } else{
            calculator.total *= Number(calculator.userInput.join(''));
            document.querySelector('.window').innerText= calculator.total;
            calculator.userInput = [];
        } 
        calculator.key = 'times';
    },
    subtract(click){
        calculator.total -= Number(calculator.userInput.join(''));
        document.querySelector('.window').innerText= calculator.total;
        calculator.userInput = [];
        calculator.key = 'subtract';
    },
}

// if press an operator button twice, then a 0 array is passed and complicates the * and / operators


document.querySelector('#zero').addEventListener('click',calculator.zero);
document.querySelector('#one').addEventListener('click', calculator.one);
document.querySelector('#add').addEventListener('click', calculator.add);
document.querySelector('#equals').addEventListener('click',calculator.equals);
document.querySelector('#two').addEventListener('click',calculator.two);
document.querySelector('#three').addEventListener('click',calculator.three);
document.querySelector('#four').addEventListener('click',calculator.four);
document.querySelector('#five').addEventListener('click',calculator.five);
document.querySelector('#six').addEventListener('click',calculator.six);
document.querySelector('#seven').addEventListener('click',calculator.seven);
document.querySelector('#eight').addEventListener('click',calculator.eight);
document.querySelector('#nine').addEventListener('click',calculator.nine);
document.querySelector('#times').addEventListener('click',calculator.times);
document.querySelector('#subtract').addEventListener('click',calculator.subtract);
document.querySelector('.zero').addEventListener('click',);
document.querySelector('.zero').addEventListener('click',);
;

