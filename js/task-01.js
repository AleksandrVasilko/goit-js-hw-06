const listItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`);
console.log(' ');

for (let i = 0; i < listItems.length; i += 1) {
    
    const titleEl = listItemsEl[i].querySelector('h2').textContent;
    const itemEl = listItemsEl[i].querySelectorAll('li');
    
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${itemEl.length}`);
    console.log(' ');
}