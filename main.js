// let output = document.querySelector("#output");

// let num_7 = document.querySelector("#btn-7");
// let num_8 = document.querySelector("#btn-8");
// let num_9 = document.querySelector("#btn-9");
// let addition = document.querySelector("#btn-plus");

// let num_4 = document.querySelector("#btn-4");
// let num_5 = document.querySelector("#btn-5");
// let num_6 = document.querySelector("#btn-96");
// let multiply = document.querySelector("#btn-mul");

// let num_1 = document.querySelector("#btn-1");
// let num_2 = document.querySelector("#btn-2");
// let num_3 = document.querySelector("#btn-3");
// let division = document.querySelector("#btn-div");

// let num_0 = document.querySelector("#btn-0");
// let decimalPoint = document.querySelector("#btn-dot");
// let equalSign = document.querySelector("#btn-equal");
// let subtraction = document.querySelector("#btn-sub");

/* 



*/

// Button DOM //

let Calculator = {
  total: [],
  display: "",
  output: document.querySelector("#output"),

  buttons: {
    0: document.querySelector("#btn-0"),
    1: document.querySelector("#btn-1"),
    2: document.querySelector("#btn-2"),
    3: document.querySelector("#btn-3"),
    4: document.querySelector("#btn-4"),
    5: document.querySelector("#btn-5"),
    6: document.querySelector("#btn-6"),
    7: document.querySelector("#btn-7"),
    8: document.querySelector("#btn-8"),
    9: document.querySelector("#btn-9"),
    "+": document.querySelector("#btn-plus"),
    "-": document.querySelector("#btn-sub"),
    x: document.querySelector("#btn-mul"),
    "÷": document.querySelector("#btn-div"),
    ".": document.querySelector("#btn-dot"),
    "=": document.querySelector("#btn-equal"),
  },

  digitValue() {
    const { buttons } = this;
    for (let key in buttons) {
      let button = buttons[key];
      button.addEventListener("click", () => {
        let value = Number(buttons[key].innerText);
        console.log("Value:", value);
        this.answer(value);
      });
    }
  },

  answer(value) {
    const { output } = this;
    this.display += value;
    output.innerText = this.display;
    console.log("Output", output);
    console.log("Value", value);
  },
};

/* 

function Calculator(){
  this.methods = {
    "-" : (a,b) => a - b,
    "+" : (a,b) => a + b
  };

  this.calculate = function (str){

    let split = str.split(' ),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if(!thismethod[op] || isNaN(a) || isNaN(b)){
      return NaN;
    }
    return this.method[op](a,b);
  }

  this.addMethod = function (name, func){
    this.method[name] = func
  };
}

// Updates background color -- Using rgb() method
document.body.style.backgroundColor = color1.rgb();
'rgb(255, 40, 100)'

*/
