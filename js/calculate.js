
const sum = (valueFirstInput, valueSecondInput) => {
        const result = Number(valueFirstInput) + Number(valueSecondInput);
        const content = document.querySelector('[data-sum]');
        content.textContent = result;
}

const subtract = (valueFirstInput, valueSecondInput) => {
    const result = Number(valueFirstInput) - Number(valueSecondInput);
    const content = document.querySelector('[data-subtract]');
    content.textContent = result;
}

const subtractInverted = (valueFirstInput, valueSecondInput) => {
    const result = Number(valueSecondInput) - Number(valueFirstInput);
    const content = document.querySelector('[data-subtractInverted]');
    content.textContent = result;
}

const multiply = (valueFirstInput, valueSecondInput) => {
    const result = Number(valueSecondInput) * Number(valueFirstInput);
    const content = document.querySelector('[data-multiply]');
    content.textContent = result;
}

const division = (valueFirstInput, valueSecondInput) => {
        const result = Number(valueFirstInput) / Number(valueSecondInput);
        const content = document.querySelector('[data-division]');
        content.textContent = result.toFixed(1);
    
}

const divisionInverted = (valueFirstInput, valueSecondInput) => {
    const result = Number(valueSecondInput) / Number(valueFirstInput);
    const content = document.querySelector('[data-divisionInverted]');
    content.textContent = result.toFixed(2);
}

const potentiation = (valueFirstInput, valueSecondInput) => {
    const result = Math.pow(Number(valueFirstInput), Number(valueSecondInput));
    const content = document.querySelector('[data-potentiation]');
    content.textContent = result;
}

const potentiationInverted = (valueFirstInput, valueSecondInput) => {
    const result = Math.pow(Number(valueSecondInput), Number(valueFirstInput));
    const content = document.querySelector('[data-potentiationInverted]');
    content.textContent = result;
}

const squareRootA = (valueFirstInput) => {
    const result = Math.sqrt(Number(valueFirstInput));
    const content = document.querySelector('[data-squareRootA]');
    content.textContent = result.toFixed(2);
}

const squareRootB = (valueSecondInput) => {
    const result = Math.sqrt(Number(valueSecondInput));
    const content = document.querySelector('[data-squareRootB]');
    content.textContent = result.toFixed(2);
}

const factorialA = (valueFirstInput) => {
    var result = Number(valueFirstInput);
    for (var i = 1; i < valueFirstInput; i++) {
        result *= i;
    }
    const content = document.querySelector('[data-factorialA]');
    content.textContent = result;
}


const factorialB = (valueSecondInput) => {
    var result = Number(valueSecondInput);
    for (var i = 1; i < valueSecondInput; i++) {
        result *= i;
    }
    const content = document.querySelector('[data-factorialB]');
    content.textContent = result;
}


const percentageA = (valueFirstInput, valueSecondInput) => {
    const result = (Number(valueSecondInput) / Number(valueFirstInput)) * 100;
    const betterResult = Math.round(result);
    const content = document.querySelector('[data-percentageA]');
    content.textContent = betterResult + "%";
}

const percentageB = (valueFirstInput, valueSecondInput) => {
    const result = (Number(valueFirstInput) / Number(valueSecondInput)) * 100;
    const betterResult = Math.round(result);
    const content = document.querySelector('[data-percentageB]');
    content.textContent = betterResult + "%";
}

const average = (valueFirstInput, valueSecondInput) => {
    const result = (Number(valueFirstInput) + Number(valueSecondInput)) / 2;
    const content = document.querySelector('[data-average]');
    content.textContent = result.toFixed(1);
}

function superCalculate(){
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const button = document.querySelector('[data-button]');
    button.addEventListener('click', superCalculate);
    button.addEventListener('click', sum(valueFirstInput, valueSecondInput));
    button.addEventListener('click', subtract(valueFirstInput, valueSecondInput));
    button.addEventListener('click', subtractInverted(valueFirstInput, valueSecondInput));
    button.addEventListener('click', multiply(valueFirstInput, valueSecondInput));
    button.addEventListener('click', division(valueFirstInput, valueSecondInput));
    button.addEventListener('click', divisionInverted(valueFirstInput, valueSecondInput));
    button.addEventListener('click', potentiation(valueFirstInput, valueSecondInput));
    button.addEventListener('click', potentiationInverted(valueFirstInput, valueSecondInput));
    button.addEventListener('click', squareRootA(valueFirstInput));
    button.addEventListener('click', squareRootB(valueSecondInput));
    button.addEventListener('click', factorialA(valueFirstInput));
    button.addEventListener('click', factorialB(valueSecondInput));
    button.addEventListener('click', percentageA(valueFirstInput, valueSecondInput));
    button.addEventListener('click', percentageB(valueFirstInput, valueSecondInput));
    button.addEventListener('click', average(valueFirstInput, valueSecondInput));
    button.addEventListener('click', clearInput);
    
} 

function clearInput(){
    var input = document.querySelector('[data-fisrtInput]');
    var secondInput = document.querySelector('[data-secondInput]');
    input.value = '';
    secondInput.value = '';
    input.focus();
}

//Verify if input is empty
function checkValues(){
    var input = document.querySelector('[data-fisrtInput]');
    var secondInput = document.querySelector('[data-secondInput]');
    if(input == '' || secondInput == '' || input == NaN || secondInput == NaN){
        console.error("Insira os valores a serem calculados")
    }
}

superCalculate();

//Math.sqrt() raiz quadrada
