
let calculator = {

    num1: 0,
    num2: '',
    calculation: '',
    lastPressResult: false,

    buttons : Array.from(document.querySelectorAll('.screenButtons')),

    makeSmurfs(){
        this.buttons.forEach(element => element.addEventListener('click', (e)=>{
            if (this.lastPressResult){
                document.querySelector('h1').innerText = ''
                calculator.lastPressResult = false

            }
            document.querySelector('h1').innerText += e.target.innerText;


          }))

        document.querySelector('#decimal').addEventListener('click', (e) => {
            if (this.lastPressResult){
                document.querySelector('h1').innerText = ''
                calculator.lastPressResult = false

            }

            if(!document.querySelector('h1').innerText.includes('.')){
                document.querySelector('h1').innerText += e.target.innerText;
            }
        })
    },

    makeMath(){
        document.querySelector('#add').addEventListener('click', this.addition)
        document.querySelector('#multiply').addEventListener('click', this.multiplication)
        document.querySelector('#subtract').addEventListener('click', this.subtraction)
        document.querySelector('#divide').addEventListener('click', this.division)
        document.querySelector('#equal').addEventListener('click', this.results)
        // document.querySelector('#equal').addEventListener('click', () => this.lastPressResult = true)

    },

    addition(){
        // calculator.num1 = Number(document.querySelector('h1').innerText)
        // document.querySelector('h1').innerText = ''
        calculator.calculation = '+'
        calculator.results()
    },
    
    subtraction(){
        calculator.calculation = '-'
        calculator.results()
    },

    multiplication(){
        calculator.calculation = '*'
        calculator.results()
    },

    division(){
        calculator.calculation = '/'
        calculator.results()
    },

    results(){
        calculator.num1 = Number(document.querySelector('h1').innerText)
        document.querySelector('h1').innerText = ''
        if (!calculator.lastPressResult){
            if (calculator.num2 == ''){
                calculator.num2 = Number(calculator.num1)
            }else{
                // this.lastPressResult = true
                if (calculator.calculation == '+'){
                    calculator.num2 = calculator.num2 + calculator.num1
                    document.querySelector('h1').innerText = calculator.num2
                }else if(calculator.calculation == '-'){
                    calculator.num2 = calculator.num2 - calculator.num1
                    document.querySelector('h1').innerText = calculator.num2
                }else if(calculator.calculation == '*'){
                    calculator.num2 = calculator.num2 * calculator.num1
                    document.querySelector('h1').innerText = calculator.num2
                }else if(calculator.calculation == '/'){
                    calculator.num2 = calculator.num2 / calculator.num1
                    if(calculator.num2 === Infinity){
                        document.querySelector('h1').innerText = 'Why are you dividing by 0? do you hate me ?'
                    }else{
                        document.querySelector('h1').innerText = calculator.num2

                    }
                    
                }
            }
            calculator.lastPressResult = true
        }
    }
}


calculator.makeSmurfs()
calculator.makeMath()