// get user input and ensure it's valid
const keys = document.querySelector('.calc-buttons');
keys.addEventListener('click', event => {
    // shorthand for object deconstruction
    // same as event.target or event.target.value
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')) {
        return;
    } else {
        console.log(event);
    }
})
