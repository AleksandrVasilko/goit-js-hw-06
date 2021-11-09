function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const ListDiv = document.querySelector('#boxes');
const startWidth = 30;
const startHeigh = 30;
let divWidth = startWidth;
let divHeigh = startHeigh;


btnCreate.addEventListener('click', onCreateBox)

btnDestroy.addEventListener('click', onDestroyBox)

function onCreateBox(){
  console.log('input = ', input.value)
  for(let i = 0; i < input.value; i +=1){
  const listDivEl = document.createElement('div');
  listDivEl.style.width = divWidth + "px";
  listDivEl.style.height = divHeigh + "px";
  listDivEl.classList.add('boxItem')
  divWidth += 10;
  divHeigh += 10;
  listDivEl.style.background = getRandomHexColor();
  ListDiv.append(listDivEl);
  }
  input.value = 0;
}


function onDestroyBox(){
  while (ListDiv.firstChild) {
    ListDiv.removeChild(ListDiv.firstChild);
  }
  
  divWidth = startWidth;
  divHeigh = startHeigh;
}
