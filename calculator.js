class Calc{
    constructor(){
        this.display = document.querySelector('.display');
        this.result = 0;
    }

    clickEvents(){
        document.querySelectorAll('.num').forEach(num => num.addEventListener('click', () => this.press(num.innerHTML)));
        document.querySelector('.add').addEventListener('click', () => this.add());
        document.querySelector('.subtract').addEventListener('click', () => this.subtract());
        document.querySelector('.multiply').addEventListener('click', () => this.multiply());
        document.querySelector('.divide').addEventListener('click', () => this.divide());
        document.querySelector('.equal').addEventListener('click', () => this.equals());
        document.querySelector('.clear').addEventListener('click', () => this.clear());
        document.querySelector('.decimal').addEventListener('click', () => this.decimal());
    }
    
    press(num){
        if (this.display.innerHTML === '0'){
            this.display.innerHTML = num;
        }else{
            this.display.innerHTML = this.display.innerHTML + num;
        }
    }

    add(){
        this.display.innerHTML += '+';
    }

    subtract(){
        this.display.innerHTML += '-';
    }

    multiply(){
        this.display.innerHTML += '*';
    }

    divide(){
        this.display.innerHTML += '/';
    }

    clear(){
        this.display.innerHTML = '0';
    }

    decimal(){
        this.display.innerHTML += '.';
    }

    equals(){
        this.result = eval(this.display.innerHTML).toFixed(2);
        this.display.innerHTML = this.result;
    }
}

const calculator = new Calc()
calculator.clickEvents()