const result = document.querySelector('.result');

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');

const operators = document.querySelectorAll('.operators input');

for (let i = 0; i < operators.length; i++){
    operators[i].onclick = function(){
        let a = Number(number1.value);
        let b = Number(number2.value);
        let c = operators[i].value;
        if (c === '+'){
            let total = a + b;
            result.textContent = total;
            resetCalc()
        } else if (c === '-'){
            let total = a - b;
            result.textContent = total;
            resetCalc()
        } else if (c === '*'){
            let total = a * b;
            result.textContent = total;
            resetCalc()
        }else{
            let total = a / b;
            result.textContent = total;
            resetCalc()
        }
    }
}
function resetCalc(){
    number1.value = '';
    number2.value = '';
} 