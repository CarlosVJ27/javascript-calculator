const result = document.querySelector('.result');

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');

const suma = document.querySelector('.sum');
const resta = document.querySelector('.rest');
const multiplicacion = document.querySelector('.multiply');
const division = document.querySelector('.division');

function sumOperation() {
   let a = Number(number1.value);
   let b = Number(number2.value);
   let total = a + b;
   result.textContent = total;
   resetCalc()
}
function restOperation() {
    let a = Number(number1.value);
    let b = Number(number2.value);
    let total = a - b;
    result.textContent = total;
    resetCalc()
}
function multiplyOperation() {
    let a = Number(number1.value);
    let b = Number(number2.value);
    let total = a * b;
    result.textContent = total;
    resetCalc()
}
function divisionOperation() {
    let a = Number(number1.value);
    let b = Number(number2.value);
    let total = a / b;
    result.textContent = total;
    resetCalc()
}

suma.addEventListener('click', sumOperation);

resta.addEventListener('click', restOperation);

multiplicacion.addEventListener('click', multiplyOperation);

division.addEventListener('click', divisionOperation);

function resetCalc(){
    number1.value = '';
    number2.value = '';
} 