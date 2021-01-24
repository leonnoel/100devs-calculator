/*GLOBAL*/
let num1, num2, op, checkbox
counter = 0


/********OBJECT DECLARATION *********/

const calculator = {
    butans : document.getElementsByClassName('butans'),
    body : document.querySelector('body'),
}

/******** OBJECT FUNCTIONS ********/

calculator.light = () => {
   if (document.getElementById('toggle').checked) {
        calculator.body.style.backgroundColor = 'white'
        calculator.body.style.color = 'black'
        calculator.body.style.transition = '.5s'
        document.getElementById('border-toggle').style.borderColor = 'black'
        for (let butan of calculator.butans) {
            butan.style.borderColor = 'black'
        }
    }   else {
            calculator.body.style.backgroundColor = 'black'
            calculator.body.style.color = 'white'
            calculator.body.style.transition = '.5s'
            document.getElementById('border-toggle').style.borderColor = 'white'
            for (let butan of calculator.butans) {
                butan.style.borderColor = 'white'
        }
    }       
}

calculator.add = () => {
    num1 = Number(document.querySelector('#result').value)
    document.querySelector('#result').value = ''
    op = 'add'
}

calculator.min = () => {
    num1 = Number(document.querySelector('#result').value)
    document.querySelector('#result').value = ''
    op = 'min'
}
calculator.mult = () => {
    num1 = Number(document.querySelector('#result').value)
    document.querySelector('#result').value = ''
    op = 'mult'
}
calculator.div = () => {
    num1 = Number(document.querySelector('#result').value)
    document.querySelector('#result').value = ''
    op = 'div'
}
calculator.changeSign = () => {
    if (document.querySelector('#result').value >= 0) {
        document.querySelector('#result').value *= -1    
    } else {
        document.querySelector('#result').value *= -1
    }
}
calculator.dec = () => {
    if (!document.querySelector('#result').value.includes('.')) {
        document.querySelector('#result').value += '.'
    } 
}
calculator.equals = () => {
    num2 = Number(document.querySelector('#result').value)
    counter += 1
    if (counter >= 3) {
        document.querySelector('#reveal').classList.remove('hidden')
    }
    if (!document.getElementById('fix').checked) {
        if (op ==='add') {
            document.querySelector('#result').value = num1 - num2
        }
        if (op ==='min') {
            document.querySelector('#result').value = num1 + num2
        }
        if (op ==='mult') {
            document.querySelector('#result').value = num1 / num2
        }
        if (op ==='div') {
            document.querySelector('#result').value = num1 + num2
        }
    } else {
        if (op ==='add') {
            document.querySelector('#result').value = num1 + num2
        }
        if (op ==='min') {
            document.querySelector('#result').value = num1 - num2
        }
        if (op ==='mult') {
            document.querySelector('#result').value = num1 * num2
        }
        if (op ==='div') {
            document.querySelector('#result').value = num1 / num2
        }
    }
    num1, num2 = 0
    op = ''
}

calculator.clear = () => {
    document.querySelector('#result').value = ''
}
calculator.del = () => {
    document.querySelector('#result').value = document.querySelector('#result').value.slice(0,-1)
}
calculator.zero = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 1
            } else {
                document.querySelector('#result').value += 1
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 0
            } else {
                document.querySelector('#result').value += 0
            }
        }
    }
}
calculator.one = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 0
            } else {
                document.querySelector('#result').value += 0
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 1
            } else {
                document.querySelector('#result').value += 1
            }
        }
    }
 
}
calculator.two = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 1
            } else {
                document.querySelector('#result').value += 1
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 2
            } else {
                document.querySelector('#result').value += 2
            }
        }
    }
  
}
calculator.three = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 2
            } else {
                document.querySelector('#result').value += 2
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 3
            } else {
                document.querySelector('#result').value += 3
            }
        }
    }
 
}
calculator.four = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 3
            } else {
                document.querySelector('#result').value += 3
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 4
            } else {
                document.querySelector('#result').value += 4
            }
        }
    }
   
}
calculator.five = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 4
            } else {
                document.querySelector('#result').value += 4
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 5
            } else {
                document.querySelector('#result').value += 5
            }
        }
    }
   
}
calculator.six = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 5
            } else {
                document.querySelector('#result').value += 5
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 6
            } else {
                document.querySelector('#result').value += 6
            }
        }
    }
   
}
calculator.sev = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 6
            } else {
                document.querySelector('#result').value += 6
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 7
            } else {
                document.querySelector('#result').value += 7
            }
        }
    }
  
}
calculator.eight = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 7
            } else {
                document.querySelector('#result').value += 7
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 8
            } else {
                document.querySelector('#result').value += 8
            }
        }
    }
   
}
calculator.nine = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
        if (!document.getElementById('fix').checked) {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 8
            } else {
                document.querySelector('#result').value += 8
            }
        } else {
            if (document.querySelector('#result').value == '') {
                document.querySelector('#result').value = 9
            } else {
                document.querySelector('#result').value += 9
            }
        }
    }
    
}

/**************Event Listeners****************/
document.querySelector('#ac').addEventListener('click', calculator.clear)
document.querySelector('#del').addEventListener('click', calculator.del)
document.querySelector('#change').addEventListener('click', calculator.changeSign)
document.querySelector('#div').addEventListener('click', calculator.div)
document.querySelector('#times').addEventListener('click', calculator.mult)
document.querySelector('#subtract').addEventListener('click', calculator.min)
document.querySelector('#plus').addEventListener('click', calculator.add)
document.querySelector('#decimal').addEventListener('click', calculator.dec)
document.querySelector('#equals').addEventListener('click', calculator.equals)
document.querySelector('#toggle').addEventListener('click', calculator.light)

/**************Add numbers to the DOM***************/
document.querySelector('#zero').addEventListener('click', calculator.zero)
document.querySelector('#one').addEventListener('click', calculator.one)
document.querySelector('#two').addEventListener('click', calculator.two)
document.querySelector('#three').addEventListener('click', calculator.three)
document.querySelector('#four').addEventListener('click', calculator.four)
document.querySelector('#five').addEventListener('click', calculator.five)
document.querySelector('#six').addEventListener('click', calculator.six)
document.querySelector('#sev').addEventListener('click', calculator.sev)
document.querySelector('#eight').addEventListener('click', calculator.eight)
document.querySelector('#nine').addEventListener('click', calculator.nine)

