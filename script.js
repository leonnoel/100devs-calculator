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
    this.calcString = ''
    this.isCalculating = false
    this.erasedLast = false

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

    this.cleanDisplay = function(){
        this.displayNode.innerText = ''
    }

    this.updateDisplay = function(val){
        if(val){
            this.calcString += val
            this.displayNode.innerText += val
        }else{
            this.displayNode.innerText = this.calcString
        }   
    }

    this.printValue = function(val){
        return () => {
            if(this.isCalculating && !this.erasedLast){
                this.cleanDisplay()
                this.erasedLast = true
            }
            this.updateDisplay(val)    
        }
    }

    this.chainCalculate = function(operatorSymbol){
        return () => {
            this.cleanDisplay()
            if(this.isCalculating){
                this.erasedLast = false

                const [
                    leftOperand, 
                    operator, 
                    rightOperand
                ] = this.calcString.split(' ')

                const operation = this.operations[operator]
                const result = operation(Number(leftOperand), Number(rightOperand))
                this.calcString = result
                this.updateDisplay()
            }else{
                this.isCalculating = true
            }
            this.calcString += ` ${operatorSymbol} `
        }
    }

    this.equals = function(){
        return () => {
            this.isCalculating = false
            this.erasedLast = false
            const [leftOperand, operator, rightOperand] = this.calcString.split(' ')
            console.log(this.calcString)
            const operation = this.operations[operator]
            const result = operation(Number(leftOperand), Number(rightOperand))
            this.calcString = result
            this.updateDisplay()
        }
    }

    this.getButtonFunction = function(symbol){
        if(symbol in this.operations){
            return this.chainCalculate(symbol)
        }else if(symbol === '='){
            return this.equals()
        }else{
            return this.printValue(symbol)
        }
    }
    
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

