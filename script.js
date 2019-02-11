let input = "";
let inputArray = [];

function operate(operator, numb1, numb2){
    numb1 = parseInt(numb1);
    numb2 = parseInt(numb2);
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

function compute(){
    console.log("compute");
    for(i = 0; i < inputArray.length; i++){
        if(inputArray[i] == '*' || inputArray[i] ==  '/'){
            inputArray[i] = operate(inputArray[i], inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i+1, 1);
            inputArray.splice(i-1, 1);
            i--;
        }
    }

    for(i = 0; i < inputArray.length; i++){
        if(inputArray[i] == '+' || inputArray[i] ==  '-'){
            inputArray[i] = operate(inputArray[i], inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i+1, 1);
            inputArray.splice(i-1, 1);
            i--;
        }
    }

    display_output.textContent = inputArray[0];
}

function inputNumb(char){
    
    if(inputArray.length == 0 || isFunctionChar(input.charAt(input.length-1))){
        inputArray.push(char);
        console.log("push");
    }else{
        inputArray[inputArray.length-1] += char;
        console.log("input");
    }
    input += char;
    display_input.textContent = input;
}

function isFunctionChar(char){
    return char.match(/[*+/-]/g);
}

function inputFunc(func){
    if(input.charAt(input.length-1).match(/\d/g)){
        input += func;
        inputArray.push(func);
        display_input.textContent = input;
    }  
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
const display_output = document.querySelector('.output_display');

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

const equal_btn = document.querySelector('.equals');
equal_btn.addEventListener("click", function(event){
    compute();
});
