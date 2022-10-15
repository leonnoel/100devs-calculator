const add= (a,b) => a+b ;
const substract = (a,b)=> add(a, -b) ;
const multiply = (a,b)=> a*b;
const divide = (a,b) =>{
    return b==0 ? 'Mistakes were made' : a/b;
};
const operate = (operator, a, b) => operator(a,b);

const operands = {
    '+':add,
    '-':substract,
    '/':divide,
    '*':multiply,
};

function initialize(){
    const symbols = [...'789/456*123-0.=+'.split(''), 'AC'];
    const container = document.querySelector('.buttons');
    for( i of symbols){
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.setAttribute('type', 'button')
        btn.id = 'btn-'+i;
        container.append(btn);
        
    };
};





initialize();

let a , b;
let operand;

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
const AC = document.querySelector('#btn-AC');
const equalBtn = document.querySelector('#btn-\\=');
let write = false;
let state = true;
function numberEvents(){
    AC.addEventListener('click', () => {
        screen.innerText='';
        [a , b, operand] = [undefined , undefined, undefined];
    });
    buttons.forEach(btn=>{
        //console.log(btn.id.slice(-1));
        //console.log('0123456789.'.includes(btn.id.slice(-1)));
        if( '0123456789.'.includes(btn.id.slice(-1))){
            btn.addEventListener('click',(e)=>{
                state = true;
                if  (write){
                    screen.innerText+= updateDisplay(e.target.innerText);
                }else {
                    screen.innerText = updateDisplay(e.target.innerText);
                    write = true;
                }
                if(!operand){
                    a = undefined;
                }
            })
        };
    });
};
numberEvents();

buttons.forEach(btn=>{

    if('+-/*'.includes(btn.id.slice(-1))){
        btn.addEventListener('click',(e)=>{  
            if(!a){
                operand = operands[e.target.innerText];
                a = parseFloat(screen.innerText);
                write = false;
            }else{
                if(state && operand){
                    b = parseFloat(screen.innerText);
                    let result = operate(operand, a, b);
                    screen.innerText = updateDisplay(result);
                    operand = operands[e.target.innerText];
                    a = result;
                    b= 0;
                    write = false;
                    state = false;
                }else{
                    operand = operands[e.target.innerText];
                    write = false;                    
                }                
            }        
        });
    };
});

equalBtn.addEventListener('click', (e)=>{
    if(a && operand){
        b = parseFloat(screen.innerText);
        let result = operate(operand, a, b);
        screen.innerText = updateDisplay(result);
        a = result;
        b = undefined;
        operand = undefined;
        state = true;
        write = false;
    }
});

const updateDisplay = (result) =>{
    if(result.toString().includes('.')){
        const index = result.toString().indexOf('.');
        return result.toString().slice(0, index + 8);
    }else{
        return result;
    }
}
