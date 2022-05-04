//Reqiured abilites of a calculator:
//accept user inputs - done
//should accept decimal numbers - done
//store inputs - done
//recognize inputs and perfrom calculations - done
//return a result - done

//Optional features:
//Should accept longer arithmetic operations. - done
//display all input as it is being entered - done
//store pervious total as start of next operation. - done
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
		//have any special buttons been clicked
		switch (value) {
			case '=':
				this.calcAnswer(this.displayText)
				//calculate the answer
				break
			case 'AC':
				this.clearAll()
				//clear screem
				break
			case '.':
				if (this.displayText == 0) {
					this.addText('0.')
					//pass '0.' into add text method
				} else {
					this.addText(value)
					//add value to text string
				}
				break
			default:
				this.addText(value)
				//add value to text string
				break
		}
	},

	addText(value) {
		if (this.displayText === '0') {
			this.displayText = ''
		} else if (this.prevTotal !== null) {
			this.displayText = this.prevTotal
			this.prevTotal = null
		}
		//checks last char
		if (isNaN(+value) && isNaN(+this.displayText)) {
			if (isNaN(this.displayText.slice(-1))) {
				return
			}
		}
		this.displayText += value
		//output display text to screen
		this.outputText(this.displayText)
	},

	outputText(text) {
		document.querySelector('.calculator-screen').value = text
	},

	calcAnswer(equation) {
		let result = Function('return ' + equation)()
		this.outputText(result)
	},

	clearAll() {
		;(this.displayText = '0'),
			(this.prevTotal = null),
			this.outputText(this.displayText)
	},
}
