
function Calculator() {
    let result;
    this.clear = function(){
        document.querySelector(".result").innerText = " "
    }   
    this.number = function(num){
        document.querySelector(".result").innerText += num
    }
    this.equals = function(){
        // document.querySelector(".result").innerText = 0
        document.querySelector(".result").innerText = evaluate()
    }
    let evaluate = function(){
        result = eval(document.querySelector(".result").innerText)
        result = Math.round(result*1000)/1000
        return result
    }
    this.checkinput = function(){
        let input = eval(this)
        if(input == "=" ){
            calc.equals()
        }else if (input == "AC"){
            calc.clear()
        }else{
            if(input == "x"){
                calc.number("*")
            }else{
                calc.number(String(input))
            }
        }
    }

}

let calc = new Calculator()

document.querySelectorAll("button").forEach(item=> {
    let content = item.innerText
    item.className=content
})

let buttons = document.querySelectorAll("button")
for(let i =0;i<buttons.length;i++){
    let content = buttons[i].innerText
    buttons[i].param=content
    buttons[i].addEventListener('click', calc.checkinput.bind(buttons[i].innerText,content));
}


