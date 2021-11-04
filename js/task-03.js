const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery')
const makeGallery = images.map(image => `<li><img src = ${image.url} alt = ${image.alt}>`).join('');


console.log(makeGallery)
galleryEl.insertAdjacentHTML("afterbegin", makeGallery);


/*
const galleryEl = document.querySelector('.gallery')

const makeImages = ({ url, alt }) => {
  const listItemEl = document.createElement('li');
  const imageEl = document.createElement('img');
  imageEl.src = url;
  imageEl.alt = alt;
  listItemEl.insertAdjacentHTML("afterbegin", `${imageEl}`)
  return listItemEl
}

const element = (images.map(makeImages));
console.log(element)
/*galleryEl.append(...element);*/


//galleryEl.insertAdjacentHTML("afterbegin", `${(images)}`)

/*
const imageEl = document.createElement('img');
imageEl.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';

console.log(imageEl)


const galleryEl = document.querySelector('.gallery')
galleryEl.insertAdjacentHTML("afterbegin", `<img src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Orange and White Koi Fish Near Yellow Koi Fish">`)
*/

