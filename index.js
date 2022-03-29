let numbers = document.querySelectorAll(".number");
let showed = document.querySelector(".values");

numbers.onclick = function(){myFunction()};

function myFunction(){
    console.log("click");
    //showed.innerHTML = numbers.innerHTML;
}



