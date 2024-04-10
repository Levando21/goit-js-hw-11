import fetchData from './js/pixabay-api';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
fetchData().then(json => console.log(json));

import { allCase } from './js/render-functions';
allCase.style.display = 'flex';
allCase.style.justifyContent = 'center';
allCase.style.gap = '20px';
