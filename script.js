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


    //Object containing the possible operations in the calculator (Totally extendable!!)
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b
    }

    this.buttonSymbols = [
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','+',
        '0','.','=','-', '%'
    ]

    this.getDisplayData = function(){
        return this.displayNode.innerText
    }

    this.updateDisplay = function(val){
        if(!this.erasedLast){
            // Clears display when operations are chained
            this.clearDisplay()
            this.erasedLast = true
        }
        this.displayNode.innerText += val
    }

    this.clearDisplay = function(){
        this.displayNode.innerText = ''
    }

    // Assign the value in display to one of the operands (x or y)
    this.assign = function(){
        this.changingX
        ? this.x = Number(this.getDisplayData())
        : this.y = Number(this.getDisplayData())
    }

    this.updateOperands = function(symbol){
        return () => {
            this.updateDisplay(symbol)
            this.assign()
        }
    }

    //Shows the result of one operation without chaining
    this.equals = function(){
        //This conditional prevents the function from running after more than one click on "="
        return () => {
            if(this.y){
                this.clearDisplay()
                this.calculate()   
            }
        }
    }

    this.calculate = function(){
        //Gets the operation function from the operator object
        const operation = this.operations[this.operator]
        //Performs the mathematical operation
        const result = operation(this.x, this.y)
        this.x = result
        this.y = ''
        this.updateDisplay(result)
    }

    this.makeOperation = function(symbol){
        return () => {
            this.clearDisplay()
            // When an operator is clicked, you stop changing X and start changing Y
            this.changingX = false
            //If it's the first calculation being made before the chaining, calculate will not run until Y is defined
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
    }

    // Used to add the correct event listener (aka smurf) to each button in the calculator
    this.getButtonFunction = function(symbol){
        if(symbol in this.operations){
            return this.makeOperation(symbol)
        }else if(symbol === '='){
            return this.equals()
        }else{
            return this.updateOperands(symbol)
        }
    }
    /* ==========  NO NEED TO CHANGE NOW ============================*/

    //Creates the numbers display screen
    this.renderDisplay = function(){
        let displayNode = this.display.displayNode
        this.container.appendChild(displayNode)
    }

    //Creates all the calculations / numbers buttons
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

