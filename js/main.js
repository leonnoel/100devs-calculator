
    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.btn');
    let resetBtn = document.querySelector('.btn-reset');
    let equal = document.querySelector('.equal-sign');


    buttons.forEach(button => {
       
        button.addEventListener('click', function(e){
            value = e.target.value;
            display.value += value;
            
            if(display.value == ''){
                display.value += value;
            }
            else if(display.value == answer){
                display.value = '';
                display.value += value;
            }
            
        })
        
    })

    equal.addEventListener('click', function(e) {
        if(display.value == ''){
            display.value = '';
        }
        else {
            answer = eval(display.value);
            display.value = answer
        }
        
    } )

    resetBtn.addEventListener('click', function(e){
        display.value = '';
    })
