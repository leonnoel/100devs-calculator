
// let buttonPress = document.querySelector('#one')
// let buttonPress = document.querySelector('#one')
// let buttonPress = document.querySelector('#one')
// let buttonPress = document.querySelector('#one')
// let buttonPress = document.querySelector('#one')
// let buttonPress = document.querySelector('#one')
// let buttonPress = document.querySelector('#one')
// let buttonPress = document.querySelector('#one')
// let buttonPress = document.querySelector('#one')
// let buttonPress = document.querySelector('#one')

// console.log(buttonPress)

// buttonPress.forEach(item => {
//     item.addEventListener('click', );
//   });


//   function Calculator() {
//     this.firstValue = null
//     this.SecondValue = null
//     this.operator = null
//     this.total = 0

//     this.storeValue(option, param) {
//         if (option === 'number' && this.operator === null) {
//             this.firstValue += param.toString()
//         } else if ((option === 'number' && this.operator !== null)) {
//             this.SecondValue += param.toString()
//         } else if () {

//         }
//     }

    

//     this.add = function() {
//         return this.firstValue += this.secondValue
//     }

//     this.subtract = function() {
//         return this.firstValue += this.secondValue
//     }

//     this.divide = function() {
//         return this.firstValue /= this.secondValue
//     }

//     this.multiply = function() {
//         return this.firstValue *= this.secondValue
//     }

//   }

//   let calc = Calculator()

let firstValue;
let secondValue;
let operator;
let finalValue;
let place = document.querySelector('h2')
// let place = document.querySelector('h2').innerHTML;

const storeValue = (event) => {
   let value = event.srcElement
   console.log(value.id)
    if (firstValue === undefined) {
        firstValue = value.innerHTML
        place.innerHTML = firstValue
    } else if (value.classList.contains('operator')) {
        operator = value.innerHTML
        place.innerHTML = operator
    } else if (operator === undefined) {
        firstValue += value.innerHTML
        place.innerHTML = firstValue
    } else if (secondValue === undefined) {
        secondValue = value.innerHTML
        place.innerHTML = secondValue
    } else if (value.id === 'equals') {
        let v1 = Number(firstValue)
        let v2 = Number(secondValue)
        checkOperation(operator, v1, v2)
    } else {
        secondValue += value.innerHTML
        place.innerHTML = secondValue
    }
 }

function checkOperation(op, fv, sv) {
    if (op === '+') {
       finalValue = sum(fv, sv)
    } else if (op === '-') {
        finalValue = sub(fv, sv)
    } else if (op === 'X') {
        finalValue = mul(fv, sv)
    } else if (op === '/') {
        finalValue = div(fv, sv)
    }
    place.innerHTML = finalValue
}

function sum(fv, sv) {
    return fv + sv
}

function sub(fv, sv) {
    return fv - sv
}

function mul(fv, sv) {
    return fv * sv
}

function div(fv, sv) {
    return fv / sv
}

let onClick = document.querySelectorAll('span')

for (let i=0; i < onClick.length; i++) {
    onClick[i].addEventListener('click', storeValue)
}







        // if (option === 'number' && this.operator === null) {
        //     this.firstValue += param.toString()
        // } else if ((option === 'number' && this.operator !== null)) {
        //     this.SecondValue += param.toString()
        // } else if () {

        // }