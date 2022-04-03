
// Add event listener loader

  document.getElementById('one').addEventListener('click', () => calc.accum(1))
  document.getElementById('two').addEventListener('click', () => calc.accum(2))
  document.getElementById('three').addEventListener('click', () => calc.accum(3))
  document.getElementById('four').addEventListener('click', () => calc.accum(4))
  document.getElementById('five').addEventListener('click', () => calc.accum(5))
  document.getElementById('six').addEventListener('click', () => calc.accum(6))
  document.getElementById('seven').addEventListener('click', () => calc.accum(7))
  document.getElementById('eight').addEventListener('click', () => calc.accum(8))
  document.getElementById('nine').addEventListener('click', () => calc.accum(9))
  document.getElementById('zero').addEventListener('click', () => calc.accum(0))
  document.getElementById('plus').addEventListener('click', () => calc.accum('+'))
  document.getElementById('divide').addEventListener('click',() => calc.accum('/'))
  document.getElementById('multiply').addEventListener('click', () => calc.accum('*'))
  document.getElementById('minus').addEventListener('click', () => calc.accum('-'))
  document.getElementById('dot').addEventListener('click', () => calc.accum('.'))
  document.getElementById('equalz').addEventListener('click', () => calc.evalAccum(calc.calcAccumulator))


// Calculator object V1 (Try to make Object without using window.eval)

const calc = {
  calcAccumulator : '',

  accum : function(n) {
    this.calcAccumulator += n.toString()
    document.getElementById('display').textContent = this.calcAccumulator
    console.log(this.calcAccumulator)
  },

// Cheating by evaluating using window.eval(), otherwise use library or prepare long switch statements

  evalAccum : function(x){
    
    console.log(x)
      console.log(eval(x))
      document.getElementById('display').textContent = eval(x)
      this.calcAccumulator = ''

  },
}

// Test this Later

// if (x.indexOf('++')>-1){
    //   x = x.replace('++','+')
    //   document.getElementById('display').textContent = eval(x)
    //   console.log(x)
    // }