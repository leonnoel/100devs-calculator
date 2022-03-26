let num1 = '';
let num2 = '';
let oper = '';
let ans = '';
let rst = '';

function add(a,b) {
    return +(+a + +b).toFixed(4);
};

function subtract(a,b) {
    return +(+a - +b).toFixed(4);
};

function multiply(a,b) {
    return +(+a * +b).toFixed(4);
};

function divide(a,b) {
	if (b == 0) {
	alert("You can't divide by 0!!!");
	clear();
	} else {
	return +(+a / +b).toFixed(4);
	}
};

function operate(num1,num2,oper) {
	switch (oper) {
		case 'add':
			return add(num1,num2);
		   	break;
		case 'sub':
			return subtract(num1,num2);
			break;
		case 'div':
			return divide(num1,num2);
			break;
		case 'mult':
			return multiply(num1,num2);
			break;
	}
}

function lengthCheck() {
	return display.textContent.length < 12;
};

function clear() {
	//clear the calculator display and empty all working variables.
	num1 = '';
	num2 = '';
	oper = '';
	ans = '';
	display.textContent = '';
};

function posneg() {
	display.textContent = (+display.textContent * -1).toString();
};

function backspc() {
	if (display.textContent != '') {
		if (display.textContent.length == 2 && display.textContent[0] == '-') {
			display.textContent = '';	
		} else {
			display.textContent = display.textContent.slice(0,display.textContent.length-1);
		};
	};
};

function equals() {
	if (num1 !== '' && oper !== '') {
		num2 = display.textContent;
		ans = operate(num1, num2, oper);
		if (ans.toString().length > 13) {
			display.textContent = 'error'
		} else {
			display.textContent = ans;
		};
		oper = '';
		num2 = '';
		num1 = '';
		rst = '';
	};
};

function operation(id) {
	if (ans !== '' && oper == '') {
		num1 = ans;
		oper = id;
		rst = ''
	} else if (oper == '' && display.textContent !== '') {
		num1 = display.textContent;
		oper = id;
		rst = ''
	} else {
		equals();
		oper = id;
	};
};

const numbers = document.querySelectorAll('.num');
const display = document.querySelector('#display');
numbers.forEach((button) => {
	button.addEventListener('click', () => {
		if (display.textContent == 'error') {
			clear();
		};
		if (ans !== '') {
			num1 = ans;
			ans = '';
			display.textContent = '';
		};
		if (num1 !== '' && oper !== '' && rst === '') {
			display.textContent = '';
			rst = '1'
		};
		switch(button.id) {
			case 'zero':
				if (display.textContent == '0') {
				break;
				} else if (lengthCheck()) {
				display.textContent += '0'
				};
				break;
			case 'dec':
				if (display.textContent.includes('.')) {
				break;
				} else if (display.textContent == '') {
				display.textContent += '0.';
				break;
				} else if (lengthCheck) {
				display.textContent += '.';
				break;
				};
			default:
				if (lengthCheck()) {
					display.textContent += button.id;
				}
		};
	});
});

const func = document.querySelectorAll('.func');
func.forEach((button) => {
	button.addEventListener('click', () => {
		switch(button.id) {
			case 'clear':
				clear();
				break;
			case 'posneg':
				posneg();
				break;
			case 'back':
				backspc();
				break;
			case 'div':
			case 'mult':
			case 'add':
			case 'sub':
				operation(button.id);
				break;
			case 'equal':
				equals();
				break;
				
		};
	});
});