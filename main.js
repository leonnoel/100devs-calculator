class Calculator {
  constructor() {
    this.display = new Display();
    this.storedValue = "0";
    this.heldValue = "0";
    this.operation = "";
    this.display.changeValue(this.heldValue);
  }
  operate() {
    switch (this.operation) {
      case "+":
        this.heldValue = `${+this.heldValue + +this.storedValue}`;
        break;
      case "-":
        this.heldValue = `${+this.storedValue - +this.heldValue}`;
        break;
      case "x":
        this.heldValue = `${+this.heldValue * +this.storedValue}`;
        break;
      case "/":
        this.heldValue = `${+this.storedValue / +this.heldValue}`;
        break;
    }
    this.operation = "";
    this.storedValue = "0";
    this.display.changeValue(this.heldValue);
  }
  setOperation(value) {
    this.operation = value;
    this.storedValue = this.heldValue;
    this.heldValue = "0";
    this.display.changeValue(this.heldValue);
  }
  setValue(value) {
    if (this.heldValue === "0") this.heldValue = "";
    this.heldValue += value;
    this.display.changeValue(this.heldValue);
  }
}

class Display {
  constructor() {
    this.input = document.querySelector("input");
  }
  changeValue(value) {
    this.input.value = value;
  }
}

class Buttons {
  constructor() {
    this.calc = new Calculator();
    this.buttons = document.querySelectorAll("button");
    this.buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let value = event.target.textContent;
        if (value.match(/[.\d]/g)) {
          this.calc.setValue(value);
        } else if (value.match(/[\+\-x\/]/g)) {
          this.calc.setOperation(value);
        } else if (value.match(/=/g)) {
          this.calc.operate();
        }
      });
    });
  }
}

const calc = new Buttons();
