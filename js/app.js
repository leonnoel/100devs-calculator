//required abilities of a calculator
//accept user input of number,operator, and number
//should accept decimal numbers
//store input
//recognize inputs and perform calculations
//return a  result
//optional features: ?
//should accept longer arithmetic operations.
//display all input as it is being entered
//store previous total as start of next operation
//clear button should clear all entries

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', event =>{
	const {target} = event;
	const {value} = target;
	if(!target.matches('button')) {
		return;
	} else{
		calculator.parseInput(value)
		//pass value to parse method
		//console.log(value)
	}
})

const calculator = {
	displayText: '0',
	prevTotal: null,
	
	parseInput(value){
		
		switch (value){
			case '=' :
				this.calcAnswer(this.displayText)
				break ;
			case 'AC' :
				this.clearAll()
				break;
			case '.':
			 if(this.displayText == 0){
				 this.addText('0.')
			 } else {
				 this.addText(value)
			 }
			 break;
			 default:
				this.addText(value)
				break;
		}
	    },
		
	
	addText(value){
		if (this.displayText === '0') {
		    this.displayText = ''
	    } else if(this.prevTotal !== null){
		    this.displayText = this.prevTotal
		    this.prevTotal = null
	    }
	    if(isNaN(+(value)) && isNaN(+(this.displayText))){
		if(isNaN(this.displayText.slice(-1))){
			return;
		}
	    }
	    this.displayText += value;
	    this.outputText(this.displayText)
	    //output display text to screen
	},

	outputText(text){
		document.querySelector('.calculator-screen').value =text;
	},

	calcAnswer(equation){
		let result = Function("return " + equation)()
		this.outputText(result)
		},
	clearAll(){
		this.displayText = '0',
		this.prevTotal = null,
		this.outputText(this.displayText)
	}
	
}
