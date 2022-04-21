
const keys = document.querySelector('.calculator-buttons')
keys.addEventListener('click', event => {
  const {target} = event
  const {value} = target
  if(!target.matches('button')){
    return;
  } else{
    calculator.parseInput(value)
    //console.log(value);
  }
})

const calculator = {

  displayText: '0',
  prevTotal: null,

  parseInput(value) {
    //have any of the special buttons been clicked?
    switch (value){
      case '=': 
      this.calcAnswer(this.displayText)
        break;
      case 'AC': 
      this.clearAll()
      break;
      case '.': 
        if(this.displayText == '0'){
          this.addText('0.')
        } else {
          this.addText(value)
        }
        break;
      default:
        this.addText(value)
        break;
    }
  },

    addText(value){
      if(this.displayText === '0'){
        this.displayText = ''
      } else if(this.prevTotal !== null){
        this.displayText = this.prevTotal
        this.prevTotal = null
      }
      if(isNaN(+(value)) && isNaN(+(this.displayText))){
        if(isNaN(this.displayText.slice(-1))){
          return;
        }
      }

      // if(this.displayText.slice(-1) === '/'){
      // }

      this.displayText += value
      this.outputText(this.displayText)
    },

    outputText(text){
      document.querySelector('.calculator-screen').value = text
      
    },

    calcAnswer(equation){
      let result = Function("return " + equation)()
      this.outputText(result)
      this.displayText = result
    },

    clearAll(){
      this.displayText = '0'
      this.prevTotal = null
      this.outputText(this.displayText)

    }
  }
