var a=0, b=0;
var plus=false, minus=false,multiply=false,divide=false, clear=false;
function insert(char) {
    var screen=document.getElementById('result');
    if (clear) {
        screen.innerHTML="";
        clear=false;
    }
    if (screen.innerHTML.length>=9) return;
    if (!isNaN(char) || char==='.') screen.innerHTML+=char;
    

    
    if (char==='+' || char==='-' || char==='x' || char==='/') {
        plus=minus=multiply=divide=false;
        if (char==='+') plus=true; 
        else if (char==='-') minus=true;
        else if (char==='x') multiply=true;
        else if (char==='/') divide=true;
        a=Number(screen.innerHTML);
        screen.innerHTML="";
    }
    if (char==='=') {
        b=Number(screen.innerHTML);
        if (plus) screen.innerHTML=a+b;
        else if (minus) screen.innerHTML=a-b;
        else if (multiply) screen.innerHTML=a*b;
        else if (divide) screen.innerHTML=Math.round(a/b*100000)/100000;
        plus=minus=multiply=divide=false;
        clear=true;
    }
    console.log("First number is" + a);
    console.log("Second number is" + b);
    console.log(screen.innerHTML);
}