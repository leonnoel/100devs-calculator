let answer = 0

document.querySelectorAll('button').forEach(b =>{
    b.addEventListener('click',() => {
        calculate(b.innerText)
    })
})

function calculate(s){
    document.querySelector('span').innerText = s
}