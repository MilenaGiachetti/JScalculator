let calculationsText = document.getElementById('calculationsText');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let num1;
let num2;
let calculation = '';
let lastOperator;
let result;

function calculate(){
    num2 = calculation;
    result = '';
    if(lastOperator === '-'){
        result = (+num1) - (+num2);
    }else if(lastOperator === '+'){
        result = (+num1) + (+num2);
    }else if(lastOperator === '*'){
        result = (+num1) * (+num2);
    }else if(lastOperator === '/'){
        result = (+num1) / (+num2);
    }
    calculationsText.textContent = result;
    num1 = result;
    lastOperator = '';
    num2 = '';
}

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', () => {
        if (lastOperator === '' && num1 === result){
            calculationsText.textContent = '';
            calculation = '';
            num1 = '';
        }
        calculation += numbers[i].textContent;
        calculationsText.textContent += numbers[i].textContent;
    })
}

for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', () => {
        if (num1 === undefined || num1 === ''){
            num1 = calculation !== "" ? calculation : 0;
        }
        if (lastOperator === undefined || lastOperator ===''){
            lastOperator = operators[i].textContent;
        }else{
            calculate();
            lastOperator = operators[i].textContent;
        }
        calculationsText.textContent += ' ' + operators[i].textContent + ' ';
        calculation = '';
    })
}

let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let mode = document.getElementById('mode');
let body = document.querySelector("body");

equal.addEventListener('click', () => {
    calculate();
})

clear.addEventListener('click', () => {
    calculationsText.textContent = '';
    num1 = '';
    lastOperator = '';
    num2 = '';
})

mode.addEventListener('click', () => {
    if (body.classList.contains("darkMode")) {
        body.classList.remove("darkMode")
    } else {
        body.classList.add("darkMode")
    }
})
