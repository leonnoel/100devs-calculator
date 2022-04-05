// setting up button presses and return to the screen

const keys = document.querySelector('#btnPad');
keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
        return;
    } else {
        calculator.parseInput(value)
    }
})

// calculator object

const calculator = {

    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        switch (value) {
            case '=':
                //calculate the answer
                break;
            case '.':
                if (this.displayText == 0) {
                    // pass '0.' into add text method
                } else {
                    //add value to text string
                }
                break;
            default:
                //add value to text string
                break;
        }
    },

    addText(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        } else if( this.prevTotal !== null ) {
            this.displayText = this.prevTotal;
            this.prevTotal = null;
        }
        if (/*invalid inputs*/) {

        }
        this.displayText += value
        //output text to screen
    }
}