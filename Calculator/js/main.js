const keys = document.querySelector('.buttons');
    keys.addEventListener('click',event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')){
            return;
        } else {
            console.log(event,value)
        }
    });