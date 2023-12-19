function Calculator() {
  //lets write some pseudocode to see what is required of us
  //we must add any button clicked to the evaluation screen of the calculator.
  //in the case the equal sign is pressed we need to evaluate the expression inside the expression, innerText
  //in the case C(clear) is pressed we should delete the last character from the expression
  //we need to grab all the operator buttons
  //we need to create methods to add, subtract, divide, and multiply
  //we need to set a conditional which will reset our current value to zero anytime an arithmetic operator is pressed
  //the current value h1 will also be where we print the result
  //lets first grab our buttons of number and operator into two seperate node lists
    //grabbing all the number and operator buttons
    let evaluated = false;
    let lastInputIsOp = false;
    let errorState = false;
    const currentValueAndResult = document.querySelector('#current-value')
  
    const expression = document.querySelector('#expression')
  
    const allButtons = Array.from(document.querySelectorAll('.button'))
  
    const numButtons = Array.from(document.querySelectorAll('.button_number'));
    
    const opButtons = Array.from(document.querySelectorAll('.button_operator'));

    
    //So we found 3 fixes for the same issue, the issue was that on the click of the decimal, if the user clicked the span, that click event bubbled up to the listener of the parent button. What this means is our classList check for decimal would sometimes not work because the span itself is the click target. This is why sometimes when u clicked the button it would return the classList of the button but some other times when u clicked in the middle it would return the class list of the span which was empty.... It wasn't a bug in the language at all... So our first fix was simply adding the class of decimal to our span. The second fix was in CSS itself! using the pointer events property we can set that to none to not register events for that span(s). The third fix we'll test here
    
    // const bubblingHurtMe = Array.from(document.querySelectorAll('span'));
    // bubblingHurtMe.forEach(span => span.addEventListener('click', (e) => e.stopPropagation()))
    //Third fix works! BUT simply just prevents the button from being clicked in general when the span is clicked, so it seems pointerevents is truly the best fix. I'm glad I finally figured it out omg this bug has been in the back of my mind for the last month.
  
    this.evalButton = document.querySelector('#evaluate');
    this.clearButton = document.querySelector('#clear')
    this.clearEntryButton = document.querySelector('#clear-entry');
    
  //creating an array from both types of buttons to be able to use forEach on them
    //we can create a local function to be able to use in our event listener to add to our current value
    function inputNum(click) {
      //we don't want the user to be able to click an input number if an expression has just been evaluated
      if (errorState || evaluated || (currentValueAndResult.innerText.includes('.') && (click.target.classList.contains('decimal')))) {
        return;
      }//handling cases where the decimal button was pressed with the current value being 0
      if ((click.target.classList.contains('decimal')) && currentValueAndResult.innerText === '0' ) {
        evaluated = false;
        currentValueAndResult.innerText = 0 + click.target.innerText;
        return;
      }
      if (((currentValueAndResult.innerText == '0') && !(click.target.classList.contains('decimal'))) || lastInputIsOp) {
        currentValueAndResult.innerText = '';
        lastInputIsOp = false;
      }
      console.log((click.target.classList));
      evaluated = false;
      currentValueAndResult.innerText += click.target.innerText;
    }
    
    numButtons.forEach(button => button.addEventListener('click', inputNum))
  //we need to create a local function to handle the operator clicks
    function inputOp(click) {
      if (errorState || currentValueAndResult.innerText == click.target.innerText || (currentValueAndResult.innerText.endsWith('.')) || (lastInputIsOp)) {
        return;
      }
      if (expression.innerText == '0' || (evaluated == true)) {
        expression.innerText = '';
      }
      lastInputIsOp = true;
      evaluated = false;
      expression.innerText += ` ${currentValueAndResult.innerText} ${click.target.innerText} `
      currentValueAndResult.innerText = click.target.innerText
    }
  
    opButtons.forEach(button => button.addEventListener('click', inputOp))
  
  //we need to set an event listener in that if a number button is pressed, we add it to our h1 string.
  // this.evaluate = function() {
  // }
  // we need to set up a click event on our evaluation button to return the result of the current expression
  //if the eval button was clicked, lets set evaluated to true and set it false in our previous clicks of the opButtons and inputButtons
    this.expression = expression
    this.evaluate = function() {
      this.evalButton.addEventListener('click', () => {
        if (!Number(currentValueAndResult.innerText)) {
          currentValueAndResult.innerText = 'Error!';
          errorState = true;
          return;
        } else if (evaluated == true || expression.innerText === '0') {
          return;
        }
        lastInputIsOp = false;
        evaluated = true;
        this.expression.innerText += ` ${currentValueAndResult.innerText}`
        currentValueAndResult.innerText = eval(this.expression.innerText);
      })
    }
    this.evaluate();
  
  //Setting up the clear entry button
  
    this.clearEntry = function() {
      this.clearEntryButton.addEventListener('click', () => {
        this.expression.innerText = '0';
        currentValueAndResult.innerText = '0';
        evaluated = false;
        errorState = false;
      })
    }
    this.clearEntry()
  
  //Setting up the clear button
    this.clear = function() {
      this.clearButton.addEventListener('click', () => {
        if (evaluated == true|| currentValueAndResult.innerText == 'Error!') {
          return;
        } else if (currentValueAndResult.innerText.length <= 1) {
          currentValueAndResult.innerText = '0';
          return;
        }
        currentValueAndResult.innerText = currentValueAndResult.innerText.slice(0, -1);
      })
    }
    this.clear();
  
  //Setting up an animation event listener for all the buttons.
    allButtons.forEach(button => button.addEventListener('click', () => {
      button.classList.add('animate-button');
      setTimeout(() => button.classList.remove('animate-button'), 100);
      console.log(button);
    }))
  }
  
  const calculator = new Calculator();
  console.log(calculator);