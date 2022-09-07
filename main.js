const digitPress = document.querySelectorAll('.btncalcdigit')
const operatePress = document.querySelectorAll(".operatorbtn");

let display = document.querySelector('.calcdisplay')
display.textContent = '0'


function Calculator() {
  let total = 0;
  let num = 0;
  let arr = [];

  this.numappend = function (numDigit) {
    if (numDigit == "." && arr[arr.length - 1] == ".") return;
    arr.push(numDigit);

    num = arr.join("") * 1;
    display.textContent = num;
  };

  this.display = function () {
    display.textContent = parseFloat(total.toFixed(10));
  };

  this.calculate = function (operatorStr) {
    if (operatorStr == "+") {
      total += num;
    }
    if (operatorStr == "-") {
      total = total - num;
    }
    if (operatorStr == "X") {
      total = total * num;
    }
    if (operatorStr == "/") {
      total = total / num;
    }
    if (operatorStr == "=") {
      total += 0;
    }
    console.log(num, total);
    arr = [];
    return this.display();
  };
}

const myCalc = new Calculator();

digitPress.forEach(element =>{
element.addEventListener("click", function (event) {
  myCalc.numappend(event.target.textContent);
    console.log(event.target.textContent)
});

});

operatePress.forEach((element) => {
  element.addEventListener("click", function (event) {
    myCalc.calculate(event.target.textContent);
    console.log(event.target.textContent);
  });
});
