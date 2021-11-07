function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColorEl = document.querySelector('.change-color');

const colorButtonEl = document.querySelector('.change-color');

const colorValueEl = document.querySelector('.color');

const bodyEl = document.querySelector('body');

colorButtonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const colorSet = getRandomHexColor();
  bodyEl.style.background = colorSet;
  colorValueEl.textContent = colorSet;
}
