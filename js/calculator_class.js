function Calculator() {
    let _displayVal = '0';

    let _result = 0;
    let _number1 = 0;
    let _number2 = 0;

    let _lastOperatorType = null;
    let _lastFunctionType = null;
    let _lastCommandType = null;

    let _isFirstNum = true;

    let _wasDecimalClicked = false;
    let _isCalculationDone = false;
    let _wasOperationWithoutEqual = false;

    Object.defineProperty(this, 'displayVal', {
        get: function () {
            return _displayVal;
        }
    })

    this.issueCommand = function (command, type = 'number') {
        _lastCommandType = type;

        if (_isCalculationDone) {
            reset();
            _isCalculationDone = false;
        }

        if (type === 'number') {
            addDigit(command);
            updateDisplayNumber(command);
            console.log(_number1, _number2, _lastOperatorType);
            return _displayVal;
        } else if (type == 'operator') {
            if (!_isFirstNum) {
                solve();
                _lastOperatorType = command;
                _wasOperationWithoutEqual = true;
                _displayVal = "" + _result;
                
                if ( isNaN(_result) ) {
                    _displayVal = "ERROR";
                    _isCalculationDone = true;
                }
                
                [_number1, _number2, _result] = [_result, 0, 0];
                return _displayVal;
            }
            
            _wasDecimalClicked = false;
            _lastOperatorType = command;
            _isFirstNum = false;
            _displayVal = "0";
            return _displayVal;
        }

        _lastFunctionType = command;

        switch (command) {
            case 'reset':
                reset();
                break;

            case 'decimalPoint':
                _wasDecimalClicked = true;
                decimalPoint();
                break;

            case 'equal':
                solve();
                _isCalculationDone = true;
                break;

            default:
                break;
        }

        console.log(_number1, _number2, _lastOperatorType);
        return _displayVal;
    }

    function updateDisplayNumber(digit) {
        if (_wasOperationWithoutEqual) {
            _wasOperationWithoutEqual = false;
            _displayVal = "";
        }

        _displayVal = _displayVal === "0" ? "" + digit : _displayVal + digit;
    }

    function addDigit(digit) {
        const decimalPart = _wasDecimalClicked ? '.' : '';
        _wasDecimalClicked = false;

        if (_isFirstNum) {
            _number1 = +("" + _number1 + decimalPart + digit);
            return;
        }

        _number2 = +("" + _number2 + decimalPart + digit);
    }


    function add(x, y) {
        return x + y;
    }

    function substract(x, y) {
        console.log(x, y, x - y)
        return x - y;
    }

    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        return x / y;
    }

    function decimalPoint() {
        _displayVal += '.';
    }

    function reset() {
        _result = 0;
        _number1 = 0;
        _number2 = 0;
        _lastFunctionType = null;
        _lastOperatorType = null;
        _isFirstNum = true;
        _displayVal = "0";

        _wasDecimalClicked = false;
        _isCalculationDone = false;
        _wasOperationWithoutEqual = false;
    }

    function solve() {
        switch (_lastOperatorType) {
            case 'add':
                _result = add(_number1, _number2);
                _displayVal = "" + _result;
                break;

            case 'multiply':
                _result = multiply(_number1, _number2);
                _displayVal = "" + _result;
                break;

            case 'divide':
                _result = divide(_number1, _number2);
                _displayVal = "" + _result;
                break;

            case 'substraction':
                _result = substract(_number1, _number2);
                _displayVal = "" + _result;
                break;

            default:
                console.error('No operation found.');
                return;
        }
    }
}

export default Calculator;