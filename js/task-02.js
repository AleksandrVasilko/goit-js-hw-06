const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('item');
  listItemEl.textContent = ingredients[i];
  elements.push(listItemEl);
}

const ulLislEl = document.querySelector('#ingredients');
ulLislEl.append(...elements);
