const textFontSizeEl = document.querySelector('#text');

const textFontInputEl = document.querySelector('#font-size-control');

textFontSizeEl.style.fontSize = textFontInputEl.value + 'px';

textFontInputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    textFontSizeEl.style.fontSize = event.currentTarget.value + 'px';
}