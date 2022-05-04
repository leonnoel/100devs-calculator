//Reqiured abilites of a calculator:
//accept user inputs
//should accept decimal numbers
//store inputs
//recognize inputs and perfrom calculations
//return a result

//Optional features:
//Should accept longer arithmetic operations.
//display all input as it is being entered
//store pervious total as start of next operation.
//clear button should clear all entries
//should pervent invaild inputs

const keys = document.querySelector('.calculator-buttons')
keys.addEventListener('click', (event) => {
	const { target } = event
	const { value } = target
	if (!target.matches('button')) {
		return
	} else {
		calculator.parseInput(value)
	}
})

const calculator = {
	displayText: '0',
	prevTotal: null,

	parseInput(value) {
		if (this.displayText === '0') {
			this.displayText = ''
		}
		//have any special buttons been clicked
		switch (value) {
			case '=':
				//calculate the answer
				break
			case 'AC':
				//clear screem
				break
			case '.':
				if (this.displayText == 0) {
					//pass '0.' into add text method
				} else {
					//add value to text string
				}
		}

		//addText(value){
			
		}
	}
}
