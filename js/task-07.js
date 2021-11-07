const textFontSize = document.querySelector('#text');

const textFontInput = document.querySelector('#font-size-control');

textFontSize.style.fontSize = textFontInput.value + 'px';

textFontInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    textFontSize.style.fontSize = event.currentTarget.value + 'px';
}