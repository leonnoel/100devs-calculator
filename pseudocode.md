# Pseudocode

## Code the UI
- group elements
- buttons
- style the calculator exactly like picture
- responsiveness

## JS
- create calc class
    - props
        - displayText
        - evalStr
        - result
    - methods
        - evaluate() -> uses this.result = Function("return" blah)
        - render() -> returns the result
- select buttons
- select text field (show only)
- declare displayText
- add eventlisteners to buttons
    - when buttons are clicked, pass the button innertext to displayText
    - when equal button is pressed (handleEqual)
        - evaluate equation using evaluate() -> polymorphed method of calc object
        - render the result
        