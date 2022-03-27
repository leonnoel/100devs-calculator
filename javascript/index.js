

const calculate = {
    clicked: 0,

    num: function(Event) {
        this.clicked = Event.target.innerText
        document.querySelector('h1').innerText(this.clicked.value)
    }

}

document.querySelector(".number").addEventListener('click', calculate.num(Event))