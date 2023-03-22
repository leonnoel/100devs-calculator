const calculator = {
    eval : 0,
    add1(){
        document.querySelector('h1').innerText+="1"
    },
    add2(){
        document.querySelector('h1').innerText+="2"
    },
    add3(){
        document.querySelector('h1').innerText+="3"
    },
    add4(){
        document.querySelector('h1').innerText+="4"
    },
    add5(){
        document.querySelector('h1').innerText+="5"
    },
    add6(){
        document.querySelector('h1').innerText+="6"
    },
    add7(){
        document.querySelector('h1').innerText+="7"
    },
    add8(){
        document.querySelector('h1').innerText+="8"
    },
    add9(){
        document.querySelector('h1').innerText+="9"
    },
    addDecimal(){
        document.querySelector('h1').innerText+="."
    },
    addDash(){
        document.querySelector('h1').innerText+="-"
    },
    addTimes(){
        document.querySelector('h1').innerText+="*"
    },
    addPlus(){
        document.querySelector('h1').innerText+="+"
    },
    addSlash(){
        document.querySelector('h1').innerText+="/"
    },
    add0(){
        document.querySelector('h1').innerText+='0'
    },
    evaluate(){

        this.eval = eval(document.querySelector('h1').innerText)
        // console.log(this.eval)
        alert(this.eval)
        document.querySelector('h1').innerText= ""

    }

}

document.querySelector('#n1').addEventListener('click' , calculator.add1);
document.querySelector('#n2').addEventListener('click' , calculator.add2);
document.querySelector('#n3').addEventListener('click' , calculator.add3);
document.querySelector('#n4').addEventListener('click' , calculator.add4);
document.querySelector('#n5').addEventListener('click' , calculator.add5);
document.querySelector('#n6').addEventListener('click' , calculator.add6);
document.querySelector('#n7').addEventListener('click' , calculator.add7);
document.querySelector('#n8').addEventListener('click' , calculator.add8);
document.querySelector('#n9').addEventListener('click' , calculator.add9);
document.querySelector('#ndot').addEventListener('click' , calculator.addDecimal);
document.querySelector('#n-').addEventListener('click' , calculator.addDash);
document.querySelector('#nX').addEventListener('click' , calculator.addTimes);
document.querySelector('#nplus').addEventListener('click' , calculator.addPlus);
document.querySelector('#nslash').addEventListener('click' , calculator.addSlash);
document.querySelector('#n0').addEventListener('click' , calculator.add0);
document.querySelector('#neq').addEventListener('click', calculator.evaluate);





// // function add1(){
// //     document.querySelector('#display').innerHTML += "1"
// //     }; 

// document.querySelector('#n2').addEventListener('click' , add2);

// function add2(){
//     document.querySelector('#display').innerHTML += "2"
//     }; 
