// screen represents an array of the current formula being typed, and is typically displayed as a string on the calculator "screen"
let screen = []

//functions
// these functions are used to make the rest of the code more dry.

function operate(input) { // Takes button pressed and adds to array based on conditions
    if ( // if button was an operator... (excluding decimal point)
        (screen.length === 0) ||
        (input === '+') ||
        (input === '-') ||
        (input === '/') ||
        (input === '*') ||
        (input === `^`) ||
        (screen[screen.length - 1] === '+') ||
        (screen[screen.length - 1] === '-') ||
        (screen[screen.length - 1] === '/') ||
        (screen[screen.length - 1] === '*') ||
        (screen[screen.length - 1] === '^')
    ) { // ...it should be added as a new element
        screen.push(input)
    } else { // otherwise, it should be concatenated to the latest element (i.e. user is typing in multiple digits)
        screen[screen.length - 1] += input
    }
    console.log(screen)
}

function eraseScreenAfterEnter() {
    // when the user presses enter after entering an mathematical expression, two things would happen. Either the user wants to then continue manipulating that result (thus still using the result of enter), or the user wants to start over with a new expression. 
    // This function is used for the second scenario, when the user types a new number after pressing enter, and in other words wants to start over. The way to tell if enter was recently pressed is if the screen array is only one element and that element is a number.
    if (typeof screen[0] === 'number' && screen.length === 1) {
        screen = []
    }
}

function clickNumber(id) {
    // This function is short-hand for the DOM events upon clicking a number button. 
    let num = id[id.length - 1].toString()
    document.querySelector(id).onclick = () => {
        eraseScreenAfterEnter()
        operate(num)
        document.querySelector('#live-screen').innerText = screen.join(" ")
    }
}

function clickOperator(id) {
    // This function is short-hand for the DOM events upon clicking an operator button, including decimal point.
    document.querySelector(id).onclick = () => {
        switch (id) {
            case "#add":
                operate(`+`)
                break;
            case "#subtract":
                operate(`-`)
                break;
            case "#divide":
                operate(`/`)
                break;
            case "#multiply":
                operate(`*`)
                break;
            case "#power":
                operate(`^`)
                break;
            case "#dot":
                operate(`.`)
                break;
        }
        document.querySelector('#live-screen').innerText = screen.join(" ")
    }
}

//numbers
clickNumber('#id1')
clickNumber('#id2')
clickNumber('#id3')
clickNumber('#id4')
clickNumber('#id5')
clickNumber('#id6')
clickNumber('#id7')
clickNumber('#id8')
clickNumber('#id9')
clickNumber('#id0')

// operators
clickOperator(`#divide`)
clickOperator(`#multiply`)
clickOperator(`#add`)
clickOperator(`#dot`)
clickOperator(`#power`)
clickOperator(`#subtract`)


// clear
document.querySelector('#clear').onclick = () => {
    screen = []
    document.querySelector('#live-screen').innerText = screen
    console.log(screen)
}


// enter
document.querySelector('#enter').onclick = () => {
    //PEMDAS

    // Exponents
    while (screen.includes(`^`)) {
        let index = screen.indexOf(`^`)
        screen[index] = Number(screen[index - 1]) ** Number(screen[index + 1])
        screen.splice(index - 1, 1)
        screen.splice(index, 1)
    }

    // Multiplcation and Division
    while (screen.includes(`*`) || screen.includes(`/`)) {
        let index = screen.findIndex(element => (element === `*`) || (element === `/`))
        if (screen[index] === `*`) {
            screen[index] = Number(screen[index - 1]) * Number(screen[index + 1])
        } else if (screen[index] === `/`) {
            screen[index] = Number(screen[index - 1]) / Number(screen[index + 1])
        }
        screen.splice(index - 1, 1)
        screen.splice(index, 1)
    }

    // Addition and Subtraction
    while (screen.includes(`+`) || screen.includes(`-`)) {
        let index = screen.findIndex(element => (element === `+`) || (element === `-`))
        if (screen[index] === `+`) {
            screen[index] = Number(screen[index - 1]) + Number(screen[index + 1])
        } else if (screen[index] === `-`) {
            screen[index] = Number(screen[index - 1]) - Number(screen[index + 1])
        }
        screen.splice(index - 1, 1)
        screen.splice(index, 1)
    }
    console.log(screen)
    document.querySelector('#live-screen').innerText = screen
}
