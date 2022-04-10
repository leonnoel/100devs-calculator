let DIGITS = ['1','2','3','4','5','6','7','8','9','0','-1','-2','-3','-4','-5','-6','-7','-8','-9','-0'];
let LOW_SYMBOLS = ['+','-'];
let HIGH_SYMBOLS = ['*','/'];
const InputEnum = Object.freeze({"digit":1, "lowsymbol":2, "highsymbol":3, "skip":-1});

function priorityCalc(length, priority, priorityArr, instructions) {
    let finalValue;
    let operator;
    let operatorIndex;
    let leftOperand;
    let leftOperandIndex;
    let rightOperand;
    let rightOperandIndex;
    // Find 3s and calculate.
    for (let i = 0; i < length; i++) {
        // Scan for a 3
        // Record index
        // Add to symbol variable
        if (priorityArr[i] === priority) {
            operator = instructions[i];
            operatorIndex = i;
        }
        else {
            continue;
        }
        // Get valid value to the left 
        // Record index
        let ii = operatorIndex - 1;
        while (ii >= 0 ) {
            if (priorityArr[ii] != InputEnum.digit && priorityArr[ii] != InputEnum.skip) {
                return "INVALID INSTRUCTION ORDER";
            }
            else if (priorityArr[ii] === InputEnum.skip) {
                ii--;
            }
            else {
                leftOperand = instructions[ii];
                leftOperandIndex = ii;
                break;
            }
        }
        // Get valid value from the right
        // Record index
        ii = operatorIndex + 1;
        while (ii < priorityArr.length) {
            if (priorityArr[ii] !== InputEnum.digit && priorityArr[ii] !== InputEnum.skip) {
                return "INVALID INSTRUCTION ORDER";
            }
            else if (priorityArr[ii] === InputEnum.skip) {
                ii++;
            }
            else {
                rightOperand = instructions[ii];
                rightOperandIndex = ii;
                break;
            }
        }
        // Calculate final value based on operator
        switch (operator) {
            case '*':
                finalValue = +leftOperand * +rightOperand;
                break;
            case '/':
                finalValue = +leftOperand / +rightOperand;
                break;
            case '+':
                finalValue = +leftOperand + +rightOperand;
                break;
        }

        // Add value to operator index
        instructions[operatorIndex] = String(finalValue);
        // modify left, right, symbol priority values
        priorityArr[operatorIndex] = 1;
        priorityArr[leftOperandIndex] = -1;
        priorityArr[rightOperandIndex] = -1;

        instructions[leftOperandIndex] = InputEnum.skip;
        instructions[rightOperandIndex] = InputEnum.skip;
    }
    // console.log(instructions + '\n' +
    //             priorityArr)
}

function calculate (instructions) {
    let finalCalc;
    let priorityArr = [];
    let length = instructions.length;
    // Assign instruction priorities
    for (let i = 0; i < length; i++) {
        if (DIGITS.includes(instructions[i])) {
            priorityArr[i] = InputEnum.digit;
        }
        else if (LOW_SYMBOLS.includes(instructions[i])) {
            priorityArr[i] = InputEnum.lowsymbol;
        }
        else if (HIGH_SYMBOLS.includes(instructions[i])) {
            priorityArr[i] = InputEnum.highsymbol;
        }
        else {
            return "INVALID CHARACTERS"
        }
    }

    priorityCalc(length, 3, priorityArr, instructions);
    priorityCalc(length, 2, priorityArr, instructions);


    //Find 1 and return.
    for (let i = 0; i < length; i++) {
        if (priorityArr[i] === 1) {
            finalCalc = instructions[i];
        }
    }

    return finalCalc;
}


let screen = new function () {
    this.value = "";
    this.addValue = function (command) {
        this.value += String(command) + " ";
    },
    this.clearValue = function () {
        this.value = "";
    },
    this.setScreen = function () {
        try {
            document.getElementById("output").textContent = this.value;
            return "Success";
        }
        catch (e) {
            return("Warning: " + e)
        }
        
    }
}

let calculator = new function () {
    this.commandsArr = [],
    this.negativeInput = false;
    this.addCommand = function (input) {
        if (input === '-') {
            this.negativeInput = true;
        }
        else if (DIGITS.includes(input) && this.negativeInput) {
            input = +input;
            input *= -1;
            input = String(input);
            this.commandsArr.push(input);
            this.negativeInput = false;
        }
        else {
            this.commandsArr.push(input);
        }
    }
    this.executeCommand = function () {
        screen.clearValue();
        screen.setScreen();
        screen.addValue(calculate (this.commandsArr));
        screen.setScreen();
    }
}

function load(value) {
    if (value === '=') {
        calculator.executeCommand();
    }
    else {
        calculator.addCommand(value);
        screen.addValue(value);
        screen.setScreen();
    }
}

buttonList = document.querySelectorAll(".btn a");

for (let i = 0; i < buttonList.length; i++) {
    let value = buttonList[i].textContent;
    buttonList[i].addEventListener('click', function () {load(value)});
}

//console.log(buttonList);