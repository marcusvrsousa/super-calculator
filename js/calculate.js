const sum = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = Number(valueFirstInput) + Number(valueSecondInput);
    const content = document.querySelector('[data-sum]');
    content.textContent = result;
}

const subtract = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = Number(valueFirstInput) - Number(valueSecondInput);
    const content = document.querySelector('[data-subtract]');
    content.textContent = result;
}

const subtractInverted = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = Number(valueSecondInput) - Number(valueFirstInput);
    const content = document.querySelector('[data-subtractInverted]');
    content.textContent = result;
}

const multiply = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = Number(valueSecondInput) * Number(valueFirstInput);
    const content = document.querySelector('[data-multiply]');
    content.textContent = result;
}

const division = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = Number(valueFirstInput) / Number(valueSecondInput);
    //const betterResult = Math.round(result);
    const content = document.querySelector('[data-division]');
    content.textContent = result.toFixed(2);
}

const divisionInverted = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = Number(valueSecondInput) / Number(valueFirstInput);
    //const betterResult = Math.round(result);
    const content = document.querySelector('[data-divisionInverted]');
    content.textContent = result.toFixed(2);
}

const potentiation = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = Math.pow(Number(valueFirstInput), Number(valueSecondInput));
    //const betterResult = Math.round(result);
    const content = document.querySelector('[data-potentiation]');
    content.textContent = result;
}

const potentiationInverted = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = Math.pow(Number(valueSecondInput), Number(valueFirstInput));
    //const betterResult = Math.round(result);
    const content = document.querySelector('[data-potentiationInverted]');
    content.textContent = result;
}

const squareRootA = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const result = Math.sqrt(Number(valueFirstInput));
    //const betterResult = Math.round(result);
    const content = document.querySelector('[data-squareRootA]');
    content.textContent = result.toFixed(2);
}

const squareRootB = () => {
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = Math.sqrt(Number(valueSecondInput));
    //const betterResult = Math.round(result);
    const content = document.querySelector('[data-squareRootB]');
    content.textContent = result.toFixed(2);
}

const factorialA = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    var result = Number(valueFirstInput);
    for (var i = 1; i < valueFirstInput; i++) {
        result *= i;
    }
    const content = document.querySelector('[data-factorialA]');
    content.textContent = result;
}


const factorialB = () => {
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    var result = Number(valueSecondInput);
    for (var i = 1; i < valueSecondInput; i++) {
        result *= i;
    }
    const content = document.querySelector('[data-factorialB]');
    content.textContent = result;
}


const percentageA = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = (Number(valueSecondInput) / Number(valueFirstInput)) * 100;
    const betterResult = Math.round(result);
    const content = document.querySelector('[data-percentageA]');
    content.textContent = betterResult + "%";
}

const percentageB = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = (Number(valueFirstInput) / Number(valueSecondInput)) * 100;
    const betterResult = Math.round(result);
    const content = document.querySelector('[data-percentageB]');
    content.textContent = betterResult + "%";
}

const average = () => {
    const valueFirstInput = document.querySelector('[data-fisrtInput]').value;
    const valueSecondInput = document.querySelector('[data-secondInput]').value;
    const result = (Number(valueFirstInput) + Number(valueSecondInput)) / 2;
    const content = document.querySelector('[data-average]');
    content.textContent = result.toFixed(1);
}

function superCalculate(){
    const button = document.querySelector('[data-button]');
    button.addEventListener('click', sum);
    button.addEventListener('click', subtract);
    button.addEventListener('click', subtractInverted);
    button.addEventListener('click', multiply);
    button.addEventListener('click', division);
    button.addEventListener('click', divisionInverted);
    button.addEventListener('click', potentiation);
    button.addEventListener('click', potentiationInverted);
    button.addEventListener('click', squareRootA);
    button.addEventListener('click', squareRootB);
    button.addEventListener('click', factorialA);
    button.addEventListener('click', factorialB);
    button.addEventListener('click', percentageA);
    button.addEventListener('click', percentageB);
    button.addEventListener('click', average);
    button.addEventListener('click', clearInput);
    
} 

function clearInput(){
    var input = document.querySelector('[data-fisrtInput]');
    var secondInput = document.querySelector('[data-secondInput]');
    input.value = '';
    secondInput.value = '';
    input.focus();
}
superCalculate();

//Math.sqrt() raiz quadrada