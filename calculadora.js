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
    }else if(lastOperator === 'X'){
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
        if((lastOperator === '') &&  (num1 === result)){
            calculationsText.textContent = '';
            calculation = '';
            num1 = '';
        }
        calculation += numbers[i].textContent;
        calculationsText.textContent += numbers[i].textContent;
    })
}
for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', () => {
        if (num1 === undefined || num1 ===''){
            num1 = calculation;
        }
        if (lastOperator === undefined || lastOperator ===''){
            lastOperator = operators[i].textContent;
        }else{
            calculate();
            lastOperator = operators[i].textContent;
        }
        calculationsText.textContent += operators[i].textContent;
        calculation = '';
    })
}

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let multiplication = document.getElementById('multiplication');
let divition = document.getElementById('divition');
let equal = document.getElementById('equal');

equal.addEventListener('click', () => {
    calculate();
})
