let Calc = {
    screen: {
        textField: '',
        waiting: '',
        tally: '',
        operand: undefined,
        calculated: 0,
    }, 
    addNum: (event) => {
        let value = event.target.innerText
        
        // to prevent double decimals
        if ( value === '.' ) {
            Calc.screen.textField.indexOf(value) === -1 ? Calc.updateScreen(value) : false
        }
        // display new results 
        else { Calc.updateScreen(value) }
    },

    updateScreen: (value) => {
        console.log(Calc.screen.textField)
        
        // anymore than 10 numbers, and the screen deforms
        Calc.screen.textField.length < 10 ? Calc.screen.textField += `${value}` : false
        
        // display new results
        document.querySelector('#screen').innerHTML = Calc.screen.textField
    },

    setOperand: (event) => {

        let operand = event.target.innerText
        console.log('Calc.screen.textField[-1]', Calc.screen.textField)

        // don't allow an opperand to be the first entry
        if ( Calc.screen.textField.length === 0 ) {
            if (operand === 'x' || operand === '/') {
                return console.log(false)
            }
        } else if( Calc.screen.textField.slice(-1) === '*' || Calc.screen.textField.slice(-1) === '/' ) {
            return console.log(false)
        }

        // mathJS cannot porcess 'x' so change to '*'
        operand = operand === 'x' ? '*' : operand

        // add the operand to the screen
        Calc.screen.textField = Calc.screen.textField + operand
        document.querySelector('#screen').innerHTML = Calc.screen.textField

        Calc.screen.operand = operand
    },
    doCalc: () => {
        // plug string into MathJS
        let calc = math.eval(Calc.screen.textField);
        // anymore than 10 numbers, and the screen deforms
        let setN = 10
        if( calc.length < setN ) {}
        else {
            calc = calc.toFixed(3)
        } 

        // push results to screen and resent to a blank textField
        document.querySelector('#screen').innerHTML = calc
        Calc.screen.textField = ''
    },
    reset: () => {
        Calc.screen.textField = ''
        document.querySelector('#screen').innerHTML = ''
    }
}
// -------------- NUMBERS --------------------
document.querySelector('#zero').addEventListener('click', Calc.addNum)
document.querySelector('#one').addEventListener('click', Calc.addNum)
document.querySelector('#two').addEventListener('click', Calc.addNum)
document.querySelector('#three').addEventListener('click', Calc.addNum)
document.querySelector('#four').addEventListener('click', Calc.addNum)
document.querySelector('#five').addEventListener('click', Calc.addNum)
document.querySelector('#six').addEventListener('click', Calc.addNum)
document.querySelector('#seven').addEventListener('click', Calc.addNum)
document.querySelector('#eight').addEventListener('click', Calc.addNum)
document.querySelector('#nine').addEventListener('click', Calc.addNum)
document.querySelector('#decimal').addEventListener('click', Calc.addNum)
// -------------- OPERANDS --------------------
document.querySelector('#minus').addEventListener('click', Calc.setOperand)
document.querySelector('#plus').addEventListener('click', Calc.setOperand)
document.querySelector('#times').addEventListener('click', Calc.setOperand)
document.querySelector('#divide').addEventListener('click', Calc.setOperand)
document.querySelector('#equals').addEventListener('click', Calc.doCalc)
// --------------   RESET  --------------------
document.querySelector('#reset').addEventListener('click', Calc.reset)