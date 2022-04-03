// there's no error checking in this calculator app

let screen = document.querySelector('#screen')
let button = Array.from(document.querySelectorAll('.button'))

button.map (button => {
    button.addEventListener('click', e => {
        switch(e.target.innerText){
            // to use eval(), the × and ÷ symbols need to be replaced by * and /. 
            case '=': screen.innerText = eval(screen.innerText.replaceAll('×', '*').replaceAll('÷', '/'))
                break
            case `A/C`: screen.innerText = '0'
                break
            // deletes most recent input and if there's only a single digit on the screen deleting it makes the display show 0
            case 'Del': 
                if(screen.innerText.length === 1) screen.innerText = '0'
                else screen.innerText = screen.innerText.slice(0, -1)
                break
            // screen displays 0 by default. when clicking buttons, it will overwrite the leading 0, but append the string if you press any other input.
            default: 
                if(screen.innerText === '0') screen.innerText = e.target.innerText
                else screen.innerText += e.target.innerText
                break
        }
    })
})

