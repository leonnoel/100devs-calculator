function Display(){
    this.displayNode = document.createElement('div')
    this.displayNode.id = 'display'

    this.getNode = function(){
        return this.displayNode
    }
}

function Button(display, symbol){
    this.buttonNode = document.createElement('button')
    this.buttonNode.innerText = symbol
    this.handler = function(){
        display.innerText += symbol
    }
    this.buttonNode.classList = 'btn'

    this.getNode = function(){
        return this.buttonNode
    }
}

function Calculator(){
    this.container = document.getElementById('calc')
    this.display = new Display()
    this.displayNode = this.display.getNode()
    this.calcString = ''
    this.isCalculating = false

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
            if(this.isCalculating) this.cleanDisplay()
            this.updateDisplay(val)
            console.log(this.calcString)
        }
    }

    this.calculate = function(operatorSymbol){
        return () => {
            this.cleanDisplay()
            if(this.isCalculating){
                const [leftOperand, operator, rightOperand] = this.calcString.split(' ')
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

    this.renderDisplay = function(){
        let displayNode = this.display.getNode()
        this.container.appendChild(displayNode)
    }

    this.renderButtons = function(){
        let buttonContainer = document.createElement('div')
        buttonContainer.id = 'button__container'
        this.buttonSymbols.forEach(symbol => {
            let buttonNode = new Button(this.display.getNode(), symbol).getNode()
            buttonNode.addEventListener('click', 
                symbol in this.operations? this.calculate(symbol) : this.printValue(symbol)
            )
            buttonContainer.appendChild(buttonNode)
        })
        this.container.appendChild(buttonContainer)
    }

    this.render = function(){
        this.renderDisplay()
        this.renderButtons()
    }
}

new Calculator().render()

