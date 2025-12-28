const calculator = {
  display: "0",
  previousNumber: null,
  operator: null,

  updateScreen: function () {
    document.querySelector(".display").textContent = this.display;
  },

  handleNumber: function (num) {
    if (this.display === "0") {
      this.display = num;
    } else {
      this.display += num;
    }
    this.updateScreen();
  },

  handleOperation: function (op) {
    this.previousNumber = this.display;
    this.operator = op;
    this.display = "0";
  },

  handleEquals: function () {
    const result = eval(this.previousNumber + this.operator + this.display);
    if (result === Infinity || result === -Infinity) {
      this.display = "0";
    } else {
      this.display = Number.isInteger(result)
        ? result.toString()
        : result.toFixed(2);
    }
    this.updateScreen();
    this.previousNumber = null;
    this.operator = null;
  },

  handleClear: function () {
    this.display = "0";
    this.previousNumber = null;
    this.operator = null;
    this.updateScreen();
  },

  init: function () {
    this.updateScreen();
    let buttons = document.querySelectorAll(".button");

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.id;
        if (id === "=") {
          this.handleEquals();
        } else if (id === "clear") {
          this.handleClear();
        } else if (["+", "-", "*", "/"].includes(id)) {
          this.handleOperation(id);
        } else {
          this.handleNumber(id);
        }
      });
    });
  },
};

calculator.init();