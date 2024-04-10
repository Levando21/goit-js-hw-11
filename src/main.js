import { allCase, searchBtn, searchBar } from './js/render-functions';

import { API_KEY } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

allCase.style.display = 'flex';
allCase.style.justifyContent = 'center';
allCase.style.gap = '20px';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');
function clearGallery() {
  gallery.innerHTML = '';
}
function displayImages(data) {
  clearGallery();
  if (data.hits.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  data.hits.forEach(image => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
                                    <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${image.tags}">
                                      <img src="${image.webformatURL}" id = "myImage" alt="${image.tags}" width = "360" />
                                    </a>
                                    <div class="info">
                                      <span>Likes: ${image.likes}</span>
                                      <span>Views: ${image.views}</span>
                                      <span>Comments: ${image.comments}</span>
                                      <span>Downloads: ${image.downloads}</span>
                                    </div>
                                  `;
    gallery.appendChild(listItem);
    gallery.style.display = 'flex';
    gallery.style.flexWrap = 'wrap';
    gallery.style.justifyContent = 'center';
    gallery.style.gap = '40px';
    gallery.style.marginTop = '20px';
    listItem.classList.add('my-list');
  });

  lightbox.refresh();
}

searchBtn.addEventListener('click', () => {
  const query = searchBar.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  // Виконуємо запит на Pixabay API з новими параметрами пошуку
  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => displayImages(data))
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `An error occurred: ${error}`,
      });
    });
});
