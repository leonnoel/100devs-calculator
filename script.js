let expression = '';

function press(num) {
    expression += num;
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(expression);
        expression = '';
    } catch (e) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}
