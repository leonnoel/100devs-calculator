let display = document.querySelector('h1').innerText;

let Calculator = {

    textToDisplay: ' ',
    firstVal: 0,
    secondVal: 0,
    finalVal: 0,
    mult: false,
    div: false,
    add: false,
    sub: false,

    zero(){
        this.textToDisplay += '0'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    one(){
        this.textToDisplay += '1'

        document.querySelector('h1').innerText = this.textToDisplay
    },
    two(){
        this.textToDisplay += '2'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    three(){
        this.textToDisplay += '3'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    four(){
        this.textToDisplay += '4'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    five(){
        this.textToDisplay += '5'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    six(){
        this.textToDisplay += '6'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    seven(){
        this.textToDisplay += '7'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    eight(){
        this.textToDisplay += '8'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    nine(){
        this.textToDisplay += '9'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    decimal(){
        this.textToDisplay += '.'
        document.querySelector('h1').innerText = this.textToDisplay
    },
    many(){
        this.firstVal = parseFloat(this.textToDisplay)
        this.textToDisplay = ''
        document.querySelector('h1').innerText = this.textToDisplay
    },
    divide(){
        return this.firstVal/ this.secondVal
    },
    multiply(){
        return this.firstVal * this.secondVal
        
    },
    addition(){
        return this.firstVal + this.secondVal
        

    },
    subtract(){

        return this.firstVal - this.secondVal
    },
    equals(){
        this.secondVal = parseFloat(this.textToDisplay)
        if(this.mult){
            this.textToDisplay = this.multiply()
        }else if(this.div){
            this.textToDisplay = this.divide()
        }else if(this.add){
            this.textToDisplay = this.addition()
        }else if(this.sub){
            this.textToDisplay = this.subtract()
        }

        document.querySelector('h1').innerText = this.textToDisplay;
        this.firstVal = this.secondVal
        this.secondVal = 0

    }
}

document.querySelector('#seven').addEventListener('click', function(){
    Calculator.seven()
})
document.querySelector('#eight').addEventListener('click', function(){
    Calculator.eight()
})
document.querySelector('#nine').addEventListener('click', function(){
    Calculator.nine()
})
document.querySelector('#four').addEventListener('click', function(){
    Calculator.four()
})
document.querySelector('#five').addEventListener('click', function(){
    Calculator.five()
})
document.querySelector('#six').addEventListener('click', function(){
    Calculator.six()
})
document.querySelector('#one').addEventListener('click', function(){
    Calculator.one()
})
document.querySelector('#two').addEventListener('click', function(){
    Calculator.two()
})
document.querySelector('#three').addEventListener('click', function(){
    Calculator.three()
})
document.querySelector('#zero').addEventListener('click', function(){
    Calculator.zero()
})
document.querySelector('#decimal').addEventListener('click', function(){
    Calculator.decimal()
})

document.querySelector('#equals').addEventListener('click', function(){
    
    Calculator.equals()
    Calculator.sub = false
    Calculator.div = false
    Calculator.add = false
    Calculator.mult = false
})
document.querySelector('#subtract').addEventListener('click', function(){
    Calculator.many()
    Calculator.sub = true
    Calculator.div = false
    Calculator.add = false
    Calculator.mult = false
    
    
})
document.querySelector('#multiply').addEventListener('click', function(){
    Calculator.many()
    Calculator.mult = true
    Calculator.div = false
    Calculator.add = false
    Calculator.sub = false
 
})
document.querySelector('#divide').addEventListener('click', function(){
    Calculator.many()
    Calculator.div = true
    Calculator.add = false
    Calculator.mult = false
    Calculator.sub = false
   
  
})
document.querySelector('#add').addEventListener('click', function(){
    Calculator.many()
    Calculator.add = true
    Calculator.mult = false
    Calculator.sub = false
    Calculator.div = false 

    
})


