function Calculator(n) {
  let self = this;

  (this.name = n),
    (this.total = 0),
    (this.equals = function () {}),
    (this.operator = ""),
    (this.one = document.querySelector("#one")),
    (this.two = document.querySelector("#two")),
    (this.three = document.querySelector("#three")),
    (this.four = document.querySelector("#four")),
    (this.five = document.querySelector("#five")),
    (this.six = document.querySelector("#six")),
    (this.seven = document.querySelector("#seven")),
    (this.eight = document.querySelector("#eight")),
    (this.nine = document.querySelector("#nine")),
    (this.zero = document.querySelector("#zero")),
    (this.multiply = document.querySelector("#multiply")),
    (this.divide = document.querySelector("#divide")),
    (this.plus = document.querySelector("#plus")),
    (this.subtract = document.querySelector("#subtract")),
    (this.period = document.querySelector("#period")),
    (this.display = document.querySelector("#display")),
    (this.calcName = document.querySelector("#calcName"));
}

let calcy = Calculator("Calcy 486-DX");
