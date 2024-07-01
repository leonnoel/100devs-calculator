function MakeCalculator() {
  this.opSwitch = false
  this.operator = ''
  let output = 0
  let a='', b=''
  let decimalSwitch = false;


  this.readOut = function(num) {
    let test = document.querySelector('#output')
    test.innerText = num
    // just for testing
    console.log(`opSwitch = ${this.opSwitch}`)
  }

  // function to get numbers from button ids
  this.getVal = function(id) {
    if (this.opSwitch == true) {
      (b == '0') ? b = id : b += id
      this.readOut(b)
    }
    else {
      (a == '0') ? a = id : a += id
      this.readOut(a)
    }
    
  }
  // special decimal function
  this.decimal = function() {
    if (decimalSwitch == true) return
    else if (this.opSwitch == true) {
      (b == '') ? b = '0.' : b += '.'
      this.readOut(b)
    }
    else {
      (a == '') ? a = '0.' : a += '.'
      this.readOut(a)
    }
    decimalSwitch = true
  }
  // set operator
  this.setOperation = function(id) {
    // document.querySelector('#output').innerText = ''
    this.operator = id
    this.opSwitch = true
    decimalSwitch = false
  }
  // sum function
  this.sum = function (a,b) {
    output = a + b
    if (output%1 != 0) {
      output = parseFloat(output.toFixed(6))
    }
    this.readOut(output)
  }
  // subtract function
  this.subtract = function (a,b) {
    output = a - b
    if (output%1 != 0) {
      output = parseFloat(output.toFixed(4))
    }
    this.readOut(output)
  }
  // multiply function
  this.multiply = function (a,b) {
    console.log(a,b)
    output = a*b
    if (output%1 != 0) {
      output = parseFloat(output.toFixed(4))
    }
    this.readOut(output)
  }
  // divide function
  this.divide = function (a,b) {
    output = a/b
    if (output%1 != 0) {
      output = parseFloat(output.toFixed(4))
    }
    this.readOut(output)
  }

  this.doMath = function (operator) {
    // if (this.opSwitch = true) {
    //   return output;
    // }
    switch (operator) {
      case "add":
        this.sum(+a,+b);
        break;
      case "subtract":
        this.subtract(+a,+b);
        break;
      case "multiply":
        this.multiply(+a,+b);
        break;
      case "divide":
        this.divide(+a,+b);
        break;
    }
    // no chaining of operations
    a = '', b='';
    // chaining of operations
    // a = output, b='';
    decimalSwitch = false
    this.opSwitch = false
  }
  // need a fucntion to GET a, b

  //GETTER - use 'calc.a' to get the value of a
  // set with: calc.a = value
  Object.defineProperty(this, 'a', {
    get: function() {
      return a
    },
    set: function(value) {
      a = value
    }
  })
  Object.defineProperty(this, 'b', {
    get: function() {
      return b
    },
    set: function(value) {
      b = value
    }
  })
  Object.defineProperty(this, 'output', {
    get: function() {
      return output
    },
    set: function(value) {
      output = value
    }
  })

}

const calc = new MakeCalculator()

let nums = document.querySelectorAll('.num')
nums.forEach((num) => {
  num.addEventListener('click', () => {
    calc.getVal(num.id)
    // calc.
  });
 })

let ops = document.querySelectorAll('.operator')
ops.forEach((op) => {
  op.addEventListener('click', () => {
    calc.setOperation(op.id)
    // calc.
  });
 })

let equalsBtn = document.querySelector('#equals')
equalsBtn.addEventListener('click', () => {
    calc.doMath(calc.operator)
    // calc.
  });

let decimalBtn = document.querySelector('#decimal')
decimalBtn.addEventListener('click', () => calc.decimal())