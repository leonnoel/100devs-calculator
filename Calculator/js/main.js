function Calculator() {
  this.buffer = ''
  this.operator = ''
  this.letsoperate =  function(h){
    if (h==='+'){
      this.operator = '+'
    } else if (h==='-'){
      this.operator = '-'
    } else if (h==='x'){
      this.operator = 'x'
    } else if (h==='/'){
      this.operator = '/'
    }
    if (h==='='){
      const ops = document.querySelector("#res").innerText.split(this.operator)
      if (this.operator==='+'){
        document.querySelector("#res").innerText = Number(ops[0])+Number(ops[1])
      } else if(this.operator==='-'){
        document.querySelector("#res").innerText = Number(ops[0])-Number(ops[1])
      } else if(this.operator==='x'){
        document.querySelector("#res").innerText = Number(ops[0])*Number(ops[1])
      } else if(this.operator==='/'){
        document.querySelector("#res").innerText = (Number(ops[0])/Number(ops[1])).toFixed(5)
      }
      /*this.buffer=document.querySelector("#res").innerText*/
      this.buffer=''
    } else{
      this.buffer+=h
      document.querySelector("#res").innerText = this.buffer
    }
   }
}

const calcu = new Calculator()
document.querySelectorAll(".num").forEach((x, i) => {
  x.addEventListener('click', function(){calcu.letsoperate(x.innerHTML)})
})


/*V1 Working
let buff = ''
let flag = ''
document.querySelectorAll(".num").forEach((x, i) => {
  x.addEventListener('click', function(){shownum(x.innerHTML)})
})

function shownum(h){
  if (h==='+'){
    flag = '+'
  } else if (h==='-'){
    flag = '-'
  } else if (h==='x'){
    flag = 'x'
  } else if (h==='/'){
    flag = '/'
  }
  if (h==='='){
    const ops = document.querySelector("#res").innerText.split(flag)
    if (flag==='+'){
      document.querySelector("#res").innerText = Number(ops[0])+Number(ops[1])
    } else if(flag==='-'){
      document.querySelector("#res").innerText = Number(ops[0])-Number(ops[1])
    } else if(flag==='x'){
      document.querySelector("#res").innerText = Number(ops[0])*Number(ops[1])
    } else if(flag==='/'){
      document.querySelector("#res").innerText = (Number(ops[0])/Number(ops[1])).toFixed(5)
    }
    //buff=document.querySelector("#res").innerText
    buff=''
  } else{
    buff+=h
    document.querySelector("#res").innerText = buff
  }
}
*/
