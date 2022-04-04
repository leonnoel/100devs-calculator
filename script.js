const allButtons = Array.from(document.getElementsByClassName('button'));

function Calculator() {
  total = 0;
  preOpr = 0;
  postOpr = 0;
  strAns = "0";
  strUpperDisp = "";
  lastOpr = "";
  newPass = true;
  postSet = false;

  this.processEvent = function(context) {
    const deterIfOperator = this.processContext(context);
    //Operator was sent: +, -, x, /, =
    if(deterIfOperator && context !== "." && context !== 'C' && !newPass) {
        //Set numeric value before operator
        if(preOpr == 0) {
          preOpr = Number(strAns);
          lastOpr = context;
          //Set numeric value after operator
        } else if(postOpr == 0) {
          postOpr = Number(strAns);
          postSet = true;
        }

        //Calculate equation
        total = this.calculate(lastOpr);

        if(context === '=') {
            strUpperDisp = `${preOpr} ${lastOpr} ${postOpr} ${context}`;
            preOpr = total;
            postOpr = 0;
        } else {
            preOpr = total;
            postOpr = 0;
            strUpperDisp = total.toString() + context;
        }

        lastOpr = context;
        strAns = total;
        newPass = true;
      //
    } else if (deterIfOperator && context !== "." && context !== 'C' && newPass){
        strUpperDisp = total.toString() + context;
        lastOpr = context;
      // RESET ALL values to default
    } else if (context === 'C') {
        total = 0;
        preOpr = 0;
        postOpr = 0;
        strUpperDisp = "";
        strAns = "0";
        lastOpr = "";
        newPass = true;
        postSet = false;
    } else if (!deterIfOperator && newPass){
        strAns = context;
        newPass = false;
      //
    } else if (!deterIfOperator && !newPass){
        strAns += context;
    }

    this.display();
  }

  this.processContext = function(context) {
     return isNaN(Number(context));
  }

  this.calculate = function(oper) {
    if(postSet) {
      switch(oper) {
        case '+': {
          return preOpr + postOpr;
          break;
        }
        case '-': {
          return preOpr - postOpr;
          break;
        }
        case 'x': {
          return preOpr * postOpr;
          break;
        }
        case '/': {
          return preOpr / postOpr;
          break;
        }
        case '=': {
          break;
        }
      }
    }
    return preOpr;
  }
  this.display = function() {
    const screen = document.querySelector('#stack');
    const answer = document.querySelector('#answer');

    answer.innerText = strAns;

    if(strUpperDisp.length>1) {
      screen.innerText = strUpperDisp;
    } else {
      screen.innerText = "-";
    }

  }
}

const calculator = new Calculator();

allButtons.forEach(option => {option.addEventListener('click', function() {
    calculator.processEvent(this.textContent.trim());
  })
})

//Type in an operator:
//Add to operator stack
//Add all to display stack

  //If another operator is entered, replace last operator

  //If a number is entered, empty ansNumberStack and put new number in
