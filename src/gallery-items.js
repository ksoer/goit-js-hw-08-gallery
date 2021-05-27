const links = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const listImg = document.querySelector('.js-gallery');
const cardsMarkup = createGaleryCard(links);
const ligthBox = document.querySelector('.js-lightbox')
const lightBoxImage = document.querySelector('.lightbox__image')
const btnClose = document.querySelector('[data-action="close-lightbox"]')
const overlay = document.querySelector('.lightbox__overlay')


// Слухачі)

listImg.insertAdjacentHTML('beforeend', cardsMarkup);
listImg.addEventListener('click', onListImgClick)
btnClose.addEventListener('click', onListImgClickClose)
overlay.addEventListener('click', onListImgClickClose)
window.addEventListener("keyup", pressKey);


// Додавання списку картинок

function createGaleryCard(links) {
  return links
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;
  }).join('');
} 


// Відкриття модального вікна 

function onListImgClick(evt) {
  evt.preventDefault();
  ligthBox.classList.add('is-open')
  lightBoxImage.src = evt.target.getAttribute("data-source");
  lightBoxImage.alt = evt.target.alt;
}


// Закриття модального вікна 

function onListImgClickClose(evt) {
  ligthBox.classList.remove('is-open')
  lightBoxImage.src = " ";
  lightBoxImage.alt = " ";
} 



function pressKey(evt){
  if(evt.code === "Escape") {
  onListImgClickClose()
  }
  if(evt.code === "ArrowRight"){

  }
  if(evt.code === "ArrowLeft"){

  }
}
