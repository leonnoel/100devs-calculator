let spans = document.querySelectorAll("span");
for (const button of spans) {
    button.addEventListener('click', Hi);
}

let answer = document.querySelector("#answer");
function Hi(){
    console.log("HEY!");
    answer.innerHTML = "0000";
}

function Calculator(){

}

let calc = new Calculator();