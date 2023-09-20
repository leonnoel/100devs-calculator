// let final = 0
// let current = []
// let hold = ``
let screen = []
// let operator = ""

function operate(input) {
    // if (screen.length === 0) {
    //     screen.push(input)
    // } else {
    // switch ((input) || (screen[screen.length - 1])) {
    //     case "*":
    //     case "+":
    //     case "-":
    //     case "/":
    //         screen.push(input)
    //         break;
    //     default:
    //         screen[screen.length - 1] += input
    // }
    if (
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
    ) {
        screen.push(input)
    } else {
        screen[screen.length - 1] += input
    }
    console.log(screen)
}



//functions

function eraseScreenAfterEnter() {
    if(typeof screen[0] === 'number' && screen.length === 1) { 
        // screen would only be a number and length of 1 if enter was pressed last. So if we just pressed enter and now we press a number, we want to assume the user is starting over again.
        screen = []
    }
}

//numbers
document.querySelector('#id0').onclick = () => {
    eraseScreenAfterEnter()
    operate(`0`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id1').onclick = () => {
    eraseScreenAfterEnter()
    operate(`1`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id2').onclick = () => {
    eraseScreenAfterEnter()
    operate(`2`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id3').onclick = () => {
    eraseScreenAfterEnter()
    operate(`3`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id4').onclick = () => {
    eraseScreenAfterEnter()
    operate(`4`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id5').onclick = () => {
    eraseScreenAfterEnter()
    operate(`5`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id6').onclick = () => {
    eraseScreenAfterEnter()
    operate(`6`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id7').onclick = () => {
    eraseScreenAfterEnter()
    operate(`7`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id8').onclick = () => {
    eraseScreenAfterEnter()
    operate(`8`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id9').onclick = () => {
    eraseScreenAfterEnter()
    operate(`9`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}


// operators
document.querySelector('#add').onclick = () => {
    operate(`+`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#subtract').onclick = () => {
    operate(`-`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#multiply').onclick = () => {
    operate(`*`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#divide').onclick = () => {
    operate(`/`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#power').onclick = () => {
    operate(`^`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#dot').onclick = () => {
    operate(`.`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}


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
        } else if(screen[index] === `/`) {
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
        } else if(screen[index] === `-`) {
            screen[index] = Number(screen[index - 1]) - Number(screen[index + 1])
        }
        screen.splice(index - 1, 1)
        screen.splice(index, 1)
    }
    console.log(screen)
    document.querySelector('#live-screen').innerText = screen
}
