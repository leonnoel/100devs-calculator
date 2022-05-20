//defining a class calculator
class Calculator {
  // the constructor will take the element display and the type of the key used previously
  constructor(display, previousKeyType){
    this.display = display
    this.previousKeyType = previousKeyType
  }
// convert the numbers and operators to string
  convertToString(key, numberOnDisplay, condition){
    const keyType = this.getKeyType(key)  
    const keyContent = key.textContent    
    const firstValue = condition.firstValue
    const opsValue = condition.opsValue
    const operator = condition.operator
    let previousKeyType = this.previousKeyType
    previousKeyType = condition.previousKeyType
  
  // getting the value of the of the  buttons
    if (keyType === 'number') { 
      if(numberOnDisplay === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'){
        return keyContent
      }else{
        return numberOnDisplay + keyContent
      }
    }  
  
  // working with decimals ,
    if (keyType === 'decimal') { 
      //if already a decimal dont add another otherwise add a decimal point
      if (!numberOnDisplay.includes('.')) {
        return numberOnDisplay + '.'}
      // handling a decimal point in case of using it without entering any numbers
       if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
      return '0.'}

      return numberOnDisplay }
      // getting the dataset of the operator key
    if (keyType === 'operator') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator

      // calling the calculate function with th previous number, operator and the entered number
      if(firstValue && operator && previousKeyType !==  'operator' && previousKeyType !==  'calculate'){
          return this.calculate(firstValue, operator, numberOnDisplay)
        }else{
          return numberOnDisplay 
        }  
      
      }    
  
    // calling the equals key to display the result of the exxpression
    if (keyType === 'calculate') {      
      if (firstValue) {
        return previousKeyType === 'calculate' ? this.calculate(numberOnDisplay, operator, opsValue) : this.calculate(firstValue, operator, numberOnDisplay)
      } else {
        return numberOnDisplay
      }
    }
  }

 
// doing the operations depending on the pressed operator key
  calculate(first, operator, second){
    const firstNumber = parseFloat(first)
    const secondNumber = parseFloat(second)
    switch (operator){
      case "add":
        return firstNumber + secondNumber
      case "subtract":
        return firstNumber - secondNumber
      case "multiply":
        return firstNumber * secondNumber
      case "divide":
        return firstNumber / secondNumber
      default:
        return
    }
    
  }

  // helper function to get the key type
  getKeyType(key){
    const { action } = key.dataset
    //All buttons without data-action are numbers
    if (!action) {
      return 'number'}
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      return 'operator'}
    // For everything else, return the action
    return action
  }

  internalState(key, calculator, calculatedValue, numberOnDisplay){
    const keyType = this.getKeyType(key)
    calculator.dataset.previousKeyType = keyType
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator 
  
    if (keyType === 'operator') {      
      calculator.dataset.operator = key.dataset.action
      calculator.dataset.firstValue = firstValue && operator && this.previousKeyType !==  'operator' && this.previousKeyType !==  'calculate'? calculatedValue: numberOnDisplay
    }
  }

}
//getting the elements from html
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__buttons')
const display = document.querySelector('.calculator__display')
const previousKeyType = calculator.dataset.previousKeyType
// create a calculator object
const calc = new Calculator(display, previousKeyType)


// event listerners
keys.addEventListener('click', k => {
  if (!k.target.matches('button')) return
  const key = k.target
  const numberOnDisplay = display.textContent
  
  const answerInString = calc.convertToString(key, numberOnDisplay, calculator.dataset) // converting the values to string using the method
  display.textContent = answerInString // the string value is the one to be displayed
  calc.internalState(key, calculator, answerInString, numberOnDisplay)
  
})

