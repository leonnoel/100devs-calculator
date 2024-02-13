// let firstValue;
// let secondValue;
// let operator;
// let finalValue;
// let place = document.querySelector('h2')

// const storeValue = (event) => {
//    let value = event.srcElement
//    console.log(value.id)
//     if (firstValue === undefined) {
//         firstValue = value.innerHTML
//         place.innerHTML = firstValue
//     } else if (value.classList.contains('operator')) {
//         operator = value.innerHTML
//         place.innerHTML = operator
//     } else if (operator === undefined) {
//         firstValue += value.innerHTML
//         place.innerHTML = firstValue
//     } else if (secondValue === undefined) {
//         secondValue = value.innerHTML
//         place.innerHTML = secondValue
//     } else if (value.id === 'equals') {
//         let v1 = Number(firstValue)
//         let v2 = Number(secondValue)
//         checkOperation(operator, v1, v2)
//     } else {
//         secondValue += value.innerHTML
//         place.innerHTML = secondValue
//     }
//  }

// function checkOperation(op, fv, sv) {
//     if (op === '+') {
//        finalValue = sum(fv, sv)
//     } else if (op === '-') {
//         finalValue = sub(fv, sv)
//     } else if (op === 'X') {
//         finalValue = mul(fv, sv)
//     } else if (op === '/') {
//         finalValue = div(fv, sv)
//     }
//     place.innerHTML = finalValue
// }

// function sum(fv, sv) {
//     return fv + sv
// }

// function sub(fv, sv) {
//     return fv - sv
// }

// function mul(fv, sv) {
//     return fv * sv
// }

// function div(fv, sv) {
//     return fv / sv
// }

const calc = new MakeCalculator()

let onClick = document.querySelectorAll('span')

for (let i=0; i < onClick.length; i++) {
    onClick[i].addEventListener('click', calc.storeValue)
}

function MakeCalculator() {
    let firstValue;
    let secondValue;
    let operator;
    let finalValue;
    let place = document.querySelector('h2')

    this.storeValue = (event) => {
        let value = event.srcElement
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
             this.checkOperation(operator, v1, v2)
         } else {
             secondValue += value.innerHTML
             place.innerHTML = secondValue
         }
      }

      this.checkOperation = function(op, fv, sv) {
        if (op === '+') {
           finalValue = this.sum(fv, sv)
        } else if (op === '-') {
            finalValue = this.sub(fv, sv)
        } else if (op === 'X') {
            finalValue = this.mul(fv, sv)
        } else if (op === '/') {
            finalValue = this.div(fv, sv)
        }
        place.innerHTML = finalValue
    }
    
    this.sum = function(fv, sv) {
        return fv + sv
    }
    
    this.sub = function(fv, sv) {
        return fv - sv
    }
    
    this.mul = function(fv, sv) {
        return fv * sv
    }
    
    this.div = function(fv, sv) {
        return fv / sv
    }
}

