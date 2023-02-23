const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

const changeValue = (event) => {
    if (textInput.value === "") {
        textOutput.textContent = 'Anonymous';
    } else {
        textOutput.textContent = event.currentTarget.value;
    }
}

textInput.addEventListener('input', changeValue);