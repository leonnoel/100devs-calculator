let calculatorBtns = document.getElementsByClassName("btn")
for(let i = 0; i < calculatorBtns.length; i++){
    calculatorBtns[i].addEventListener("click", function(){
        pressBtn(this.innerHTML)
    })
}

function Calculator(){
    this.methods = {
        '/': (a,b) => a/b,
        '*': (a,b) => a*b,
        '-': (a,b) => a-b,
        '+': (a,b) => a+b
    }
    this.calculate = function(str){
        let split = str.split(' ')
        a = +split[0]
        b = +split[2]
        op = split[1]
        return this.methods[op](a,b)
    }
}

let calc = new Calculator();

function pressBtn(str){
    let nums = ['0','1','2','3','4','5','6','7','8','9','0','.']
    let ops = ['/', '*', '+', '-']
    let answer =  document.getElementById("answer")
    let prevEntry = document.getElementById("prevEntry")

    if(nums.includes(str)){ //numbers and decimals
        answer.innerHTML += str
    }else if(ops.includes(str)){ //operations
        if(prevEntry.innerHTML.trim().split(' ').length === 2){ //pressing an additional operator will calculate and add the operator
            if(+answer.innerHTML !== 0 || prevEntry.innerHTML.split(' ')[1] !== '/'){
                prevEntry.innerHTML = calc.calculate(prevEntry.innerHTML + ' ' + answer.innerHTML) + ' ' + str
            }
        }else{
            answer.innerHTML += ' ' + str
            prevEntry.innerHTML = answer.innerHTML
        }
        answer.innerHTML = ''
    }else{ //equals
        if(prevEntry.innerHTML.trim().split(' ').length < 2 || calc.calculate(prevEntry.innerHTML) === +answer.innerHTML){ //clear calculator after pressing equals twice
            answer.innerHTML = prevEntry.innerHTML = ''
        }else if(+answer.innerHTML !== 0 || prevEntry.innerHTML.split(' ')[1] !== '/'){ //calculate
                prevEntry.innerHTML += ' ' + answer.innerHTML
                answer.innerHTML = calc.calculate(prevEntry.innerHTML)

        } else { //clear calculator on other corner cases
            answer.innerHTML = prevEntry.innerHTML = ''
        }

    }
}



