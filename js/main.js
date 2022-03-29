class Calculator {
    constructor() {
        this.currentValue = 0
        this.nextValue = null
    }

    onClick(click) {
        const numClicked = num => {
            console.log('numClicked!', num)
        }
        //onClick event
        console.log(click.target.id)
        if (/[0-9]/.test(click.target.id)) {
            //Number is clicked
            console.log('num is clicked')
            numClicked(click.target.id)
        } else if (/[-+*\/]/.test(click.target.id)) {
            //Op is clicked
            console.log('op is clicked')
        } else if (/=/.test(click.target.id)) {
            //= is clicked
            console.log('= is clicked')
        } else if (/\./) {
            //. is clicked
            console.log('. is clicked')
        }
    }
}

const calculator = new Calculator()
const buttons = document.querySelectorAll("button")
Array.from(buttons).forEach(b => {
    b.id = b.innerText == "×"? "*" : b.innerText
    b.onclick = calculator.onClick
})