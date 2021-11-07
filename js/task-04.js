
let counterValue = 0;

const buttonDec = document.querySelector('[data-action = "decrement"]');

const buttonInc = document.querySelector('[data-action = "increment"]');
const value = document.querySelector('#value');

buttonDec.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

buttonInc.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});