let calc = {
    numActual: 0,
    total: 0,
    //pantalla igual a resultado
    mostrarResultado: function() {
       document.querySelector('#pantalla').innerText = this.numActual
    },


}


                    //   EVENT LISTENERS   //

document.querySelector('#igual').addEventListener('click', calc.mostrarResultado())
document.querySelector('#uno').addEventListener('click', calc.mostrarResultado())
document.querySelector('#dos').addEventListener('click', calc.mostrarResultado())
document.querySelector('#tres').addEventListener('click', calc.mostrarResultado())
document.querySelector('#cuatro').addEventListener('click', calc.mostrarResultado())
document.querySelector('#cinco').addEventListener('click', calc.mostrarResultado())
document.querySelector('#seis').addEventListener('click', calc.mostrarResultado())
document.querySelector('#siete').addEventListener('click', calc.mostrarResultado())
document.querySelector('#ocho').addEventListener('click', calc.mostrarResultado())
document.querySelector('#nueve').addEventListener('click', calc.mostrarResultado())
document.querySelector('#cero').addEventListener('click', calc.mostrarResultado())
document.querySelector('#sumar').addEventListener('click', calc.mostrarResultado())
document.querySelector('#menos').addEventListener('click', calc.mostrarResultado())
document.querySelector('#multiplicar').addEventListener('click', calc.mostrarResultado())
document.querySelector('#dividir').addEventListener('click', calc.mostrarResultado())