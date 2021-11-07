function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColor = document.querySelector('.change-color');

const colorButton = document.querySelector('.change-color');

const colorValue = document.querySelector('.color');

const body = document.querySelector('body');

colorButton.addEventListener('click', onChangeColor);

function onChangeColor() {
  const colorSet = getRandomHexColor();
  body.style.background = colorSet;
  colorValue.textContent = colorSet;
}
