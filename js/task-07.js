const range = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

const changeOut = (event) => {
    output.style.fontSize = `${range.value}px`;
}

range.addEventListener('input', changeOut);