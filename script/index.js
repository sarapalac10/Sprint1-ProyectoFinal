import {renderDog, renderCat } from './renderCard.js'

const btnDog = document.getElementById('btnCategory1');
const btnCat = document.getElementById('btnCategory2');


btnDog.addEventListener('click', () => {
    renderDog();
});

btnCat.addEventListener('click', () => {
    renderCat();
});

