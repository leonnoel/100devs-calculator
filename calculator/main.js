document
  .querySelectorAll(".input")
  .forEach((element) => element.addEventListener("click", getInput));

function getInput(click) {
  if (click.target.classList.contains("zero")) {
    document.querySelector(".input-screen").innerText += "0";
  }
  if (click.target.classList.contains("one")) {
    document.querySelector(".input-screen").innerText += "1";
  }
  if (click.target.classList.contains("two")) {
    document.querySelector(".input-screen").innerText += "2";
  }
  if (click.target.classList.contains("three")) {
    document.querySelector(".input-screen").innerText += "3";
  }
  if (click.target.classList.contains("four")) {
    document.querySelector(".input-screen").innerText += "4";
  }
  if (click.target.classList.contains("five")) {
    document.querySelector(".input-screen").innerText += "5";
  }
  if (click.target.classList.contains("six")) {
    document.querySelector(".input-screen").innerText += "6";
  }
  if (click.target.classList.contains("seven")) {
    document.querySelector(".input-screen").innerText += "7";
  }
  if (click.target.classList.contains("eight")) {
    document.querySelector(".input-screen").innerText += "8";
  }
  if (click.target.classList.contains("nine")) {
    document.querySelector(".input-screen").innerText += "9";
  }
  if (click.target.classList.contains("divide")) {
    document.querySelector(".input-screen").innerText += "/";
  }
  if (click.target.classList.contains("multiply")) {
    document.querySelector(".input-screen").innerText += "*";
  }
  if (click.target.classList.contains("add")) {
    document.querySelector(".input-screen").innerText += "+";
  }
  if (click.target.classList.contains("subtract")) {
    document.querySelector(".input-screen").innerText += "-";
  }
  if (click.target.classList.contains("equals")) {
    const answer = eval(document.querySelector(".input-screen").innerText);
    document.querySelector(".input-screen").innerText = ` ${answer}`;
  }
  if (click.target.classList.contains("dot")) {
    document.querySelector(".input-screen").innerText += ".";
  }
}
