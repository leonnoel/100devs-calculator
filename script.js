let answer = '', temp = 0, op = '';

document.querySelectorAll('button').forEach(b =>{
    b.addEventListener('click',() => {
        const value = b.innerText
        if(!isNaN(value) || value == '.'){
            answer = document.querySelector('span').innerText + value
            document.querySelector('span').innerText = answer
        }
        else if(value == '='){
            answer = calculate(temp,Number(answer),op)
            document.querySelector('span').innerText = answer
            temp = answer
        }
        else{
            op = value
            document.querySelector('span').innerText = ''  
            if(temp === 0 || temp === answer){
                temp = Number(answer)
            } 
            else{
                temp = calculate(temp,Number(answer),op)    
            }
        }
    })
})

function calculate(a,b,s){
    let res=''
    switch(s){
        case '+': res += a + b; break;
        case '-': res += a - b; break;
        case '/': res += a / b; break; 
        case 'X': res += a * b; break;
    }
    return res.includes('.') ? res.substring(0,10) : res
}