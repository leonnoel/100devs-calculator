//Required abilities of a calculator:
//accept user inputs of number, operator, and another number - done
//should accept decimal numbers - done
//store inputs - done
//recognize inputs and perform calculations - done
//return a result - done

//Optional features:
//Should accept longer arithmetic operations. - done
//Display all input as it is being entered - done
//Store previous total as start of next operation. - done
//Clear button should clear all entries - done
//Should prevent invalid input(operators next to each other, two decimal points)


const buttonChoice = document.querySelectorAll("button");
// const showSelect = document.querySelector(".showSelect");
const outputScreen = document.querySelector(".screen");
let result = false;

buttonChoice.forEach( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.value){
            case 'C':
                outputScreen.value = '';
                break;
            case '=':
                try{
                    outputScreen.value = eval(outputScreen.value);
                } catch {
                    outputScreen.value = "Error"
                }
                break;
            default:
                outputScreen.value += e.target.value;
        }
    });
});