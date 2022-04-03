"use strict";
(function () {
    const SYM_VALUE = Symbol("value");
    const SYM_MODE = Symbol("mode");
    const BUTTON_ARRAY = [
        {
            value: 7,
            text: 7,
            mode: "ADD",
        },
        {
            value: 8,
            text: 8,
            mode: "ADD",
        },
        {
            value: 9,
            text: 9,
            mode: "ADD",
        },
        {
            value: "/",
            text: "/",
            mode: "ADD",
        },
        {
            value: 4,
            text: 4,
            mode: "ADD",
        },
        {
            value: 5,
            text: 5,
            mode: "ADD",
        },
        {
            value: 6,
            text: 6,
            mode: "ADD",
        },
        {
            value: "*",
            text: "x",
            mode: "ADD",
        },
        {
            value: 1,
            text: 1,
            mode: "ADD",
        },
        {
            value: 2,
            text: 2,
            mode: "ADD",
        },
        {
            value: 3,
            text: 3,
            mode: "ADD",
        },
        {
            value: "+",
            text: "+",
            mode: "ADD",
        },
        {
            value: 0,
            text: 0,
            mode: "ADD",
        },
        {
            value: ".",
            text: ".",
            mode: "ADD",
        },
        {
            value: "=",
            text: "=",
            mode: "EQ",
        },
        {
            value: "-",
            text: "-",
            mode: "ADD",
        },
        {
            value: "(",
            text: "(",
            mode: "ADD",
        },
        {
            value: ")",
            text: ")",
            mode: "ADD",
        },
        {
            value: "CLEAR",
            text: "C",
            mode: "CLEARALL",
        },
        {
            value: "BACKSPACE",
            text: "⬅",
            mode: "CLEAR",
        }
    ];
    const INNER_UI = `<span class="display"></span><form action="" class="buttons"></form>`
    function deleteLast(string) {
        return string.slice(0, -1);
    }
    function createButton({value, text, mode}) {
        text ??= value;
        const newButton = document.createElement("button");
        newButton.classList.add("math_button");
        newButton.innerText = text;
        newButton[SYM_VALUE] = value;
        newButton[SYM_MODE] = mode;
        return newButton;
    }
    function Calculator(containerToInsert) {
        const element = document.createElement("div");
        element.classList.add("calculator");
        element.innerHTML = INNER_UI;
        const buttonGrid = element.querySelector(".buttons");
        const display = element.querySelector(".display");
        display.innerHTML = "";
        let current_value = "";
        for (let buttonData of BUTTON_ARRAY) {
            buttonGrid.append(createButton(buttonData));
        }
        element.addEventListener("click", function(e) {
            e.preventDefault();
            const value = e.target[SYM_VALUE];
            const mode = e.target[SYM_MODE];
            if (mode === "ADD") {
                current_value += value;
            }
            else if (mode === "CLEAR") {
                current_value = deleteLast(current_value);
            }
            else if (mode === "CLEARALL") {
                current_value = "";
            }
            else if (mode === "EQ") {
                current_value = eval(current_value);
            }
            current_value = current_value.toString();
            display.innerText = current_value;
        })
        containerToInsert.append(element);
    }

    const calculator = new Calculator(document.body);
}());

