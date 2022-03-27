function Calculator(){
    this.container = document.getElementById('calc')
    this.display = new Display()
    this.buttonSymbols = [
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','+',
        '0','.','=','-'  
    ]
}

function Display(){
    this.displayNode = document.createElement('div')
    this.displayNode.id = 'display'
}

function Button(display, symbol){
    this.buttonNode = document.createElement('button')
    this.buttonNode.innerText = symbol
    this.handler = function(){
        display.innerText += symbol
    }
    this.buttonNode.classList = 'btn'
    switch(symbol){
        case '=':
            this.buttonNode.addEventListener('click', function(){
                display.innerText = eval(display.innerText)
            })
            break;
        default:
            this.buttonNode.addEventListener('click', this.handler)
    }
    
}

Button.prototype.getNode = function(){
    return this.buttonNode
}

Display.prototype.getNode = function(){
    return this.displayNode
}

Calculator.prototype.render = function(){
    let displayNode = this.display.getNode()
    this.container.appendChild(displayNode)
    let buttonContainer = document.createElement('div')
    buttonContainer.id = 'button__container'
    this.buttonSymbols.forEach(symbol => {
        let buttonNode = new Button(displayNode, symbol).getNode()
        buttonContainer.appendChild(buttonNode)
    })
    this.container.appendChild(buttonContainer)
}

new Calculator().render()

