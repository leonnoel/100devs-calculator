/* script.js — Simple OOP Calculator */

class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.clear();
  }

  clear() {
    this.current = '';   // currently typed number (string)
    this.previous = '';  // previous number (string)
    this.operation = null; // '+', '-', '*', '/'
    this.justCalculated = false; // helps with chaining after equals
    this.updateDisplay();
  }

  appendNumber(char) {
    if (char === '.' && this.current.includes('.')) return;
    if (char === '0' && this.current === '0') return;
    if (this.justCalculated) {
      // start a new entry after a result was shown
      this.current = char === '.' ? '0.' : char;
      this.justCalculated = false;
      this.updateDisplay();
      return;
    }
    this.current = (this.current === '0' && char !== '.') ? char : this.current + char;
    this.updateDisplay();
  }

  chooseOperation(op) {
    if (this.current === '' && this.previous === '') {
      // nothing to do (no operand)
      return;
    }

    if (this.current === '' && this.previous !== '') {
      // allow changing the operation before typing the next number
      this.operation = op;
      return;
    }

    if (this.previous !== '') {
      // chain operations: compute previous op first
      this.compute();
    } else {
      this.previous = this.current || this.previous;
    }

    this.operation = op;
    this.current = '';
    this.justCalculated = false;
    this.updateDisplay();
  }

  compute() {
    const prev = parseFloat(this.previous);
    const curr = parseFloat(this.current);

    if (isNaN(prev) && isNaN(curr)) return;
    let result;

    if (isNaN(prev)) {
      result = curr;
    } else if (isNaN(curr)) {
      result = prev;
    } else {
      switch (this.operation) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = (curr === 0) ? 'Error' : prev / curr; break;
        default: return;
      }
    }

    if (result === 'Error') {
      this.current = 'Error';
    } else {
      // limit floating precision (avoid long decimals)
      if (typeof result === 'number' && !Number.isInteger(result)) {
        this.current = String(parseFloat(result.toPrecision(12)));
      } else {
        this.current = String(result);
      }
    }

    this.previous = '';
    this.operation = null;
    this.justCalculated = true;
    this.updateDisplay();
  }

  updateDisplay() {
    // show current if present, otherwise show previous (or 0)
    const toShow = (this.current !== '') ? this.current : (this.previous !== '' ? this.previous : '0');
    this.displayElement.textContent = toShow;
  }
}

/* Wiring UI -> Calculator */
const display = document.getElementById('display');
const calc = new Calculator(display);

/* number buttons */
document.querySelectorAll('button[data-number]').forEach(btn => {
  btn.addEventListener('click', () => calc.appendNumber(btn.dataset.number));
});

/* operation buttons */
document.querySelectorAll('button[data-operation]').forEach(btn => {
  btn.addEventListener('click', () => calc.chooseOperation(btn.dataset.operation));
});

/* actions */
const clearBtn = document.querySelector('button[data-action="clear"]');
const equalsBtn = document.querySelector('button[data-action="equals"]');

clearBtn.addEventListener('click', () => calc.clear());
equalsBtn.addEventListener('click', () => calc.compute());

/* keyboard support */
window.addEventListener('keydown', (e) => {
  // numbers and dot
  if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
    e.preventDefault();
    calc.appendNumber(e.key);
    return;
  }

  // operations
  if (['+','-','*','/'].includes(e.key)) {
    e.preventDefault();
    calc.chooseOperation(e.key);
    return;
  }

  if (e.key === 'Enter' || e.key === '=') {
    e.preventDefault();
    calc.compute();
    return;
  }

  if (e.key === 'Escape') {
    e.preventDefault();
    calc.clear();
    return;
  }

  if (e.key === 'Backspace') {
    // optional: remove last digit (not requested but common). Implement simple delete:
    e.preventDefault();
    if (calc.current && calc.current !== 'Error') {
      calc.current = calc.current.slice(0, -1);
      if (calc.current === '') calc.current = '';
      calc.updateDisplay();
    }
    return;
  }
});
