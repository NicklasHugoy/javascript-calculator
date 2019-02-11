let input = "";

function operate(operator, numb1, numb2){
    switch (operator) {
        case '+':
            return add(numb1, numb2);
        case '-':
            return subtract(numb1, numb2);
        case '*':
            return multiply(numb1, numb2);
        case '/':
            return divide(numb1, numb2);
        default:
            break;
    }
}

function inputNumb(char){
    input += char;
    display_input.textContent = input;
}

function inputFunc(func){
    if(input.charAt(input.length-1).match(/\d/g)){
        input += func;
    }
    display_input.textContent = input;
}

function add(numb1, numb2){
    return numb1 + numb2;
}

function subtract(numb1, numb2){
    return numb1 - numb2;
}

function multiply(numb1, numb2){
    return numb1 * numb2;
}

function divide(numb1, numb2){
    return numb1/numb2;
}

const display_input = document.querySelector('.input_display');

const cal_btns = document.querySelectorAll('.calc_btn');
cal_btns.forEach(function(element){
    element.addEventListener("click", function(event){
        inputNumb(event.target.textContent);
    });
});

const func_btns = document.querySelectorAll('.func_btn');
func_btns.forEach(function(element){
    element.addEventListener("click", function(event){
        inputFunc(event.target.textContent);
    });
});