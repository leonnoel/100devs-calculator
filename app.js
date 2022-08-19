const calculator = {
    _accumulator: [],

    displayNums: function(arg){
        const pressedKey = document.querySelector(`span[data-key="${arg.keyCode}"]`);
        if(!pressedKey) return; 
        
        const value = document.getElementById('displayPlace');
        value.style.fontSize = '50px'
        value.style.fontFamily = 'Roboto'
        value.innerText += arg.key
    },
}

window.addEventListener('keydown', calculator.displayNums)




