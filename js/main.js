// OOP 
class CrearCalculadora {
    constructor() {
        this.numActual = "0"
        this.operacion
        this.primerNum
    }
    //pantalla igual a resultado
    mostrarActual() {
        pantalla.innerText = this.numActual
    }
    // Actualizar numActual
    botonActual(num) {
        if (this.numActual.length < 15) {
            if (num == ".") {
                if (!this.numActual.includes(".")) {
                    this.numActual = this.numActual + num
                }
            } else if (this.numActual == 0) {
                this.numActual = num.toString()
            } else {
                this.numActual = this.numActual + num
            }
        }
        this.mostrarActual()
    }
    //Volver a cero
    reset() {
        this.numActual = "0"
        this.mostrarActual()
    }
    simboloOp(simbolo) {
        if (this.operacion) {
        this.operacion = simbolo
        } else {
        this.operacion = simbolo
        this.primerNum = this.numActual
        this.numActual = "0"
        }
    }
    igual () {
        switch(this.operacion){
            case "+":
                this.numActual = Number(this.primerNum) + Number(this.numActual)
                break;
            case "-":
                this.numActual = Number(this.primerNum) - Number(this.numActual)
                break;
            case "*":
                this.numActual = Number(this.primerNum) * Number(this.numActual)
                break;
            case "/":
                this.numActual = Number(this.primerNum) / Number(this.numActual)
                break;
            } 
            this.mostrarActual()
            this.primerNum = this.numActual
            this.operacion = ''
        }
}
// ShortCuts
function shortcuts() {
let uno = document.querySelector('#uno')
let dos = document.querySelector('#dos')
let tres = document.querySelector('#tres')
let cuatro = document.querySelector('#cuatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let siete = document.querySelector('#siete')
let ocho = document.querySelector('#ocho')
let nueve = document.querySelector('#nueve')
let cero = document.querySelector('#cero')
let coma = document.querySelector('#coma')
let reset = document.querySelector("#reset")
let pantalla = document.querySelector('#pantalla')
let igual = document.querySelector('#igual')
let sumar = document.querySelector('#sumar')
let menos = document.querySelector('#menos')
let multiplicar = document.querySelector('#multiplicar')
let dividir = document.querySelector('#dividir')
}

//   EVENT LISTENERS  
function eventListners() {
    
    reset.addEventListener("click", (e)=>{
        e.stopPropagation()
      calc.reset()
})
    
uno.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(1)
})
dos.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(2)
})
tres.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(3)
})
cuatro.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(4)
})
cinco.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(5)
})
seis.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(6)
})
siete.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(7)
})
ocho.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(8)
})
nueve.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(9)
})
cero.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(0)
})
coma.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.botonActual(".")
})
igual.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.igual()
})
sumar.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.simboloOp("+")
})
menos.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.simboloOp("-")
})
multiplicar.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.simboloOp("*")
})
dividir.addEventListener("click", (e)=>{
    e.stopPropagation();
    calc.simboloOp("/")
})
}
// Start
shortcuts()
eventListners()
let calc = new CrearCalculadora()
calc.mostrarActual()
