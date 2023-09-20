let final = 0
let current = []
let hold = ``
let screen = []
let operator = ""

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
        (input === `**`) ||
        (screen[screen.length - 1] === '+') ||
        (screen[screen.length - 1] === '-') ||
        (screen[screen.length - 1] === '/') ||
        (screen[screen.length - 1] === '*') ||
        (screen[screen.length - 1] === '**')
    ) {
        screen.push(input)
    } else {
        screen[screen.length - 1] += input
    }
    console.log(screen)
}



//functions

//numbers
document.querySelector('#id1').onclick = () => {
    operate(`1`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id2').onclick = () => {
    operate(`2`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id3').onclick = () => {
    operate(`3`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id4').onclick = () => {
    operate(`4`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id5').onclick = () => {
    operate(`5`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id6').onclick = () => {
    operate(`6`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id7').onclick = () => {
    operate(`7`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id8').onclick = () => {
    operate(`8`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#id9').onclick = () => {
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
    operate(`**`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}

document.querySelector('#dot').onclick = () => {
    operate(`.`)
    document.querySelector('#live-screen').innerText = screen.join(" ")
}


// clear
document.querySelector('#clear').onclick = () => {
    screen = null
    document.querySelector('#live-screen').innerText = screen
}

// enter
document.querySelector('#enter').onclick = () => {
    //PEMDAS
    // Exponents
    screen.indexOf(`**`)
    console.log(screen.indexOf(`**`))
}
