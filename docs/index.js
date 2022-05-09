if(!localStorage.getItem('currentValue')){
    localStorage.setItem("currentValue", 0)

}

display.innerText =localStorage.getItem('currentValue');


let calcobject ={
    display: document.getElementById("display"),


    handleButtonClicked: (btn) => {
        if(btn==="C"){
    this.display.innerText = this.display.innerText.slice(0, -1);
           
        }
        else if(btn==="Delete"){
            this.display.innerText = ""
}

         else if(btn==="X"){
            this.display.innerText +="*";
} 
    else {
        this.display.innerText += btn;}

    },
    
    calculate: () => {
        let expression = this.display.innerText;
        this.display.innerText = eval(expression)

        let Curr= localStorage.getItem('currentValue') 
        Curr = this.display.innerText
 localStorage.setItem("currentValue", Curr)   
    },

};





 