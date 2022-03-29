const calculator = {
    displayValue: document.querySelector('.screen'),
    buttons: Array.from(document.getElementsByTagName('button')),
    calculate: function(){
        const regex = /x/g;
        let answer = eval(calculator.displayValue.innerText.replace(regex,'*'));
        calculator.displayValue.innerText = answer;
    },
    error: function(){
        calculator.displayValue.innerText = "Error"
    },
    update: function(e){
        calculator.displayValue.innerText += e.target.value;
    }
}

calculator.buttons.map( button => {
    button.addEventListener('click',(e)=>{
        if (e.target.innerText === '='){
            try{
                calculator.calculate();
            } catch {
                calculator.error();
            }
        } else {
            calculator.update(e);
        }
    })
})