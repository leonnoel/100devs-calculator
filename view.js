// Inputs from DOM
// ***************

// Numbers & digits
document.querySelector('#num1').addEventListener('click', () => getNumber('1'))
document.querySelector('#num2').addEventListener('click', () => getNumber('2'))
document.querySelector('#num3').addEventListener('click', () => getNumber('3'))
document.querySelector('#num4').addEventListener('click', () => getNumber('4'))
document.querySelector('#num5').addEventListener('click', () => getNumber('5'))
document.querySelector('#num6').addEventListener('click', () => getNumber('6'))
document.querySelector('#num7').addEventListener('click', () => getNumber('7'))
document.querySelector('#num8').addEventListener('click', () => getNumber('8'))
document.querySelector('#num9').addEventListener('click', () => getNumber('9'))
document.querySelector('#num0').addEventListener('click', () => getNumber('0'))
document.querySelector('#numDot').addEventListener('click', () => getNumber('.'))

// Operations
document.querySelector('#numPlus').addEventListener('click', () => addNumber())
document.querySelector('#numMinus').addEventListener('click', () => subtractNumber())
document.querySelector('#numMultiply').addEventListener('click', () => multiplyNumber())
document.querySelector('#numDivide').addEventListener('click', () => divideNumber())
document.querySelector('#numEqual').addEventListener('click', () => getResult())
document.querySelector('#numDel').addEventListener('click', () => deleteNumber())
document.querySelector('#numAc').addEventListener('click', () => deleteAll())
