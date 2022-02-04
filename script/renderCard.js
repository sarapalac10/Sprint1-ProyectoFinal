import { urlDog, urlCat } from "./url.js";
import {getPoint} from './point.js'

const container = document.getElementById('renderCard'); 

export const renderDog = async () => {
    const dog = await getPoint(urlDog);
    container.innerHTML = '';
    dog.forEach(element => {
        const { id, nombre, raza, imagen  } = element;
        container.innerHTML += `
        <div class="card bg-transparent text-white">
            <img src=${imagen} id='${id}'class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${raza}</p>
        </div>
        </div>
        `
    });
}
export const renderCat = async () => {
    const cat = await getPoint(urlCat);
    container.innerHTML = '';
    cat.forEach(element => {
        const { id, nombre, raza, imagen  } = element;
        container.innerHTML += `
        <div class="card bg-transparent text-white">
            <img src=${imagen} id='${id}'class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${raza}</p>
        </div>
        </div>
        `
    });
}

