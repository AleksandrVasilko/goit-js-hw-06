const listItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`);
console.log(' ');

for (let i = 0; i < listItems.length; i += 1) {
    
    const titleEl = listItems[i].querySelector('h2').textContent;
    const itemEl = listItems[i].querySelectorAll('li');
    
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${itemEl.length}`);
    console.log(' ');
}