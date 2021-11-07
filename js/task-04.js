
let counterValue = 0;

const buttonDecEl = document.querySelector('[data-action = "decrement"]');

const buttonIncEl = document.querySelector('[data-action = "increment"]');
const value = document.querySelector('#value');

buttonDecEl.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

buttonIncEl.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});