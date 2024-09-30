class Calculator {
  operator;
  a = 0;
  b = 0;
  res = 0;
  calculated = false;

  handleClick = (btn) => {
    const ops = ["+", "-", "X", "/"];
    const val = btn.srcElement.innerText;
    if (val === "=") this.calculate();
    else if (ops.includes(val)) this.setOperator(val); 
    else if (this.operator === undefined) this.setA(val);
    else this.setB(val);
  }

  updateResult = (val) => {
    const result = document.querySelector(".result");
    result.innerText = val;
  }

  setA(num) {
    if (this.a === 0) this.a = num; 
    else if (num === "." && this.a.includes(".")) return;
    else this.a += num;
    this.updateResult(this.a);
  }

  setB(num) {
    if (this.b === 0) this.b = num;
    else if (num === "." && this.b.includes(".")) return;
    else this.b += num;
    this.updateResult(this.b);
  }

  setOperator(str) {
    this.operator = str;
    this.updateResult(this.operator);
  }

  calculate = () => {
    if(this.operator == "+") this.res = Number(this.a) + Number(this.b);
    else if(this.operator == "-") this.res = Number(this.a) - Number(this.b);
    else if(this.operator == "X") this.res = Number(this.a) * Number(this.b);
    else if(this.operator == "/") this.res = Number(this.a) / Number(this.b);

    this.operator = undefined;
    this.a = 0;
    this.b = 0;
    this.updateResult(this.res);
  }

}

const cal = new Calculator;

const buttons = document.querySelectorAll(".button");
buttons.forEach(btn => {
  btn.addEventListener("click", cal.handleClick);
});
