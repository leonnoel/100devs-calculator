//Things calculator has to do:
//    Take in user inputs
//    Stores inputs
//    Recognize inputs and perform calculations
//    Return a result


//    Accept longer arithmetic operations
//    Display all input as it is being entered
//    Store previous total as start of next operation
//    Clear button should clear all entries
//    Prevent invalid inputs

const keys = document.querySelector('.container');
keys.addEventListener('click', event => {
   const { target } = event;
   const { value } = target;
   if (!target.matches('button')) {
      return;
   } else {
      calculator.parseInput(value);
      console.log(value);
   }
});

const calculator = {
   displayText: '0',
   prevTotal: null,

   parseInput(value) {
      switch (value) {
         case '=':
            this.calcAnswer(this.displayText);
            break;
         case 'AC':
            this.clearAll();
            break;
         case '.':
            if (this.displayText === '0') {
               this.addText('0.');
            } else if (isNaN(this.displayText.slice(-1)) && this.displayText.slice(-1) !== '.') {
               this.addText('0.');
            } else {
               this.addText(value);
            }
            break;
         default:
            this.addText(value);
            break;
      }
   },

   addText(value) {
      if (this.displayText === '0') {
         this.displayText = '';
      } else if (this.prevTotal !== null) {
         this.displayText = this.prevTotal.toString();
         this.prevTotal = null;
      }
      if (isNaN(value) && (isNaN(this.displayText.slice(-1)))) {
         return;
      }
      this.displayText += value;
      this.outputText(this.displayText);

   },

   outputText(text) {
      document.querySelector('.screen').innerHTML = text;
   },

   calcAnswer(equation) {
      let result = Function("return " + equation)();
      this.prevTotal = result;
      if (result.toString().includes('.') && result.toString().length > 8)
         result = Number(result).toFixed(2);
      this.outputText(result);
   },

   clearAll() {
      this.displayText = '0',
         this.prevTotal = null,
         this.outputText(this.displayText);
   }

}