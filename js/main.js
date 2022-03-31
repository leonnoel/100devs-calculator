const pantalla = document.querySelector('#result')
let calculator = {
operation : '',
memory : '',
memory2 : '',
press(num) {
    if (this.operation == '=') {    
        this.operation = ''
        this.memory = ''
        this.memory += num 
        pantalla.innerText = this.memory
    } else {
        this.memory += num 
        pantalla.innerText = this.memory
    }

},
multiply(){
    this.memory2 = this.memory
    this.memory = ''
    this.operation = 'multiply'
},
division(){
    this.memory2 = this.memory
    this.memory = ''
    this.operation = 'division'
},
plus(){
    this.memory2 = this.memory
    this.memory = ''
    this.operation = 'plus'
},
minus(){
    this.memory2 = this.memory
    this.memory = ''
    this.operation = 'minus'
},
equals (){
    if (this.operation == 'multiply') {
        this.memory = Number(this.memory) * Number(this.memory2)
        pantalla.innerText = this.memory
        this.operation = '='
    } else if (this.operation == 'division') {
        this.memory = Number(this.memory2) / Number(this.memory)
        pantalla.innerText = this.memory
        this.operation = '='
    } else if (this.operation == 'minus') {
        this.memory = Number(this.memory2) - Number(this.memory)
        pantalla.innerText = this.memory
        this.operation = '='
    } else if (this.operation == 'plus') {
        this.memory = Number(this.memory2) + Number(this.memory)
        pantalla.innerText = this.memory
        this.operation = '='
    } else {

        pantalla.innerText = this.memory
    }
}
}
document.querySelector('#n1').addEventListener('click',() => calculator.press(1))
document.querySelector('#n2').addEventListener('click',() => calculator.press(2))
document.querySelector('#n3').addEventListener('click',() => calculator.press(3))
document.querySelector('#n4').addEventListener('click',() => calculator.press(4))
document.querySelector('#n5').addEventListener('click',() => calculator.press(5))
document.querySelector('#n6').addEventListener('click',() => calculator.press(6))
document.querySelector('#n7').addEventListener('click',() => calculator.press(7))
document.querySelector('#n8').addEventListener('click',() => calculator.press(8))
document.querySelector('#n9').addEventListener('click',() => calculator.press(9))
document.querySelector('#n0').addEventListener('click',() => calculator.press(0))
document.querySelector('#symbdot').addEventListener('click',() => calculator.press('.'))
document.querySelector('#symbmultiply').addEventListener('click',() => calculator.multiply())
document.querySelector('#symbequal').addEventListener('click',() => calculator.equals())
document.querySelector('#symbdivision').addEventListener('click',() => calculator.division())
document.querySelector('#symbminus').addEventListener('click',() => calculator.minus())
document.querySelector('#symbplus').addEventListener('click',() => calculator.plus())


