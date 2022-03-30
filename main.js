// Have an input window, where all values and math operations are going to show up. When the equal sign is pressed, all the math operations that has been made is going to be evaluated and put into a sum variable, that will display

const calcWindow = document.querySelector('input');

let sum = 0;
let input = 0;
let currentValue = 0;

document.querySelector('.btn0').addEventListener('click', function () {
	calcWindow.value += 0;
	input = calcWindow.value;
});
document.querySelector('.btn1').addEventListener('click', function () {
	calcWindow.value += 1;
	input = calcWindow.value;
});
document.querySelector('.btn2').addEventListener('click', function () {
	calcWindow.value += 2;
	input = calcWindow.value;
});
document.querySelector('.btn3').addEventListener('click', function () {
	calcWindow.value += 3;
	input = calcWindow.value;
});
document.querySelector('.btn4').addEventListener('click', function () {
	calcWindow.value += 4;
	input = calcWindow.value;
});
document.querySelector('.btn5').addEventListener('click', function () {
	calcWindow.value += 5;
	input = calcWindow.value;
});
document.querySelector('.btn6').addEventListener('click', function () {
	calcWindow.value += 6;
	input = calcWindow.value;
});
document.querySelector('.btn7').addEventListener('click', function () {
	calcWindow.value += 7;
	input = calcWindow.value;
});
document.querySelector('.btn8').addEventListener('click', function () {
	calcWindow.value += 8;
	input = calcWindow.value;
});
document.querySelector('.btn9').addEventListener('click', function () {
	calcWindow.value += 9;
	input = calcWindow.value;
});

// Mathematical operations

document.querySelector('.btn-plus').addEventListener('click', function () {
	currentValue = input;
	input = 0;
	calcWindow.value = '';
});

document.querySelector('.btn-equals').addEventListener('click', function () {
	sum = Number(currentValue) + Number(input);
	input = 0;
	currentValue = 0;
	calcWindow.value = sum;
});

// function Calculator() {
// 	this.sum = 0;
// 	this.currentValue = 0;
// 	this.input = calcWindow;
// }
