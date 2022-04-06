class Calculator {

  #interfaceElements = {
    display: 'display',

    buttonsBlock: {
      buttonRow1: {
        7: 'btn first',
        8: 'btn second',
        9: 'btn third',
        '/': 'btn fourth',
      },

      buttonRow2: {
        4: 'btn first',
        5: 'btn second',
        6: 'btn third',
        '*': 'btn fourth',
      },

      buttonRow3: {
        1: 'btn first',
        2: 'btn second',
        3: 'btn third',
        '+': 'btn fourth',
      },

      buttonRow4: {
        0: 'btn first',
        '.': 'btn second',
        '=': 'btn third',
        '-': 'btn fourth',
      }
    }
  }

  #innerData = {
    expressionString: '',
    point: false,
    evaluated: false,
    displayFontSize: '70px'
  }  

  constructor() {
    
  }

  renderSelf() {
    this.#createInterfaceElements()
  }

  #createInterfaceElements() {

    const initialInterfaceElement = document.querySelector( '.my-calc' );
    walkInterfaceElements( initialInterfaceElement, this.#interfaceElements );

    function walkInterfaceElements( parent, objectToWalk ) {
      for ( const [key, value] of Object.entries(objectToWalk) ) {

        if ( typeof value === 'string') {

          const child = document.createElement( 'div' );
          child.classList.add( ...value.split( ' ' ) );
          child.dataset.numOrOperator = key;
          parent.appendChild( child );

        } else if ( typeof value === 'object' ) {

          const child = document.createElement( 'div' );
          child.classList.add( `${key}` );
          parent.appendChild( child );

          walkInterfaceElements( child, value );
        }
      }
    }

    
    document.querySelector('.buttonsBlock').addEventListener( 'click', ( e ) => {
      this.#writeExpressionString( e );
      this.#checkDisplay();
    })

    document.querySelector('#reset').addEventListener( 'click', () => {
      this.#innerData.expressionString = '';
      this.#innerData.point = false;
      this.#innerData.evaluated = false;
      this.#innerData.displayFontSize = '70px';
      document.querySelector('.display').style.fontSize = this.#innerData.displayFontSize;
      document.querySelector( '.display' ).textContent = '';
    })
  }

  #writeExpressionString( e ) {   

    const display = document.querySelector( '.display' );
    let btn = e.target.dataset.numOrOperator;
    let str = this.#innerData.expressionString;
    let operators = [ '+', '-', '*', '/' ];

    if ( btn ) {

      if ( btn === '=' ) {

        if ( operators.includes( str[str.length - 1] ) ) {
          str = str.slice( 0, str.length - 1 );
        }
        
        let result = this.#evaluate( str );
        this.#innerData.point = Math.floor(result) === result;
        this.#innerData.evaluated = true;
        return;

      } else if ( btn === '.' ) {

        if ( str === '' || operators.includes(str[str.length - 1]) || this.#innerData.evaluated ) {
          btn = '0.';
          this.#innerData.evaluated ? str = btn : str += btn;
          this.#innerData.point = true;
          this.#innerData.evaluated = false;

        } else if ( this.#innerData.point ) {
          btn = '';

        } else {
          str += '.';
          this.#innerData.point = true;
        }

      } else if ( operators.includes(btn) ) {

        if ( str === '' ) {

          if ( btn === '-' ) {
            str += btn;

          } else {
            btn = '';
          }

        } else if ( str === '-' ) {

          if ( btn === '+' ) {            
            str = '';

          } else {
            btn = '';
          }

        } else if ( operators.includes( str[str.length - 1] ) || str[str.length - 1] === '.' ) {
          str = str.slice(0, str.length - 1) + btn;
          this.#innerData.point = false;

        } else {
          str += btn;
          this.#innerData.point = false;
          this.#innerData.evaluated = false;
        }

      } else if ( this.#innerData.evaluated ) {
        str = btn;
        this.#innerData.evaluated = false;

      } else {
        str += btn;
      }
    }
    
    display.textContent = str;
    this.#innerData.expressionString = str;
  }

  #checkDisplay() {
    let display = document.querySelector('.display');

    this.#innerData.displayFontSize = '70px';
    display.style.fontSize = this.#innerData.displayFontSize;

    while (display.clientWidth < display.scrollWidth || display.clientHeight < display.scrollHeight) {        
      this.#innerData.displayFontSize = `${parseInt( this.#innerData.displayFontSize ) - 1}px`;
      display.style.fontSize = this.#innerData.displayFontSize;
    }
  }

  #evaluate( string ) {
    const display = document.querySelector( '.display' );
    let result = +eval( string ).toFixed( 5 );
    display.textContent = result;
    this.#innerData.expressionString = result;
  }
}

let myCalc = new Calculator();
myCalc.renderSelf();

