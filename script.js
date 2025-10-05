/* OOP Calculator with cable pulse animation */
class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.clear();
  }

  clear() {
    this.current = '';
    this.previous = '';
    this.operation = null;
    this.justCalculated = false;
    this.updateDisplay();
  }

  appendNumber(char) {
    if (char === '.' && this.current.includes('.')) return;
    if (this.justCalculated) {
      this.current = (char === '.') ? '0.' : char;
      this.justCalculated = false;
    } else {
      this.current = (this.current === '0' && char !== '.') ? char : this.current + char;
    }
    this.updateDisplay();
  }

  chooseOperation(op) {
    if (this.current === '' && this.previous === '') return;
    if (this.current === '' && this.previous !== '') {
      this.operation = op; return;
    }
    if (this.previous !== '') this.compute();
    else this.previous = this.current;
    this.operation = op;
    this.current = '';
    this.updateDisplay();
  }

  compute() {
    const prev = parseFloat(this.previous);
    const curr = parseFloat(this.current);
    if (isNaN(prev) && isNaN(curr)) return;
    let result;
    if (isNaN(prev)) result = curr;
    else if (isNaN(curr)) result = prev;
    else {
      switch (this.operation) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = (curr === 0) ? 'Error' : prev / curr; break;
        default: return;
      }
    }
    this.current = (result === 'Error') ? 'Error' :
      String(Number.isInteger(result) ? result : parseFloat(result.toPrecision(12)));
    this.previous = '';
    this.operation = null;
    this.justCalculated = true;
    this.updateDisplay();
  }

  backspace() {
    if (this.justCalculated) { this.current = ''; this.justCalculated = false; }
    else this.current = this.current.slice(0, -1);
    this.updateDisplay();
  }

  updateDisplay() {
    this.displayElement.textContent = this.current || this.previous || '0';
  }
}

/* --- Wire up --- */
const display = document.getElementById('display');
const calc = new Calculator(display);
const cable = document.querySelector('.cable');

/* Buttons */
document.querySelectorAll('[data-number]').forEach(b =>
  b.addEventListener('click', () => calc.appendNumber(b.dataset.number))
);
document.querySelectorAll('[data-operation]').forEach(b =>
  b.addEventListener('click', () => calc.chooseOperation(b.dataset.operation))
);
document.querySelectorAll('[data-action]').forEach(b => {
  if (b.dataset.action === 'equals')
    b.addEventListener('click', () => calc.compute());
  if (b.dataset.action === 'clear')
    b.addEventListener('click', () => {
      calc.clear();
      cable.classList.add('pulse');
      setTimeout(() => cable.classList.remove('pulse'), 400);
    });
});

/* Keyboard support */
window.addEventListener('keydown', e => {
  if ((e.key >= '0' && e.key <= '9') || e.key === '.') calc.appendNumber(e.key);
  if (['+','-','*','/'].includes(e.key)) calc.chooseOperation(e.key);
  if (e.key === 'Enter' || e.key === '=') calc.compute();
  if (e.key === 'Escape') {
    calc.clear();
    cable.classList.add('pulse');
    setTimeout(() => cable.classList.remove('pulse'), 400);
  }
  if (e.key === 'Backspace') calc.backspace();
});
