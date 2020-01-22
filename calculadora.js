let calculationsText = document.getElementById('calculationsText');
let numbers = document.querySelectorAll('.number');

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', () => {
        calculationsText.textContent += numbers[i].textContent;
    })
}

