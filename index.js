screen = new function () {
    this.value = "";
    this.addValue = function (command) {
        this.value += String(command) + " ";
    },
    this.clearValue = function () {
        this.value = "";
    },
    this.setScreen = function () {
        try {
            document.getElementById("output").textContent = this.value;
            return "Success";
        }
        catch (e) {
            return("Warning: " + e)
        }
        
    }
}

// calculator = {
//     commandsArr: [],
//     executeCommands: function () {
//         if (commandsArr[0] !== typeof 1) {
//             screen.cleerValue();
//         }
//     }
// }



// function Button(name, value) {
//     this.name = name;
//     this.value = value;
// }

// elementList = document.querySelectorAll(".btn");

// console.log(elementList);