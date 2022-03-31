function Display(){
    this.displayNode = document.createElement('div')
    this.displayNode.id = 'display'
}

function Button(symbol){
    this.buttonNode = document.createElement('button')
    this.buttonNode.innerText = symbol
    this.buttonNode.className = 'btn'
}

function Calculator(){
    this.container = document.getElementById('calc')
    this.display = new Display()
    this.displayNode = this.display.displayNode
    this.erasedLast = false
    this.firstCalculation = true
    this.changingX = true
    this.x = ''
    this.operator = null
    this.y = ''

    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b 
    }

    this.buttonSymbols = [
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','+',
        '0','.','=','-'  
    ]

    this.getDisplayData = function(){
        return this.displayNode.innerText
    }

    this.updateDisplay = function(val){
        if(!this.erasedLast){
            this.clearDisplay()
            this.erasedLast = true
        }
        this.displayNode.innerText += val
    }

    this.clearDisplay = function(){
        this.displayNode.innerText = ''
    }

    this.assign = function(){
        this.changingX
        ? this.x = Number(this.getDisplayData())
        : this.y = Number(this.getDisplayData())
    }

    this.equals = function(){
        if(this.y){
            this.clearDisplay()
            this.calculate()   
        }
    }

    this.calculate = function(){
        const operation = this.operations[this.operator]
        const result = operation(this.x, this.y)
        this.x = result
        this.y = ''
        this.updateDisplay(result)
    }

    this.makeOperation = function(symbol){
        this.clearDisplay()
        this.changingX = false
        if(this.firstCalculation){
            this.firstCalculation = false
        }else{
            if(this.y){
              this.calculate()
            }
            this.erasedLast = false
        } 
        this.operator = symbol  
    }

    this.getButtonFunction = function(symbol){
        if(symbol in this.operations){
            return () => this.makeOperation(symbol)
        }else if(symbol === '='){
            return () => {
                this.equals()
            }
        }else{
            return () => {
                this.updateDisplay(symbol)
                this.assign()
            }
        }
    }
    /* ==========  NO NEED TO CHANGE NOW ============================*/
    
    this.renderDisplay = function(){
        let displayNode = this.display.displayNode
        this.container.appendChild(displayNode)
    }

    this.renderButtons = function(){
        let buttonContainer = document.getElementById('btn__container')
        this.buttonSymbols.forEach(symbol => {
            let buttonNode = new Button(symbol).buttonNode
            buttonNode.addEventListener(
                'click', 
                this.getButtonFunction.call(this, symbol)
            )
            buttonContainer.appendChild(buttonNode)
        })
    }

    this.render = function(){
        this.renderDisplay()
        this.renderButtons()
    }
}

new Calculator().render()

