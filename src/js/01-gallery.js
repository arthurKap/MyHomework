import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';


const galleryEl = document.querySelector('.gallery');

function renderGallery() {
  const newArray = [];
  galleryItems.forEach(image => {
    const imageItemEl = document.createElement('li');
    const imageLinkEl = document.createElement('a');
    const imageEL = document.createElement('img');

    imageItemEl.classList.add('gallery__item');
    imageLinkEl.classList.add('gallery__link');
    imageEL.classList.add('gallery__image');
    imageLinkEl.href = image.original;
    imageEL.src = image.preview;
    imageEL.alt = image.description;
    imageItemEl.style.listStyle = 'none';
    imageItemEl.appendChild(imageLinkEl);
    imageLinkEl.appendChild(imageEL);
    newArray.push(imageItemEl);
  });
  galleryEl.append(...newArray);
}
renderGallery();

const lightbox = new SimpleLightbox('.gallery a', {
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
