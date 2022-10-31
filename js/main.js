
// OOP 
let calc = {
    numActual: 0,
    //pantalla igual a resultado
    mostrarActual: function() {
        document.querySelector('#pantalla').innerText = this.numActual
    },
    // Actualizar numActual
    botonActual: function(numero, boton) {
        boton.classList.add("clicked")
        this.numActual = numero.toString()
        this.mostrarActual()
    },
    sumar: function() {
        
    },
    restar: function() {
        
    },
    multiplicar: function() {
        
    },
    dividir: function() {
        
    },
}

//   EVENT LISTENERS  

//document.querySelector('#igual').addEventListener('click', calc.mostrarResultado())
document.querySelector('#uno').addEventListener('click', calc.botonActual(1, document.querySelector('#uno')))
document.querySelector('#dos').addEventListener('click', calc.botonActual(2, document.querySelector('#dos')))
document.querySelector('#tres').addEventListener('click', calc.botonActual(3, document.querySelector('#tres')))
document.querySelector('#cuatro').addEventListener('click', calc.botonActual(4, document.querySelector('#cuatro')))
document.querySelector('#cinco').addEventListener('click', calc.botonActual(5, document.querySelector('#cinco')))
document.querySelector('#seis').addEventListener('click', calc.botonActual(6, document.querySelector('#seis')))
document.querySelector('#siete').addEventListener('click', calc.botonActual(7, document.querySelector('#siete')))
document.querySelector('#ocho').addEventListener('click', calc.botonActual(8, document.querySelector('#ocho')))
document.querySelector('#nueve').addEventListener('click', calc.botonActual(9, document.querySelector('#nueve')))
document.querySelector('#cero').addEventListener('click', calc.botonActual(0, document.querySelector('#cero')))
document.querySelector('#coma').addEventListener('click', calc.botonActual(",", document.querySelector('#coma')))
document.querySelector('#sumar').addEventListener('click', calc.sumar())
document.querySelector('#menos').addEventListener('click', calc.restar())
document.querySelector('#multiplicar').addEventListener('click', calc.multiplicar())
document.querySelector('#dividir').addEventListener('click', calc.dividir())
