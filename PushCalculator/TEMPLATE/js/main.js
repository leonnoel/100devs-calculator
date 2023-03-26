
    // adding event listeners to the numbers
    document.getElementById('zero').addEventListener('click', function() { displayNumber('#zero') });
    document.getElementById('one').addEventListener('click', function() { displayNumber('#one') });
    document.getElementById('two').addEventListener('click', function() { displayNumber('#two') });
    document.getElementById('three').addEventListener('click', function() { displayNumber('#three') });
    document.getElementById('four').addEventListener('click', function() { displayNumber('#four') });
    document.getElementById('five').addEventListener('click', function() { displayNumber('#five') });
    document.getElementById('six').addEventListener('click', function() { displayNumber('#six') });
    document.getElementById('seven').addEventListener('click', function() { displayNumber('#seven') });
    document.getElementById('nine').addEventListener('click', function() { displayNumber('#nine') });

    // adding event listeners to the operators
    document.getElementById('plus').addEventListener('click', function() { 
        displayOperator('#plus')
    })
    document.getElementById('minus').addEventListener('click', function() { 
        displayOperator('#minus')
    })
    document.getElementById('divide').addEventListener('click', function() { 
        displayOperator('#divide')
    })
    document.getElementById('multiply').addEventListener('click', function() { 
        displayOperator('#multiply')
    })
    document.getElementById('equal').addEventListener('click', calculateAndDisplay)

    document.getElementById('comma').addEventListener('click', () => {
        document.getElementById('display').innerHTML += '.'
    })


    // display the clicked number
    function displayNumber(nmb){
        let number = Number(document.querySelector(`${nmb}`).value)
        document.querySelector('#display').innerText += number
    }

    //display the clicked operator
    function displayOperator(opr){
        let operator = document.querySelector(`${opr}`).value
        document.querySelector('#display').innerText += operator
    }

    // calculate and display the result
    function calculateAndDisplay(){
        let nums = document.querySelector('#display').innerText
        let result = eval(nums)
        document.querySelector('#display').innerText = result

    }



