class Calculator {

    constructor() {
      this.result = 0;
      this.numberButtons = document.querySelectorAll('.number')
      this.operatorButtons = document.querySelectorAll('.operator')
      this.display = document.querySelector('#display')
      this.operatorValue = undefined
      this.botonSuma = document.querySelector('#suma')
      this.botonPunto = document.querySelector('#punto')
      this.botonIgual = document.querySelector('#igual')
    }

    add(num) {
        this.result += num
        return this.result
    }

    substract(num) {
        this.result -= num
        return this.result
    } 

    multiply(num) {
        this.result *= num
        return this.result
    } 

    divide(num) {
        if (num === 0) {
            throw new Error('Division by zero')
        }
        else {
            this.result /= num
            return this.result
        }
    }

    getResult() {
        return this.result
    }

    
    displayFct() {
        this.numberButtons.forEach(number => {
            number.addEventListener('click', () => {
              this.display.value = this.display.value + number.value;
            });
          })

          this.botonPunto.addEventListener('click', () => {
            if (!this.display.value.includes('.')){
                this.display.value = this.display.value + this.botonPunto.value;
            }
        })
    }


    operationFct() {

        // Primera instancia, se apreta el operador y guardamos ese numero en result y el operador en operatorValue
        this.operatorButtons.forEach(operator => {
            operator.addEventListener('click', () => {
                this.result = Number(this.display.value)
                this.operatorValue = operator.value
                this.display.value = ''
                console.log(`Result ${this.result}`)
                console.log(`Operator ${this.operatorValue}`)
            })
        })

        // Segunda instancia, el usuario tipea el segundo numero y presiona igual y eso da el resultado
        this.botonIgual.addEventListener('click', () => {
            let num = Number(this.display.value)
            if (this.operatorValue === '+') {
                this.add(num)
                if (String(this.result).includes('.')) {
                    this.display.value = this.result.toFixed(8)
                }
                else {
                    this.display.value = this.result
                }
                   
            }
            else if (this.operatorValue === '-') {
                this.substract(num)
                if (String(this.result).includes('.')) {
                    this.display.value = this.result.toFixed(8)
                }
                else {
                    this.display.value = this.result
                }
            }
            else if (this.operatorValue === 'x') {
                this.multiply(num)
                if (String(this.result).includes('.')) {
                    this.display.value = this.result.toFixed(8)
                }
                else {
                    this.display.value = this.result
                }
            }
            else if (this.operatorValue === '/') {
                this.divide(num)
                if (String(this.result).includes('.')) {
                    this.display.value = this.result.toFixed(8)
                }
                else {
                    this.display.value = this.result
                }
            }
               
        } )
    }   

}


// Inicializo la calcu

let calc = new Calculator()
calc.displayFct()
calc.operationFct()
